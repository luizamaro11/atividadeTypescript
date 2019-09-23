namespace upa{

    export class ProntoSocorro{
        private _codProntoSocorro: number;
        private _endereco: string;

        public setCodProntoSocorro(prontoSocorro:number){
            this._codProntoSocorro = prontoSocorro;
        }

        public getCodProntoSocorro(){
            return this._codProntoSocorro;
        }

        public setEndereco(endereco:string){
            this._endereco = endereco;
        }

        public getEndereco(){
            return this._endereco;
        }
    }
}