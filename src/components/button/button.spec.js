import { render, screen, fireEvent } from '@testing-library/react';

import { Button } from './button';

it('should render button with children value', () => {    
    render(<Button>Label</Button>)
    const btn = screen.getByText('Label')

    expect(btn).toBeInTheDocument()
})

it('should perform the function by clicking the button', () => {  
    const mockFunction = jest.fn();  
    render(<Button onClick={mockFunction}>Label</Button>)

    const btn = screen.getByText('Label')
    fireEvent.click(btn)    

    expect(mockFunction).toHaveBeenCalledTimes(1)
})

