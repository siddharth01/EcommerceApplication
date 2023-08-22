import { screen } from "@testing-library/react";
import App from "./App";
import { renderWithProviders } from "./utils/test-utils";
import { MemoryRouter } from "react-router-dom";

describe("App", () => {
  const supressErrors = () => {
    jest.spyOn(console, "error").mockImplementation(() => null);
  };

  beforeAll(() => supressErrors());
  it("should render Home component by default", () => {
    renderWithProviders(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );
    const homeElement = screen.getByTestId("Home");
    expect(homeElement).toBeInTheDocument();
  });

  it("renders the cart component when the URL is /cart", () => {
    renderWithProviders(
      <MemoryRouter initialEntries={["/cart"]}>
        <App />
      </MemoryRouter>
    );
    const cartElement = screen.getByTestId("Cart");
    expect(cartElement).toBeInTheDocument();
  });
});
