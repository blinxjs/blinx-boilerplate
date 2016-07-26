import template from "./templates/sampleComposite.html";
import config from "./config";
import DOM from "blinx-extensions/lib/dom-ext";
import Request from "blinx-extensions/lib/request-ext";

import "./styles.less"
let $ = DOM.getDomNode;

export default {
    resolveRenderOn: function() {
        return Request.ajax({
            url: 'https://randomuser.me/api/',
            dataType: 'json',
            success: function(data){
                console.log(data);
            }
        });
    },
    render: function(userData){
        $("#content-container").setHtml(template(userData.results[0]));
    },
    template,
    config
};