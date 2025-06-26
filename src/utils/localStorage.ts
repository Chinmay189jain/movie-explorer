import Favorites from "../pages/Favorites";

export const loadFavourites = () => {
    try{
        const data = localStorage.getItem('favorites');
        return data ? JSON.parse(data) : [];
    } catch {
        return [];
    }
}

export const saveFavorites = (favorites: unknown) => {
    try{
        localStorage.setItem('favorites', JSON.stringify(favorites));
    } catch(e){
        console.error('Failed to save favorites:', e);
    }
}