import React from "react";
import {fireEvent, render, screen, waitFor} from '@testing-library/react'
import {test} from '@jest/globals' 
import { QuizCard } from "./QuizCard";
import '@testing-library/jest-dom';

test("renders question text correctly", () => {
    const mockQuestion = {
        questionText: "What is your favorite animal?",
        answer: [
            { answerText: "Dog", answerType: "Dog" },
            { answerText: "Cat", answerType: "Cat" },
            { answerText: "Bird", answerType: "Bird" },
            { answerText: "Snake", answerType: "Snake" },
        ],
        onAnswerSelect: jest.fn(),
    };
    render(<QuizCard {...mockQuestion} />);
    expect(screen.getByText(/What is your favorite animal?/i)).toBeInTheDocument();
});

test("displays the 'Next' button only when an option is selected", () => {
    const mockQuestion = {
        questionText: "What is your favorite animal?",
        answer: [
            { answerText: "Dog", answerType: "Dog" },
            { answerText: "Cat", answerType: "Cat" },
            { answerText: "Bird", answerType: "Bird" },
            { answerText: "Snake", answerType: "Snake" },
        ],
        onAnswerSelect: jest.fn(),
    };
    render(<QuizCard {...mockQuestion} />);
    
    // The "Next" button should not be in the document
    expect(screen.queryByText(/Next/i)).not.toBeInTheDocument();

    // Simulate selecting an option
    fireEvent.click(screen.getByLabelText(/Dog/i));

    // Now, the "Next" button should be present
    expect(screen.getByText(/Next/i)).toBeInTheDocument();
});

test("resets selection when the question text changes", () => {
    const mockOnAnswerSelect = jest.fn();
    const { rerender } = render(
        <QuizCard
            questionText="What is your favorite animal?"
            answer={[
                { answerText: "Dog", answerType: "Dog" },
                { answerText: "Cat", answerType: "Cat" },
                { answerText: "Bird", answerType: "Bird" },
                { answerText: "Snake", answerType: "Snake" },
            ]}
            onAnswerSelect={mockOnAnswerSelect}
        />
    );

    // Simulate selecting an option
    fireEvent.click(screen.getByLabelText(/Dog/i));

    // Rerender with a different question
    rerender(
        <QuizCard
            questionText="What is your favorite color?"
            answer={[
                { answerText: "Red", answerType: "Red" },
                { answerText: "Blue", answerType: "Blue" },
                { answerText: "Green", answerType: "Green" },
                { answerText: "Yellow", answerType: "Yellow" },
            ]}
            onAnswerSelect={mockOnAnswerSelect}
        />
    );

    // Ensure the selection is reset
    expect(screen.queryByText(/Next/i)).not.toBeInTheDocument();
});

test("calls onAnswerSelect with the selected answer when 'Next' is clicked", () => {
    const mockOnAnswerSelect = jest.fn();
    const mockQuestion = {
        questionText: "What is your favorite animal?",
        answer: [
            { answerText: "Dog", answerType: "Dog" },
            { answerText: "Cat", answerType: "Cat" },
            { answerText: "Bird", answerType: "Bird" },
            { answerText: "Snake", answerType: "Snake" },
        ],
        onAnswerSelect: mockOnAnswerSelect,
    };
    render(<QuizCard {...mockQuestion} />);
    
    // Simulate selecting an option
    fireEvent.click(screen.getByLabelText(/Dog/i));

    // Click the "Next" button
    fireEvent.click(screen.getByText(/Next/i));

    // Ensure the mock function was called with the correct argument
    expect(mockOnAnswerSelect).toHaveBeenCalledWith("Dog");
});