import React, { useState } from 'react';

const useSelect = (initialState, options) => {

    // State of custom hook
    const [ state, updateState ] = useState(initialState); 

    const SelectNews = () => (
        <select
            className="form-control"
            defaultValue={state}
            onChange={ e => updateState(e.target.value) }
        >
            { options.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
            ))}
        </select>
    );

    return [ state, SelectNews ];
}

export default useSelect;