export class Setor {
    idSetor: number;
    descricao: string;
    abreviacao: string;
    qtdAntena: string;

    constructor(setor?) {
        setor = setor || {};
        this.idSetor = setor.idSetor || 0;
        this.descricao = setor.descricao ||"";
        this.abreviacao = setor.abreviacao || "";
        this.qtdAntena = setor.qtdAntena || 0;
    }

}