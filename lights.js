function lightsSwitcher(n){
    let lights = new Array(100);
    let numberOfPeople;
    let lightsStillON = [];

    // if the lights don't exist, create them and switch them on
    for(let i = 1; i <= lights.length; i++){
        if(lights[i - 1] == undefined){
            lights[i - 1] = {name:`#${i}`, state:true};
        }
    }  

    // Get input for the number of people who are going to switch OFF the lights and validate the input
    if(typeof(n) !== "number"){
        console.log(`Incorrect value "${n}", it should be a number`);
    }else{
        numberOfPeople = n;
          
        // loop throught the people who are going to switch OFF the lights and make them do it
        for(let j = 2; j <= numberOfPeople + 1; j++){
            
            for(let i = 1; i <= lights.length; i++){

                if((i * j) <= lights.length){
                    lights[(j * i) - 1].state = false;
                }

                // below, we check which lights are still on and add them in a new array
                if((j == numberOfPeople + 1) && (lights[i - 1].state == true)){
                    lightsStillON.push(lights[i - 1]);
                }

            }
            
        }
        
        // As a bonus, point out which lights are still on
        console.log(lightsStillON.length, "lights still on", lightsStillON);

        return lightsStillON;
    }
}

lightsSwitcher(80)
