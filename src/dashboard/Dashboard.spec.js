import React from 'react';
import { render, cleanup, fireEvent } from "react-testing-library";
import Display from "../display/Display";
import Controls from '../controls/Controls';
import 'jest-dom/extend-expect';

afterEach(cleanup);

describe('the Dashboard component', () => {
    it('render the Display component', () => {
        render(<Display />);
    })

    it('render the Controls component', () => {
        render(<Controls />);
    })

    it('the open/close button the toggle the closed props', () => {
        const controls = render(<Controls closed={false} locked={false} />);
        const closedButton = controls.getByTestId('closedButton');
        fireEvent.click(closedButton);
        expect(controls.getByText('Open Gate'));
    })

    it('the lock button the toggle the locked props', () => {
        const controls = render(<Controls closed={true} locked={false} />);
        const lockedButton = controls.getByTestId('lockedButton');
        fireEvent.click(lockedButton);
        expect(controls.getByText('Unlock Gate'));
    })
})