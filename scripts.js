
$(document).ready(()=>{
    
    var interval;
    const result = $('#result');    
    $('#start').click(()=>{
        clearInterval(interval);
        const realWord = $('#realWord').val();        
        const p = new Population($('#popsize').val(),realWord.length);
        p.mutationRate = $('#mutationRate').val();
        p.generatePopulation();
        interval = setInterval(()=>{
            p.evaluateFitness(realWord);
            p.generatePopulation(p.words[0].val(),p.words[1].val());
            result.text(p.words[0].val());
            if(p.words[0].val()===realWord){
                clearInterval(interval);
            }
        },$('#delay').val())
    })


    $('#popsize').on('input',(e)=>{
        $('#popnum').text(`population size: ${e.target.value}`);
    });
    $('#mutationRate').on('input',(e)=>{
        $('#ratenum').text(`mutation rate: ${e.target.value}%`);
    });
    $('#delay').on('input',(e)=>{
        $('#delaynum').text(`simulation delay: ${e.target.value}ms`);
    });
});