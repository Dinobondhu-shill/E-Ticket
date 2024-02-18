const sits = document.getElementsByClassName('sits');
let sitCount = 0;
let ticketPrice = 0;

for (const sit of sits) {
  sit.addEventListener('click', function () {
    const sitCategory = sit.innerText;
    if (sitCount <= 3) {
      // change the background color after clicking a ticket button
      sit.style.backgroundColor = 'red'
      // increase total ticket number after booking any ticket
      const sitsInNumber = getElementTextById('available-sit');
      const updatedSitNumber = sitsInNumber - 1;
      setTextById('available-sit', updatedSitNumber);
      // update the passengers ticket number
      const buyNumberOfTicket = getElementTextById('sit-counting');
      const bookingSitCount = buyNumberOfTicket + 1;
      setTextById('sit-counting', bookingSitCount);
      // total price updating
      ticketPrice = ticketPrice + 550;
      setTextById('total-price', ticketPrice);
      setTextById('grand-total', ticketPrice);

      sitCount++;
      appendChild('sit-details', sitCategory)
      if(sitCount = 1){
        const applyButton = document.getElementById('apply');
        applyButton.removeAttribute('disabled');
        
      }
    } else {
      alert('Sorry, You can`t buy More than 4 Tickets');
    }


  })
}




const apply = document.getElementById('apply')

apply.addEventListener("click", function () {
  const couponInput = document.getElementById("coupon").value;
  if (couponInput == "NEW20") {
    let grandTotal = getElementTextById('grand-total');
    grandTotal = grandTotal - grandTotal * 0.15;
    setTextById('grand-total', grandTotal);
    const couponInput = document.getElementById('coupon-input')
    couponInput.classList.add('hidden');

  }
  else if(couponInput == "Couple 20"){
    let grandTotal = getElementTextById('grand-total');
    grandTotal = grandTotal - grandTotal * 0.2;
    setTextById('grand-total', grandTotal);
    const couponInput = document.getElementById('coupon-input')
    couponInput.classList.add('hidden');
  }
  else{
    const errormsg = document.getElementById('errormsg');
    errormsg.classList.remove('hidden');
  }
})