class BMI{
    constructor(bb, tb){
        this.beratBadan = bb
        this.tinggiBadan = tb/100
    }
    // bmi = () => {
    //     return 
    // }
    hasil = () => {
        let bmi = this.beratBadan / (this.tinggiBadan * this.tinggiBadan)
        if (bmi < 18.5){
            return ("Rata-rata BMI : " + bmi + "\nStatus Badan : Kekurangan berat badan")
        }
        else if(bmi >= 18.5 && bmi < 25){
            return ("Rata-rata BMI : " + bmi + "\nStatus Badan : Normal (Ideal)")
        }
        else if(bmi >= 25 && bmi < 30){
            return ("Rata-rata BMI : " + bmi + "\nStatus Badan : Kelebihan berat badan")
        }
        else if(bmi >= 30){
            return ("Rata-rata BMI : " + bmi + "\nStatus Badan : Kegemukan (Obesitas)")
        }
        else{
            return ("Not Found")
        }
    }
}
let hasil = new BMI(90, 170)
console.log(hasil.hasil());