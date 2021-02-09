import {PLATE_OPTIONS, DEFAULT_PLATE_LOADING_INSTRUCTIONS} from './plateWeights'

describe('DEFAULT_PLATE_LOADING_INSTRUCTIONS', ()=>{
    it('has the ability to recommed all valid plate sizes', ()=>{
        Object.keys(DEFAULT_PLATE_LOADING_INSTRUCTIONS).forEach( plate => {
            expect(PLATE_OPTIONS.includes(parseFloat(plate))).toBeTruthy()
        })
    })
})

describe('PLATE_OPTIONS', ()=>{
    it('contains all plate sizes legal in a competition', ()=>{
        //see page 6 of IPF 2021 rulebook
        const legalPlates = [0.25, 0.5, 1.25, 2.5, 5.0, 10.0, 15.0, 20.0 , 25.0]
        expect(PLATE_OPTIONS.length).toBe(legalPlates.length);
        legalPlates.forEach( weight => {
            expect(PLATE_OPTIONS.includes(weight)).toBeTruthy();
        })

    })
})