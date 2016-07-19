export default {
    reduxConfig: {
        store: {},
        events: {
            "change": [{
                type: "R_TOGGLE",
                selectors: [".toggle"],
                data: ["id"],
                extract: {
                    value: "val",
                    id: "getData#id"
                }
            }],
            "click": [{
                selectors: [".state-all"],
                type: "R_SHOW_ALL",
                extract: {
                    text: "val"
                }
            },{
                selectors: [".state-active"],
                type: "R_SHOW_ACTIVE",
                extract: {
                    text: "val"
                }
            },{
                selectors: [".state-completed"],
                type: "R_SHOW_COMPLETED",
                extract: {
                    text: "val"
                }
            }],
            "keyup": [{
                which: [13],
                selectors: [".new-todo"],
                type: "R_ADD_TODO",
                extract: {
                    text: "val"
                }
            }]
        }
    },
    domEvents: {
        "keyup": [{
            selectors: [".new-todo"],
            which: [13],
            callback: "todoAdded",
            extract: {
                text: "val",
                event: "event"
            }
        }]
    }
};