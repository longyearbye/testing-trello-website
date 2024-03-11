import { expect, assert } from "chai";
import * as chai from "chai";
chai.should();

describe("chai assertions", () => {
  beforeEach(async () => {
    await browser.url("/");
    await browser.maximizeWindow();
  });
  it("title should return text", async () => {
    const title = await browser.getTitle();
    expect(title).to.equal(
      // eslint-disable-next-line prettier/prettier
      "Manage Your Team’s Projects From Anywhere | Trello"
    );
  });
  it("url should include text", async () => {
    expect(await browser.getUrl()).to.include("trello");
  });
  it("should return button text", async () => {
    const getTrelloBtn = await $(".lhSFdZ").getText();
    expect(getTrelloBtn).to.equal("Get Trello for free");
    assert.typeOf(getTrelloBtn, "string");
  });
  it("should return string", async () => {
    const getTrelloBtn = await $(".lhSFdZ").getText();
    assert.typeOf(getTrelloBtn, "string");
  });
  it("main heading should return text", async () => {
    const h1 = await $("h1").getText();
    expect(h1).to.equal(
      // eslint-disable-next-line prettier/prettier
      "Trello brings all your tasks, teammates, and tools together"
    );
  });
  it("main heading should be a string", async () => {
    const h1 = await $("h1").getText();
    h1.should.be.a("string");
  });
});
