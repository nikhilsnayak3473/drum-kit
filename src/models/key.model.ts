import { KeyInfo } from "../types";

export class Key {
  public name: string;
  public ascii: string;
  public audio: string;
  public clickCount: number;
  constructor(keyInfo: KeyInfo) {
    this.name = keyInfo.name;
    this.ascii = keyInfo.ascii;
    this.audio = keyInfo.audio;
    this.clickCount = parseInt(localStorage.getItem(this.ascii) || "0");
  }
}
