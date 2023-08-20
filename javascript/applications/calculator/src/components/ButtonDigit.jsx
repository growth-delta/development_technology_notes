import React from 'react'

import { ACTIONS } from '../App'

function ButtonDigit({ dispatch, digit }) {
    return (
        <>
            <button 
                onClick={() => dispatch({type: ACTIONS.ADD_DIGIT, payload: {digit}})}
            >
                {digit}
            </button>
        </>
    )
}

export default ButtonDigit