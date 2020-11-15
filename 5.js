class Lingkaran{
    constructor(r){
        this.phi = 3.14
        this.jari_jari = r
    }
    luas = () =>{
        return this.phi * this.jari_jari * this.jari_jari
    }
    keliling = () =>{
        return this.phi * this.jari_jari * 2
    }
}

class Tabung extends Lingkaran{
    constructor(r,t){
        super(r)
        this.tinggi = t
    }
    volume = () =>{
        return this.phi * this.jari_jari * this.jari_jari * this.tinggi
    }
    luasPermukaan = () =>{
        return 2 * this.phi * this.jari_jari * (this.jari_jari + this.tinggi)
    }
    luasSelimut = () =>{
        return 2 * this.phi * this.jari_jari * this.tinggi
    }
}

class Kerucut extends Lingkaran{
    constructor(r,t){
        super(r)
        this.tinggi = t
    }
    volume = () =>{
        return 1/3 * this.phi * this.jari_jari * this.jari_jari * this.tinggi
    }
    luasPermukaan = () =>{
        let cari_s = this.jari_jari * this.jari_jari + this.tinggi * this.tinggi
        let s = Math.sqrt(cari_s)
        // console.log(s);
        return this.phi * this.jari_jari * (this.jari_jari + s )
    }
    luasSelimut = () =>{
        let cari_s = this.jari_jari * this.jari_jari + this.tinggi * this.tinggi
        let s = Math.sqrt(cari_s)
        // console.log(s);
        return this.phi * s * this.jari_jari
    }
}

class Bola extends Lingkaran{
    constructor(r){
        super(r)
    }
    volume = () =>{
        return 4/3 * this.phi * this.jari_jari * this.jari_jari * this.jari_jari
    }
    luasPermukaan = () =>{
        return 4 * this.phi * this.jari_jari * this.jari_jari
    }
}

let tabung = new Tabung(7.5,50) // 7.5 = jari-jari; 50 = tinggi
let kerucut = new Kerucut(10,40) // 10 = jari-jari; 40 = tinggi
let bola = new Bola(15) //15 = jari-jari

console.log("Volume Tabung adalah "+ tabung.volume());
console.log("Volume Kerucut adalah "+ kerucut.volume());
console.log("Volume Bola adalah "+ bola.volume());