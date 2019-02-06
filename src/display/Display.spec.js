import React from 'react';
import { render, cleanup } from "react-testing-library";
import Display from "./Display";
import 'jest-dom/extend-expect';

afterEach(cleanup);

describe('the Display component', () => {

    it('display open when closed prop is false', () => {
        const display = render(<Display closed={false} />);
        const closedTest = display.getByTestId(/closedTest/i);
        expect(closedTest).toHaveTextContent('Open');
    })

    it('display closed when closed prop is true', () => {
        const display = render(<Display closed={true} />);
        const closedTest = display.getByTestId(/closedTest/i);
        expect(closedTest).toHaveTextContent('Closed');
    })

    it('display locked when locked prop is true', () => {
        const display = render(<Display locked={true} />);
        const lockedTest = display.getByTestId(/lockedTest/i);
        expect(lockedTest).toHaveTextContent('Locked');
    })

    it('display unlocked when locked prop is false', () => {
        const display = render(<Display locked={false} />);
        const lockedTest = display.getByTestId(/lockedTest/i);
        expect(lockedTest).toHaveTextContent('Unlocked');
    })

    it('display green led when open', () => {
        const display = render(<Display closed={false} />);
        const closedTest = display.getByTestId(/closedTest/i);
        expect(closedTest).toHaveClass('green-led');
    })

    it('display red led when closed', () => {
        const display = render(<Display closed={true} />);
        const closedTest = display.getByTestId(/closedTest/i);
        expect(closedTest).toHaveClass('red-led');
    })

    it('display green led when unlocked', () => {
        const display = render(<Display locked={false} />);
        const lockedTest = display.getByTestId(/lockedTest/i);
        expect(lockedTest).toHaveClass('green-led');
    })

    it('display red led when locked', () => {
        const display = render(<Display locked={true} />);
        const lockedTest = display.getByTestId(/lockedTest/i);
        expect(lockedTest).toHaveClass('red-led');
    })

})