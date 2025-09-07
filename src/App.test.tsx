import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "./App";

describe("App", () => {
  it("renders main heading", () => {
    render(<App />);
    const heading = screen.getByText(/think, plan, and track/i);
    expect(heading).toBeTruthy();
  });
});