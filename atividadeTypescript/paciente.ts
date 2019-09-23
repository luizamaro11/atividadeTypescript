///<reference path="pessoa.ts"/>
namespace upa{
    
    export class Paciente extends Pessoa implements ISetor{
        private _codPaciente:number;
        private _hospital:Hospital;
        private _setor:string;

        public setCodPaciente(codPaciente:number){
            this._codPaciente = codPaciente;
        }

        public getCodPaciente(){
            return this._codPaciente;
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