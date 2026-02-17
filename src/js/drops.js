$(document).ready(function() {
    const dropProjects = $(".dropdown-projects")
    const dropExperience = $(".cards-dropdowm")
    const dropEducation = $(".dropdown-education")


    const cardsProjectsSection = $("#cardsProjects")
    const cardsExperienceSection = $("#cardsExperience")
    const cardsEducationSection = $("#cardsEducation")

    dropProjects.click(function() {
        cardsProjectsSection.fadeToggle(400)
    })

    dropExperience.click(function() {
        cardsExperienceSection.fadeToggle(400)
    })

    dropEducation.click(function() {
        cardsEducationSection.fadeToggle(400)
    })
})