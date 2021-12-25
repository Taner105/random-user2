import React from 'react'

const Button = ({onClickHandler}) => {
    return (
        <div>
            <button onClick={onClickHandler}>New User</button>
            <button>Add User</button>
        </div>
    )
}

export default Button
