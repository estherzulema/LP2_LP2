//olhar e utilizar o faker
//utilizar o pacote faker para gerar dados ficticios de 200 pessoas
//!!!olhar video!!!!!
import faker from 'faker';


export default class Popular{
    
    constructor(){
        this.pessoas=[] ;
        const QuantidadeDePessoas = 200;
        
        for(let i = 0; i < QuantidadeDePessoas; i++){
            const pessoa = {
                nome: faker.name.findName(),
                areaDeAtuacao: faker.name.jobType(),
                telefone: faker.phone.phoneNumber(),
                endereco: faker.address.streetAddress()
            };
            this.pessoas.push(pessoa);
        }  
    }
}