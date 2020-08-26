class Word{
    constructor(lenght) {        
        this.lenght = lenght;
        this.fitness = 0;
    }
    randomAdn(){
        this.adn = new Adn(this.lenght);
        this.adn.generateADN();
    }
    val(){
        return this.adn.chromosome;
    }
}