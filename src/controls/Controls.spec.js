// Test away!
import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";
import "jest-dom/extend-expect";

import Controls from "./Controls.js";
import Dashboard from "../dashboard/Dashboard.js";
import { fireEvent } from "@testing-library/react/dist";
import { get } from "https";

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

  it("should render unlock gate and open gate when locked and closed are true", () => {
    const { getByText } = render(<Controls closed={true} locked={true} />);
    getByText(/unLock gate/i);
    getByText(/open gate/i);
  });

  it("should toggle close gate to open gate when closed button is clicked and toggle lock gate to unlock gate when locked button is clicked", () => {
    const { getByText } = render(<Dashboard />);
    const closeButton = getByText(/close gate/i);
    const lockButton = getByText(/lock gate/i);

    fireEvent.click(closeButton);
    getByText(/open gate/i);
    fireEvent.click(lockButton);
    getByText(/unlock gate/i);
  });

  it("should disable the open gate button if gate is locked", () => {
    const mockFn = jest.fn();
    const { getByText } = render(
      <Controls locked={true} closed={true} toggleClosed={mockFn} />
    );
    const openButton = getByText(/open gate/i);
    fireEvent.click(openButton);
    expect(mockFn).not.toBeCalled();
  });

  it("should disable the lock gate button if gate is closed", () => {
    const mockFn = jest.fn();
    const { getByText } = render(
      <Controls locked={true} closed={true} toggleClosed={mockFn} />
    );
    const lockedButton = getByText(/lock gate/i);
    fireEvent.click(lockedButton);
    expect(mockFn).not.toBeCalled();
  });
});
