//no pessoaController recuperar todos, nome ou parte,endereço completo ou parte
//ignorando as letras maiusculas e minusculas
//exemplo-mongodb ver depois
import Pessoa from '../models/Pessoa';


export default class PessoaController {


    async salvar(pessoa) {
        const pessoaSalva = await Pessoa.create(pessoa);
        return pessoaSalva;
    }

    async recuperarTodos() {
        const pessoas = await Pessoa.find();
        return pessoas;
    }

    async recuperarNome(NomeConsulta){
        const pessoa = await Pessoa.find({
            nome:{
                '$regex': NomeConsulta,
                '$options': 'i'
            }
        });
        return pessoa;
    } 

    async recuperarEndereco(ConsultaDoEndereco){
        const pessoa = await Pessoa.find({
            endereco:{
                '$regex': ConsultaDoEndereco,
                '$options': 'i'
            }
        });
        return pessoa;
        
    }   
}
