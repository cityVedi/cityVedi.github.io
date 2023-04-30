$(function () {
    var aboutContainerPosition = $('#aboutContainer').position();
    var placesContainerPosition = $('#placesComponentsContainer').position();
    $("#toAbout").on("click", function () {
        window.scrollTo({
            top: aboutContainerPosition.top,
            left: 0,
            behavior: "smooth"
        })
    })
    $("#toPlaces").on("click", function () {
        window.scrollTo({
            top: placesContainerPosition.top,
            left: 0,
            behavior: "smooth"
        })
    })
})