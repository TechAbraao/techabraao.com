$(document).ready(function() {
    const dropProjects = $(".dropdown-projects")
    const dropExperience = $(".cards-dropdowm")
    const dropEducation = $(".dropdown-education")
    const dropTechonologies = $(".dropdown-technologies")
    const paginationIcons = $(".pagination")

    const cardsProjectsSection = $("#cardsProjects")
    const cardsExperienceSection = $("#cardsExperience")
    const cardsEducationSection = $("#cardsEducation")
    const cardsTechnologiesSection = $("#technologiesSection")

    dropProjects.click(function() {
        cardsProjectsSection.fadeToggle(400)
        paginationIcons.fadeToggle(400)
    })

    dropExperience.click(function() {
        cardsExperienceSection.fadeToggle(400)
    })

    dropEducation.click(function() {
        cardsEducationSection.fadeToggle(400)
    })

    dropTechonologies.click(function() {
        cardsTechnologiesSection.fadeToggle(400)
    })
})

