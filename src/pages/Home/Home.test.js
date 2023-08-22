import Home from "./Home";
import { renderWithProviders } from "../../utils/test-utils";
import { screen } from "@testing-library/react";

describe("Home Page", () => {
  const supressErrors = () => {
    jest.spyOn(console, "error").mockImplementation(() => null);
  };

  beforeAll(() => supressErrors());
  it("should render the heading ", () => {
    renderWithProviders(<Home />);
    const heading = screen.getByRole("heading", { level: 2 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/Welcome to Online Store/i);
  });

  it("should render the sub-heading ", () => {
    renderWithProviders(<Home />);
    const subHeading = screen.getByRole("heading", { level: 3 });
    expect(subHeading).toBeInTheDocument();
    expect(subHeading).toHaveTextContent(/Products/i);
  });
});
