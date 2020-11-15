class Geo{
    constructor(a, r, n){
        this.sukuAwal = a
        this.rasio = r
        this.jumlahSuku = n
    }
    hasil = () => {
        let hasil = 0
        for(let i = 1; i < this.jumlahSuku; i++){
            hasil += this.sukuAwal *= this.rasio
            // i++
        }
        return hasil;
    }
}
let jwb = new Geo(4, 3, 10)
console.log("Jumlah 10 suku pertama adalah : " + jwb.hasil());

// for (let geo = 3; index <= 10; index++){
//     console.log("Perulangan ke-" + index)
// }