import Router from "blinx-router";
export default function (context) {
    let routeName = context.routeName;
    if(routeName){
        if(routeName === Router.getCurrentRoute().name){
            return "active";
        } else {
            return "inactive";
        }
    } else {
        return "inactive";
    }
};