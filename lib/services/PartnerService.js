class PartnerService{

    static filterCertification(partners){
        const partnersFiltered = partners.filter((partner) => partner.haveCertification === true);        
        const partnersMails = partnersFiltered.map((partner) => partner.email);
        return partnersMails;

    }

    static filterByCreditsUp500(partners){
        const partnersFiltered = partners.filter((partner) => partner.credits > 500);
        return partnersFiltered;
    }
}
module.exports = PartnerService;