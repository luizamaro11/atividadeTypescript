namespace upa{
    export class Hospital{
        private _nome:string;
        private _enfermeiros:Array<Enfermeiro> = [];
        private _medicos:Array<Medico> = [];
        private _paciente:Array<Paciente> = [];
        private _prontoSocorro:Array<ProntoSocorro> = [];

        public setNome(nome:string){
            this._nome = nome;
        }

        public getNome(){
            return this._nome;
        }

        public addEnfermeiro(enfermeiro:Enfermeiro){
            this._enfermeiros.push(enfermeiro);
        }

        public getEnfermeiro(){
            return this._enfermeiros;
        }

        public addMedicos(medico:Medico){
            this._medicos.push(medico);
        }

        public getMedicos(){
            return this._medicos;
        }

        public addPaciente(paciente:Paciente){
            this._paciente.push(paciente);
        }

        public getPaciente(){
            return this._paciente;
        }

        public addProntoSocorro(prontSoco:ProntoSocorro){
            this._prontoSocorro.push(prontSoco);
        }

        public getProntoSocorro(){
            return this._prontoSocorro;
        }
    }
}