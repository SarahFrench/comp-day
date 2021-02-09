import {shallow} from 'enzyme'
import NextCompetitor from './NextCompetitor'
import {findByTestAttribute} from '../helpers/testing/'
import {SQUAT} from '../constants/events';

const defaultProps = {
    competitor: {
            name: "",
            squat: [],
            bench: [],
            deadlift: [],
        },
        event : "",
        round : 0
}

const setup = (providedProps={}) =>{
    const props = {...defaultProps, ...providedProps}
    return shallow(<NextCompetitor {...props} />)
}

describe('ProgressBar', ()=>{
    let competitor;
    let event;
    let round;

    beforeEach(()=>{
        competitor = {
            name: "Sarah French",
            squat: [],
            bench: [],
            deadlift: [],
        }
        event = SQUAT
        round = 1
    })


    // { attempt: 1, weight: 100, success: null}, { attempt: 2, weight: 200, success: null}, { attempt: 3, weight: 300, success: null}

    it('displays the competitor\'s name', ()=>{
        const wrapper = setup({competitor, event, round});
        const name = findByTestAttribute(wrapper, 'next-competitor-name');
        expect(name.text()).toContain(competitor.name)
    })
    it('displays "no lift yet" if it\'s round 1 of the current event', ()=>{
        const round = 1;
        const event = SQUAT;
        const wrapper = setup({competitor, event, round});
        const name = findByTestAttribute(wrapper, 'next-competitor-best-lifts');
        expect(name.text()).toBe("No lift yet")
    })
    it('displays a list of lifts if it\s round 2', ()=>{
        const round = 2;
        const event = SQUAT;
        competitor.squat.push(100)
        const wrapper = setup({competitor, event, round});
        const name = findByTestAttribute(wrapper, 'next-competitor-best-lifts');
        expect(name.text()).toContain("100")
    })
})