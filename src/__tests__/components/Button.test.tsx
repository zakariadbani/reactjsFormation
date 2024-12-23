import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "../../components/Button";
import "@testing-library/jest-dom/jest-globals";
import "@testing-library/jest-dom";

describe("Button Component", () => {
  it("affiche le texte du bouton correctement", () => {
    render(<Button label="Cliquez ici" onClick={() => {}} />);
    expect(screen.getByText("Cliquez ici")).toBeInTheDocument();
  });

  it("appelle la fonction onClick lorsqu'il est cliqué", () => {
    const handleClick = jest.fn();
    render(<Button label="Cliquez ici" onClick={handleClick} />);

    const button = screen.getByText("Cliquez ici");
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
