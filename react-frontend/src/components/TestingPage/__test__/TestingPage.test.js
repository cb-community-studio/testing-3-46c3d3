import React from "react";
import { render, screen } from "@testing-library/react";

import TestingPage from "../TestingPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders testing page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <TestingPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("testing-datatable")).toBeInTheDocument();
    expect(screen.getByRole("testing-add-button")).toBeInTheDocument();
});
