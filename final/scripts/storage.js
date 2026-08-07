const storageKey = "ecuadorNatureFavorites";
export function saveFavorite(destination) {
    let favorites = getFavorites();
    const alreadySaved = favorites.some(item =>
        item.id === destination.id
    );

    if (!alreadySaved) {
        favorites.push(destination);
        localStorage.setItem(
            storageKey,
            JSON.stringify(favorites)
        );

        alert(`${destination.name} added to favorites.`);
    } else {
        alert("This destination is already in your favorites.");
    }

}

export function getFavorites() {
    const savedFavorites =
        localStorage.getItem(storageKey);
    if (savedFavorites) {
        return JSON.parse(savedFavorites);
    } else {
        return [];
    }

}


export function removeFavorite(id) {
    let favorites = getFavorites();
    favorites = favorites.filter(destination =>
        destination.id !== id
    );

    localStorage.setItem(
        storageKey,
        JSON.stringify(favorites)
    );


}