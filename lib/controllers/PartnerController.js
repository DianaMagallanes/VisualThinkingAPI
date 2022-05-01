const Reader = require("../../lib/utils/Reader")
const PartnerService = require("../../lib/services/PartnerService")

class PartnerController{
    
    static getPartnersWithCertificacion(){
        
        const partners = Reader.readJsonFile("visualPartners.json");
        return PartnerService.filterCertification(partners);
    }

    static getPartnersWithMoreThan500Credits(){
        
        const explorers = Reader.readJsonFile("visualPartners.json");
        return PartnerService.filterByCreditsUp500(explorers);
    }
}
module.exports = PartnerController