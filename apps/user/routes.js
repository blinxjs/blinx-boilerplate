import userDetails from "./userDetails/index";

export default [
    {
        name: 'dashboard.user',
        path: '/user',
        moduleConfig: {
            "moduleName": "userDetails",
            "instanceConfig": {
                "container": "#content-container",
                "placeholders": {
                    
                }
            },
            "module": userDetails
        }
    }
];