import React, { useState } from 'react';
import '../styles/mobileNav.css'

const MobileNav = (props) => {
    const [openDrawers, setOpenDrawers] = useState([]);
    return (
        <header className="mob__wrapper">{props.data.filter(x => x.include_in_menu && !x.exclude_on_mobile).map(x => (
            <div className="mob__category" key={x.id}>
                <button className="mob__category__name" onClick={() => {
                    if (openDrawers && openDrawers.includes(x.id)) {
                        setOpenDrawers(openDrawers.filter(z => z !== x.id));
                    } else {
                        setOpenDrawers([...openDrawers, x.id]);
                    } 
                }}>
                    <span>{x.category_path}</span>
                    <div className="mob__icon">
                        {openDrawers.includes(x.id) ? <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line></svg> : <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>}
                    </div>
                </button>
                <div className={`mob__dropdown ${openDrawers.includes(x.id) ? 'open' : ''}`}>
                    {x.children_data.filter(y => y.include_in_menu && !y.exclude_on_mobile).map(y => (
                        <a href={`https://www.endclothing.com/gb/${y.url_path}`} target='_blank' rel='noopener noreferrer' key={y.id}><button className="mob__linkName" >{y.name}</button></a>
                    ))}
                </div>
            </div>
        ))}</header>
    )
}

export default MobileNav;