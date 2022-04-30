const Reader = require("../../lib/utils/Reader");

describe("Test for Reader",()=> {

    test("1. Obtain qty list of Partners",()=>{
        const partners = Reader.readJsonFile("./visualPartnersTest.json");
        expect(partners.length).toBe(5);        
    });
   
});