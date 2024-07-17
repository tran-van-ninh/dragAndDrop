window.$ = document.querySelector.bind(document);
window.$$ = document.querySelectorAll.bind(document);

let boxElement = $$(".box");
let targetElementList = $$(".target");
let currentTarget = null;

//drag over
//drop over

targetElementList.forEach(target =>{
    target.addEventListener("dragstart", function(e){
        this.classList.add("dragging");
        currentTarget = this;
    })
    
    target.addEventListener("dragend", function(e){
        this.classList.remove("dragging");
    });
})

boxElement.forEach(element =>{
    element.addEventListener("dragover", function(e){
        e.preventDefault();
        this.appendChild(currentTarget);
    });

    element.addEventListener("drop", function(e){
        this.appendChild(currentTarget);
    })
})

