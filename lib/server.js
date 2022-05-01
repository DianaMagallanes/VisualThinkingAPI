const PartnerController = require("./controllers/PartnerController");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "Visual Thinking Api welcome!"});
});

app.get("/v1/students/", (request,response) =>{
    const partners = PartnerController.getAllPartners();
    response.json(partners);
});

app.get("/v1/students/emails/", (request,response) =>{
    const partners = PartnerController.getPartnersWithCertificacion();
    response.json(partners);
});

app.get("/v1/students/credits/", (request,response) =>{
    const partners = PartnerController.getPartnersWithMoreThan500Credits();
    response.json(partners);
});

app.listen(port, () => {
    console.log(`Visual Thinking API in localhost:${port}`);
});