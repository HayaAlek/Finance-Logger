import { invoice } from "./classes/invoice.js";
import { listTemplate } from "./classes/listTemplate.js";
import { payment } from "./classes/payment.js";
import { HasFormater } from "./interfaces/HasFormater.js";

const form = document.querySelector(".new-item-form") as HTMLFormElement;
//inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;
const msg = document.querySelector(".msg") as HTMLParagraphElement;
const p = document.createTextNode("please add your information");

//  list Template instance
const ul = document.querySelector("ul")!;
const list = new listTemplate(ul);
//submit
form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  //tuples
  let values: [string, string, number];
  values = [tofrom.value, details.value, amount.valueAsNumber];

  let doc: HasFormater;
  if (tofrom.value === "" || details.value === "" || amount.value === "") {
    msg.append(p);
  } else {
    if (type.value === "invoice") {
      doc = new invoice(...values);
    } else {
      doc = new payment(...values);
    }
    list.render(doc, type.value, "end");
    // console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
    console.log(doc);
  }
});
