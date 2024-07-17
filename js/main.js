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

boxElement.forEach(box =>{
    box.addEventListener("dragover", function(e){
        e.preventDefault();
    });

    box.addEventListener("drop", function(e){
        if(!box.querySelector(".target")){
            this.appendChild(currentTarget);
        }
    })
})

