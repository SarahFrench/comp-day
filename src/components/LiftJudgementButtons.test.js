import {shallow} from 'enzyme'
import LiftJudgementButtons from './LiftJudgementButtons'
import {findByTestAttribute} from '../helpers/testing/'


const defaultProps = {
    disabled: false
}

const setup = (providedProps={}) =>{
    const props = {...defaultProps, ...providedProps}
    return shallow(<LiftJudgementButtons {...props} />)
}

describe('LiftJudgementButtons', ()=>{

    it('displays two interactable radio buttons', ()=>{
        const wrapper = setup();
        const buttons = wrapper.find(`input[type="radio"]`);
        expect(buttons.length).toBe(2)
        buttons.forEach( button => {
            expect(button.prop('disabled')).not.toBeTruthy()
        })
    })

    it('disables buttons when passed a flag in props', ()=>{
        const wrapper = setup({disabled: true});
        const buttons = wrapper.find(`button`);
        buttons.forEach( button => {
            expect(button.prop('disabled')).toBeTruthy()
        })
    })

})