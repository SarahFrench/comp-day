import {shallow} from 'enzyme'
import NextCompetitor from './NextCompetitor'
import {findByTestAttribute} from '../helpers/testing'
import {SQUAT} from '../constants/events';

import {Competitor} from '../classes/Competitor'

const defaultProps = {
    competitor: new Competitor("Sarah French", 63),
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
        competitor = new Competitor("Sarah French", 63);
        event = SQUAT;
        round = 0;
    })


    // { attempt: 1, weight: 100, success: null}, { attempt: 2, weight: 200, success: null}, { attempt: 3, weight: 300, success: null}

    it('displays the competitor\'s name', ()=>{
        competitor.setNextAttempt(event, round, 100)
        const wrapper = setup({competitor, event, round});
        const name = findByTestAttribute(wrapper, 'next-competitor-name');
        expect(name.text()).toContain(competitor.name)
    })
    it('displays the competitor\'s next attempt', ()=>{
        competitor.setNextAttempt(event, round, 100)
        const nextAttempt = 100;
        const wrapper = setup({competitor, event, round});
        const name = findByTestAttribute(wrapper, 'next-competitor-attempt');
        expect(name.text()).toContain(nextAttempt)
    })

    it('displays "no lift yet" if it\'s round 1 of the current event', ()=>{
        const round = 0;
        const event = SQUAT;
        competitor.setNextAttempt(event, round, 100)
        const wrapper = setup({competitor, event, round});
        const name = findByTestAttribute(wrapper, 'next-competitor-best-lifts');
        expect(name.text()).toBe("No lift yet")
    })

    it('displays a list of lifts if it\s round 2', ()=>{
        const round = 1;
        const event = SQUAT;
        competitor.setNextAttempt(event, round, 100)
        const wrapper = setup({competitor, event, round});
        const name = findByTestAttribute(wrapper, 'next-competitor-best-lifts');
        expect(name.text()).toContain("100")
    })
})