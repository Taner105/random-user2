import React from 'react'

const Button = ({onClickHandler, addClickHandler}) => {

    
    return (
        <div>
            <button onClick={onClickHandler}>New User</button>
            <button onClick={addClickHandler}>Add User</button>
        </div>
    )
}

export default Button
