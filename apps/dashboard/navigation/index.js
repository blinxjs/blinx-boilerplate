import BlinxRouter from "blinx-router";

import template from "./templates/navigation.html";
import config from "./config";
import "./style.less";

let onRenderComplete = function () {
    BlinxRouter.addListener((route) => {
        this.render();
    });
};

export default {
    template,
    onRenderComplete
};