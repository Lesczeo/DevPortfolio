
let body = document.querySelector(".body")
let botaoMudaTema = document.querySelector(".botaoMudaTema")
function changetheme(){
    body.classList.toggle("bodyNoite");
    body.classList.toggle("bodyDia");

    const btnTemaEmojis = ["&#127770;","&#127774;"] // Codigo decimal emoji noite e dia [🌚,🌞]
    if (body.classList.contains("bodyNoite")){ // Esse comparador depende do classe de tema do body nesse momento
        botaoMudaTema.innerHTML = `<span>${btnTemaEmojis[1]}</span>`; // emoji tema claro
        console.log(botaoMudaTema.innerHTML)
    }else{
        botaoMudaTema.innerHTML = `<span>${btnTemaEmojis[0]}</span>`; // emoji tema escuro
        console.log(botaoMudaTema.innerHTML)
    }
    
    let botoes = [...document.querySelectorAll(".btn")]
    botoes.map((el)=>{
        el.classList.toggle("botoesNoite");
    })

    let corOutros = [...document.querySelectorAll("hr")]
    corOutros.map((el)=>{
        el.classList.toggle("outrosNoite");
    })

    let textos = [...document.querySelectorAll("span")]
    textos.map((el)=>{
        el.classList.toggle("textNoite");
    })
    // if(body.classList.contains("corDia")){
    //     body.classList.toggle("corNoite");
    // }else if(body.classList.contains("corNoite")){
    //     body.classList.toggle("corDia");
    // }else{console.log("Erro!")}
}

botaoMudaTema.addEventListener("click",changetheme)