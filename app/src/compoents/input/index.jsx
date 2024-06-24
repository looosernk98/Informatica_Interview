import React from 'react'

const Input = ({
    inputValue,
    setInputValue,
}) => {
    return(
        <input
         type={'text'}
         value = {inputValue}
         onChange={setInputValue}
        />
    )
}

export default Input;