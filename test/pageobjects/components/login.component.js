export default class LoginComponent {
  get loginBtn() {
    return $("[data-uuid='MJFtCCgVhXrVl7v9HA7EH_login']");
  }

  get inputUsername() {
    return $("#username");
  }

  get continueBtn() {
    return $("span=Continue");
  }

  get inputPassword() {
    return $("input[name='password']");
  }

  get btnSubmit() {
    return $("span=Log in");
  }

  async login(username, password) {
    await this.inputUsername.setValue(username);
    await this.continueBtn.click();
    await this.inputPassword.waitForClickable({ timeout: 3000 });
    await this.inputPassword.setValue(password);
    await this.btnSubmit.click();
  }
}
