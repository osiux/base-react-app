import React from 'react';
import { render, screen } from '@testing-library/react';

import App from '../src/App';

describe('App', () => {
    it('mounts correctly', () => {
        render(<App />);

        const title = screen.getByText('My App');

        expect(title).toBeInTheDocument();
    });
});
