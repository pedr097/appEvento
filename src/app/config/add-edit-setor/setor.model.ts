export class Setor {
    id: number;
    descricao: string;
    abreviacao: string;
    qtdAntena: string;

    constructor(setor?) {
        setor = setor || {};
        this.id = setor.id || 0;
        this.descricao = setor.descricao ||"";
        this.abreviacao = setor.abreviacao || "";
        this.qtdAntena = setor.qtdAntena || 0;
    }

}