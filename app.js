const app = require("./config/server");

const rotaHome = require("./app/routes/home")
rotaHome(app);

const rotaNoticias = require("./app/routes/noticias")
rotaNoticias(app);

const rotaFormularioInclusao = require("./app/routes/formulario_inclusao_noticia")
rotaFormularioInclusao(app);


app.listen("3000", () => console.log("Servidor está rodando"));
