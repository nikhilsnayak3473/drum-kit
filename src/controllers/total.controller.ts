import { keyStore, totalStore } from "../store";
import { ACTIONS } from "../types";

export class TotalController {
  constructor(element: HTMLDivElement) {
    const totalClickCount = parseInt(
      localStorage.getItem("totalClickCount") || "0"
    );

    this.updateComponent(totalClickCount, element);

    keyStore.addListener((state) => {
      const totalClickCount = state.reduce(
        (acc, current) => acc + current.clickCount,
        0
      );
      this.updateComponent(totalClickCount, element);
    });
  }

  private updateComponent(totalClickCount: number, element: HTMLDivElement) {
    totalStore.dispatch({
      type: ACTIONS.UPDATE,
      payload: { current: totalClickCount },
    });
    element.innerText = "Total clicks : " + totalClickCount;
  }
}
