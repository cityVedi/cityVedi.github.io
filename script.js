var aboutContainerPosition = document.getElementById('aboutContainer').offsetTop;
var placesContainerPosition = document.getElementById('placesComponentsContainer').offsetTop;
    function toAbout(){
    window.scrollTo({
        top: aboutContainerPosition,
        left: 0,
        behavior: "smooth"
    })
}
function toPlaces() {
    window.scrollTo({
        top: placesContainerPosition,
        left: 0,
        behavior: "smooth"
    })
}