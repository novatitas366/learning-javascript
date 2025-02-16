const Subbox = document.querySelector('#myCheckBox');
const visabtn = document.querySelector('#VisaBtn');
const MastercardBtn = document.querySelector('#MastercardBtn');
const PaypalBtn = document.querySelector('#PaypalBtn');
const submitBtn = document.querySelector('#submitBtn')
const p1 = document.querySelector('p1');
const p2 = document.querySelector('p2');

submitBtn.addEventListener('click', function(e){
    if(Subbox.checked){
        p1.textContent = `You are subscribed`;
    }
    else {
        p1.textContent = "You are not subscribed";
    }

    if(visabtn.checked){
        p2.textContent = `you will pay with visa`;
    }
    else if(MastercardBtn.checked){
        p2.textContent = `you will pay with mastercard`;
    }
    else if(PaypalBtn.checked){
        p2.textContent = `you will pay with Paypal`;
    }
    else{
        p2.textContent = `you are brokey`;
    }
})