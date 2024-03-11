export default class ListComponent {
  get createListBtn() {
    return $("[data-testid='list-composer-button']");
  }

  get listNameInput() {
    return $("[data-testid='list-name-textarea']");
  }

  get addListBtn() {
    return $("button=Add list");
  }

  async createList(listName) {
    await this.createListBtn.click();
    await this.listNameInput.setValue(listName);
    await this.addListBtn.click();
  }

  get createdList() {
    return $('[data-testid="list"]');
  }

  get sideMenu() {
    return $(".board-menu-content-frame");
  }
}
