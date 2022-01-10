import React, {ChangeEvent, memo} from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
    border: 1px solid transparent;
    background-color: lightgrey;
    border-radius: 8px;
    padding: 5px 10px;

    &:focus,
    &:focus-visible,
    &:focus-within,
    &:active {
        border-color: transparent;
    }
`;

const StyledLabel = styled.span`
    margin-right: 10px;
`;

export interface PasswordInputProps {
    onChange: (value: string) => void;
    value?: string;
    label?: string;
}

export const PasswordInput = memo(({ value, label, onChange }: PasswordInputProps) => {
    
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
    }

    return (
        <label>
            {label && <StyledLabel>{label}</StyledLabel>}
            <StyledInput type='password' onChange={handleChange} value={value} />
        </label>
    )
});