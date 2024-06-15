function scrollToTicketSelection(){
    document.getElementById("hi").scrollIntoView({behavior:'smooth'});
}
function seatsRemainingUpdate(s){
  
    var seatCount = parseInt(document.getElementById('seat-remaining').innerText);
    console.log(seatCount);
    seatCount=seatCount+s;
    document.getElementById('seat-remaining').innerText=seatCount;
    cartListUpdate();


}

function initialSetup(){
    const cartList = document.getElementById('cart-list'); 
    cartList.innerHTML=''; //initially empty cartlist
    const totalPrice=document.getElementById('total-price'); //total price initialy 0
    totalPrice.innerText=0;
    const couponInput=document.getElementById('coupon-input');
    couponInput.setAttribute('disabled',true);
    document.getElementById('coupon-button').setAttribute('disabled',true);
    document.getElementById('next').setAttribute('disabled',true);
    document.getElementById('coupon-field').classList.remove('hidden');
    document.getElementById('discount').innerText='';
}