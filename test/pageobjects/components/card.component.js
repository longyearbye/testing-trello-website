export default class CardComponent {
  get addCardBtn() {
    return $("[data-testid='list-add-card-button']");
  }

  get cardTitleInput() {
    return $("[data-testid='list-card-composer-textarea']");
  }

  get submitCardBtn() {
    return $("aria/Add card");
  }

  async createCard(cardName) {
    await this.addCardBtn.click();
    await this.cardTitleInput.setValue(cardName);
    await this.submitCardBtn.click();
  }

  get createdCard() {
    return $(".amUfYqLTZOvGsn");
  }

  get filtersBtn() {
    return $("aria/Filters");
  }

  get filtersInput() {
    return $(".lsOhPsHuxEMYEb");
  }

  get cardFiltered() {
    return $("aria/first card");
  }

  async filterCard(cardName) {
    await this.filtersBtn.click();
    await this.filtersInput.setValue(cardName);
  }
}
