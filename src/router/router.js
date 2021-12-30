import Planets from "../pages/Planets";
import OnePlanet from "../pages/OnePlanet";
import About from "../pages/About";


export const mainRoutes = [
    {path: '/about', component: About, exact: true},
    {path: '/planets', component: Planets, exact: true},
    {path: '/planets/:id', component: OnePlanet, exact: true},
]