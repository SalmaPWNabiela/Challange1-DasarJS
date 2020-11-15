class persegiPanjang{
    constructor(p, l){
        this.panjang = p
        this.lebar = l
    }
    hargaAwal = () => {
        return 1500000 * this.panjang * this.lebar
    }
    ppn = () => {
        return 0.15 * 1500000 * this.panjang * this.lebar
    }
    // hargaAkhir = () => {
    //     return hargaAwal - ppn
    // }
}
let tanah = new persegiPanjang(20.5,30)
console.log("Harga Tanah = Rp. " + tanah.hargaAwal());
console.log("PPN = Rp. " + tanah.ppn());
console.log("Harga yang harus dibayar = Rp. " + (tanah.hargaAwal() + tanah.ppn()));