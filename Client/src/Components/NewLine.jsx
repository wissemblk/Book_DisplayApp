import React, { useState } from 'react';

function TextInputWithNewline() {
    const [inputValue, setInputValue] = useState('');

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            setInputValue(inputValue + '\n');
        }
    };

    return (
        <div>
            <textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type here..."
                rows={5}
                cols={50}
                style={{ resize: 'none' }}
            />
        </div>
    );
}

export default TextInputWithNewline;
