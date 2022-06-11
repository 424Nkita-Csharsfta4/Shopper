const button = document.getElementById("btn");

const colors = ["#FF5733","F9FF33","3371FF"]

const hex =[
    "0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F",
];

button.addEventListener("click",()=> {
   let hexColor = generateHex();
   document.body.style.backgroundColor = hexColor;
   color.textContent = hexColor;
});

function generateHex(){
    let hexColor="#";
    for(let i =0;i<6;i++){
        hexColor+=hex[getRandomNumber()];
    }

    return hexColor;
}

function getRandomNumber(){
    return Math.floor(Math.random() * hex.length);
}

/*Modal*/
const opePopUp = document.getElementById('open_pop_up');
const closePopUp = document.getElementById('pop_up_close');
const popUp = document.getElementById('pop_up');

opePopUp.addEventListener('click',function(e){
    e.preventDefault();
    popUp.classList.add('active');
});
closePopUp.addEventListener('click',() =>{
    popUp.classList.remove('active');
});

