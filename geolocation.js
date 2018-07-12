var currentLocationDiv =document.getElementById("currentlocation")


getCurrentLocation = function(){
    navigator.geolocation.getCurrentPosition(successInFinding)

    }
    function successInFinding(location){
        var lat =location.coords.latitude
        var lon = location.coords.longitude

        currentLocationDiv.innerHTML =lat + ", "+lon 

    }
    
