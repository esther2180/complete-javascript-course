import axios from 'axios';

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults() {
        // const proxy = 'https://cors-anywhere.herokuapp.com/';
        const key = 'd2b7449ed5080b93393fc56f0e28d807';
        try {
            // const res = await axios(`${proxy}https://www.food2fork.com/api/search?key=${key}&q=${query}`);
            const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
            this.result = res.data.recipes;
            // console.log(this.result);
        } catch (error) {
            alert(error);
        }
        
    }
}


