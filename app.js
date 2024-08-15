let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio!';

function click01(){
    console.log('o botão foi clicado');
}

function click02(){
    console.log('eu amo JavaScript!');
}

function click03(){
    cidade = prompt('Nome de uma cidade do Brasil: ');
    alert(`Eu já estive em ${cidade} e lembrei de você!`);
}

function click04() {
    valor1 = parseInt(prompt('número um: '));
    valor2 = parseInt(prompt('número dois'));
    soma = valor1 + valor2;
    alert(soma);
}