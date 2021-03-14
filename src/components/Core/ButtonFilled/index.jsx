import React from 'react'
import styled from 'styled-components';

const Button = styled.button`
    padding: 10px;
    cursor: pointer;
    margin-top: 10px;
    margin-bottom: 10px;
    background-color: #3054D6;
    border: 2px solid #E7EBEE;
    color: #FFFFFF;
    font-weight: bold;
    letter-spacing: 0.05em;
    border-radius: 6px 6px 6px 6px;
    &:disabled {
        background-color: #EDF0F7;
        color: #2355FC;
        opacity: 0.5;
    }
`;

export const ButtonFilled = ({className, label, disabled, style, handleClick}) => {
    return (
        <div>
            <Button 
                className={className} 
                type="submit" 
                disabled={disabled}
                style={style}
                onClick={handleClick}
            >
                {label}
            </Button>
        </div>
    )
}
