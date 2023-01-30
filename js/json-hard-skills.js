import { jsonBase } from "./json-base.js";
import { hardSkills } from "../db/db-hard-skills.js";

const html = (res) => {
  let html = `
  <ul>
  <li class="skills__img">
    <img src=${res.img} alt=${res.alt} />
  </li>
  <li class="skills__name">${res.title}</li>
</ul>
`;

  return html;
};

jsonBase.createStructure(
  "skills__line",
  "skills__box",
  hardSkills,
  html
);
