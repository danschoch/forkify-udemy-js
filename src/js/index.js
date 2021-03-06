// Global app controller
import Search from './models/Search';
import * as searchView from  './views/searchView';
import { elements, renderLoader, clearLoader } from './views/base';

/** Global State of the app
 * - Search object
 * - Current recipe object
 * - Shopping list object
 * - Liked recipes
 */
const state = {};

const controlSearch = async () => {
    // 1. Get query from view
    const query = searchView.getInput(); //TODO

    if (query) {
        // 2. New search object and add to state
        state.search = new Search(query);

        // 3. Prepate UI for results
        searchView.clearInput();
        searchView.clearResults();
        renderLoader(elements.searchRes);

        // 4. Search for recipes
        await state.search.getResults();

        // 5. Render results on UI
        clearLoader();
        searchView.renderResults(state.search.results);
    }

}

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});

