function calcular(event){
    event.preventDefault();
    // DOM - Document Object MOdel
    const nota = document.getElementById("nota").value;
    const resultado = document.getElementById("resultado");
    
    if (nota < 0 || nota > 10){
        resultado.textContent = "Nota Inválida";
    }else if (nota >= 7){
        resultado.textContent = "Aluno Aprovado";
    }else {
        resultado.textContent = "Aluno Reprovado";
    }
}