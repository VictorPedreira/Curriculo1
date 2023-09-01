const boxtag = document.getElementById("boxtag")
const button = document.getElementById("imagebutton")
var larguratela = window.innerWidth
var isopen = false 

function box(){
    larguratela = window.innerWidth
    if (larguratela <= 800) {

        if (isopen == false){
            boxtag.style.width = '300px'
            boxtag.style.left = '32%'
            button.style.left = 'calc(50% - 150px)'
        } else {
            boxtag.style.width = '0px'
            boxtag.style.left = '50%'
            button.style.left = 'calc(50% - 75px)'
        }
        isopen = !isopen
    }  

    else {

        boxtag.style.width = '300px'

        if (isopen == false){
            boxtag.style.width = '300px'
        } else {
            boxtag.style.width = '0px'
        }
        isopen = !isopen
    
    }

}

button.addEventListener("click", box)

    



