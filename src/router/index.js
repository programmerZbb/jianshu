import Home from "../pages/home";
import Detail from "../components/detail";

export default [
    {
        path: '/home',
        component: Home,
        exact: false,
        name: '首页'
    },
    {
        path: '/home/detail',
        component: Detail,
        exact: false,
        name: '详情页'
    },
]