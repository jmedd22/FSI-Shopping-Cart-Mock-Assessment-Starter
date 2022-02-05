/*--- the plus and minus buttons respond to a click event [x] ---*/
/* --- the plus button adds one to the quantity [x] ---*/
/* --- the minus button subtracts one from the quantitiy [x] ---*/
/* --- the quantity updates when the +/- buttons are clicked [] ---*/
// The quantitiy cannot drop below 0




let rockQty = 1 

// access the buttons
let addBtn = document.querySelector('#quantity-up')
let minusBtn = document.querySelector('#quantity-down')
let qtyDisplay = document.querySelector('.total-quantity')

//add a click event to each button
addBtn.addEventListener('click', function(e) {
    rockQty++
    qtyDisplay.textContent = `Quantity:  ${rockQty}`
})

minusBtn.addEventListener('click', function(e) {
    if (rockQty > 1) {
        rockQty--
        qtyDisplay.textContent = `Quantity:  ${rockQty}`

    }
   
})




