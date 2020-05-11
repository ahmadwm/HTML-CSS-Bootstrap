const myForm=document.querySelector('#my-form');
document.querySelector('#my-form').style.background='#ccc';
//document.querySelector('body').classList.add('bg-dark');
const nameInput=document.querySelector('#name');
const ageInput=document.querySelector('#age');
const emailInput=document.querySelector('#email');
const msg=document.querySelector('.msg');
const userList=document.querySelector('#myTable');
const tBody=document.querySelector('#tBody');

myForm.addEventListener('submit',onsubmit);
function onsubmit(e) {
    e.preventDefault();
    if (nameInput.value === ''|| ageInput.value === '' || emailInput.value === ''   )  {
        alert('please enter all the fields');
        //msg.classList.add('error');
        //msg.innerHTML='Full all the fields';
        //setTimeout(()=>msg.remove(),3000); 
    }else{
        const userList=document.querySelector('#myTable');
        userList.style.display='block';
        const newRow =document.createElement('tr');
        tBody.appendChild(newRow);
        let newData =[nameInput.value,ageInput.value,emailInput.value];
        for (let i = 0; i < newData.length; i++) {
            const newTd =document.createElement('td');
            newTd.innerHTML=newData[i]
            newRow.appendChild(newTd);  
        }
        nameInput.value='';
        ageInput.value='';
        emailInput.value='';
    }
}