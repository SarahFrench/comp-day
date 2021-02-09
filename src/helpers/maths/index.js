import {BAR_WEIGHT, PLATE_OPTIONS, DEFAULT_PLATE_LOADING_INSTRUCTIONS} from '../../enums/constants'

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

    //once you have plate math for one side you're sorted
    const halfPlateWeight = plateWeight /2;

    let unallocatedWeight = halfPlateWeight;
    for(let i = 0; i < PLATES_LARGE_TO_SMALL.length; i++){
        while(unallocatedWeight - PLATES_LARGE_TO_SMALL[i] >= 0){
            unallocatedWeight = unallocatedWeight - PLATES_LARGE_TO_SMALL[i];
            loadingInstructions[`${PLATES_LARGE_TO_SMALL[i]}`] += 2;
        }
    }

    return loadingInstructions;
}