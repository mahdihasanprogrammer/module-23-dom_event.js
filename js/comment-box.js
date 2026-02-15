document.getElementById('post-btn').addEventListener('click',
    function(event){
        event.preventDefault();
        const textBox =document.getElementById('text-box').value;
        
        const section =document.getElementById('section');

        const p =document.createElement('p');
        p.innerText=textBox;
        p.classList.add('comment');

        section.appendChild(p);
        document.getElementById('text-box').value='';

       
    }
)