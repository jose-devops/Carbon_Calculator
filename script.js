document.getElementById('carbonForm').addEventListener('submit', function(event){

    event.preventDefault();
    calculateCarbonFootprint();


});


document.getElementById('startVoice').addEventListener('click', function(){

    startVoiceCommand();
});


function startVoiceCommand(){
    if(annyang){
        annyang.setLanguage('pt-BR');
        var commands = {
            'calcular (pegada) (de) (carbono)': calculateCarbonFootprint(), 
            '*texto': teste

        }

        annyang.addCommands(commands);
        annyang.start();

    }else{
        alert("O reconhecimento de voz não é suportado neste navegador");
    }
}


function teste(texto){
    console.log(texto);
    annyang.pause();
}

function calculateCarbonFootprint(){
    annyang.pause();
    console.log('calculando!');

    var fuelAmount = parseFloat(document.getElementById('fuel').value);
    var distance = parseFloat(document.getElementById('distance').value);


    var fuelEmissionFactor = 2.68;
    var distanceEmission = 0.12;


    var carbonFootprint = (fuelAmount * fuelEmissionFactor) + (distance * distanceEmission);

    document.getElementById('result').innerHTML = "<p>A pegada de carbono é:</p> " + carbonFootprint.toFixed(2) + "kg CO2";

}