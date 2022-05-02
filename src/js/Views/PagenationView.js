import icons from 'url:../../img/icons.svg';
import View from './View.js';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');
  _generateMarkup() {
    const currPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );

    //page 1 and other pages
    if (currPage === 1 && numPages > 1) {
      return `  
                <button data-goto="${
                  currPage + 1
                }" class="btn--inline pagination__btn--next">
                            <span>Page ${currPage + 1}</span>
                            <svg class="search__icon">
                            <use href="${icons}#icon-arrow-right"></use>
                            </svg>
                        </button>`;
    }

    //last page
    if (currPage === numPages && numPages > 1) {
      return `   <button data-goto="${
        currPage - 1
      }" class="btn--inline pagination__btn--prev">
                <svg class="search__icon">
                  <use href="${icons}#icon-arrow-left"></use>
                </svg>
                <span>Page ${currPage - 1}</span>
              </button>`;
    }
    //other page
    if (currPage < numPages) {
      return `  
             <button data-goto="${
               currPage - 1
             }" class="btn--inline pagination__btn--prev">
                    <svg class="search__icon">
                    <use href="${icons}#icon-arrow-left"></use>
                    </svg>
                    <span>Page ${currPage - 1}</span>
                </button>
                <button data-goto="${
                  currPage + 1
                }" class="btn--inline pagination__btn--next">
                            <span>Page ${currPage + 1}</span>
                            <svg class="search__icon">
                            <use href="${icons}#icon-arrow-right"></use>
                            </svg>
                        </button>`;
    }
    return ``;
    //page 1 and no pages
  }
  addHandlerClick(HandlerSubscriber) {
    this._parentElement.addEventListener('click', function (e) {
      e.preventDefault();
      const bot = e.target.closest('.btn--inline');
      if (!bot) return;

      const gotoPage = Number(bot.dataset.goto);
      HandlerSubscriber(gotoPage);
    });
  }
}
export default new PaginationView();
