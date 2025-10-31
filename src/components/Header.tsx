import Container from "./Container"
import Logo from "./Logo"
import Headerlinks from "./Headerlinks"
import Search from "./Search"
import Carticon from "./Carticon"
import Featured from "./Favourite"
import Signin from "./Signin"
import MobileMenu from "./MobileMenu"
import HeaderAuth from "./HeaderAuth"

export const Header = () => {
    return (
         <header className="py-5 md:px-5">
            <Container className="text-black inline-flex items-center justify-between md:justify-around w-full">
                {/* Logo */}
                <div className="flex items-center gap-3 md:gap-0 justify-start">
                    <MobileMenu/>
                    <Logo/>
                </div>
                {/* Nav-Links */}
                <Headerlinks/>
                {/* Nav-others */}
                <div className="flex items-center justify-end gap-6">
                    <Search />
                    <Carticon/>
                    <Featured/>
                    {/* client-only auth UI */}
                    <HeaderAuth/>
                </div>
            </Container>
         </header>
    )
}