class Searchview {
  _parentElement = document.querySelector('.search');

  getQuery() {
    const query = this._parentElement.querySelector('.search__field').value;
    this._clearInput();
    return query;
  }

  _clearInput() {
    this._parentElement.querySelector('.search__field').value = '';
  }

  addHandlerSearch(subscriber) {
    this._parentElement.addEventListener('submit', e => {
      e.preventDefault();
      subscriber();
    });
  }
}

export default new Searchview();
