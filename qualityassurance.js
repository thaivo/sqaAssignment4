import './style.scss';

import { makeHeadLines } from "./headliner";
import json from './data.json';

const headlineQaPage = document.getElementById("headline");
const qualityAssuranceHref = '<a class="heading" href="'+json.qapage.href+'">'+json.qapage.headline+'</a>';

makeHeadLines(headlineQaPage,qualityAssuranceHref);