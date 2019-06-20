// Test away
import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";
import "jest-dom/extend-expect";

import Dashboard from "./Dashboard";

describe("Dashboard component tests", () => {
  it("should render dashboard app", () => {
    render(<Dashboard />);
  });
  it("matches snapshot", () => {
    const { container } = render(<Dashboard />);

    expect(container).toMatchSnapshot();
  });
});
