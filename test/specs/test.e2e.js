import { expect } from "@wdio/globals";
import Page from "../pageobjects/pages/page.js";
import BoardPage from "../pageobjects/pages/board.page.js";
import LoginPage from "../pageobjects/pages/login.page.js";
import MainPage from "../pageobjects/pages/main.page.js";

describe("trello website", () => {
  const page = new Page();
  const mainPage = new MainPage();
  const boardPage = new BoardPage();
  const loginPage = new LoginPage();

  beforeEach(async () => {
    await page.open("");
    await browser.maximizeWindow();
  });
  it("login with valid credentials", async () => {
    await loginPage.loginComponent.loginBtn.click();
    await loginPage.loginComponent.login("", "");
    await expect(browser).toHaveUrl("https://trello.com/u/janedoe406/boards");
  });
  it("edit user profile", async () => {
    await mainPage.profileComponent.accountBtn.click();
    await mainPage.profileComponent.profileBtn.click();
    await mainPage.profileComponent.addBioMessage("I can add bio");
    await expect(mainPage.profileComponent.bioField).toHaveText(
      // eslint-disable-next-line prettier/prettier
      "I can add bio"
    );
  });
  it("create a board", async () => {
    await mainPage.open("");
    await mainPage.boardComponent.createBoardBtn.click();
    await mainPage.boardComponent.createBoard("1st board");
    await expect(mainPage.boardComponent.boardTile).toBeExisting();
  });
  it("search for a board", async () => {
    await mainPage.open("");
    await mainPage.boardComponent.boardNameTile.click();
    await mainPage.boardComponent.searchBoard("my board");
    await expect(mainPage.boardComponent.boardNameField).toBeExisting();
  });
  it("create a list", async () => {
    await boardPage.open("");
    await boardPage.listComponent.createList("1st list");
    await expect(boardPage.listComponent.createdList).toBeExisting();
  });
  it("edit a workspace", async () => {
    await mainPage.boardComponent.boardNameTile.click();
    await expect(boardPage.listComponent.sideMenu).toBeDisplayed();
  });
  it("create a card", async () => {
    await mainPage.boardComponent.boardNameTile.click();
    await boardPage.cardComponent.createCard("first card");
    await expect(boardPage.cardComponent.createdCard).toBeDisplayed();
  });
  it("filter a card", async () => {
    await boardPage.open("");
    await boardPage.cardComponent.filterCard("first");
    await expect(boardPage.cardComponent.cardFiltered).toBeDisplayed();
  });
});
