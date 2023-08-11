// Wir importieren das modul express, das wir vorher mit "npm install express" installiert haben:
//const express = require('express');
import express from 'express';

// Wir setzen eine express instanz auf eine variable, in der standardkonvention heisst diese "app":
const app = express();

//const port = 3007;
const min = 1;
const max = 20;

// um informationen an einen get request zu übergeben, können wir direkt die methode .get(); nutzen, ähnlich wie bei axios, in der wir den pfad angeben, auf dem wir unsere informationen übergeben wollen
app.get('/hello', (req, res) => {
    console.log(req.url); // die aufgerufene URL
    res.send('Hello to you too!');
});

app.get('/time', (req, res) => {
    console.log(req.url); // die aufgerufene URL
    const currentTime = new Date().toLocaleString();
    res.status(200).send(`Date and Time: ${currentTime}`);
});

app.get('/random', (req, res) => {
    console.log(req.url); // die aufgerufene URL
    const randomNumber = Math.floor(Math.random() * (max-min +1)) + min;
    res.send(`Zufallszahl: ${randomNumber}`);
});

app.get('/isNumber/:value', (req, res) => {
    console.log(req.url); // die aufgerufene URL
    const inputValue = req.params.value;
    
    if (!isNaN(Number(inputValue))) {
      res.send(`Dies ist eine Zahl: ${inputValue}`);
    } else {
      res.send(`Dies ist keine Zahl: ${inputValue}`);
    }
});

app.get('/fact', (req, res) => {
    console.log(req.url); // die aufgerufene URL
    //console.log(res);

    // Wir senden eine antwort mit res.send(); und fügen vorher noch den status mit ein. Wir müssen IMMER eine antwort senden, weil der client sonst einfriert.
    //res.status(200).send("JavaScript was created in about 10 days!");
    const fact = 'JavaScript was created in about 10 days!';
    res.send(fact);
})

// auch hier rufen wir eine methode namens .listen(); auf, um den server zu sagen er soll auf einem spezifischen port zuhören:
const server = app.listen(3007, () => {
    console.log(`The server is listening... 🐒:\nhttp://localhost:3007/`);
});

