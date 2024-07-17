window.$ = document.querySelector.bind(document);
window.$$ = document.querySelectorAll.bind(document);

let boxElement = $$(".box");
let targetElement = $(".target");

//drag over
//drop over

targetElement.addEventListener("dragstart", function(e){
    this.classList.add("dragging");
})

targetElement.addEventListener("dragend", function(e){
    this.classList.remove("dragging");
});

boxElement.forEach(element =>{
    element.addEventListener("dragover", function(e){
        e.preventDefault();
        this.appendChild(targetElement);
    });

    element.addEventListener("drop", function(e){
        this.appendChild(targetElement);
    })
})

