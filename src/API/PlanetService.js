import axios from "axios";

export default class PostService {

    static async  getPlanetById(id) {
        const response = await axios.get('https://swapi.dev/api/planets/'+ id);
        return response;
    }

    static async getPlanets (page = 1,limit = 10)  {
        const response = await axios.get('https://swapi.dev/api/planets', {
            params: {
                page: page,
                limit: limit
            }
        });
        return response;
    }
}
