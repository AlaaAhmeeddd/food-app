import { useReducer } from "react"
import { CartContext } from "../store/cartContext"

const initialState = {
    items: [],
    totalPrice: 0,
}

const reducer = (state, action) => {
    switch (action.type) {

        case 'ADD_TO_CART': {
            const updatedItems = [...state.items]
            const existingItemIndex = updatedItems.findIndex(item => item.name === action.payload.name)
            const existingItem = updatedItems[existingItemIndex]

            if (existingItem) {
                const updatedItem = {
                    ...existingItem,
                    quantity: existingItem.quantity + 1
                }
                updatedItems[existingItemIndex] = updatedItem
            } else {
                const newItem = {
                    ...action.payload,
                    quantity: 1
                }
                updatedItems.push(newItem)
            }

            return {
                ...state,
                items: updatedItems,
                totalPrice: updatedItems.reduce((total, item) => total + (item.price * item.quantity), 0)
            }
        }

        case 'INCREASE_QUANTITY': {
            const updatedItems = [...state.items];
            const existingItemIndex = updatedItems.findIndex(item => item.name === action.payload.name);

            if (existingItemIndex !== -1) {
                const existingItem = { ...updatedItems[existingItemIndex] };
                existingItem.quantity += 1;
                updatedItems[existingItemIndex] = existingItem;
            }

            return {
                ...state,
                items: updatedItems,
                totalPrice: updatedItems.reduce((total, item)=> total + (item.price * item.quantity), 0)
            };
        }

        case 'DECREASE_QUANTITY': {
            const updatedItems = [...state.items]
            const existingItemIndex = updatedItems.findIndex(item => item.name === action.payload.name)

            if(existingItemIndex !== -1){
                const existingItem = {...updatedItems[existingItemIndex]}
                if(existingItem.quantity > 1){
                    existingItem.quantity -= 1
                    updatedItems[existingItemIndex] = existingItem
                } else{
                    updatedItems.splice(existingItemIndex, 1)
                }
            }

            return{
                ...state,
                items: updatedItems,
                totalPrice: updatedItems.reduce((total, item) => total + (item.price * item.quantity), 0)
            }
        }

        case 'CLEAR_CART': {
            
            return{
                ...state,
                items: [],
                totalPrice: 0,
            }
        }

        case 'REMOVE_ITEM': {
            const updatedItems= [...state.items]
            const existingItemIndex = updatedItems.findIndex( item => item.name === action.payload.name)
            updatedItems.splice(existingItemIndex, 1)

            return{
                ...state,
                items: updatedItems,
                totalPrice: updatedItems.reduce((total, item) => total + (item.price * item.quantity), 0)
            }
        }

    }
}

export default function CartProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState)

    const addProduct = product => dispatch({ type: 'ADD_TO_CART', payload: product });
    const increaseQuantity = product => dispatch({ type: 'INCREASE_QUANTITY', payload: product })
    const decreaseQuantity = product => dispatch({ type: 'DECREASE_QUANTITY', payload: product })
    const clearCart = () => dispatch({ type: 'CLEAR_CART' })
    const removeItem = product => dispatch({type: 'REMOVE_ITEM', payload: product})

    return (
        <CartContext.Provider
            value={{
                items: state.items,
                quantity: state.items.quantity,
                totalPrice: state.totalPrice,
                addProduct,
                increaseQuantity,
                decreaseQuantity,
                clearCart,
                removeItem
            }}>
            {children}
        </CartContext.Provider>
    )
}
