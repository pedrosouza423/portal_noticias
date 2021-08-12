const express = require("express");

const app = express();

app.listen("3000", () => console.log("Servidor rodando com Express"));

app.get("/", (req, res) => {
    res.send("Portal de notícias");
});

app.get("/tecnologia", (req, res) => {
    res.send("Noticícias de tecnologia")
});

app.get("/moda", (req, res) => {
    res.send("Noticícias de moda")
});

app.get("/beleza", (req, res) => {
    res.send("Noticícias de beleza")
});
