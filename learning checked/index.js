
const myCheckBox = document.getElementById("mycheckbox");
const visabutton = document.getElementById("visabtn");
const mastercardbutton = document.getElementById("Mastercardbtn");
const paypalbutton = document.getElementById("Paypalbtn");
const submitbutton = document.getElementById("mySubmit");
const subresult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

submitbutton.onclick = function(){
    if(myCheckBox.checked){
        subresult.textContent = `You are subscribed`;
    }
    else{
        subresult.textContent = `User is not subscribed`;
    }

    if(visabutton.checked){
        paymentResult.textContent = `you are paying with visa`;
    }
    else if(mastercardbutton.checked){
        paymentResult.textContent = `you are paying with mastercard`
    }
    else if(paypalbutton.checked){
        paymentResult.textContent = `You are paying with paypal`
    }
    else{
        paymentResult.textContent = `you brokey`
    }
}