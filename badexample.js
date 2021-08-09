import './style.scss';
import { makeHeadLines } from './headliner';
import json from './data.json';

const badExample = document.getElementById("badexample_headline");
const badExampleHref = '<a class="heading" href="'+json.examplepage.href+'">'+json.examplepage.headline+'</a>';

makeHeadLines(badExample,badExampleHref);