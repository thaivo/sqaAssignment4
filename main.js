import './style.scss';


import {makeHeadLines} from './headliner.js';
import json from './data.json';

const app = document.getElementById("app");
const appHref = '<a href="'+json.homepage.href+'">'+json.homepage.headline+'</a>';
//makeHeadLines(app,json.homepage.headline);
makeHeadLines(app,appHref);
app.innerHTML+=`<div><a href="Security/security.html" target="_blank">Security</a></div>
<div><a href="QA/qualityassurance.html" target="_blank">Quality Assurance</a></div>
<div><a href="BA/badexample.html" target="_blank">Bad Example</a></div>`;

/*const qaAssurance = document.getElementById("page1");
const qaAssuranceHref = '<a href="'+json.qapage.href+'">'+json.qapage.headline+'</a>';
makeHeadLines(qaAssurance,qaAssuranceHref);

const security = document.getElementById("page2");
const securityHref = '<a href="'+json.securitypage.href+'">'+json.securitypage.headline+'</a>';
makeHeadLines(security,securityHref);

const badExample = document.getElementById("page3");
const badExampleHref = '<a href="'+json.examplepage.href+'">'+json.examplepage.headline+'</a>';
makeHeadLines(badExample,badExampleHref);*/