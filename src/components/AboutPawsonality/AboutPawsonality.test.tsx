import React from "react";
import {render, screen, waitFor} from '@testing-library/react'
import {test} from '@jest/globals' 
import AboutPawsonality from "./AboutPawsonality";
import '@testing-library/jest-dom';

test('displays about', async () => {
    const { container } = render( <AboutPawsonality /> );
    expect(container).toBeInTheDocument();
})

test("displays the main heading", () => {
    render(<AboutPawsonality />);
    const mainHeading = screen.getByRole("heading", { level: 1, name: /what is pawsonality\?/i });
    expect(mainHeading).toBeInTheDocument();
});

