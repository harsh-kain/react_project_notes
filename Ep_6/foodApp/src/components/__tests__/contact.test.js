/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import Contact from '../Contact'
import '@testing-library/jest-dom'
import React from "react";
test("render contact section", ()=>{
    render(<Contact />)

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
})
// test("render contact input", ()=>{
//     render(<Contact />)

//     const placeholderName = screen.getByPlaceholderText("name");
//     expect(placeholderName).toBeInTheDocument();
// })

test("render contact all input box", ()=>{
    render(<Contact />)

    const allTextBox = screen.getAllByRole("textbox");
    // assertion 
    expect(allTextBox.length).toBe(5);
})