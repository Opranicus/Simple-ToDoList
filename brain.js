let button = document.getElementById('add');
let ul = document.getElementById('parent');
let display = document.getElementById('taskcount');
let count = 0;

button.addEventListener("click", () =>{
    let textarea = document.getElementById('input').value;

    if (textarea === ""){
        alert("Please enter something");
    }
    
    else{
        
        let tasks = document.createElement('li');
        let line = document.createElement('hr');
        tasks.textContent = textarea;
        
        ul.appendChild(tasks);
        ul.appendChild(line);
        
        count++;
        display.textContent = count;
      
        document.getElementById('input').value = "";
        
        let delbut = document.createElement('button');
        tasks.appendChild(delbut);
        delbut.classList.add('delete');
        delbut.textContent = "Done";

        
        delbut.addEventListener("click", () =>{
            tasks.remove();
            line.remove();
            count--;
            display.textContent = count;
        })

        conatainer.appendChild(ul);

    }
})
