import React, { createContext, useContext } from "react";
import { useFavoritesReducer } from './reducers'

const DataContext = createContext();
const { Provider } = DataContext;

const FavoriteProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useFavoritesReducer({
        organizations: [],
        favorites: [],
        favoritesOpen: false,
        categories: [],
        currentCategory: '',
    });

    return <Provider value={[state, dispatch]} {...props} />;
};

const useDataContext = () => {
    return useContext(DataContext);
};

export { FavoriteProvider, useDataContext };