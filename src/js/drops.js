$(document).ready(function() {
    const dropProjects = $(".cards-projects-dropdowm")
    const cardsProjectsSection = $("#cardsProjects")

    dropProjects.click(function() {
        cardsProjectsSection.fadeToggle(400)
    })
})