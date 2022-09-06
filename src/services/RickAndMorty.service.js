

import { API_RM } from './../constants/Api.constants';

class RickAndMortyService {
    async getAllCharacters(){
        const response = await fetch(API_RM.CHARACTERS());
        return response.json();
    }
    async getAllCharacterById(id){
        const response = await fetch(API_RM.CHARACTERS_BY_ID(id));
        return response.json();
}
}
export default new RickAndMortyService();