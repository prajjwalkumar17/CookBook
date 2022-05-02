import icons from 'url:../../img/icons.svg';
import View from './View.js';
import previewView from './previewView.js';

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _Errormessage = "We couldn't find the recipe .Please try another";
  _Message = '';

  _generateMarkup() {
    return this._data.map(result => previewView.render(result, false)).join('');
  }
}

export default new ResultsView();
