const express = require("express");

const app = express();


app.set("view engine", "ejs")

app.get("/", (req, res) => {
    res.send("Portal de notícias");
});

app.get("/tecnologia", (req, res) => {
    res.render("secao/tecnologia")
});

app.get("/moda", (req, res) => {
    res.send("Noticícias de moda")
});

app.get("/beleza", (req, res) => {
    res.send("Noticícias de beleza")
});

app.listen("3000", () => console.log("Servidor rodando com Express"));
