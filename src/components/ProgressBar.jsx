import React from 'react'
import PropTypes from 'prop-types'

const ProgressBar = ({activeRound}) => {
    const ROUNDS = [1,2,3];
    const currentRound = activeRound + 1; //stop being 0-index

    const points = ROUNDS.map( round =>{
        if(round === currentRound){
            return <div key={`round-${round}`} data-test="current-round">{round}</div>
        }
        return <div key={`round-${round}`} >{round}</div>
    })

    return (
        <div data-test="progress-bar">
            {points}
        </div>
    )
}

ProgressBar.propTypes = {
    activeRound: PropTypes.number
}

export default ProgressBar
