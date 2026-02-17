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
                ${topics?.map(topic => `
                    <span class="skills-repo">${topic}</span>
                `).join("") ?? ""}
            </div>
        </div>
    `
}

$(document).ready(async function () {
    const res = await getRepos("TechAbraao");
    const cardsSection = $("#cardsProjects")

    res.forEach(repo => {
    const cardRepoHtml = cardRepos(
        repo.name,
        repo.description,
        repo.language,
        repo.topics
    );

    cardsSection.append(cardRepoHtml);
});


    console.log(res)

});