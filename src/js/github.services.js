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

function cardRepos(title, description, language) {
    return `
        <div class="card-projects">
                <h3>${title}</h3>
                <p>
                    ${description}
                </p>
                <aside>
                    <p>
                        <div class="language-circle"></div>${language}
                    <p>
                </aside>
            </div>
    `
}

$(document).ready(async function() {
    const res = await getRepos("TechAbraao"); 
    const cardsSection = $("#cardsProjects")
    
    cardsSection.hide()

    res.forEach(repo => {
        let nameRepo = repo.name;
        let descriptionRepo = repo.description;
        let languageRepo = repo.language


        const cardRepoHtml = cardRepos(nameRepo, descriptionRepo, languageRepo)
        cardsSection.append(cardRepoHtml)
    })

    console.log(res)

});