import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_SHIPPING_ADDRESS,
  CART_ITEMS_RESET
} from '../constants/cartConstants'

export const cartReducer = (
  state = { cartItems: [], shippingAddress: {} },
  action
) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = state.cartItems.find(
        p => p.productId === action.payload.productId
      )

      if (item) {
        return {
          ...state,
          cartItems: state.cartItems.map(p =>
            p.productId === action.payload.productId ? action.payload : p
          )
        }
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload]
        }
      }

    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(p => p.productId !== action.payload)
      }
    case CART_SAVE_SHIPPING_ADDRESS:
      return {
        ...state,
        shippingAddress: action.payload
      }
    case CART_ITEMS_RESET:
      return {
        ...state,
        cartItems: []
      }
    default:
      return state
  }
}
