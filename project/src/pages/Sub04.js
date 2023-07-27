import React from 'react';
import Article04 from './Article04';
import Aside from './Aside';
import '../css/Subpage.css'
import { Link, NavLink } from 'react-router-dom'

const NAVLINK = [
	{ content: "소메뉴01", link: "" },
	{ content: "소메뉴02", link: "" },
	{ content: "소메뉴03", link: "" },
	{ content: "소메뉴04", link: "" },
]

const Sub04 = ({ content }) => {
	const num = 3;
	return (
			<div className='Subpage'>
							<Aside />



					<div className="sub">
					<ul>
            {
                NAVLINK.map((it, idx) => {
                    return (
                        <li key={idx}><NavLink to={it.link}>{it.content}</NavLink></li>
                    )
                })
            }
        </ul>

							<Article04 content={content} num={num} />
				
					</div>
			</div>
	)
}

export default Sub04;