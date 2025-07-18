import axios from 'axios'

// ctrl c para cancelar a execucao do servidor

// uso o const quando o valor nao vai mudar e let quando muda (NUNCA usar var)

// o async faz a funçaõ poder esperar um valor pelo await
// o resto só vai executar quando a linha 6 terminar de rodar
// o axios.get retorna uma promisse, ou seja, promete q vai funcionar mas n espera funcionar pra passar pra prox linha
export async function chamarApi (){ // export significa que essa função pode ser chamada em outro arquivo
    try{ // de der erro não vai dar erro, vai pro catch pro erro ser tratado
        const resposta = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=30&offset=0"); // limit é q tem 30 por pag e offset é a pag
        const pokemon = resposta.data.results; // resposta.data pega o json, dentro do json tem uma array com os pokemon, o .results pega essa array
        console.log(resposta.status); // printa o código de status http (tipo 200)
        console.log(pokemon);
        return pokemon; // retorno os 30 pokemon
    }
    catch(erro){
        console.error("Deu erro heinn");  // console.error coloca as letra vermelha
        console.error(erro.response.status); // o erro.response.status vai printar o código de status http q deu (tipo 500)
        console.error(erro.message); // printa o erro do terminal
    }
}