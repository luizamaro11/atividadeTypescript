namespace upa{

    export class Pessoa{
        private _nome:string;
        private _cpf:string;

        public setNome(no:string){
            this._nome = no;
        }

        public getNome(){
            return this._nome;
        }

        public setCpf(cpf:string){
            this._cpf = cpf;
        }

        public getCpf(){
            return this._cpf;
        }
    }    
}