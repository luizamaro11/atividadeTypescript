///<reference path="funcionario.ts"/>
namespace upa{
    
    export class Enfermeiro extends Funcionario implements ISetor{
        private _coren:number;
        private _hospital:Hospital;
        private _setor:string;

        public setCoren(coren:number){
            this._coren = coren;
        }

        public getCoren(){
            return this._coren;
        }

        public getHospital(){
            return this._hospital;
        }

        public setHospital(hosp:Hospital){
            this._hospital = hosp;
        }

        public setSetor(setor:string){
            this._setor = setor;
        }

        public mostrarSetor(){
            return this._setor;
        }
    }
}