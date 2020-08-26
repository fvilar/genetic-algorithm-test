class Population{
    constructor(size,wordLenght){
        this.size = size;
        this.wordLenght = wordLenght;      
        this.mutationRate = 2;
        this.show = $('#show');        
    }    
    generatePopulation(parent1="", parent2=""){        
        this.words = [];        
        for(let i = 0; i< this.size; i++){
            this.words.push(new Word(this.wordLenght))            
        }
        if(parent1===""|| parent2===""){
            this.randomizeAdn();
        }else{
            this.words.map(word=>{
                word.adn = new Adn(this.wordLenght);
                word.adn.chromosome = this.mutation(this.reproduction(parent1,parent2));                       
            })
        }        
        this.show.val("");  
        for(let i = 12; i>=0 ; i--){
            this.show.val(this.show.val()+this.words[i].val()+"\n");          
        }
    }
    randomizeAdn(){
        for(let word of this.words){
            word.randomAdn();            
        }
    }
    evaluateFitness(realWord){
        let tempFitness;
        for(let word of this.words){
            tempFitness = 0;
                for(let i= 0; i < word.lenght; i++){                    
                    if(realWord[i] === word.adn.chromosome[i]){
                        tempFitness++;                          
                    }
                }
            word.fitness = tempFitness;
        }
        this.sort();
    }
    sort(){                
        let tempWord;
        for(let i = 0; i< this.words.length-1; i++){            
            for(let j = i+1; j< this.words.length; j++){
                if(this.words[j].fitness>this.words[i].fitness){
                    tempWord = this.words[i];
                    this.words[i] = this.words[j];
                    this.words[j] = tempWord;
                }
            }   
        }        
    }
    reproduction(parent1, parent2){
        let to = Math.floor(Math.random() * this.wordLenght);
        return parent1.slice(0,to)+parent2.slice(to,this.wordLenght);
    }
    mutation(child){
        let temp = "";
        for(let l of child){
            if(Math.random()<this.mutationRate/100){
                temp+=String.fromCharCode(Math.floor(Math.random() * 256));
            }else{
                temp+=l;
            }    
        }        
        return temp;
    }     
}