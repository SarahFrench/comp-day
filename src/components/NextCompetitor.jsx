import React from 'react'
import PropTypes from 'prop-types'

const NextCompetitor = ({competitor, event, round}) => {
    const previousLifts = competitor[event];

    const renderPreviousLifts = () => {
        const lifts = previousLifts.map( (lift, index) => <li key={index}>{`Lift ${index + 1}: ${lift}`}</li>)
        return(<ul data-test="next-competitor-best-lifts">
            {lifts}
        </ul>)
    }

    return (
        <div>
            <p data-test="next-competitor-name">{`Name: ${competitor.name}`}</p>
            { round > 1 ?
                renderPreviousLifts() :
                <p data-test="next-competitor-best-lifts">No lift yet</p>
            }
        </div>
    )
}

NextCompetitor.propTypes = {

}

export default NextCompetitor
