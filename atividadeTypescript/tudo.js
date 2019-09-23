var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var upa;
(function (upa) {
    var Pessoa = /** @class */ (function () {
        function Pessoa() {
        }
        Pessoa.prototype.setNome = function (no) {
            this._nome = no;
        };
        Pessoa.prototype.getNome = function () {
            return this._nome;
        };
        Pessoa.prototype.setCpf = function (cpf) {
            this._cpf = cpf;
        };
        Pessoa.prototype.getCpf = function () {
            return this._cpf;
        };
        return Pessoa;
    }());
    upa.Pessoa = Pessoa;
})(upa || (upa = {}));
///<reference path="pessoa.ts"/>
var upa;
(function (upa) {
    var Paciente = /** @class */ (function (_super) {
        __extends(Paciente, _super);
        function Paciente() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Paciente.prototype.setCodPaciente = function (codPaciente) {
            this._codPaciente = codPaciente;
        };
        Paciente.prototype.getCodPaciente = function () {
            return this._codPaciente;
        };
        Paciente.prototype.getHospital = function () {
            return this._hospital;
        };
        Paciente.prototype.setHospital = function (hosp) {
            this._hospital = hosp;
        };
        Paciente.prototype.setSetor = function (setor) {
            this._setor = setor;
        };
        Paciente.prototype.mostrarSetor = function () {
            return this._setor;
        };
        return Paciente;
    }(upa.Pessoa));
    upa.Paciente = Paciente;
})(upa || (upa = {}));
///<reference path="pessoa.ts"/>
var upa;
(function (upa) {
    var Funcionario = /** @class */ (function (_super) {
        __extends(Funcionario, _super);
        function Funcionario() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Funcionario.prototype.setCodFuncionario = function (codFuncionario) {
            this._codFuncionario = codFuncionario;
        };
        Funcionario.prototype.getCodFuncionario = function () {
            return this._codFuncionario;
        };
        return Funcionario;
    }(upa.Pessoa));
    upa.Funcionario = Funcionario;
})(upa || (upa = {}));
///<reference path="funcionario.ts"/>
var upa;
(function (upa) {
    var Medico = /** @class */ (function (_super) {
        __extends(Medico, _super);
        function Medico() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Medico.prototype.setCrm = function (crm) {
            this._crm = crm;
        };
        Medico.prototype.getCrm = function () {
            return this._crm;
        };
        Medico.prototype.setEspecialidade = function (especialidade) {
            this._especialidade = especialidade;
        };
        Medico.prototype.getEspecialidade = function () {
            return this._especialidade;
        };
        Medico.prototype.getHospital = function () {
            return this._hospital;
        };
        Medico.prototype.setHospital = function (hosp) {
            this._hospital = hosp;
        };
        return Medico;
    }(upa.Funcionario));
    upa.Medico = Medico;
})(upa || (upa = {}));
///<reference path="funcionario.ts"/>
var upa;
(function (upa) {
    var Enfermeiro = /** @class */ (function (_super) {
        __extends(Enfermeiro, _super);
        function Enfermeiro() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Enfermeiro.prototype.setCoren = function (coren) {
            this._coren = coren;
        };
        Enfermeiro.prototype.getCoren = function () {
            return this._coren;
        };
        Enfermeiro.prototype.getHospital = function () {
            return this._hospital;
        };
        Enfermeiro.prototype.setHospital = function (hosp) {
            this._hospital = hosp;
        };
        Enfermeiro.prototype.setSetor = function (setor) {
            this._setor = setor;
        };
        Enfermeiro.prototype.mostrarSetor = function () {
            return this._setor;
        };
        return Enfermeiro;
    }(upa.Funcionario));
    upa.Enfermeiro = Enfermeiro;
})(upa || (upa = {}));
var upa;
(function (upa) {
    var Hospital = /** @class */ (function () {
        function Hospital() {
            this._enfermeiros = [];
            this._medicos = [];
            this._paciente = [];
            this._prontoSocorro = [];
        }
        Hospital.prototype.setNome = function (nome) {
            this._nome = nome;
        };
        Hospital.prototype.getNome = function () {
            return this._nome;
        };
        Hospital.prototype.addEnfermeiro = function (enfermeiro) {
            this._enfermeiros.push(enfermeiro);
        };
        Hospital.prototype.getEnfermeiro = function () {
            return this._enfermeiros;
        };
        Hospital.prototype.addMedicos = function (medico) {
            this._medicos.push(medico);
        };
        Hospital.prototype.getMedicos = function () {
            return this._medicos;
        };
        Hospital.prototype.addPaciente = function (paciente) {
            this._paciente.push(paciente);
        };
        Hospital.prototype.getPaciente = function () {
            return this._paciente;
        };
        Hospital.prototype.addProntoSocorro = function (prontSoco) {
            this._prontoSocorro.push(prontSoco);
        };
        Hospital.prototype.getProntoSocorro = function () {
            return this._prontoSocorro;
        };
        return Hospital;
    }());
    upa.Hospital = Hospital;
})(upa || (upa = {}));
var upa;
(function (upa) {
    var ProntoSocorro = /** @class */ (function () {
        function ProntoSocorro() {
        }
        ProntoSocorro.prototype.setCodProntoSocorro = function (prontoSocorro) {
            this._codProntoSocorro = prontoSocorro;
        };
        ProntoSocorro.prototype.getCodProntoSocorro = function () {
            return this._codProntoSocorro;
        };
        ProntoSocorro.prototype.setEndereco = function (endereco) {
            this._endereco = endereco;
        };
        ProntoSocorro.prototype.getEndereco = function () {
            return this._endereco;
        };
        return ProntoSocorro;
    }());
    upa.ProntoSocorro = ProntoSocorro;
})(upa || (upa = {}));
///<reference path="pessoa.ts"/>
///<reference path="paciente.ts"/>
///<reference path="medico.ts"/>
///<reference path="enfermeiro.ts"/>
///<reference path="hospital.ts"/>
///<reference path="prontoSocorro.ts"/>
var upa;
(function (upa) {
    //Instanciando Classe;
    //Hospitais
    var hospital = new upa.Hospital();
    hospital.setNome("Hospital vera cruz");
    var hospital1 = new upa.Hospital();
    hospital1.setNome("Hospital regina maria");
    var hospital2 = new upa.Hospital();
    hospital2.setNome("Hospital agenor");
    // criando o codigo de funcionario
    /**let funcionario = new Funcionario();
    *funcionario.setCodFuncionario(1);

    *let funcionario1 = new Funcionario();
    *funcionario1.setCodFuncionario(2);

    let funcionario2 = new Funcionario();
    funcionario2.setCodFuncionario(3);*/
    //Pacientes
    var paciente = new upa.Paciente();
    paciente.setCodPaciente(1);
    paciente.setNome('luiz');
    paciente.setCpf('111.111.111-11');
    paciente.setHospital(hospital);
    paciente.setSetor("computação");
    var paciente1 = new upa.Paciente();
    paciente1.setCodPaciente(2);
    paciente1.setNome('vini');
    paciente1.setCpf('222.222.222-22');
    paciente1.setHospital(hospital1);
    paciente1.setSetor("manutenção");
    var paciente2 = new upa.Paciente();
    paciente2.setCodPaciente(3);
    paciente2.setNome('yvo');
    paciente2.setCpf('333.333.333-33');
    paciente2.setHospital(hospital2);
    paciente2.setSetor("financias");
    //Enfermeiros
    var enfermeiro = new upa.Enfermeiro();
    enfermeiro.setCoren(273485);
    enfermeiro.setNome('matheus');
    enfermeiro.setCpf('444.444.444-44');
    enfermeiro.setHospital(hospital);
    enfermeiro.setCodFuncionario(1);
    enfermeiro.setSetor("ortopedista");
    var enfermeiro1 = new upa.Enfermeiro();
    enfermeiro1.setCoren(273485);
    enfermeiro1.setNome('fylipe');
    enfermeiro1.setCpf('555.555.555-55');
    enfermeiro1.setHospital(hospital1);
    enfermeiro1.setCodFuncionario(2);
    enfermeiro1.setSetor("cardiologista");
    var enfermeiro2 = new upa.Enfermeiro();
    enfermeiro2.setCoren(273485);
    enfermeiro2.setNome('joão');
    enfermeiro2.setCpf('666.666.666-66');
    enfermeiro2.setHospital(hospital2);
    enfermeiro2.setCodFuncionario(3);
    enfermeiro2.setSetor("oftalmologista");
    //Médicos
    var medico = new upa.Medico();
    medico.setEspecialidade(2);
    medico.setCrm(1348623);
    medico.setNome('erick');
    medico.setCpf('777.777.777-77');
    medico.setHospital(hospital);
    medico.setCodFuncionario(1);
    var medico1 = new upa.Medico();
    medico1.setEspecialidade(4);
    medico1.setCrm(9846545);
    medico1.setNome('daniel');
    medico1.setCpf('888.888.888-88');
    medico1.setHospital(hospital1);
    medico1.setCodFuncionario(2);
    var medico2 = new upa.Medico();
    medico2.setEspecialidade(2);
    medico2.setCrm(2311254);
    medico2.setNome('eduardo');
    medico2.setCpf('999.999.999-99');
    medico2.setHospital(hospital2);
    medico2.setCodFuncionario(3);
    //instancias de pronto socorro
    var prontoSocorro = new upa.ProntoSocorro();
    prontoSocorro.setCodProntoSocorro(1);
    prontoSocorro.setEndereco("av. são paulo, 1850, vera cruz");
    var prontoSocorro1 = new upa.ProntoSocorro();
    prontoSocorro1.setCodProntoSocorro(2);
    prontoSocorro1.setEndereco("av. marina, 6000, agenor de campos");
    var prontoSocorro2 = new upa.ProntoSocorro();
    prontoSocorro2.setCodProntoSocorro(3);
    prontoSocorro2.setEndereco("av. marina, 9000, itaoca");
    //Adicionar membros ao hospital
    hospital.addPaciente(paciente);
    hospital.addPaciente(paciente1);
    hospital.addPaciente(paciente2);
    hospital.addEnfermeiro(enfermeiro);
    hospital.addEnfermeiro(enfermeiro1);
    hospital.addEnfermeiro(enfermeiro2);
    hospital.addMedicos(medico);
    hospital.addMedicos(medico1);
    hospital.addMedicos(medico2);
    hospital.addProntoSocorro(prontoSocorro);
    hospital.addProntoSocorro(prontoSocorro1);
    hospital.addProntoSocorro(prontoSocorro2);
    var tabPaciente = document.getElementById('paciente');
    var conteudo = "<tr> <td>Hospital</td> <td>Código</td> <td>Nome</td> <td>CPF</td> </tr>";
    hospital.getPaciente().forEach(function (element) {
        conteudo += "<tr> <td>" + element.getHospital().getNome() + "</td> <td>" + element.getCodPaciente() + "</td> <td>" + element.getNome() + "</td> <td>" + element.getCpf() + "</td> </tr>";
    });
    tabPaciente.innerHTML = conteudo;
    var tabEnfermeiro = document.getElementById('enfermeiro');
    var conteudo2 = "<tr> <td>Hospital</td> <td>Código</td> <td>Nome</td> <td>CPF</td> <td>Coren</td> </tr>";
    hospital.getEnfermeiro().forEach(function (element) {
        conteudo2 += "<tr> <td>" + element.getHospital().getNome() + "</td> <td>" + element.getCodFuncionario() + "</td> <td>" + element.getNome() + "</td> <td>" + element.getCpf() + "</td> <td>" + element.getCoren() + "</td> </tr>";
    });
    tabEnfermeiro.innerHTML = conteudo2;
    var tabMedico = document.getElementById('medico');
    var conteudo3 = "<tr> <td>Hospital</td> <td>Código</td> <td>Nome</td> <td>CPF</td> <td>CRM</td> <td>Especialidade</td> </tr>";
    hospital.getMedicos().forEach(function (element) {
        conteudo3 += "<tr> <td>" + element.getHospital().getNome() + "</td> <td>" + element.getCodFuncionario() + "</td> <td>" + element.getNome() + "</td> <td>" + element.getCpf() + "</td> <td>" + element.getCrm() + "</td> <td>" + element.getEspecialidade() + "</td> </tr>";
    });
    tabMedico.innerHTML = conteudo3;
    var tabProntoSocorro = document.getElementById('prontoSocorro');
    var conteudo4 = "<tr> <td>codigo </td> <td> endereço </td> </tr>";
    hospital.getProntoSocorro().forEach(function (element) {
        conteudo4 += "<tr> <td>" + element.getCodProntoSocorro() + "</td><td>" + element.getEndereco() + "</td></tr>";
    });
    tabProntoSocorro.innerHTML = conteudo4;
})(upa || (upa = {}));
