function comprar(){

    //Pega o tipo de ingresso.
    let tipoIngresso = document.getElementById('tipo-ingresso').value;

    //Pega a quantidade de ingresso disponivel do tipo selecionado.
    let quantidadeIngressoDisponivel = parseInt(document.getElementById(`qtd-${tipoIngresso}`).textContent);

    //Pega a quantidade de ingresso selecionada pelo usuário.
    let quantidadeIngressoSelecionado = document.getElementById('qtd').value;

    //Validação da quantidade de ingresso inserida pelo usuário.
    if(quantidadeIngressoSelecionado <= 0 || isNaN(quantidadeIngressoSelecionado)){
        alert("Quantidade de ingressos selecionada inválida!");
        return;
    }

    //Validação da compra de ingressos de acordo com a quantidade inserida pelo usuário.
    if(quantidadeIngressoSelecionado <= quantidadeIngressoDisponivel){
        quantidadeIngressoDisponivel = parseInt(document.getElementById(`qtd-${tipoIngresso}`).textContent = quantidadeIngressoDisponivel - quantidadeIngressoSelecionado ) ;

    }else{
        if(tipoIngresso == 'Pista'){
            alert(`Quantidade de ingresso indisponível para ${tipoIngresso}`);
        }else{
            alert(`Quantidade de ingresso indisponível para Cadeira ${tipoIngresso}`);
        }
        return;
        
    }

}