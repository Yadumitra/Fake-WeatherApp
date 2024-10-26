import 'dotenv/config';
import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors'
import axios from "axios"

const app = express();
const apiKey ="90f0b9b8adc3f57eceb5e9842373524c";

app.use(express.static('public'));
app.use(cors())

app.get('/yesterday-weather', async (req, res) => {
    const city = req.query.city || 'Kasargod';
    const today = Math.floor(Date.now() / 1000);
    const yesterday = today - 86400;
    console.log(yesterday)
    try {
        // Fetch city coordinates
        const geoResponse = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=Kasaragod&limit=70&appid=${apiKey}`);
       // const g = await geoResponse.json()
        //console.log(g)
        const geoData = await geoResponse.json();
        console.log(geoData)
        //
       
       // if (!geoData.length) return res.status(404).json({ error: 'City not found' });

       // const { lat, lon } = geoData[0];
       
        res.json(geoData)
        //Correct
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Error fetching weather data'+error });
    }

});



app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
