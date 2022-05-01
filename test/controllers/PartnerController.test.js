const PartnerController = require("../../lib/controllers/PartnerController");

describe("Test for ExplorerController",()=> {

    test("1. Obtain partners with certification",()=>{
        const partners = PartnerController.getPartnersWithCertificacion();
        expect(partners.length).toBe(29);        
    });

    test("2. Obtain partners with more than 500 credits",()=>{
        const partners = PartnerController.getPartnersWithMoreThan500Credits();
        expect(partners.length).toBe(27);        
    });       
   
});