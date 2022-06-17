import Notiflix from 'notiflix';
import axios from 'axios';

async function getDataBackEnd() {
  try {
    const response = await axios.get(`https://62a9f628371180affbcc1dc4.mockapi.io/filmoteca`);
    // Notiflix.Loading.custom({
    //   customSvgUrl:
    //     'https://notiflix.github.io/content/media/loading/notiflix-loading-nx-light.svg',
    // });
    // console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  } finally {
    Notiflix.Loading.remove(2000);
  }
}

async function getDataBackEndForQueue() {
  try {
    const response = await axios.get(`https://62ab9803a62365888bdecd3c.mockapi.io/filmoteca2`);
    // Notiflix.Loading.custom({
    //   customSvgUrl:
    //     'https://notiflix.github.io/content/media/loading/notiflix-loading-nx-light.svg',
    // });
    // console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  } finally {
    Notiflix.Loading.remove(2000);
  }
}

async function postDataBackEnd(data) {
  try {
    const response = await axios.post(
      `https://62a9f628371180affbcc1dc4.mockapi.io/filmoteca`,
      data,
    );
    // Notiflix.Loading.custom({
    //   customSvgUrl:
    //     'https://notiflix.github.io/content/media/loading/notiflix-loading-nx-light.svg',
    // });
    return response;
  } catch (error) {
    console.log(error);
  } finally {
    Notiflix.Loading.remove(2000);
  }
}

async function postDataBackEndForQueue(data) {
  try {
    const response = await axios.post(
      `https://62ab9803a62365888bdecd3c.mockapi.io/filmoteca2`,
      data,
    );
    // Notiflix.Loading.custom({
    //   customSvgUrl:
    //     'https://notiflix.github.io/content/media/loading/notiflix-loading-nx-light.svg',
    // });
    return response;
  } catch (error) {
    console.log(error);
  } finally {
    //   Notiflix.Loading.remove(2000);
  }
}

export { getDataBackEnd, postDataBackEnd, postDataBackEndForQueue, getDataBackEndForQueue };