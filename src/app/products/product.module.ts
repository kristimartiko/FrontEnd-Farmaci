export class Product {
    public product_id: number;
    public emri: string;
    public cmimi: string;
    public imazhi: string;
    public pershkrimi: string;

    constructor(emri: string, cmimi: string, imazhi: string, pershkrimi: string) {
        this.emri = emri;
        this.cmimi = cmimi;
        this.imazhi = imazhi;
        this.pershkrimi = pershkrimi;
    }
}