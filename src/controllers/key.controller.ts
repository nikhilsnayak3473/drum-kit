import { Key } from "../models/key.model";
import { keyStore, totalStore } from "../store";
import { ACTIONS } from "../types";

export class KeyController {
  private readonly key: Key;

  constructor(key: Key, element: HTMLDivElement) {
    this.key = key;
    keyStore.dispatch({ type: ACTIONS.ADD, payload: this.key });
    totalStore.addListener((state) => this.updateComponent(state, element));
  }

  private updateComponent(totalClickCount: number, element: HTMLDivElement) {
    if (totalClickCount === 0) return;

    element
      .querySelector<HTMLDivElement>(".progress-bar")!
      .style.setProperty(
        "--progress",
        `${(this.key.clickCount / totalClickCount) * 100}%`
      );

    element.querySelector(
      ".count"
    )!.textContent = `${this.key.clickCount}/${totalClickCount}`;
  }

  updateModelAndPlayAudio(
    e: KeyboardEvent,
    audio: HTMLAudioElement,
    element: HTMLDivElement
  ) {
    if (this.key.ascii !== e.keyCode.toString()) return;

    keyStore.dispatch({
      type: ACTIONS.UPDATE,
      payload: { ascii: e.keyCode.toString() },
    });
    audio.currentTime = 0;
    audio.play();
    element.classList.add("playing");
  }

  handleTransitionEnd(e: TransitionEvent, element: HTMLDivElement) {
    if (e.propertyName !== "transform") return;
    element.classList.remove("playing");
  }
}
