import { Component } from "@angular/core";
import { Logs } from "selenium-webdriver";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  showPara: boolean = true;
  logs = [];
  i = 0;
  onDisplay() {
    this.showPara = !this.showPara;
    this.i = this.i + 1;
    this.logs.push(new Date());
  }
  getColor(num) {
    return num >= 5 ? "blue" : "white";
  }
  getClass1() {
    return this.i >= 5 ? true : false;
  }
}
