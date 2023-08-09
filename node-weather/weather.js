//------- Weather CLI --------//
// Get the latest weather report - from your terminal!

//------- What you will be doing --------//

// You will be writing a CLI application which uses an external API to get weather information.

// The user will provide a city name when they run the program. Your program must use that city name in its request - and print the results into the terminal.

const axios = require('axios');
require('dotenv').config();

const city = process.argv[2];
if (!city) {
  console.error('');
  process.exit(1);
}

const colors = require('colors')
const apiKey = process.env.API_KEY;
const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

axios.get(apiUrl)
  .then(response => {
    const weatherData = response.data;
    
   // console.log(weatherData);

    const cityName = weatherData.name;
    const temperature = weatherData.main.temp;
    const weatherDescription = weatherData.weather[0].description;
    
    console.log();
    console.log(`@@@@@@@@@@@@@@@@@@@@`);
    console.log(`@  WETTERPROGRAMM  @`);
    console.log(`@@@@@@@@@@@@@@@@@@@@`);
    console.log();
    console.log(`Es ist jetzt ${colors.underline.yellow(temperature + '°C')} in ${cityName}`);
    console.log();
    console.log(colors.magenta(`Die aktuellen Wetterbedingungen sind: ${colors.underline.white(weatherDescription)}`));
    console.log();
})
  .catch(error => {
    console.error('Fehler der Anruf:', error.message);
});



/**
 * Im gegensatz zu fetch, wenn wir ein GET, POST, oder einen anderen request anfragen, können wir zwar, wie auch in fetch, 
 * alles in der selben funktion schreiben, aber können anstelle dessen auch spezifische methoden nutzen,
 * die uns die übersicht und verständlichkeit unseres codes erleichtern.
 * 
 * Hier einige der sogenannten "convenience methoden":
 * 
 * - axios.get();                 Eine methode um GET requests zu erstellen
 * - axios.post();                Eine methode um POST requests zu erstellen
 * - axios.delete();              Eine methode um DELETE requests zu erstellen
 * - axios.request();             Eine methode um requests zu managen
 * - axios.head();                Eine methode um die header informationen global einzustellen
 * - axios.options();             Eine methode um optionen an den request zu übergeben
 */