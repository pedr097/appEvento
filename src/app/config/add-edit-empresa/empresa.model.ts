export class DtoEmpresa {
    idEmpresa: number;
    nomeEmpresa: string;
    razaoEmpresa: string;
    cidadeEmpresa: string;
    ramoEmpresa: string;
    idSetor: number;
    descricaoSetor: string;
    abreviacaoSetor: string;
    nomeUsuario: string;

    constructor(empresa?) {
        empresa = empresa || {};
        this.idEmpresa = empresa.idEmpresa || 0;
        this.nomeEmpresa = empresa.nomeEmpresa ||"";
        this.razaoEmpresa = empresa.razaoEmpresa || "";
        this.cidadeEmpresa = empresa.cidadeEmpresa || "";
        this.ramoEmpresa = empresa.ramoEmpresa || "";
        this.idSetor = empresa.idSetor || 0;
        this.descricaoSetor = empresa.descricaoSetor || "";
        this.abreviacaoSetor = empresa.abreviacaoSetor || "";
        this.nomeUsuario = empresa.nomeUsuario || "";
    }

}