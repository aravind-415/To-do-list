const text_area = document.getElementById('text-area');
const list = document.getElementById('list');

text_area.addEventListener('keyup', function(e){
    if(e.key === 'Enter'){
        addTask();
    }
});
var i = 0;

function addTask(){
    const li = document.createElement('li');
    if(text_area.value == ''){
        alert('Please enter a task');
    }
    else{
        i+=1;
       
        li.classList.add('task-container');
        li.innerHTML = `
                <input type="checkbox" id="input-${i}" class="check-input"/>
                <label for="input-${i}" class="checkbox">
                    <svg viewBox="0 0 22 16" fill="none">
                        <path d="M1 6.85L8.09667 14L21 1"/>
                    </svg>
                </label>    
                <span id="text-box">${text_area.value}</span>
                <button id="delete-btn">X</button>`;
        list.appendChild(li);
        console.log(i);
        text_area.value = '';
    }
    const checkbox = li.querySelector(".check-input");
    const deleteBtn = li.querySelector("#delete-btn");

    deleteBtn.addEventListener("click", () => {
    if (checkbox.checked) {
      li.remove();
    }
    else{
        alert("Please complete your task and then delete this. \n                        Thank you!!!");
        deleteBtn.style.color = "red";
    }
    });
}