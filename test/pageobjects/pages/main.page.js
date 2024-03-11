import BoardComponent from "../components/board.component.js";
import ProfileComponent from "../components/profile.component.js";
import Page from "./page.js";

export default class MainPage extends Page {
  open() {
    return super.open("u/janedoe406/boards");
  }

  get boardComponent() {
    return new BoardComponent();
  }

  get profileComponent() {
    return new ProfileComponent();
  }
}
