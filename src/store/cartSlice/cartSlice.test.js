import { add, remove } from "./cartSlice";

describe("actions", () => {
  const supressErrors = () => {
    jest.spyOn(console, "error").mockImplementation(() => null);
  };

  beforeAll(() => supressErrors());
  it("should create an action on removing the item from cart", () => {
    const removeElm = {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    };
    expect(remove(removeElm)).toEqual({
      type: "cart/remove",
      payload: {
        id: 1,
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 109.95,
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      },
    });
  });

  it("should create an action on add the item to cart", () => {
    const addElm = {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    };

    expect(add(addElm)).toEqual({
      type: "cart/add",
      payload: {
        id: 1,
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 109.95,
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      },
    });
  });
});
