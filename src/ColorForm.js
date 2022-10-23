import React, { useState } from 'react';

function ColorForm(props) {
    let [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // check if css supports the inputted color
        // the three other cases check for css supported inputs for color that aren't actually colors
        if (CSS.supports('color', input) &&
            input.toLowerCase() != 'inherit' &&
            input.toLowerCase() != 'unset' &&
            input.toLowerCase() != 'initial') {
            // add color if valid input
            props.addColor(input);
        }
        // clear input field when submit is pressed
        e.target[0].value = '';
    }

    return (
        <div className='form'>
            <form onSubmit={handleSubmit}>
                <input type='text'
                onChange={(e) => setInput(e.target.value)} />
                <button type='submit'>Submit!</button>
            </form>
        </div>
    );
}

export default ColorForm;