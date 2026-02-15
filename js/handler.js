

document.getElementById('btn-update-title').addEventListener('click',
    function (){
        console.log('update btn');

        const pageText = document.getElementById('page-text');
        pageText.innerText='updated page text successfully'
    }
)


document.getElementById('user-info-btn').addEventListener('click',
    function(){
       const userInfo =document.getElementById('user-info').value;
        const name = document.getElementById('name');
        name.style.backgroundColor='green';
        name.style.color='white';
        name.style.padding='10px';
        name.style.borderRadius='40px';
        name.style.margin='20px auto';
        name.style.border='2px solid red';
        name.innerText=userInfo;

    }
)