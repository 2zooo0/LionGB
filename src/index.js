import './index.css';
import './api.js';
import { delData } from './delG.js';
import { newData } from './newG.js';
import { getData } from './getG.js';


const submitbtn = document.getElementById('submitbtn');
document.getElementById('submitbtn').addEventListener('click', newData);

const getGbtn = document.getElementById('getGbtn');
document.getElementById('getGbtn').addEventListener('click',getData);