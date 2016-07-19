export default {
    placeholders: {
        primaryNavigation: {
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
        },
        secondaryNavigation: {
            children: [{
                label: "Todos",
                routeName: "dashboard.todos",
                href: "#/dashboard/todos",
                children: []
            }]
        }
    }
}