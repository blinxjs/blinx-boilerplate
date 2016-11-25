import dashboardComposite from "./dashboardComposite";

export default [
    {
        name: 'dashboard',
        path: 'dashboard',
        moduleConfig: {
            "moduleName": "dashboardComposite",
            "instanceConfig": {
                "container": "#app-container",
                "placeholders": {

                }
            },
            "module": dashboardComposite
        }
    }
]