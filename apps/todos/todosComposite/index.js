import DOM from "blinx-extensions/lib/dom-ext";
import template from "./templates/todosComposite.html";
import config from "./config";

import reducers from "./reducers"
import "./styles.less";

let $ = DOM.getDomNode;

let todoAdded = function(data){
    $(data.event.currentTarget).val("");
};

export default {
    reducers,
    template,
    config,
    todoAdded
};