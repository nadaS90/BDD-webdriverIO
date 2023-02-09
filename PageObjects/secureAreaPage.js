const Hooks = require("../Steps/hooks");


class SecureAreaPage extends Hooks {
 
    get alertMsg () {
        return $('#flash');
    }
}

module.exports = new SecureAreaPage();
