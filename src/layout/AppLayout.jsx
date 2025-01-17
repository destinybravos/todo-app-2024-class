import { Outlet } from "react-router-dom"
import SideBar from "../components/SideBar"

const AppLayout = () => {
    return (
        <div className="relative">
            {/* Side Bar */}
            <section className="fixed h-screen w-64 bg-slate-200">    
                <SideBar />
            </section>

            {/* Main Page Content */}
            <section className="ml-64 min-h-screen">
                <Outlet />
            </section>
        </div>
    )
}

export default AppLayout