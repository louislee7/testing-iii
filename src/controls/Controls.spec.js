import React from 'react';
import { render, cleanup, fireEvent } from "react-testing-library";
import 'jest-dom/extend-expect';
import Controls from './Controls';
import Display from '../display/Display';

afterEach(cleanup);

describe('The Controls component', () => {
    it('display closed button', () => {
        const controls = render(<Controls />);
        const closedButton = controls.getByTestId('closedButton');
        expect(closedButton).toHaveTextContent('Close Gate');
    })

    // it('the open/close button the toggle the closed props', () => {
    //     const controls = render(<Controls />);
    //     const closedButton = controls.getByTestId('closedButton');
    //     fireEvent.click(closedButton);

    //     expect(closedButton).toHaveTextContent('Open Gate');

    //     const display = render(<Display />);
    //     const closedTest = display.getByTestId(/closedTest/i);
    //     expect(closedTest).toHaveTextContent('Closed');
    // })
})