import React from 'react'
import './SidebarOption.css'

function SidebarOption({ Icon, title}) {
    return (
        <div className="sidebarOption">

            {/*ICON*/}
            {Icon && <Icon className="sidebarOption__icon"/>} {/*Only render an icon when Icon is passed in (available)*/ }


            {/*TEXT*/}
            {Icon ? (<h3>{title}</h3>): (
                <h3 className="sidebarOption__channel">
                    <span className="sidebarOption__hash">#</span> {title}
                </h3>
            )
            } {/*If you don't pass an icon, it will start a channel (start with #) */}
        </div>
    )
}

export default SidebarOption
