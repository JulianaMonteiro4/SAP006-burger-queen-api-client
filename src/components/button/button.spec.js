import { render, screen } from '@testing-library/react';

import { Button } from './button';

it('should render button with children value', () => {    
    render(<Button>Label</Button>)
    const btn = screen.getByText('Label')

    expect(btn).toBeInTheDocument()
})


