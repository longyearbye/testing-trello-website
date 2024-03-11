import LoginComponent from "../components/login.component.js";
import Page from "./page.js";

export default class LoginPage extends Page {
  open() {
    return super.open("login");
  }

  get loginComponent() {
    return new LoginComponent();
  }
}
