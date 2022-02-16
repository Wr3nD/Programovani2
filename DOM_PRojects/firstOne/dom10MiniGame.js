const output = document.querySelector(".output")
const game = {x:50,y:50,speed:6,ele:{}}
const keyz = {ArrowRight:false,ArrowLeft:false,ArrowUp:false,ArrowDown:false}
game.ele = maker()

let move = window.requestAnimationFrame(updatePosition)
document.addEventListener("keydown",(e)=>{
    if(e.code in keyz){
        keyz[e.code] = true
    }
    // if(!game.ele){
    //     game.ele = maker()
    // }
    // if(e.key == "ArrowRight"){
    //     game.x+=game.speed
    //     updatePosition()
    // }
    // if(e.key == "ArrowLeft"){
    //     game.x-=game.speed
    //     updatePosition()
    // }
    // if(e.key == "ArrowUp"){
    //     game.y-=game.speed
    //     updatePosition()
    // }
    // if(e.key == "ArrowDown"){
    //     game.y+=game.speed
    //     updatePosition()
    // }
})
document.addEventListener("keyup",(e)=>{
    if(e.code in keyz){
        keyz[e.code] = false
    }
})

function updatePosition(){
    const domRect = output.getBoundingClientRect()
    console.log(domRect)
    if(keyz.ArrowRight && game.x < (domRect.right -30)){
        game.x += game.speed
    }
    if(keyz.ArrowLeft && game.x > domRect.left){
        game.x -= game.speed
    }
    if(keyz.ArrowUp && game.y > domRect.top){
        game.y -= game.speed
    }
    if(keyz.ArrowDown && game.y < (domRect.bottom -30)){
        game.y += game.speed
    }
    
    game.ele.style.left = game.x + "px"
    game.ele.style.top = game.y + "px"
    move = window.requestAnimationFrame(updatePosition)
}

function maker(){
    const el = document.createElement("div")
    output.append(el)
    el.style.top = game.y + "px"
    el.style.left = game.x + "px"
    el.classList.add("box")
    el.style.backgroundColor = "#" + Math.random().toString(16).substring(2,6)
    el.addEventListener("click",(e)=>{
        game.ele = maker()
        
    },{once:true})
    return el
}