import navigation from "../navigation/index";

export default {
    placeholders: {
        name: "Blinx Boilerplate",
        href: "/"
    },
    modules: [
        {
            moduleName: "PrimaryNavBar",
            instanceConfig: {
                container: "#navBarPrimary",
                placeholders: {
                    class: "nav navbar-nav",
                    children: [{
                        label: "Sample",
                        routeName: "dashboard.sample",
                        href: "#/dashboard/sample",
                        children: []
                    }, {
                        label: "Drop Down",
                        routeName: "dashboard.dd",
                        href: "",
                        children: [{
                            label: "One",
                            routeName: "dashboard.dd.one",
                            href: "",
                            children: []
                        }, {
                            label: "Two",
                            routeName: "dashboard.dd.two",
                            href: "",
                            children: []
                        }, {
                            label: "Three",
                            routeName: "dashboard.dd.three",
                            href: "",
                            children: []
                        }]
                    }]
                }
            },
            module: navigation
        },{
            moduleName: "SecondaryNavBar",
            instanceConfig: {
                container: "#navBarSecondary",
                placeholders: {
                    class: "nav navbar-nav navbar-right",
                    children: [{
                        label: "Todos",
                        routeName: "dashboard.todos",
                        href: "#/dashboard/todos",
                        children: []
                    },{
                        label: "User",
                        routeName: "dashboard.user",
                        href: "#/dashboard/user",
                        children: []
                    }]
                }
            },
            module: navigation
        }
    ]
}