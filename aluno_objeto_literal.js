const aluno_academia = {
    id: 10,
    nome: 'David',
    altura: 1.73,
    peso: 69
};

const nome_aluno = aluno_academia.nome;
const peso_aluno = aluno_academia.peso;
const altura_aluno = aluno_academia.altura;

const imc_aluno = (peso_aluno / (altura_aluno * altura_aluno)).toFixed(2);

console.log("O IMC do aluno é de: " + imc_aluno);

if (imc_aluno < 18.5){
    console.log("O aluno " + nome_aluno + " está abaixo do peso");
} else if (imc_aluno >= 18.5 && imc_aluno <= 24.99){
    console.log("O aluno " + nome_aluno + " está com o peso normal");
} else {
    console.log("O aluno " + nome_aluno + " está acima do peso");
}