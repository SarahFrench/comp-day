import {shallow} from 'enzyme'
import ProgressBar from './ProgressBar'
import {findByTestAttribute} from '../helpers/testing/'

const defaultProps = {
    activeRound: 1
}

const setup = (providedProps={}) =>{
    const props = {...defaultProps, ...providedProps}
    return shallow(<ProgressBar {...props} />)
}

describe('ProgressBar', ()=>{
    it('displays numbers 1-3', ()=>{
        const wrapper = setup();
        const component = findByTestAttribute(wrapper, 'progress-bar');
        expect(component.text()).toBe("123")
    })
    it('correctly identifies the active round', ()=>{
        const wrapper = setup({activeRound: 2});
        const curentRound = findByTestAttribute(wrapper, 'current-round');
        expect(curentRound.length).toBe(1)
        expect(curentRound.text()).toBe("2")

    })
})