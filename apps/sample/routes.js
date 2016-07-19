import sample from "./sampleCmposite";

export default [
    {
        name: 'dashboard.sample',
        path: '/sample',
        moduleConfig: {
            "moduleName": "sampleComposite",
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
            "module": sample
        }
    }
];