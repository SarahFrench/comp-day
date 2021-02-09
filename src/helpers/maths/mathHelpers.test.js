import {BAR_WEIGHT} from '../../enums/constants'
import {platesNeeded, sumAllPlatesPlusBar, totalPlatesNeeded} from  './index'



describe('platesNeeded', ()=>{
    it('calculates how to load 60kg', ()=>{
        const targetWeight = 60
        const plates = platesNeeded(targetWeight)
        expect(plates["20"]).toBe(2)
        expect(totalPlatesNeeded(plates)).toBe(2)
    })

    it('calculates how to load 20kg', ()=>{
        const targetWeight = 20
        const plates = platesNeeded(targetWeight)
        expect(totalPlatesNeeded(plates)).toBe(0)
    })

    it('calculates how to load 22.5kg', ()=>{
        const targetWeight = 22.5
        const plates = platesNeeded(targetWeight)
        expect(plates["1.25"]).toBe(2)
        expect(totalPlatesNeeded(plates)).toBe(2)
    })

    it('calculates how to load 555kg', ()=>{
        const targetWeight = 555
        const plates = platesNeeded(targetWeight)
        const resultingSumWeight = sumAllPlatesPlusBar(plates)
        expect(resultingSumWeight).toEqual(targetWeight)
    })

    it('doesn\'t tell you to add any plates if the desired weight is lighter than the bar ', ()=>{
        const targetWeight = 10
        const plates = platesNeeded(targetWeight)
        const resultingSumWeight = sumAllPlatesPlusBar(plates)
        expect(resultingSumWeight).toEqual(BAR_WEIGHT)
    })
})

describe('sumAllPlatesPlusBar', ()=>{
    it('calculates how much certain number of plates plus the bar is', ()=>{
        const plates = {
            "20" : 4,
            "15" : 2,
            "10" : 0,
            "5" : 2,
            "2.5" : 0,
            "1.25": 2,
            "0.5": 0
        }
        const expectedSum = (20 * 4) + (15 * 2) + (5 * 2) + (1.25 * 2) + BAR_WEIGHT;
        expect(sumAllPlatesPlusBar(plates)).toEqual(expectedSum)
    })
})

describe('totalPlatesNeeded', ()=>{
    it('counts the total number of plates to be added to a bar', ()=>{
        const plates = {
            "20" : 1,
            "15" : 2,
            "10" : 3,
            "5" : 3,
            "2.5" : 2,
            "1.25": 1,
            "0.5": 0
        }
        const expectedTotal = 1 + 2 + 3 + 3 + 2 + 1 + 0;
        expect(totalPlatesNeeded(plates)).toEqual(expectedTotal)
    })
})