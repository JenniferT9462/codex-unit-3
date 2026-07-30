import { useState } from 'react';

export function useControlledInputs() {
    const [value, setValue] = useState();

    return [value, handleChange];

    function handleChange(event) {
        const input = event.target;
        const newValue = input.value;
        setValue(newValue);
    }
}