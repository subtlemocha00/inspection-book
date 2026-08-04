import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

// App fetches the project list on mount; the tests should not need a server.
vi.mock("axios", () => ({
	default: { get: vi.fn(() => Promise.resolve({ data: [] })) },
}));

describe("App", () => {
	beforeEach(() => {
		window.localStorage.clear();
	});

	it("renders the sign-in form by default", async () => {
		render(<App />);

		expect(
			await screen.findByRole("heading", { name: "Sign In" })
		).toBeInTheDocument();
		expect(screen.getByPlaceholderText("Username...")).toBeInTheDocument();
		expect(screen.getByPlaceholderText("Password...")).toBeInTheDocument();
	});
});
