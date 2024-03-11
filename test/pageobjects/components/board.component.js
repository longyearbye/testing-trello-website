export default class BoardComponent {
  get createBoardBtn() {
    return $("aria/Create new board");
  }

  get boardTitleInput() {
    return $("[data-testid='create-board-title-input']");
  }

  get createBtn() {
    return $("aria/Create");
  }

  async createBoard(board) {
    await this.boardTitleInput.setValue(board);
    (await this.createBtn).click();
  }

  get boardTile() {
    return $(".board-tile-fade");
  }

  get boardNameTile() {
    return $("aria/my board");
  }

  get searchInput() {
    return $("input");
  }

  async searchBoard(boardName) {
    await this.searchInput.setValue(boardName);
  }

  get boardNameField() {
    return $('[data-testid="trello-hover-preview-popper-container"]');
  }
}
