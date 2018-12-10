import axios from 'axios';

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults() {
        const proxy = 'https://cors-anywhere.herokuapp.com/';
        const key = '0b525279ec4e9f1fc2101f7015e5fdd8';
    
        try {
            const res = await axios(`${proxy}https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
            this.results = res.data.recipes;
        } catch(error) {
            alert(error);
        }
    }
    
}


