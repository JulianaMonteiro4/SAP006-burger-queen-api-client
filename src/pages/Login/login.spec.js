import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, fireEvent, screen } from '@testing-library/react';
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
        const { getByPlaceholderText } = render(<Router><Login /></Router>)

        await act(async () => {
            fireEvent.change(getByPlaceholderText('Email'), 'email@teste.com')
            fireEvent.change(getByPlaceholderText('Password'), '123123')
        })

        await act(async () => {
            fireEvent.click(screen.getByText('Logue-se'))

        })

        expect(mockOnSubmit).toHaveBeenCalledTimes(0)
    })
})

