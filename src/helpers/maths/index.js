import {BAR_WEIGHT, PLATE_OPTIONS, DEFAULT_PLATE_LOADING_INSTRUCTIONS} from '../../constants/plateWeights'

const PLATES_LARGE_TO_SMALL = PLATE_OPTIONS.sort((last, next)=>{
    return next - last
})

export const sumAllPlatesPlusBar = (plates) => {
    let weight = Object.entries(plates).reduce((accumulator, [plateWeight, frequency]) => {
        accumulator += (parseFloat(plateWeight) * frequency)
        return accumulator
    }, 0)

    return weight + BAR_WEIGHT
}

export const totalPlatesNeeded = (plates) => Object.values(plates).reduce( (sum, frequency) => {
    sum = sum + frequency
    return sum
}, 0)

export const platesNeeded = (targetWeight) => {
    //need to spread as otherwise passing by references
    let loadingInstructions = {...DEFAULT_PLATE_LOADING_INSTRUCTIONS};

    if(targetWeight === BAR_WEIGHT){
        //no plates needed at all
        return loadingInstructions
    }

    //plates neeeded, so account for bar before maths
    const plateWeight = targetWeight - BAR_WEIGHT;

    //keep track of the weight of plates yet to be added
    let loadedWeight = 0;
    for(let i = 0; i < PLATES_LARGE_TO_SMALL.length; i++){
        //can you load 2 more of this size plate and not overshoot
        while(loadedWeight + ( 2* PLATES_LARGE_TO_SMALL[i] ) <= plateWeight){
            loadedWeight = loadedWeight + ( 2 * PLATES_LARGE_TO_SMALL[i]);
            loadingInstructions[`${PLATES_LARGE_TO_SMALL[i]}`] += 2;
        }
    }

    return loadingInstructions;
}