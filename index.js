import palindrom from "./scripts/1.palindrom.js";
import oddNumber from "./scripts/2.oddNumber.js";
import mathX from "./scripts/3.MathX.js";
import rightDeclination from "./scripts/4.rightDeclination.js";
import JSONToSingleList from "./scripts/5.JSONToSingleList.js";
import objectSort from "./scripts/6.objectSort.js";
import funcArray from "./scripts/7.funcArray.js";
import newFuncFromArr from "./scripts/8.newFuncFromArr.js";
import { jsonToString }  from "./scripts/9.JSONStringify.js";
import closure from "./scripts/11.closure.js"
import book from "./scripts/12.book.js"

palindrom("аргентина манит негра");
palindrom("1234");

oddNumber(18);

mathX.fibItem(7);
mathX.fibAll(7);
mathX.primeItem(5);
mathX.primeAll(10);

rightDeclination(12, ["стул", "стула", "стульев"]);
JSONToSingleList()

objectSort()
funcArray()
newFuncFromArr()

const json = {
  "plus": [
    true,
    "not",
    false,
    {
      "person": false,
      "plane": 1254106103.0145397,
      "found": 174688253,
      "keep": false,
      "hurry": "spread",
      "belt": -329445121
    },
    "picture",
    false
  ],
  "became": "blow",
  "flight": -1439462591,
  "city": "little",
  "street": "comfortable",
  "eager": false
}

jsonToString(json)
closure()
book.setAuthor('Стивен Кинг')
console.log(book.author);


