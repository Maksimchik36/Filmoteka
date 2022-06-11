import { refs } from './refs';
import { getDataByInput } from './api';
import singleCard from '../templates/singleCard.hbs';
import { renderButtons } from './paginator';

refs.formEl.addEventListener('submit', onFormSubmit);

async function onFormSubmit(e) {
  e.preventDefault();
  const formData = e.target.header.value;
  if (formData === '') {
    return;
  }
  const response = await (await getDataByInput(formData)).data;

  refs.container.innerHTML = singleCard(response.results);
  refs.pagContainer.innerHTML = '';
  if (response.total_pages > 1) {
    refs.pagContainer.insertAdjacentHTML('afterbegin', renderButtons(response.total_pages));
    if (response.total_pages < 6) {
      document.querySelector('#left').classList.add('visually-hidden');
      document.querySelector('#rigth').classList.add('visually-hidden');
    }
  } else {
    refs.pagContainer.insertAdjacentHTML('afterbegin', renderButtons(1));
    document.querySelector('#left').classList.add('visually-hidden');
    document.querySelector('#rigth').classList.add('visually-hidden');
  }
}

export { onFormSubmit };
