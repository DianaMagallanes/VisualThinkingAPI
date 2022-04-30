const fs = require("fs");

class Reader{

    static readJsonFile (path){        
        const rawdata = fs.readFileSync(path);
        const partners = JSON.parse(rawdata);
        return partners;
    }
}
module.exports = Reader;