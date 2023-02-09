const Hooks = require("../Steps/hooks");

class HomePage extends Hooks {
  get formAuthenticationLink() {
    return $('//a[@href="/login"]');
  }

  async navigateToFormAuthentication() {
    await this.formAuthenticationLink.click();
  }
}

module.exports = new HomePage();

