let toggle = document.getElementsByClassName("navbar-toggler")[0]
let collapse = document.getElementsByClassName("navbar-collapse")[0]
let write = document.querySelector(".powerful-seaction h1")
let string = "Health And Beauty"

toggle.addEventListener("click" , ()=>{
document.body.classList.toggle("mains")
})

document.body.addEventListener("click" , (e)=>{
    if (e.target.classList.contains("mains")) {
        document.body.classList.remove("mains")
        collapse.classList.remove("show")
    }
  })
  let x = 1
 setInterval(() => {
        write.innerHTML=string.slice(0,x)
         x++
    if (x > string.length) {
        x =1
    }
 }, 200);