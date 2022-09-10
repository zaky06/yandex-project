import {sum} from './partials/sum';

const root = document.querySelector('#root');
root.textContent = sum(6, -1).toString();