import React from 'react'

const LiftJudgementButtons = ({clickHandler, disabled, liftJudgement = null}) => {
    //use radio buttons becaue only one state can be true at once
    //TODO: style like buttons a-la: https://markheath.net/post/customize-radio-button-css
    return (
        <form>
            <input id="good-lift-button" type="radio" disabled={disabled} data-selected={liftJudgement === true} name="lift-judgement" label="Good Lift" value="true" onClick={()=>{clickHandler(true)}}/>
            <label for="good-lift-button">Good Lift</label>
            <input id="no-lift-button" type="radio" disabled={disabled} data-selected={liftJudgement === false} name="lift-judgement" label="No Lift" value="false" onClick={()=>{clickHandler(false)}}/>
            <label for="no-lift-button">No Lift</label>
        </form>
    )
}

export default LiftJudgementButtons
