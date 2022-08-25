function calcular() {
    event.preventDefault();

    let alcoolInput = document.getElementById('alcool').value;
    let gasolinaInput = document.getElementById('gasolina').value;
    let conteudoResultado = document.getElementById('conteudo-resultado');
    let textoResultado = document.getElementById('texto-resultado');

    let gasolina = document.getElementById('resultado-gasolina');
    let alcool = document.getElementById('resultado-alcool');

    // Calculo : alcool / gasolina Se o resultado for menor que 0.7 compensa usar alcool

    let calculo = (alcoolInput / gasolinaInput);

    if(calculo < 0.7) {
        // Aqui compensa usar alvool
        textoResultado.innerHTML = 'Compensa usar Álcool';
    } else {
        // Compensa usar gasolina
        textoResultado.innerHTML = 'Compensa usar Gasolina';
    }


    gasolina.innerHTML = 'Gasolina R$ ' + gasolinaInput;
    alcool.innerHTML = 'Álcool R$ ' + alcoolInput;

    conteudoResultado.classList.remove('hide')
}