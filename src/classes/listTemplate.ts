import { HasFormater } from "../interfaces/HasFormater";

export class listTemplate {
  constructor(private container: HTMLUListElement) {}
  render(item: HasFormater, heading: string, position: "start" | "end") {
    const li = document.createElement("li");
    const h4 = document.createElement("h4");
    h4.innerHTML = heading;
    li.append(h4);
    const p = document.createElement("p");
    p.innerText = item.format();
    li.append(p);

    if (position === "start") {
      this.container.prepend(li);
    } else {
      this.container.append(li);
    }
  }
}
