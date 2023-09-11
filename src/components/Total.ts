import { Component } from ".";
import { TotalController } from "../controllers/total.controller";

export class TotalComponent extends Component<HTMLDivElement, HTMLDivElement> {
  constructor() {
    super("total-template", "app");
    new TotalController(this.element);
  }
}
