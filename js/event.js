
// option-2;
function changeBg(){
    const r =Math.floor(Math.random()*256);
    const g =Math.floor(Math.random()*256);
    const b =Math.floor(Math.random()*256);
    const a =Math.floor(Math.random());

    document.body.style.backgroundColor=`rgb(${r},${g},${b})`;

}

//  option-3 get element by id and then set onclick to a function

// const btnMakeBlue = document.getElementById('btn-make-blue');
// btnMakeBlue.onclick =function makeBlue(){
//     document.body.style.backgroundColor='blue';
// }
document.getElementById('btn-make-blue').onclick = function (){
    document.body.style.backgroundColor='red';
}


const makePurple =document.getElementById('make-purple');
makePurple.onclick = btnMakePurple;

function btnMakePurple(){
    document.body.style.backgroundColor = 'purple';
    document.body.style.color = 'white';
}


// option-4 addEventListener;
document.getElementById('option-4').addEventListener('click',
    () => {
        document.body.style.backgroundColor='green';


        const inputValue = document.getElementById('option4-input').value;
        const body = document.body;
        const p = document.createElement('p');
        p.innerText=inputValue;

        body.appendChild(p)
    }

    
)

console.dir(document.querySelector('#main').childNodes)