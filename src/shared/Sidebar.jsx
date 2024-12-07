import { Menu } from 'lucide-react'
import React, { createContext, useContext, useState } from 'react'

const SidebarContext = createContext();

function Sidebar({ children }) {
    const [open, setOpen] = useState(false);

    const handleSidebar = () => {
        setOpen(!open);
    }

    return (
        <aside className={`h-screen w-auto fixed top-20 z-10`}>
            <nav className="h-full flex flex-col bg-base-100 border-r-2 border-base-200 shadow-2xl">
                <div className="p-4 pb-2 flex justify-between items-center mt-4" >
                    <div className={`text-2xl overflow-hidden transition-all ${open ? 'w-40' : 'w-0'
                        }`}>
                        InfyTripMenu
                    </div>
                    <button className="py-1.5 px-2.5 rounded-lg bg-base-200 hover:bg-base-300" onClick={() => handleSidebar()}>
                        <Menu size={24} />
                    </button>
                </div>
                <SidebarContext.Provider value={{ open }}>
                    <ul className="flex-1 px-3">
                        {children}
                    </ul>
                </SidebarContext.Provider>
            </nav>
        </aside>
    )
}

export default Sidebar

export function SidebarItem({ icon, text, alert }) {
    const { open } = useContext(SidebarContext)
    return (
        <li active='true' className={`relative flex items-center my-9 py-2 px-2.5 font-medium rounded-md cursor-pointer
        transition-colors group hover:bg-base-200 text-default`}>
            <div className='max-w-10 min-w-10'>
                {icon}
            </div>
            <span className={`overflow-hidden text-xl transition-all ${open ? 'w-40 ml-3' : 'w-0'
                }`}>{text}</span>
            {alert && (<div className={`absolute right-2 w-2 h-2 rounded bg-primary ${open ? "" : "top-1"}`} />)}
            {!open && <div className={
                `absolute left-full rounded-md px-2 py-1 ml-6 bg-base-200 text-default invisible opacity-20
                -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`
            }>{text}</div>}
        </li>
    )
}