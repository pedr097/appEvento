export class Usuario {
    idUsuario: number;
    nome: string;
    idGrupoUsuario: string;
    descricaoGrupo: string;
    idEmpresa: string;
    nomeEmpresa: string;
    idSetor: string;
    descricaoSetor: string;
    
    constructor(user?) {
        user = user || {};
        this.idUsuario = user.idUsuario || 0;
        this.nome = user.nome || "";
        this.idGrupoUsuario = user.idGrupoUsuario || "";
        this.descricaoGrupo = user.descricaoGrupo || "";
        this.idEmpresa = user.idEmpresa || "";
        this.nomeEmpresa = user.nomeEmpresa || "";
        this.idSetor = user.idSetor || "";
        this.descricaoSetor = user.descricaoSetor || "";
    }
}