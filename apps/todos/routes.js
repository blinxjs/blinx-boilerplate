import todos from "./todosComposite";

export default [
    {
        name: 'dashboard.todos',
        path: '/todos',
        moduleConfig: {
            "moduleName": "todosComposite",
            "instanceConfig": {
                "container": "#content-container",
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
            "module": todos
        }
    }
];