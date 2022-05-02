import icons from 'url:../../img/icons.svg';
export default class View {
  _data;
  render(data, render = true) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();
    this._data = data;
    const markup = this._generateMarkup();
    if (!render) return markup;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  _clear() {
    this._parentElement.innerHTML = '';
  }

  update(data) {
    this._data = data;
    const newMarkup = this._generateMarkup();
    const newDom = document.createRange().createContextualFragment(newMarkup);
    const newElem = Array.from(newDom.querySelectorAll('*'));
    const currElem = Array.from(this._parentElement.querySelectorAll('*'));

    newElem.forEach((newElem, indx) => {
      const curEl = currElem[indx];

      //changes text
      if (
        !newElem.isEqualNode(curEl) &&
        newElem.firstChild?.nodeValue.trim() !== ''
      ) {
        curEl.textContent = newElem.textContent;
      }

      //changes attributes
      if (!newElem.isEqualNode(curEl))
        Array.from(newElem.attributes).forEach(newattr =>
          curEl.setAttribute(newattr.name, newattr.value)
        );
    });
  }

  renderError(message = this._Errormessage) {
    const markup = ` <div class="error">
        <div>
          <svg>
            <use href="${icons}#icon-alert-triangle"></use>
          </svg>
        </div>
        <p>${message}</p>
      </div>
    `;
    this._clear;
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  renderMessage(message = this._Message) {
    const markup = `   <div class="recipe">
        <div class="message">
          <div>
            <svg>
              <use href="${icons}icon-smile"></use>
            </svg>
          </div>
          <p>Start by searching for a recipe or an ingredient. Have fun!</p>
        </div>
    `;
    this._clear;
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  renderSpinner() {
    const Markup = `
        <div class="spinner">
                <svg>
                  <use href="${icons}#icon-loader"></use>
                </svg>
              </div> 
`;
    this._clear;
    this._parentElement.insertAdjacentHTML('afterbegin', Markup);
  }
}
