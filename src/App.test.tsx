import React from "react";
import { render, screen } from "@testing-library/react";

jest.mock("./router/AppRouter", () => () => <div>Welcome to PCN</div>);
import App from "./App";

test("renders home welcome message", () => {
    render(<App />);
    const heading = screen.getByText(/welcome to pcn/i);
    expect(heading).toBeInTheDocument();
});
