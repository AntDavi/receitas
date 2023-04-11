import AsyncStorage from "@react-native-async-storage/async-storage";

//Buscar os favoritos

export async function getFavorites(key) {
    const favorites = await AsyncStorage.getItem(key)

    return JSON.parse(favorites) || [];
}

//Salvar um novo favorito

export async function saveFavorites(key, newItem) {
    let myFavorites = await getFavorites(key);

    let hasItem = myFavorites.some( item => item.id === newItem.id )

    if(hasItem) {
        console.log('já está lá')
        return;
    }

    myFavorites.push(newItem)

    await AsyncStorage.setItem(key, JSON.stringify(myFavorites))
    console.log('foi salvo')
}

//Remover um favorito da lista

export async function removeFavorites(id) {

    let recipes = await getFavorites("@appreceitas");

    let myFavorites = recipes.filter( item => {
        return( item.id !== id )
    })

    await AsyncStorage.setItem("@appreceitas", JSON.stringify(myFavorites))
    return myFavorites

}

//Verificar se já é favorito

export async function isFavorite(recipe) {

    let myRecites = await getFavorites("@appreceitas")

    const favorite = myRecites.find( item => item.id === recipe.id )

    if(favorite) {
        return true;
    }

    return false;

}