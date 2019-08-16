/*
Exercícios: Módulo 01

1º exercício

Crie uma função que dado o objeto a seguir:

*/

var endereco = {
 rua: "Rua dos pinheiros",
 numero: 1293,
 bairro: "Centro",
 cidade: "São Paulo",
 uf: "SP"
};

/*
Retorne o seguinte conteúdo:
O usuário mora em São Paulo / SP, no bairro Centro, na rua "Rua dos Pinheiros" com
nº 1293.
*/
function mostraMensagem(endereco){
  return (
    'O usuário mora em '
    + endereco.cidade
    +'/'
    + endereco.uf
    + ' no bairro '
    + endereco.bairro
    + ','
    + ' na rua "'
    + endereco.rua
    + '" com n° '
    + endereco.numero
  );
}
console.log(mostraMensagem(endereco));

/*
2º exercício
Crie uma função que dado um intervalo (entre x e y) exiba todos número pares:
*/

function pares(x, y) {
 for(var i = x; i <= y; i++){
   if(i % 2 === 0){
     console.log(i);
   }
 }
}
pares(32, 321);

/*
3º exercício
Escreva uma função que verifique se o vetor de habilidades passado possui a habilidade "Javascript"
e retorna um booleano true/false caso exista ou não.
*/

function temHabilidade(skills) {
 return skills.indexOf('Javascript') !== -1;
}
var skills = ["Javascript", "ReactJS", "React Native"];
temHabilidade(skills); // true ou false
/*
Dica: para verificar se um vetor contém um valor, utilize o método indexOf.
*/

/*
4º exercício
Escreva uma função que dado um total de anos de estudo retorna o quão experiente o usuário é:
*/

function experiencia(anos) {
 if( anos <= 1 ){
   console.log('Iniciante');
 }else if( anos <= 3 ){
   console.log('Intermediario');
 }else if( anos <= 6 ){
   console.log('Avançado');
 }else{
  console.log('Jedi Master');
 }
}
var anosEstudo = 0;
experiencia(anosEstudo);
// De 0-1 ano: Iniciante
// De 1-3 anos: Intermediário
// De 3-6 anos: Avançado
// De 7 acima: Jedi Master

/*
5º exercício
Dado o seguinte vetor de objetos:
*/

var usuarios = [
 {
 nome: "Diego",
 habilidades: ["Javascript", "ReactJS", "Redux"]
 },
 {
 nome: "Gabriel",
 habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
 }
];

/*
Escreva uma função que produza o seguinte resultado:
O Diego possui as habilidades: Javascript, ReactJS, Redux
O Gabriel possui as habilidades: VueJS, Ruby on Rails, Elixir
*/

function exibeHabilidades(usuarios) {
  for (usuario of usuarios) {
    console.log(
      "O " +
        usuario.nome +
        " possui as habilidades: " +
        usuario.habilidades.join(", ")
    );
  }
}
exibeHabilidades(usuarios);
/*
Dica: Para percorrer um vetor você deve utilizar a sintaxe for...of e para unir valores de um array
com um separador utilize o join.
*/