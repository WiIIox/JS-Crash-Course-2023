const express = require("express");
const hbs = require("hbs");
const cities = require('./cities.json');
const ipinfo = require("ipinfo");
const axios = require("axios");
require('dotenv').config();

const PORT = 3000;

const app = express();
app.set("view engine", "hbs");

hbs.registerPartials(__dirname + '/views/partials');

const apiKey = process.env.API_KEY;

async function get_weather_and_render(city, res) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await axios.get(apiUrl);
        const weather = response.data;
        res.render('weather.hbs', { cities, city, weather });
    } catch (error) {
        console.error(error);
        res.render('error.hbs', { error });
    }
}

app.get("/", (req, res) => {
    res.render('index.hbs');
});

app.get('/weather/:city', (req, res) => {
    const city = req.params.city;
    get_weather_and_render(city, res);
});

app.get('/weather', (req, res) => {
    const city_query_param = req.query.city;
    if (!city_query_param) {
        ipinfo((err, cLoc) => {
            const city = cLoc.city;
            get_weather_and_render(city, res);
        });
    } else {
        get_weather_and_render(city_query_param, res);
    }
});

app.listen(PORT, () => {
    console.log(`Example app listening on http://localhost:${PORT}`);
});
