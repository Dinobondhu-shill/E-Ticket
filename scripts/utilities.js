function getElementTextById(id) {
  const currentText = document.getElementById(id).innerText;
  const textInNumber = parseInt(currentText);
  return textInNumber;
}

function setTextById(element, value) {
  const elementId = document.getElementById(element);
  elementId.innerText = value;
}
// appending child 
function appendChild(id, name) {
  const sitName = document.getElementById(id);
  const p1 = document.createElement("p")
  p1.innerText = (name);
  const p2 = document.createElement("p");
  p2.innerText = "Economy";
  const p3 = document.createElement("p");
  p3.innerText = "550"

  sitName.appendChild(p1);
  sitName.appendChild(p2);
  sitName.appendChild(p3);
}
// function couponValue(id){
  

// }