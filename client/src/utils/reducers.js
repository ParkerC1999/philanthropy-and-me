import { useReducer } from "react";
import {
    UPDATE_FAVORITES,
    ADD_TO_FAVORITES,
    REMOVE_FROM_FAVORITES
} from "./actions";

export const reducer = (state, action) => {
    switch (action.type) {
        case UPDATE_FAVORITES:
            return {
                ...state,
                favorites: [...action.favorites],
            };
        case ADD_TO_FAVORITES:
            return {
                ...state,
                favoritesOpen: true,
                favorites: [...state.favorites, action.favorites],
            };
        case REMOVE_FROM_FAVORITES:
            let newState = state.favorites.filter(organization => {
                return organization._id !== action._id;
            });

            return {
                ...state,
                favoritesOpen: newState.length > 0,
                favorites: newState
            };
        default:
            return state;
    }
};

export function useFavoritesReducer(initialState) {
    return useReducer(reducer, initialState)
}