import React, { useState } from 'react';

const Search = ({ setSearchData }) => {
    const [input, setInput] = useState('');

    const handleInputChange = () => {
        if(validateInput(input)) {
            setSearchData(input);
            //setInput('');
        }
    };

    const validateInput = (input) => {
        if (String(input).length === 8 ) {
            return true;
        } else {
            alert('Neplatný formát IČO!')
        }
    }

    return (
        <div>
            <input id='ico-input' name='ico' type='number' value={input} 
                onChange={(e) => setInput(e.target.value)}></input>
            <button onClick={handleInputChange} >Vyhledat</button>
        </div>
    )
}

export default Search;