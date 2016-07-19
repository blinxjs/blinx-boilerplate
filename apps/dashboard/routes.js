import dashboard from "./dashboardComposite";

export default [
    {
        name: 'dashboard',
        path: '/dashboard',
        moduleConfig: {
            "moduleName": "dashboardComposite",
            "instanceConfig": {
                "container": "#app-container",
                "placeholders": {
                    "header": "Router",
                    "aboutUs": "About Us",
                    "aboutUsURL": "#/layout/about",
                    "contactUs": "Contact Us",
                    "contactUsURL": "#/layout/contact",
                    "career": "Career",
                    "careerURL": "#/layout/career"
                }
            },
            "module": dashboard
        }
    }
];