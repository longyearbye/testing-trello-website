export default class ProfileComponent {
  get accountBtn() {
    return $("span[aria-label='Jane Doe (janedoe406)']");
  }
  get profileBtn() {
    return $("aria/Profile and visibility");
  }
  // add bio message

  get bioField() {
    return $("#bio");
  }

  get saveBtn() {
    return $("aria/Save");
  }

  async addBioMessage(message) {
    await this.bioField.setValue(message);
    await this.saveBtn.click();
  }
}
