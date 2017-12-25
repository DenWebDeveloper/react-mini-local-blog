import React from "react";
import {render} from "react-dom";
import {articles} from "./fixtures";// cписок статтів
import ArticleList from "./components/ArticleList"; //бодує список з кнопками і текстом

// це замість init вхiд в додаток
render(<ArticleList articles={articles}/>, document.querySelector("#container"));
