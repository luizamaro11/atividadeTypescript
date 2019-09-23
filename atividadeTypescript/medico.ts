///<reference path="funcionario.ts"/>
namespace upa{

    export class Medico extends Funcionario{
        private _crm:number;
        private _especialidade:number;
        private _hospital:Hospital;
        
        public setCrm(crm:number){
            this._crm = crm;
        }

        public getCrm(){
            return this._crm;
        }

        public setEspecialidade(especialidade:number){
            this._especialidade = especialidade;
        }

        public getEspecialidade(){
            return this._especialidade;
        }

        public getHospital(){
            return this._hospital;
        }

        public setHospital(hosp:Hospital){
            this._hospital = hosp;
        }

    }
}