import React from 'react'
import NavMenu from './NavMenu'

const Aside = () => {
    return (
        <aside>
            <div className="aside__lnb">
                <NavMenu />
            </div>

            <div className="aside__customer">
                {/* 로고 */}
                {/* <img src={process.env.PUBLIC_URL + '/assets/images/sub_logo.png'} alt="" /> */}
                <p>
                
                  
              
                </p>
            </div>
        </aside>
    )
}

export default Aside