import React from 'react';
import { render, cleanup } from "react-testing-library";
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
})