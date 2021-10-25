import { types } from "../types/types"


export const openModal = () => ({
    type: types.openModal,
    payload: {
        openModal: true
    }
})

export const closeModal = () => ({
    type: types.closeModal,
    payload: {
        openModal: false
    }
})