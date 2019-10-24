export class Usuario {
    id: number;
    nome: string;
    senha: string;
    email: string;
    id_grupo: number;
    
    constructor(user?) {
        user = user || {};
        this.id = user.id || 0;
        this.nome = user.nome || "";
        this.senha = user.senha || "";
        this.email = user.email || "";
        this.id_grupo = user.id_grupo || "";        
    }
}