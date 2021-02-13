import React from 'react'
import PropTypes from 'prop-types'

const NextCompetitor = ({competitor, event, round}) => {
    const previousLifts = competitor[event];

    const renderPreviousLifts = () => {
        const lifts = previousLifts.map( (lift, index) => <li key={index}>{`Lift ${index + 1}: ${lift.attempt}`}</li>)
        return(<ul data-test="next-competitor-best-lifts">
            {lifts}
        </ul>)
    }

    return (
        <div>
            <p data-test="next-competitor-name">{`Name: ${competitor.getName()}`}</p>
            <p data-test="next-competitor-attempt">{`Next attempt: ${competitor.getNextAttempt(event, round)}kg`}</p>
            { round > 0 ?
                renderPreviousLifts() :
                <p data-test="next-competitor-best-lifts">No lift yet</p>
            }
        </div>
    )
}

NextCompetitor.propTypes = {

}

export default NextCompetitor
