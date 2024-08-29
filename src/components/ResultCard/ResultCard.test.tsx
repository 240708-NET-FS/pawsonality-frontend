import React from "react";
import {render, screen, waitFor} from '@testing-library/react'
import {test} from '@jest/globals' 
import ResultCard from "./ResultCard";
import '@testing-library/jest-dom';

test("displays the correct pet image when a valid result value is provided", () => {
    const mockResult = { resultValue: "Dog", timeStamp: "2024-08-29T12:34:56Z" };
    render(<ResultCard result={mockResult} />);
    
    expect(screen.getByText(/Perfect Pet: Dog/i)).toBeInTheDocument();
    expect(screen.getByAltText(/animal/i)).toBeInTheDocument();
    expect(screen.getByAltText(/animal/i).getAttribute('src')).toBe('https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
});

test("does not display an image when result value is missing", () => {
    const mockResult = { resultValue: "", timeStamp: "2024-08-29T12:34:56Z" };
    render(<ResultCard result={mockResult} />);
    
    expect(screen.queryByAltText(/animal/i)).not.toBeInTheDocument();
});

test("formats the date correctly", () => {
    const mockResult = { resultValue: "Cat", timeStamp: "2024-08-29T12:34:56Z" };
    render(<ResultCard result={mockResult} />);
    
    expect(screen.getByText(/Date of test: 8\/29\/2024/i)).toBeInTheDocument();  // Assuming US locale date format.
});