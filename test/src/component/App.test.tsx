/* tslint:disable-next-line  */
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import App from '../../../src/components/App';
it('renders without crashing', () => {
    const div = document.createElement('div');
    render(<App message="Hello" />, div);
    unmountComponentAtNode(div);