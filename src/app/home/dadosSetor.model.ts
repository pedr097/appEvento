export class DadosSetor {
    id_setor: number;
    qtd_atual: number;
    qtd_passaram: string;
    descricao: string;
    abreviacao: string;
    
    constructor(dados?) {
        dados = dados || {};
        this.id_setor = dados.id_setor || 0;
        this.qtd_atual = dados.qtd_atual || 0;
        this.qtd_passaram = dados.qtd_passaram || 0;
        this.descricao = dados.descricao || "";
        this.abreviacao = dados.abreviacao || "";
    }
}