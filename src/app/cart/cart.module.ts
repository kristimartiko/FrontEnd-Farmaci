export class Cart {
    public emri: string;
    public cmimi: string;
    public p_id: number;
    public sasi: number;
    public user_id: number;
    public product_id: number;

    constructor(emri: string, cmimi: string, p_id: number, sasi: number, user_id: number, product_id: number) {
        this.emri = emri;
        this.cmimi = cmimi;
        this.p_id = p_id;
        this.sasi = sasi;
        this.user_id = user_id;
        this.product_id = product_id;
    }
}