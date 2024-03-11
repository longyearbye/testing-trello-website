import CardComponent from "../components/card.component.js";
import ListComponent from "../components/list.component.js";
import Page from "./page.js";

export default class BoardPage extends Page {
  open() {
    return super.open("b/HGW1621B/my-board");
  }

  get listComponent() {
    return new ListComponent();
  }

  get cardComponent() {
    return new CardComponent();
  }
}
