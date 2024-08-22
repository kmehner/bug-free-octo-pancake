import { createSlice } from "@reduxjs/toolkit";

// Slices take 3 parts
  // name
  // initialState 
  // reducers (aka functions aka slices)

// Example item 
// {
  // id: 1,
  // name: "Laptop",
  // price: 100 
// }

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: {
      1: 10 // id : quantity 
    }, 
    totalItems: 10
  },

  // Reducers take in state, and action 
  // State - Cart state variables 
  // Action - type and payload (data)
  reducers: {
    addItem: (state, action) => {
      const { id } = action.payload
      if (state.items[id]){
        state.items[id] += 1 
      } else {
        state.items[id] = 1 
      }

      state.totalItems += 1 
    },
    removeItem: (state, action) => {
      const {id} = action.payload
      if (state.items[id]){
        state.items[id] -= 1 
        if (state.items[id] === 0){
          delete state.items[id]
        }
        state.totalItems -= 1
      }
    }, 
    // Resetting the state
    checkout: (state) => {
      state.items = {}
      state.totalItems = 0
    } 
  }
})

export const { addItem, removeItem, checkout } = cartSlice.actions
export default cartSlice.reducer

// Example of calling payload 
// addItem({type: 'increment', payload: '1'})

// Functional component comparison 
// import React, { useState } from 'react'

// const cartSlice = () => {
//   const [cart, setCart] = useState({
//     items: {},
//     totalItems: 0
//   })

//   const addItem = (id) => {
//     if (cart.items[id] ){
//       cart.items[id] += 1 
//     } else {
//       cart.items[id] = 1 
//     }
//   }

//   return (
//     <div>cartSlice</div>
//   )
// }

// export default cartSlice