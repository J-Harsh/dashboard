import React from 'react'
import "./CalendarSelect.scss"

const CalendarSelect = ({fontSize}) => {

    const [selectedOption, setSelectedOption] = React.useState('');

    const handleChange = (e) => {
        setSelectedOption(e.target.value);
    };

    const options = [
        'January-February',
        'February-March',
        'March-April',
        'April-May',
        'May-June',
        'June-July',
        'July-August',
        'August-September',
        'September-October',
        'October-November',
        'November-December',
    ];

    return (
        <select style={{fontSize:fontSize}} className='selectBox' value={selectedOption} onChange={handleChange}>
            <option value="">Select option</option>
            {options.map((option) => (
                <option  key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
    );
}


export default CalendarSelect