class Weather
{
    constructor(API_KEY_WEATHER){
        this.API_KEY_WEATHER = API_KEY_WEATHER;
        console.log(API_KEY_WEATHER);
        this.init();
    }

    init(){
        console.log('initialize');
        console.log(navigator);
        this.getCurrentLocation();
    }

    getCurrentLocation(){
        console.log("getting current position");
        navigator.geolocation.getCurrentPosition(position => {
            let lat = position.coords.latitude;
            let lng = position.coords.longitude;
            this.getWeather(lat, lng);
            console.log(position);
        }, err => {
            console.log("error");
        });
    }    

    getWeather(lat, lng){
        // http://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/feb187c5167915f71c0d58ae86c01760/51.0241373,4.485428800000001?units=si
        let url = `http://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${this.API_KEY_WEATHER}/${lat},${lng}?units=si`;
        console.log(url);
        fetch(url)
        .then(response => {
            return response.json();
        })
        .then(json => {
            let temp = document.createElement("h1");
            temp.innerHTML = `This is what the weather looks like today: ${json.currently.summary}`;
            document.querySelector("#app").appendChild(temp);
            console.log(json.currently.summary);
        })
    }
}

class Giphy {
    constructor(API_KEY_GIPHY){
        this.API_KEY_GIPHY = API_KEY_GIPHY;
        console.log(API_KEY_GIPHY);
        this.init();
    }

    init(){
        console.log('initialize');
    }
}

let app = new Weather('feb187c5167915f71c0d58ae86c01760');
// let app = new Giphy('GNAEtDyVKZCH4mCW2LxrD6omQbpmpdHO');
// https://developers.giphy.com/docs/