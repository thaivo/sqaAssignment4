import './style.scss';


import {makeHeadLines} from './headliner.js';
import json from './data.json';

const app = document.getElementById("app");
const appHref = '<a href="'+json.homepage.href+'">'+json.homepage.headline+'</a>';
//makeHeadLines(app,json.homepage.headline);
makeHeadLines(app,appHref);

const qaAssurance = document.getElementById("page1");
const qaAssuranceHref = '<a href="'+json.qapage.href+'">'+json.qapage.headline+'</a>';
makeHeadLines(qaAssurance,qaAssuranceHref);

const security = document.getElementById("page2");
const securityHref = '<a href="'+json.securitypage.href+'">'+json.securitypage.headline+'</a>';
makeHeadLines(security,securityHref);

const badExample = document.getElementById("page3");
const badExampleHref = '<a href="'+json.examplepage.href+'">'+json.examplepage.headline+'</a>';
makeHeadLines(badExample,badExampleHref);