import React from 'react';
import Article01 from './Article01';
import Aside from './Aside';
import '../css/Subpage.css'
import { Link, NavLink } from 'react-router-dom'

const NAVLINK = [
	{ content: "소메뉴01", link: "" },
	
]

const Sub01 = ({ content }) => {
	const num = 0;
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

							<Article01 content={content} num={num} />
				
					</div>
			</div>
	)
}

export default Sub01;