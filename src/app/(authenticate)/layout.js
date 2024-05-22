import AuthNav from "./AuthNav"

const Layout = ({ children }) => {
    return (
        <div>
            <AuthNav />
            <div className="h-16"></div>
            {children}
        </div>
    )
}

export default Layout
