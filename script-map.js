function iniciarMap(){
    var coord = {lat:-34.548441 ,lng:-58.704771};
    var map = new google.maps.Map(document.getElementById('map'),{
        zoom:13,
        center: coord
    })
}