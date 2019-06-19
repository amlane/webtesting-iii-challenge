// Test away!
import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";
import "jest-dom/extend-expect";

import Controls from "./Controls.js";

describe("controls component tests", () => {
  it("should render Controls component without errors", () => {
    render(<Controls />);
  });

  it("should render Lock Gate and Close Gate when locked and closed are false", () => {
    const { getByText } = render(<Controls closed={false} locked={false} />);
    getByText(/Lock gate/i);
    getByText(/close gate/i);
  });

  it("should render open gate and unlock gate when locked is true and closed is false", () => {
    const { getByText } = render(<Controls closed={false} locked={true} />);
    getByText(/unlock gate/i);
    getByText(/close gate/i);
  });

  it("should render open gate and unlock gate when locked is false and closed are true", () => {
    const { getByText } = render(<Controls closed={true} locked={false} />);
    getByText(/lock gate/i);
    getByText(/open gate/i);
  });

  it("should disable the locked button when closed is false", () => {
    const { getByText } = render(<Controls closed={false} />);
    const button = getByText(/lock gate/i);

    button.hasAttribute("disabled");
  });
});
