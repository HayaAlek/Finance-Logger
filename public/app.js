import { invoice } from "./classes/invoice.js";
import { listTemplate } from "./classes/listTemplate.js";
import { payment } from "./classes/payment.js";
const form = document.querySelector(".new-item-form");
//inputs
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
const msg = document.querySelector(".msg");
const p = document.createTextNode("please add your information");
//  list Template instance
const ul = document.querySelector("ul");
const list = new listTemplate(ul);
//submit
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    if (tofrom.value === "" || details.value === "" || amount.value === "") {
        msg.append(p);
    }
    else {
        if (type.value === "invoice") {
            doc = new invoice(tofrom.value, details.value, amount.valueAsNumber);
        }
        else {
            doc = new payment(tofrom.value, details.value, amount.valueAsNumber);
        }
        list.render(doc, type.value, "end");
        // console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
        console.log(doc);
    }
});
