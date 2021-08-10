import '../style.scss';
import { makeHeadLines } from '../headliner';
import json from '../data.json';
const security = document.getElementById("security_headline");
const securityHref = '<a class="heading" href="'+json.securitypage.href+'">'+json.securitypage.headline+'</a>';

makeHeadLines(security,securityHref);