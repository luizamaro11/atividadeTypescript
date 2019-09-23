///<reference path="pessoa.ts"/>
///<reference path="paciente.ts"/>
///<reference path="medico.ts"/>
///<reference path="enfermeiro.ts"/>
///<reference path="hospital.ts"/>
///<reference path="prontoSocorro.ts"/>
namespace upa{
    //Instanciando Classe;

    //Hospitais
    let hospital = new Hospital();
    hospital.setNome("Hospital vera cruz");

    let hospital1 = new Hospital();
    hospital1.setNome("Hospital regina maria");

    let hospital2 = new Hospital();
    hospital2.setNome("Hospital agenor");

    // criando o codigo de funcionario
    /**let funcionario = new Funcionario();
    *funcionario.setCodFuncionario(1);

    *let funcionario1 = new Funcionario();
    *funcionario1.setCodFuncionario(2);

    let funcionario2 = new Funcionario();
    funcionario2.setCodFuncionario(3);*/

    //Pacientes
    let paciente = new Paciente();
    paciente.setCodPaciente(1);
    paciente.setNome('luiz');
    paciente.setCpf('111.111.111-11');
    paciente.setHospital(hospital);
    paciente.setSetor("computação");

    let paciente1 = new Paciente();
    paciente1.setCodPaciente(2);
    paciente1.setNome('vini');
    paciente1.setCpf('222.222.222-22');
    paciente1.setHospital(hospital1);
    paciente1.setSetor("manutenção");

    let paciente2 = new Paciente();
    paciente2.setCodPaciente(3);
    paciente2.setNome('yvo');
    paciente2.setCpf('333.333.333-33');
    paciente2.setHospital(hospital2);
    paciente2.setSetor("financias");

    //Enfermeiros
    let enfermeiro = new Enfermeiro();
    enfermeiro.setCoren(273485);
    enfermeiro.setNome('matheus');
    enfermeiro.setCpf('444.444.444-44');
    enfermeiro.setHospital(hospital);
    enfermeiro.setCodFuncionario(1);
    enfermeiro.setSetor("ortopedista");

    let enfermeiro1 = new Enfermeiro();
    enfermeiro1.setCoren(273485);
    enfermeiro1.setNome('fylipe');
    enfermeiro1.setCpf('555.555.555-55');
    enfermeiro1.setHospital(hospital1);
    enfermeiro1.setCodFuncionario(2);
    enfermeiro1.setSetor("cardiologista");
    
    let enfermeiro2 = new Enfermeiro();
    enfermeiro2.setCoren(273485);
    enfermeiro2.setNome('joão');
    enfermeiro2.setCpf('666.666.666-66');
    enfermeiro2.setHospital(hospital2);
    enfermeiro2.setCodFuncionario(3);
    enfermeiro2.setSetor("oftalmologista");

    //Médicos
    let medico = new Medico();
    medico.setEspecialidade(2);
    medico.setCrm(1348623);
    medico.setNome('erick');
    medico.setCpf('777.777.777-77');
    medico.setHospital(hospital);
    medico.setCodFuncionario(1);

    let medico1 = new Medico();
    medico1.setEspecialidade(4);
    medico1.setCrm(9846545);
    medico1.setNome('daniel');
    medico1.setCpf('888.888.888-88');
    medico1.setHospital(hospital1);
    medico1.setCodFuncionario(2);

    let medico2 = new Medico();
    medico2.setEspecialidade(2);
    medico2.setCrm(2311254);
    medico2.setNome('eduardo');
    medico2.setCpf('999.999.999-99');
    medico2.setHospital(hospital2);
    medico2.setCodFuncionario(3);


    //instancias de pronto socorro
    let prontoSocorro = new ProntoSocorro();
    prontoSocorro.setCodProntoSocorro(1);
    prontoSocorro.setEndereco("av. são paulo, 1850, vera cruz");

    let prontoSocorro1 = new ProntoSocorro();
    prontoSocorro1.setCodProntoSocorro(2);
    prontoSocorro1.setEndereco("av. marina, 6000, agenor de campos");

    let prontoSocorro2 = new ProntoSocorro();
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

    let tabPaciente = document.getElementById('paciente');

    let conteudo = "<tr> <td>Hospital</td> <td>Código</td> <td>Nome</td> <td>CPF</td> </tr>";

    hospital.getPaciente().forEach(element => {
        conteudo += "<tr> <td>" + element.getHospital().getNome() + "</td> <td>" + element.getCodPaciente() + "</td> <td>" + element.getNome() + "</td> <td>" + element.getCpf() + "</td> </tr>";
    })

    tabPaciente.innerHTML = conteudo;

    let tabEnfermeiro = document.getElementById('enfermeiro');

    let conteudo2 = "<tr> <td>Hospital</td> <td>Código</td> <td>Nome</td> <td>CPF</td> <td>Coren</td> </tr>";

    hospital.getEnfermeiro().forEach(element => {
        conteudo2 += "<tr> <td>" + element.getHospital().getNome() + "</td> <td>" + element.getCodFuncionario() + "</td> <td>" + element.getNome() + "</td> <td>" + element.getCpf() + "</td> <td>" + element.getCoren() + "</td> </tr>";
    })

    tabEnfermeiro.innerHTML = conteudo2;

    let tabMedico = document.getElementById('medico');

    let conteudo3 = "<tr> <td>Hospital</td> <td>Código</td> <td>Nome</td> <td>CPF</td> <td>CRM</td> <td>Especialidade</td> </tr>";

    hospital.getMedicos().forEach(element => {
        conteudo3 += "<tr> <td>" + element.getHospital().getNome() + "</td> <td>" + element.getCodFuncionario() + "</td> <td>" + element.getNome() + "</td> <td>" + element.getCpf() + "</td> <td>" + element.getCrm() + "</td> <td>" + element.getEspecialidade() + "</td> </tr>";
    })

    tabMedico.innerHTML = conteudo3;

    let tabProntoSocorro = document.getElementById('prontoSocorro');

    let conteudo4 = "<tr> <td>codigo </td> <td> endereço </td> </tr>";

    hospital.getProntoSocorro().forEach(element =>{
        conteudo4 += "<tr> <td>" + element.getCodProntoSocorro() + "</td><td>" + element.getEndereco() + "</td></tr>";
    });

    tabProntoSocorro.innerHTML = conteudo4;
}