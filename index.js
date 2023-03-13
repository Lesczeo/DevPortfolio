document.title = "Dev:Lucas> Meu Portfolio!";

const btnTemaEmojis = ["&#127770;","&#127774;"] // Codigo decimal emoji noite e dia [🌚,🌞]
let body = document.querySelector(".body")
let botaoMudaTema = document.querySelector(".botaoMudaTema")

function changetheme(){
    body.classList.toggle("bodyNoite");
    body.classList.toggle("bodyDia");

    let listaElementos = ".main,.socialsMenuCurve,.socialsMenuContent"
    let main = [...document.querySelectorAll(listaElementos)]
    main.map((el)=>{
        el.classList.toggle("mainNoite");
    })

    if (body.classList.contains("bodyNoite")){ // Esse comparador depende do classe de tema do body nesse momento
        botaoMudaTema.innerHTML = `<span>${btnTemaEmojis[1]} Light</span>`; // emoji tema claro
    }else{
        botaoMudaTema.innerHTML = `<span class="textNoite">${btnTemaEmojis[0]} Dark</span>`; // emoji tema escuro sem classe dark
    }
    
    let botoes = [...document.querySelectorAll(".btn")]
    botoes.map((el)=>{
        el.classList.toggle("botoesNoite");
    })

    let textos = [...document.querySelectorAll("span")]
    textos.map((el)=>{
        el.classList.toggle("textNoite");
    })

    listaElementos = "hr,.navbar,.tela"
    let corOutros = [...document.querySelectorAll(listaElementos)]
    corOutros.map((el)=>{
        el.classList.toggle("outrosNoite");
    })

    listaElementos = ".hiWorldIntro,.full,.socialsMenuCurve,.socialsMenuContent"
    let corBordaOutros = [...document.querySelectorAll(listaElementos)]
    corBordaOutros.map((el)=>{
        el.classList.toggle("bordaOutrosNoite");
    })

    listaElementos = ".codeTela,.hiWorldIntro"
    let corCodeTela = [...document.querySelectorAll(listaElementos)]
    corCodeTela.map((el)=>{
        el.classList.toggle("codeTelaNoite");
    })
}

botaoMudaTema.addEventListener("click",changetheme)