export class Cart {
    public emri: string;
    public cmimi: string;
    public p_id: number;
    public sasi: number;
    public user_id: number;
    public shporte_id: number;

    constructor(emri: string, cmimi: string, p_id: number, sasi: number, user_id: number, shporte_id: number) {
        this.emri = emri;
        this.cmimi = cmimi;
        this.p_id = p_id;
        this.sasi = sasi;
        this.user_id = user_id;
        this.shporte_id = shporte_id;
    }
}