let allRepos = [];
let currentPage = 1;
const itemsPerPage = 3;

async function getRepos(username) {
    try {
        const response = await $.ajax({
            method: "GET",
            url: `https://api.github.com/users/${username}/repos`
        });
        return response;
    } catch (error) {
        console.error("Error in HTTP request:", error);
    }
}

function getLanguageClass(language) {
    switch (language) {
        case "Python":
            return "language-circle-python";
        case "Java":
            return "language-circle-java";
        case "Shell":
            return "language-circle-shell";
        case "Kotlin":
            return "language-circle-kotlin";
        case "HTML":
            return "language-circle-html"
        default:
            return "";
    }
}

function capitalizeFirstLetter(text) {
    if (!text) return "";
    return text.charAt(0).toUpperCase() + text.slice(1);
}

function cardRepos(title, description, language, topics) {
    const languageClass = getLanguageClass(language);

    return `
        <div class="card-projects">
            <h3>${title}</h3>
            <p>${description ?? "N/A"}</p>
            <aside>
                <div class="language-wrapper">
                    <div class="language-circle ${languageClass}"></div>
                    <span>${language ?? "N/A"}</span>
                </div>
            </aside>
            <div class="skillsRepoSection">
                ${(topics ?? []).map(topic => `
                    <span class="skills-repo">${topic}</span>
                `).join("")}
            </div>
        </div>
    `;
}

function renderPage() {
    const cardsSection = $("#cardsProjects");
    cardsSection.empty();

    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    const paginatedRepos = allRepos.slice(start, end);

    paginatedRepos.forEach(repo => {
        const cardRepoHtml = cardRepos(
            repo.name,
            repo.description,
            repo.language,
            repo.topics
        );

        cardsSection.append(cardRepoHtml);
    });

    const totalPages = Math.ceil(allRepos.length / itemsPerPage);
    $("#pageInfo").text(`Page ${currentPage} of ${totalPages}`);

    $("#prevPage").prop("disabled", currentPage === 1);
    $("#nextPage").prop("disabled", currentPage === totalPages);
}

$(document).ready(async function () {
    allRepos = await getRepos(CONFIG.GITHUB_USERNAME);

    renderPage();

    $("#nextPage").click(function () {
        const totalPages = Math.ceil(allRepos.length / itemsPerPage);
        if (currentPage < totalPages) {
            currentPage++;
            renderPage();
        }
    });

    $("#prevPage").click(function () {
        if (currentPage > 1) {
            currentPage--;
            renderPage();
        }
    });

});
