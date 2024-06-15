
const seats = document.getElementsByClassName("seat");
var seatSelected=[];
var phoneNo='';
document.getElementById('phone-no').addEventListener('input',
    function(e){
     phoneNo=e.target.value;
     if(phoneNo!=='' && seatSelected.length>0){
     document.getElementById('next').removeAttribute('disabled');}
    
    else{
        document.getElementById('next').setAttribute('disabled',true);
    }}
)
// listen to seat click
for(const seat of seats){
   
 seat.addEventListener('click',function(event){
    
    if(!seatSelected.includes(event.target.innerText)){ //if seat not already selected
        if(seatSelected.length==4){
            alert("You cannot select more than 4 tickets at a time");
        }
        else{
    seatSelected.push(event.target.innerText); //push to array
    event.target.classList.add('bg-[#1DD100]'); //change bg
    seatsRemainingUpdate(-1); //if seat selected then available seat count decrement
    cartListUpdate();
            
}
}
    else{ 
    //if the seat is already selected ,we will create a toggle effect by removing the seat from the array. 
    const index=seatSelected.indexOf(event.target.innerText);
    seatSelected.splice(index,1);
    event.target.classList.remove('bg-[#1DD100]');
    seatsRemainingUpdate(1); // //if seat unselected then available seat count increment
    }
    
 })

}

function cartListUpdate(){ //update the cartlist

    initialSetup();
    document.getElementById('seat-count').innerText=seatSelected.length;
    const totalPrice=document.getElementById('total-price');
    const ul = document.createElement('ul');
    var total = parseInt(totalPrice.innerText);
    const perTicketPrice=parseInt(document.getElementById('ticket-price').innerText);
    const couponInput=document.getElementById('coupon-input');
    if(seatSelected.length!==0 && phoneNo!==''){
        document.getElementById('next').removeAttribute('disabled');
    }
    for(const seatNo of seatSelected){ //cartlist add list
    var liSeat = document.createElement('li');
    liSeat.classList.add('flex','justify-between');
    var seat = document.createElement('p');
    var className = document.createElement('p');
    var price = document.createElement('p');
    seat.innerText=seatNo;
    className.innerText='Economy'
    price.innerText=perTicketPrice;
    liSeat.appendChild(seat);
    liSeat.appendChild(className);
    liSeat.appendChild(price);
    ul.appendChild(liSeat);
    total+=perTicketPrice;
   
    
    
}
document.getElementById('grand-total').innerText=total;
const cartList = document.getElementById('cart-list');
cartList.appendChild(ul);
totalPrice.innerText=total;

if(seatSelected.length==4){
    couponInput.removeAttribute('disabled');
    document.getElementById('coupon-button').removeAttribute('disabled');
}

}

function applyCoupon(){
  
    const coupon15 = document.getElementById('coupon-15').innerText;
    const coupon20 = document.getElementById('coupon-20').innerText;

    const couponTyped =  document.getElementById('coupon-input').value ;

    if(couponTyped===coupon15){
        const grandTotal= document.getElementById('grand-total');
        grandTotal.innerText=parseInt(grandTotal.innerText)-parseInt(grandTotal.innerText)*(15/100);
        document.getElementById('coupon-field').classList.add('hidden');
        document.getElementById('discount').innerText=coupon15+" applied!";
    }
    else if(couponTyped===coupon20){
        
        const grandTotal= document.getElementById('grand-total');
        grandTotal.innerText=parseInt(grandTotal.innerText)-parseInt(grandTotal.innerText)*(20/100);
        document.getElementById('coupon-field').classList.add('hidden');
        document.getElementById('discount').innerText=coupon20+" applied!";
    }
    else{
        alert("not a valid coupon");
    }
    document.getElementById('coupon-input').value='';


}




