import { getDataSingleCard, getDataGenre } from './api';
import singleCard from '../templates/singleCard.hbs';
import { refs } from './refs';
import { observeOnLastElOfGallery } from './infinit-scr';
import { modalCardItem } from './modalFilm';
import { openModalFilmById } from './openAndCloseModal';
import { renderButtons, onClickPagSearch } from './paginator';
let num = 0;

// фун. рендеру запроса
async function singleCardItem() {
  num += 1;
  try {
    const res = await (await getDataSingleCard(num)).data;
    const dataCinema = res.results;
    const markup = singleCard(dataCinema);
    refs.container.insertAdjacentHTML('beforeend', markup);
    if (document.querySelector('body').scrollWidth < 765) {
      observeOnLastElOfGallery(document.querySelectorAll('.movie-card'));
    }

    document.querySelector('.nav').classList.remove('is-hidden');
    console.log(dataCinema.length);
    // if (dataCinema.length < 20) {
    //   document.querySelector('.nav').classList.add('is-hidden');
    // }
    refs.pagContainer.insertAdjacentHTML('afterbegin', renderButtons(6));
    console.log(document.querySelector('.nav'));
    document.querySelector('.nav').addEventListener('click', onClickPagSearch);
  } catch (error) {
    console.log(error);
  }
}

// слушатель на список кнопок пагинатора
document.querySelector('.nav').addEventListener('click', onClickPagSearch);

// слухач контейнера з філ.
refs.container.addEventListener('click', openModalFilmById);

export { singleCardItem };
