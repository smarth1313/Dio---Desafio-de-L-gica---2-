//Desafio do projeto  - 02
//Dev. nível noob: Thiago Mello
//Data: 11/05/2024

//Resultado das lutas.

let vitorias = 180
let derrotas = 13

//Cartel do lutador

function cartel (vitorias, derrotas) {

let nivel = vitorias - derrotas    

    if (nivel <= 10) {
        rank = "ferro! Continue lutando para upar"
              
    }       else if (nivel >= 11 && nivel <= 20) {
            rank = "Bronze! Você já saiu do ponto de partida"
           
    }           else if (nivel >= 21 && nivel <= 50) {
                rank =  "Prata! Dano dobrado contra Lobisomems"
               
    }               else if (nivel >= 51 && nivel <= 80) {
                    rank =  "Ouro! Você já pode ser um Cavaleiro dos Zoadicos"
               
    }                   else if (nivel >= 81 && nivel <= 90) {
                        rank =  "Diamante! Você é tão duro quanto um"
               
    }                       else if (nivel >= 91 && nivel <= 100) {
                            rank = "Lendário! Sua lenda já está na boca dos bardos"
               
    }                           else if (nivel >= 101) {
                                rank = "IMORTAL! Um Deus caminhando entre meros mortais"

    }

    return `O Herói tem um saldo de ${nivel} lutas vencidas está no rank de ${rank}!`;
}

let classificacao = cartel (vitorias, derrotas);
console.log (classificacao)