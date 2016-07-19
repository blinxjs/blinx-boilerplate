// Import CSS dependencies
import "./app.less";

// Import Blinx and BlinxRouter
import Blinx from "blinx";
import Router from "blinx-router";

// Import global extensions
import Logger from "blinx-extensions/lib/logger-g-ext";
import EventBind from "blinx-extensions/lib/bind-ext";
import ReduxExtension from "blinx-extensions/lib/redux-g-ext";

// Import App Dependencies
import Routes from "./routes";
import RouterConfig from "./route-config";


// Apply global extensions
// Acts as middleware
Blinx.use(Logger);
Blinx.use(EventBind);
Blinx.use(ReduxExtension);


// Init Router
Router.init(Blinx);
Router.configure(Routes, RouterConfig);
Router.start();