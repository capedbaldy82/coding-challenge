import App from './App.js';
import { fetcher } from './utils/fetcher.js';

const app = new App(document.querySelector('.app'));

const getData = async () => {
  const res = await fetcher('data1.json');

  console.log(res);
};

getData();
