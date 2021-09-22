import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {render, fireEvent, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import Login from './login'
import userEvent from '@testing-library/user-event';

// describe('Login', () => {
//     beforeEach(() => {
//         jest.resetAllMocks();
//     })
// })

describe('com inputs válidos', () => {
    it('chama a função onSubmit', async () => {
        const mockOnSubmit = jest.fn()
        const { queryByPlaceholderText, queryByTestId } = render(<Router><Login onSubmit={mockOnSubmit}/></Router>)

        await act(async () => {
            userEvent.type(queryByPlaceholderText('Email'),'teste@email.com')
            userEvent.type(queryByPlaceholderText('Password'), '123123')
        })   

        await act(async() => {
            userEvent.click(queryByTestId('button'))
        }) 

        expect(mockOnSubmit).toHaveBeenCalledTimes(0)
    })
})

{/* describe('com email inválido', () => {
    it.todo('renderizar o erro da validação de email')
    
})

describe('com senha inválido', () => {
    it.todo('renderizar o erro da validação de senha')
    
}) */}