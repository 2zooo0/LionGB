import './index.css';
import './api.js';
import { newData } from './newG.js';
import { getData } from './getG.js';
import { delData } from './delG.js';

//window.onload = getData();

const submitbtn = document.getElementById('submitbtn');
document.getElementById('submitbtn').addEventListener('click', newData);

const getGbtn = document.getElementById('getGbtn');
document.getElementById('getGbtn').addEventListener('click', getData);