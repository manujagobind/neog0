import AnglesPage from "./pages/angles";
import AreaPage from "./pages/area";
import HypotenusePage from "./pages/hypotenuse";
import QuizPage from "./pages/quiz";

const appName = "Fun With Triangles";

const appPages = [
    {
        route: "/",
        title: "Is Triangle?",
        component: AnglesPage
    },
    {
        route: "/quiz",
        title: "Quiz",
        component: QuizPage
    },
    {
        route: "/hypotenuse",
        title: "Hypotenuse",
        component: HypotenusePage
    },
    {
        route: "/area",
        title: "Area of Triangle",
        component: AreaPage
    }
];

export { appName, appPages };