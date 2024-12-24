let Sobremesa = ''
let PrecoSobr = 0
let Bebida = ''
let PrecoBeb = 0
let Prato = ''
let PrecoPrat = 0



function selecionarSobrimesa(sobremesa){
    let selecionadoAnt = document.querySelector('.exibicao.sobrimesa.selecionado');
    console.log(selecionadoAnt)
    if (selecionadoAnt != null ){
        selecionadoAnt.classList.remove("selecionado");
    } 
    console.log(sobremesa);
    sobremesa.classList.add("selecionado");
    Sobremesa = sobremesa.querySelector(".titulo")
    Sobremesa = Sobremesa.innerHTML
    PrecoSobr = sobremesa.querySelector(".preco")
    PrecoSobr = PrecoSobr.innerHTML
    mudarBotao()
    
    
}


function selecionarBebida(bebida){
    let selecionadoAnt = document.querySelector('.exibicao.bebida.selecionado');
    console.log(selecionadoAnt)
    if (selecionadoAnt != null ){
        selecionadoAnt.classList.remove("selecionado");
    } 
    console.log(bebida);
    bebida.classList.add("selecionado");
    Bebida = bebida.querySelector(".titulo");
    Bebida = Bebida.innerHTML;
    PrecoBeb = bebida.querySelector(".preco")
    PrecoBeb = PrecoBeb.innerHTML
    mudarBotao()
    
    
}

function selecionarPrato(prato){
    let selecionadoAnt = document.querySelector('.exibicao.prato.selecionado');
    console.log(selecionadoAnt)
    if (selecionadoAnt != null ){
        selecionadoAnt.classList.remove("selecionado");
    } 
    console.log(prato);
    prato.classList.add("selecionado");
    Prato = prato.querySelector(".titulo")
    Prato = Prato.innerHTML
    PrecoPrat = prato.querySelector(".preco")
    PrecoPrat = PrecoPrat.innerHTML
    mudarBotao()
   
    
    
}

function mudarBotao(){
if (Prato != ''){
    if (Bebida != ''){
        if (Sobremesa != ''){
            botao = document.querySelector(".botao")
            botao.classList.add("pronto")
            botao.textContent="Fechar pedido"
        }
    }
}
}

function fazerPedido(botao) {
    if ("pronto" == botao.classList[1]){
        console.log(botao)
        pedido = document.querySelector(".pedido")
        pedido.classList.add('mostrar')
        fundo = document.querySelector(".fundoTela")
        console.log(fundo)
        fundo.classList.add("mostrar")
    pedido = document.querySelector(".pedido")
    prato = pedido.querySelector(".prat")
    prato.textContent = Prato + ": " + PrecoPrat
    bebida = pedido.querySelector(".beb")
    bebida.textContent = Bebida + ": " + PrecoBeb
    sobremesa = pedido.querySelector(".sob")
    sobremesa.textContent = Sobremesa + ": " + PrecoSobr
    sobremesa = pedido.querySelector(".total")
    total = (Number(PrecoBeb) + Number(PrecoPrat) + Number(PrecoSobr))
    sobremesa.textContent = "Total:" + total.toFixed(2)
    link = pedido.querySelector('.pedir')
    let mensagem = `PEDIDO: \nPrato: ${Prato} R$${PrecoPrat}\nBebida: ${Bebida} R$${PrecoBeb}\nSobremesa: ${Sobremesa} R$${PrecoSobr}\nTOTAL: R$${total.toFixed(2)}`;
let mensagemCodificada = encodeURIComponent(mensagem);
link.href = "https://wa.me/61996406316?text=" + mensagemCodificada;
    }
    

}

function cancelar(){
    pedido = document.querySelector(".pedido")
        pedido.classList.remove('mostrar')
        fundo = document.querySelector(".fundoTela")
        console.log(fundo)
        fundo.classList.remove("mostrar")

}