import React from "react";
import { render, screen } from "../../test-utils";
import Result from ".";
import { setupServer } from "msw/node";
import { rest } from "msw";

export const handlers = [
    rest.get("/search", (req, res, ctx) => {
        return res(ctx.json({ data: [] }), ctx.status(200));
    }),
];

const server = setupServer(...handlers);

// Enable API mocking before tests.
beforeAll(() => server.listen());

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers());

// Disable API mocking after the tests are done.
afterAll(() => server.close());

test("returns when a user fetch an api", async() => {
    render( < Result / > );
    expect(await screen.findByRole("img")).toBeInTheDocument();
});