import React from 'react';
import Article02 from './Article02';
import Aside from './Aside';
import '../css/Subpage.css'
import { Link, NavLink } from 'react-router-dom'

const NAVLINK = [
	{ content: "소메뉴01", link: "" },
	{ content: "소메뉴02", link: "" },
	
]

const Sub02 = ({ content }) => {
	const num = 1;
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

							<Article02 content={content} num={num} />
				
					</div>
			</div>
	)
}

export default Sub02;