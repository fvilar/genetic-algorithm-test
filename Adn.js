class Adn{
    constructor(chromosomeAmount){
        this.chromosomeAmount = chromosomeAmount;
        this.chromosome = "";
    }
    generateADN(){        
        for(let i = 0; i< this.chromosomeAmount; i++){
            this.chromosome += this.randomLetter();
        }        
    }
    randomLetter(){
        return String.fromCharCode(Math.floor(Math.random() * 256));
    }
}