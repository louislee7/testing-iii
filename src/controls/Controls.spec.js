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

    it('display locked button', () => {
        const controls = render(<Controls />);
        const lockedButton = controls.getByTestId('lockedButton');
        expect(lockedButton).toHaveTextContent('Lock Gate');    })
})