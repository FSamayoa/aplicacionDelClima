// let latitud = ""
// let longitud = ""
// let exclude = ""

// let codigoEstado = ""
// let paisCode = ""
// let limit = ""
// let geocoding = `http://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${codigoEstado},${paisCode}&limit=${limit}&appid=${apikey}`

const apikey = "&appid=d6eaefec1521c07519ea0686c373f7ae"
let ciudad
urlwheather = "https://api.openweathermap.org/data/2.5/weather?q="


//* llamada
//*https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
//*geocodingAPI
//*http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}


let ciudadEntrada = document.getElementById("ciudadEntrada")
let botonBusqueda = document.getElementById("botonBusqueda")

let gradosKelvin = 273.15


botonBusqueda.addEventListener("click", (click) => {
    click.preventDefault();
    ciudad = ciudadEntrada.value
    console.log(`${urlwheather}${ciudad}${apikey}`)

    if (ciudad) {
        fetchDatosClima(ciudad)
    }
})


function fetchDatosClima() {
    fetch(`${urlwheather}${ciudad}${apikey}`)
        .then(response => response.json())
        .then(response => mostrarDatos(response))

}


function mostrarDatos(response) {
    let div = document.getElementById("datosClima")
    div.innerHTML = ""

    let nombre = response.name
    let temperatura = response.main.temp
    let pais = response.sys.country
    let sensacionTerm = response.main.feels_like
    let description = response.weather[0].description
    // let clima = ""
    let icon = response.weather[0].icon
    let humedad = response.main.humidity
    let maxima = response.main.temp_min
    let minima = response.main.temp_max
    
    // switch (description) {
    //     case "clear sky": clima="Cielo despejado"
    //         break;
    //     case "few clouds": clima="Nubosidad ligera"
    //         break;
    //     case "scattered clouds": clima="Nubes dispersas"
    //         break;
    //     case "broken clouds": clima="Nubes aisladas"
    //         break
    //     case "shower rain": clima="Aguaceros"
    //         break
    //     case "rain": clima="Lluvias"
    //         break
    //     case "thunderstorm": clima="Tormenta"
    //         break
    //     case "snow": clima="Nevada"
    //         break
    //     case "mist": clima="Neblina"
    //         break
    
    //     default:
    //         break;
    // }


    // console.log(clima)
    let nombreCiudad = document.createElement("h2")
    let temperaturaCiudad = document.createElement("h3")
    let sensTerm = document.createElement("p")
    let icono = document.createElement("img")
    let humidity = document.createElement("p")
    

    nombreCiudad.textContent = `En ${nombre},  ${pais}`
    temperaturaCiudad.textContent = `La temperatura actual es de ${(temperatura - gradosKelvin).toFixed(1)}°C`
    sensTerm.textContent = `Con una sensacion termica de ${(sensacionTerm- gradosKelvin).toFixed(1)} y ${description}`
    icono.src = `https://openweathermap.org/img/wn/${icon}@2x.png`
    humidity.textContent = `Con un porcentaje de humedad de ${humedad}% y temperatura minima de: ${(minima-gradosKelvin).toFixed(0)}°C y maxima de: ${(maxima-gradosKelvin).toFixed(0)}°C`

    div.appendChild(nombreCiudad)
    div.appendChild(temperaturaCiudad)
    div.appendChild(sensTerm)
    div.appendChild(icono)
    div.appendChild(humidity)
}

