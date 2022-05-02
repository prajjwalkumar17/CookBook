import icons from 'url:../../img/icons.svg';
import View from './View.js';
import previewView from './previewView.js';

class BookmarksView extends View {
  _parentElement = document.querySelector('.bookmarks__list');
  _Errormessage = 'No bookmarks yet. Find a nice recipe and bookmark it :)';
  _Message = '';

  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }

  _generateMarkup() {
    return this._data
      .map(boookmark => previewView.render(boookmark, false))
      .join('');
  }
}

export default new BookmarksView();
