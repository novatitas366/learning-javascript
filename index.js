
const submitBtn = document.querySelector('#submitBtn');
const numberInput = document.querySelector('#numberInput');
const p2 = document.querySelector('p2');
const p1 = document.querySelector('p1');
const randomNumberQuery= document.querySelector('.number')
const randomNumSize=6;
const guessSizeLabel = document.querySelector('#guessSizeLabel');

guessSizeLabel.textContent = `input your guess(0-${randomNumSize-1})`;

submitBtn.addEventListener('click', function(e){
    selection = numberInput.value;
    if(selection === ''){
        showError(selection);
        return;
    }
    else if(p2.textContent == 'cannot be empty'){
        p2.textContent = '';
    }
    console.log(p2.textContent);
    e.preventDefault;
   
    console.log(selection);
    
    randomNumberQuery.textContent = Math.floor(Math.random()*randomNumSize);

    if(selection == randomNumberQuery.textContent){
        p1.textContent = "congrats you selected the right number";
    }
    else{
        p1.textContent = "wrong number"
    }
    
})


function showError(selection){
    if(selection === ''){
        p2.textContent = 'cannot be empty';
    }
}


