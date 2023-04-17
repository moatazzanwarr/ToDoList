document.addEventListener("DOMContentLoaded",() => {
    
    const data = document.querySelector("#data");
    const add = document.querySelector(".btn");
    add.disabled = true;
    
    document.querySelector("#data").onkeyup = () => {
        if(data.value.length > 3){
            add.disabled = false;
        }else{
            add.disabled = true;
        } 
    }

    const prtodo = document.querySelector(".pr-todo");

    add.onclick = () => {
        const div = document.createElement("div");
        div.setAttribute("class","todo d-flex justify-content-between align-items-center gap-2");
        const p = document.createElement("p");
        const span = document.createElement("span");
        span.setAttribute("class", "icon-trash-o");
        prtodo.appendChild(div);
        div.appendChild(p);
        p.innerHTML = data.value;
        div.appendChild(span)
        data.value = "";
        add.disabled = true;
        span.onclick = () => {
            span.parentElement.remove();
        }
        return false;
    }
})