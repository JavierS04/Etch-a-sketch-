const container = document.querySelector(".container");

const holder = document.createElement("div");
holder.classList.add("holder")

for (let i =0; i < 256; i++ ){
    const childEl = document.createElement("div")
    childEl.classList.add("child")
    childEl.setAttribute("id", i)
    holder.appendChild(childEl);
    console.log(i)
}
container.appendChild(holder);


holder.addEventListener("mouseover", (e) => {
    e.target.style.backgroundColor = "black"
    console.log(e.target)
})


const button = document.createElement("button")
button.innerText = "button"
container.appendChild(button)

button.addEventListener("click", () =>  {
    for(let i =0; i < 256; i++){
        var m = document.getElementById(i)
        m.style.backgroundColor = "white"
    }


})
