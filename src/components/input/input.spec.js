import { useState } from 'react'
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { InputText } from './input';

it('should change text', () => { 
    const mockFunction = jest.fn();

    render(<InputText className="input" type='email' id='email' placeholder='Email' 
    value=''
    onChange={mockFunction} />)

    const inputElement = screen.getByPlaceholderText('Email');
    const valueInput = 'email@email.com';

    userEvent.type(inputElement, valueInput)

    expect(mockFunction).toHaveBeenCalledTimes(valueInput.length)    
})


