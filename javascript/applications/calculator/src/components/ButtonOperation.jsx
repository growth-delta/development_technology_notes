import React from 'react'

import { ACTIONS } from '../App'

function ButtonOperation({ dispatch, operation }) {
    return (
        <>
            <button 
                onClick={() => dispatch({type: ACTIONS.CHOOSE_OPERATION, payload: {operation}})}
            >
                {operation}
            </button>
        </>
    )
}

export default ButtonOperation