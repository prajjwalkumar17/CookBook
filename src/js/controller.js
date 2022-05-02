import * as model from './model.js';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import recipeView from './Views/recipeView.js';
import searchView from './Views/searchView';
import paginationView from './Views/PagenationView.js';
import resultsView from './Views/resultsView.js';
import bookmarksView from './Views/bookmarksView.js';

///////////////////////////////////////
//FUNCTIONS

const controlRecipies = async function () {
  try {
    const changedHash = window.location.hash.slice(1);

    if (!changedHash) return;

    recipeView.renderSpinner();
    //Update resuls view to mark selected search results active
    resultsView.update(model.getSearchResultsPage());

    bookmarksView.update(model.state.bookmarks);

    await model.loadRecipe(changedHash);

    recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.renderError();
    console.log(err);
  }
};

const controlSearchResults = async () => {
  try {
    resultsView.renderSpinner();
    //Get search qiery from view
    const searchQuery = searchView.getQuery();
    if (!searchView.getQuery) return;
    //Render results
    await model.loadSearchResults(searchQuery);
    // resultsView.render(model.state.search.results);
    resultsView.render(model.getSearchResultsPage());

    //Render initial pagenation
    paginationView.render(model.state.search);
  } catch (err) {
    console.log(err);
  }
};

const controlPagenation = function (gotoPage) {
  //Render new results
  resultsView.render(model.getSearchResultsPage(gotoPage));

  //Render new pagenation bots
  paginationView.render(model.state.search);
};

const controlServings = function (newServings) {
  //Update recepi servings
  model.updateServings(newServings);
  // recipeView.render(model.state.recipe);
  recipeView.update(model.state.recipe);

  //update the recipe view
};

const controlAddBookmark = function () {
  if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
  else model.deleteBookmark(model.state.recipe);
  recipeView.render(model.state.recipe);

  bookmarksView.render(model.state.bookmarks);
};

const controlBookmarks = function () {
  bookmarksView.render(model.state.bookmarks);
};
const init = () => {
  bookmarksView.addHandlerRender(controlBookmarks);
  recipeView.addHandler(controlRecipies);
  recipeView.addHandlerServings(controlServings);
  recipeView.addHandlerAddBookmark(controlAddBookmark);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagenation);
};
init();
