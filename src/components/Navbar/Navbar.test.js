import Navbar from "./Navbar";
import { renderWithProviders } from "../../utils/test-utils";
import { screen, waitFor } from "@testing-library/react";
import * as reactRedux from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import userEvent from "@testing-library/user-event";

describe("Navbar", () => {
  const useSelectorMock = jest.spyOn(reactRedux, "useSelector");

  beforeEach(() => {
    useSelectorMock.mockClear();
  });

  const supressErrors = () => {
    jest.spyOn(console, "error").mockImplementation(() => null);
  };

  beforeAll(() => supressErrors());
  it("should render the logo", async () => {
    useSelectorMock.mockReturnValue([]);
    const history = createMemoryHistory();
    renderWithProviders(
      <Router location={history.location} navigator={history}>
        <Navbar />
      </Router>
    );
    expect(screen.getByText("Online Store")).toBeInstanceOf(HTMLSpanElement);
  });

  it("should land on home page", async () => {
    useSelectorMock.mockReturnValue([]);
    const history = createMemoryHistory();
    history.push("/");
    renderWithProviders(
      <Router location={history.location} navigator={history}>
        <Navbar />
      </Router>
    );
    expect(screen.getByText("Home")).toBeInTheDocument();
  });

  it("should land on cart page", async () => {
    useSelectorMock.mockReturnValue([]);
    const history = createMemoryHistory();
    history.push("/cart");
    renderWithProviders(
      <Router location={history.location} navigator={history}>
        <Navbar />
      </Router>
    );
    expect(screen.getByText("Cart")).toBeInTheDocument();
  });

  it("should update the cart value", () => {
    useSelectorMock.mockReturnValue([
      {
        id: 1,
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 109.95,
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      },
      {
        id: 2,
        title: "Mens Casual Premium Slim Fit T-Shirts ",
        price: 22.3,
        image:
          "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      },
    ]);
    const history = createMemoryHistory();
    renderWithProviders(
      <Router location={history.location} navigator={history}>
        <Navbar />
      </Router>
    );

    expect(useSelectorMock).toHaveBeenCalledTimes(1);

    // expect(items.length).toBe(2);
  });
});
