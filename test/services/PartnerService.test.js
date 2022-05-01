const Reader = require("../../lib/utils/Reader");
const PartnerService = require("../../lib/services/PartnerService");

describe("Test for PartnerService",()=> {

    test("1. Obtain partners with certification",()=>{
        const partners = Reader.readJsonFile("./visualPartnersTest.json");
        const partnersFilter = PartnerService.filterCertification(partners);
        expect(partnersFilter.length).toBe(4);        
    });
    

    test("2. Obtain partners with more than 500 credits",()=>{
        const partners = Reader.readJsonFile("./visualPartnersTest.json");
        const partnersFilter = PartnerService.filterByCreditsUp500(partners);
        expect(partnersFilter.length).toBe(3);        
    });
   
});