// Test away!
import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";
import "jest-dom/extend-expect";

import Display from "./Display.js";

describe("testing Display component", () => {
  it("renders without errors", () => {
    render(<Display />);
  });
  it("should have unlocked and open text when closed and locked are both false", () => {
    const { getByText } = render(<Display closed={false} locked={false} />);

    getByText(/unlocked/i);
    getByText(/open/i);
  });

  it("when locked is false and closed is true, text in display should be closed and unlocked", () => {
    const { getByText } = render(<Display closed={true} locked={false} />);

    getByText(/unlocked/i);
    getByText(/closed/i);
  });

  it("when locked is true and closed is false, text in display should be open and locked", () => {
    const { getByText } = render(<Display closed={false} locked={true} />);

    getByText(/locked/i);
    getByText(/open/i);
  });

  it("should have unlocked and open text when closed and locked are both true", () => {
    const { getByText } = render(<Display closed={true} locked={true} />);

    getByText(/locked/i);
    getByText(/closed/i);
  });
});
