import { fireEvent, render } from "@testing-library/react";
import React from "react";
import { Home } from "../../../pages/index";

describe("Home page", () => {
  it("should matches snapshot", () => {
    const { asFragment } = render(<Home />);
    expect(asFragment()).toMatchSnapshot();
  });
});

describe("Test Button", () => {
  it("should invoke an alert", () => {
    const alert = jest.fn();
    window.alert = alert;
    const { getByRole } = render(<Home />);
    fireEvent.click(getByRole("button"));
    expect(alert).toBeCalledTimes(1);
  });
});
