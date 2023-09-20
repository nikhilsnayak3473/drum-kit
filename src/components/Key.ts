import { Component } from ".";
import { KeyController } from "../controllers/key.controller";
import { Key } from "../models/key.model";
import { KeyInfo } from "../types";

export class KeyComponent extends Component<HTMLDivElement, HTMLDivElement> {
  private readonly key: Key;
  private readonly controller: KeyController;
  private readonly audio: HTMLAudioElement;
  constructor(keyInfo: KeyInfo) {
    super("key-template", "keys");
    this.key = new Key(keyInfo);
    this.controller = new KeyController(this.key, this.element);
    this.audio = new Audio(`/audio/${this.key.audio}.wav`);
    this.configure();
  }

  private configure(): void {
    this.element.querySelector("kbd")!.textContent = this.key.name;
    this.element.querySelector(".sound")!.textContent = this.key.audio;
    this.element
      .querySelector<HTMLDivElement>(".progress-bar")!
      .style.setProperty("--progress", "0%");
    this.element.querySelector(".count")!.textContent = "0/0";

    window.addEventListener("keydown", (e: KeyboardEvent) =>
      this.controller.updateModelAndPlayAudio(e, this.audio, this.element)
    );

    this.element.addEventListener("transitionend", (e: TransitionEvent) =>
      this.controller.handleTransitionEnd(e, this.element)
    );
  }
}
