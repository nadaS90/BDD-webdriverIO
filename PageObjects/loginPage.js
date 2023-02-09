const Hooks = require("../Steps/hooks");

class LoginPage extends Hooks {

    get userNameTxtBox ()
    {
        return $('#username');
    }

    get passwordTxtBox ()
    {
        return $('#password');
    }

    get submitBtn ()
    {
        return $('button[type="submit"]');
    }


    async userLogin (username, password) {
        await this.userNameTxtBox.setValue(username);
        await this.passwordTxtBox.setValue(password);
    }

    async userClickSubmit()
    {
        await this.submitBtn.click();
    }


    open () 
    {
        return super.open('userLogin');
    }
}

module.exports = new LoginPage();
