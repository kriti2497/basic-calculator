import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  // @ViewChild("input1", { static: true }) input1: ElementRef;
  // @ViewChild("input2", { static: true }) input2: ElementRef;

  inputVal1: number;
  inputVal2: number;
  result: number | boolean;

  title = "calculator";
  showDiv: boolean = false;
  clicked: boolean = false;

  ngOnInit() {
    // console.log(this.inputVal1, this.inputVal2);
  }

  operation(op: string) {
    this.result = 0;
    this.clicked = true
    if (this.inputVal1 && this.inputVal2) {
      switch (op) {
        case "add":
          this.result = this.inputVal1 + this.inputVal2;
          break;

        case "sub":
          this.result = this.inputVal1 - this.inputVal2;
          break;

        case "mul":
          this.result = this.inputVal1 * this.inputVal2;
          break;

        case "div":
          this.result = this.inputVal1 / this.inputVal2;
          break;

        case "mod":
          this.result = this.inputVal1 % this.inputVal2;
          break;

        // case "and":
        //   this.result = this.inputVal1 && this.inputVal2;
        //   break;

        // case "or":
        //   this.result = this.inputVal1 || this.inputVal2;
        //   break;
      }
      this.showDiv = true;
    }
  }

  clearInputs() {
    this.inputVal1 = null;
    this.inputVal2 = null;
    this.clicked = false;
    this.showDiv = false;
  }
}
