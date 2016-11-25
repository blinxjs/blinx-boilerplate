// Import App Level css
import "./global.css";

// Import CSS dependencies
import "./node_modules/todomvc-app-css/index.css";

// Import Blinx and BlinxRouter
import Blinx from "./src/blinx";
import Router from "blinx-router";

// Import global extensions
import Logger from "blinx-extensions/lib/logger-g-ext";
import EventBind from "./src/common/extensions/bind-ext";
import SmartRender from "./src/common/extensions/smart-render";

// Import routes
import dashboard from "apps/dashboard/routes";
import todos from "apps/todos/routes";
import counter from "apps/counter/routes";
import docs from "apps/docs/routes";

// Apply global extensions
// Acts as middleware
Blinx.use(Logger);
Blinx.use(EventBind);
Blinx.use(SmartRender);

// Init Router
Router.init(Blinx);
Router.configure([].concat(dashboard, todos, counter, docs), {
    useHash: true,
    ignoreConstraints: true,
    hashPrefix: '',
    trailingSlash: true,
    logger: true,
    history: true,
    listener: true,
    autoCleanUp: false,
    defaultRoute: "dashboard.todo",
    ignoreSearch: true
});
Router.start();