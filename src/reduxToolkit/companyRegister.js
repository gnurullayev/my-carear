import {
    createSlice
} from "@reduxjs/toolkit"


const initialState = {
    activeDote: {
        id: 1,
        label: "Company Information"
    },
    activeCard: {
        id: 1,
        label: "information"
    }
}


const companyRegister = createSlice({
    name: "companyRegister",
    initialState,
    reducers: {
        activeDoteAction: (state, {
            payload
        }) => {
            state.activeDote = payload[0]
            state.activeCard = payload[1]
        },
    }
})

export const {
    activeDoteAction,
    activeCardAction
} = companyRegister.actions

export default companyRegister.reducer