import { NavBurger } from "./navBurger"
import { NavList } from "./navList"
import { NavBrand } from "./navbrand"

export const NavBar = () => {
    return (<div className="flex justify-between items-center px-2 py-3 border-b relative h-16">
        <NavBrand />
        <NavList />
        <NavBurger />
    </div>)
}