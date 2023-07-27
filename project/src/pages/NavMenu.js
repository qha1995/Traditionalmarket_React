import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const NAVLINK = [
    { content: "sub01", link: "/sub01" },
    { content: "sub02", link: "/sub02" },
    { content: "sub03", link: "/sub03" },
    { content: "sub04", link: "/sub04" },

]
const NavMenu = () => {
    return (
        <ul>
            {
                NAVLINK.map((it, idx) => {
                    return (
                        <li key={idx}><NavLink to={it.link}>{it.content}</NavLink></li>
                    )
                })
            }
        </ul>
    )
}

export default NavMenu