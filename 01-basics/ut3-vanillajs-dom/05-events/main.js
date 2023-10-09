
const buttons = document.querySelectorAll("button");

const primary = buttons[0];
primary.addEventListener("click", (e)=>{
    alert("Click Event");
})

const secondary = buttons[1];
secondary.addEventListener("mouseenter", (e)=>{
    alert("Mouse Enter Event");
})

const success = buttons[2];
success.addEventListener("mouseup", (e)=>{
    alert("Mouse Up Event");
})

const danger = buttons[3];
danger.addEventListener("mouseleave", (e)=>{
    alert("Mouse Leave Event");
})

const warning = buttons[4];
warning.addEventListener("mouseenter", (e)=>{
    warning.className = "btn btn-danger";
})
warning.addEventListener("mouseleave", (e)=>{
    warning.className = "btn btn-warning";
})

const info = buttons[5];
info.addEventListener("click", (e)=>{
   document.body.style = "background-color: red;";
})

const light = buttons[6];
light.addEventListener("click", (e)=>{
   document.body.style = "background-color: white;";
})

const dark= buttons[7];
dark.addEventListener("click", ()=>{
    buttons.forEach((button) => {
        button.className = "btn btn-dark";
    });
})