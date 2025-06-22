import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FavoriteMovie {
    id: number;
    title: string;
    poster_path: string | null;
}

const initialState: FavoriteMovie[] = [];

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addToFavorites(state, action: PayloadAction<FavoriteMovie>) {
            const exist = state.find((movie) => movie.id === action.payload.id);
            if(!exist) state.push(action.payload);
        },
        removeFromFavorites(state, action: PayloadAction<number>) {
            return state.filter((movie) => movie.id !== action.payload);
        }
    }
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
