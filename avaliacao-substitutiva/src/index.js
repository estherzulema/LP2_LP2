//deve testar, ver exemplos
//olhar video
import * as db from "./config/db";
import PessoaController from './controllers/PessoaController';
import Popular from "./popular";

const popular = new Popular();
const pessoaCtrl = new PessoaController();

let recuperarTodos = async () =>{
    db.conectarBD();
        const pessoas = await  pessoaCtrl.recuperarTodos();
        pessoas.forEach(pessoa => console.log(pessoa));
    db.desconectarBD();
}
recuperarTodos();

let salvarPessoa = async () =>{
    db.conectarBD();
    const salvarPopular = await pessoaCtrl.salvar(popular.pessoas);
    console.log(salvarPopular);
    db.desconectarBD();
}
salvarPessoa();

let recuperarNomeouParte = async () =>{
    db.conectarBD();
    const pessoa = await pessoaCtrl.recuperarNome('nome');
    pessoa.forEach(pessoa => console.log(pessoa));
    db.desconectarBD();
}
recuperarNomeouParte();

let recuperarEnderecoCompletoOuParte = async () =>{
    db.conectarBD();
    const pessoa = await pessoaCtrl.recuperarEndereco('endereco');
    pessoa.forEach(endereco => console.log(endereco));
    db.desconectarBD();
}
recuperarEnderecoCompletoOuParte();


