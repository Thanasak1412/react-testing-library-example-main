import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "./Counter";

describe("Counter", () => {
  it("should be renders correctly", () => {
    render(<Counter initialCount={5} />);

    expect(screen.getByText("Count:")).toBeInTheDocument();
  });

  it("should be renders the count with initial count props", () => {
    render(<Counter initialCount={10} />);

    const countElem = +screen.getByTestId("count").textContent;

    expect(countElem).toEqual(10);
  });

  it("should be renders the count with the default of initialCount props", () => {
    render(<Counter />);

    const countElem = +screen.getByTestId("count").textContent;

    expect(countElem).toEqual(0);
  });

  it("should increment the count, when the increment button clicked", () => {
    render(<Counter initialCount={10} />);

    const incrementButton = screen.getByRole("button", { name: "Increment" });

    fireEvent.click(incrementButton);

    const countElem = +screen.getByTestId("count").textContent;

    expect(countElem).toEqual(11);
  });

  it("should decrement the count, when the decrement button clicked", () => {
    render(<Counter initialCount={0} />);

    const decrementButton = screen.getByRole("button", { name: "Decrement" });

    fireEvent.click(decrementButton);

    const countElem = +screen.getByTestId("count").textContent;

    expect(countElem).toEqual(-1);
  });

  it("should be restart the count to zero, when the restart button clicked", () => {
    render(<Counter initialCount={50} />);

    const restartButton = screen.getByRole("button", { name: "Restart" });

    fireEvent.click(restartButton);

    const countElem = +screen.getByTestId("count").textContent;

    expect(countElem).toEqual(0);
  });

  it("should be switch signs the count, when the switch signs button clicked", () => {
    render(<Counter initialCount={55} />);

    const switchSignsButton = screen.getByRole("button", {
      name: "Switch Signs",
    });

    fireEvent.click(switchSignsButton);

    const countElem = +screen.getByTestId("count").textContent;

    expect(countElem).toEqual(-55);
  });

  it("should be switch the count to be negative number, when the initial props is positive number", () => {
    render(<Counter initialCount={-55} />);

    const switchSignsButton = screen.getByRole("button", {
      name: "Switch Signs",
    });

    fireEvent.click(switchSignsButton);

    const countElem = +screen.getByTestId("count").textContent;

    expect(countElem).toEqual(55);
  });

  it("should the count is zero, the initial count to equal zero, if the switch signs button clicked", () => {
    render(<Counter initialCount={0} />);

    const switchSignsButton = screen.getByRole("button", {
      name: "Switch Signs",
    });

    fireEvent.click(switchSignsButton);

    const countElem = +screen.getByTestId("count").textContent;

    expect(countElem).toEqual(0);
  });
});
