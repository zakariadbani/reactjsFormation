import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "../../components/Counter";

describe("Counter Component", () => {
  it("affiche le compteur initialement à 0", () => {
    render(<Counter />);
    expect(screen.getByText(/Compteur : 0/)).toBeInTheDocument();
  });

  it("incrémente le compteur lorsqu'on clique sur le bouton", () => {
    render(<Counter />);

    const button = screen.getByText("Incrémenter");
    fireEvent.click(button);

    expect(screen.getByText(/Compteur : 1/)).toBeInTheDocument();
  });
});
