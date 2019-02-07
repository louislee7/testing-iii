import React from 'react';
import { render, cleanup, fireEvent } from "react-testing-library";
import Display from "../display/Display";
import Controls from '../controls/Controls';
import Dashboard from './Dashboard';
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
        const dashboard = render(<Dashboard />);
        const closedButton = dashboard.getByTestId('closedButton');

        fireEvent.click(closedButton);
        expect(dashboard.getByText('Open Gate'));

        fireEvent.click(closedButton);
        expect(dashboard.getByText('Close Gate'));
    })

    it('the lock button the toggle the locked props', () => {
        const dashboard = render(<Dashboard />);
        const lockedButton = dashboard.getByTestId('lockedButton');
        const closedButton = dashboard.getByTestId('closedButton');

        fireEvent.click(closedButton);
        fireEvent.click(lockedButton);
        expect(dashboard.getByText('Unlock Gate'));
    })
})