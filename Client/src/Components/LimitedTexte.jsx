import React, { useState } from 'react';

function TextAreaWithLimit() {
    const [text, setText] = useState('');

    const handleChange = (e) => {
        const value = e.target.value;
        if (value.length <= 100) { // Limit to 100 characters
            setText(value);
        }
    };

    return (
        <div>
            <textarea
                value={text}
                onChange={handleChange}
                maxLength={100}
                placeholder="Type here..."
                rows={5} // Set the number of visible rows
                cols={50} // Set the number of visible columns
                style={{ resize: 'none' }} // Prevent resizing of the textarea
            />
            <p>Remaining characters: {100 - text.length}</p>
        </div>
    );
}

export default TextAreaWithLimit;
