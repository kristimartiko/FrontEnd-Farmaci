export class Purchases {
    public historik_id: number;
    public emri: string;
    public cmimi: string;
    public p_id: number;
    public sasi: number;
    public data: Date;
    public user_id: number;

    constructor(emri: string, cmimi: string, p_id: number, sasi: number, data: Date, user_id: number) {
        this.emri = emri;
        this.cmimi = cmimi;
        this.p_id = p_id;
        this.sasi = sasi;
        this.data = data;
        this.user_id = user_id;
    }
}