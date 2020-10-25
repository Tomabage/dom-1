const div = dom.find("#test>.red")[0];
console.log(div);

dom.style(div, "color", "red");

console.log("----");
const divList = dom.find(".red");
console.log(divList);
console.log("----");
dom.each(divList, (n) => console.log(n));
