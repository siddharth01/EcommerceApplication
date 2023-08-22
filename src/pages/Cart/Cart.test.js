import * as reactRedux from "react-redux";
import { renderWithProviders } from "../../utils/test-utils";
import userEvent from "@testing-library/user-event";
import Cart from "./Cart";

describe("Cart Page", () => {
  const useSelectorMock = jest.spyOn(reactRedux, "useSelector");
  const useDispatchMock = jest.spyOn(reactRedux, "useDispatch");

  beforeEach(() => {
    useSelectorMock.mockClear();
    useDispatchMock.mockClear();
  });

  const supressErrors = () => {
    jest.spyOn(console, "error").mockImplementation(() => null);
  };

  beforeAll(() => supressErrors());
  it("Dispatches the remove action event on clicking the remove button from the cart", () => {
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
    const dummyDispatch = jest.fn();
    useDispatchMock.mockReturnValue(dummyDispatch);

    const actual = renderWithProviders(<Cart />);
    userEvent.click(actual.getAllByText(/Remove$/)[0]);
    expect(useSelectorMock).toHaveBeenCalledTimes(1);
    expect(dummyDispatch).toHaveBeenCalledWith({
      payload: 1,
      type: "cart/remove",
    });
  });
});
