let togglers = document.querySelectorAll("[data-toggle]");

for(let el of togglers){
    el.addEventListener("click" ,()=>{
    // the element for create effect to
   let element = document.getElementById(`${el.dataset.toggle}`)
   element.classList.toggle("show")
})
}