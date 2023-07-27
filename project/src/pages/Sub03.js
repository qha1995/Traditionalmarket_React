import React from 'react';
import Article03 from './Article03';
import Aside from './Aside';
import '../css/Subpage.css'
import { Link, NavLink } from 'react-router-dom'

const NAVLINK = [
	{ content: "소메뉴01", link: "" },
	{ content: "소메뉴02", link: "" },
	{ content: "소메뉴03", link: "" },



]

const Sub03 = ({ content }) => {
	const num = 2;
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

							<Article03 content={content} num={num} />
				
					</div>
			</div>
	)
}

export default Sub03;