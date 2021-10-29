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

export const openModalInfo = ( heroe ) => ({
    type: types.openModalInfo,
    payload: {
        modalInfo: true,
        heroe: heroe
    }
})

export const closeModalInfo = () => ({
    type: types.closeModalInfo,
    payload: {
        modalInfo: false
    }
})