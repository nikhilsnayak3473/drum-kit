import "./css/style.css";
import { KeyInfo } from "./types";
import { getData } from "./util";
import { KeyComponent } from "./components/Key";
import { TotalComponent } from "./components/Total";

const URL =
  "https://gist.githubusercontent.com/nikhilsnayak/6d335b9afd4671ea54166faed5e9e306/raw/b9d4bcdf4e6505df2a92cd871f620112a042612b/key-info.json";

function renderElements(keysInfo: KeyInfo[]): void {
  keysInfo.forEach((keyInfo) => {
    const keyComponent = new KeyComponent(keyInfo);
    keyComponent.render();
  });

  const totalComponent = new TotalComponent();
  totalComponent.render();
}

async function main() {
  let data = await getData<KeyInfo[]>(URL);

  renderElements(data);
}

main();
