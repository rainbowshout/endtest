import React from 'react';
import SmallButton from './smallButton';
import ImageBlock from './images';
import '../styles/desktopNav.css'

const DesktopNav = (props) => {
    return (
        <header className="desk__wrapper">{props.data.filter(x => x.include_in_menu && x.url_path !== 'features' && x.url_path !== 'launches').map(x => (
            <div className="desk__category" key={x.id}>
                <a href={`https://www.endclothing.com/gb/${x.url_path}`} target='_blank' rel='noopener noreferrer'>
                    <button className="desk__category__name" onClick={() => { }}>
                        <span>{x.category_path}</span>  
                    </button>
                </a>
                <div className={`desk__dropdown`}>
                    <div className="desk__dropdown__1">
                        {x.children_data.filter(y => y.include_in_menu && !y.include_in_menu_column2 && !y.include_in_menu_column3).map(y => (
                            <SmallButton data={y} key={y.id}/>
                        ))}
                    </div>
                    <div className="desk__dropdown__2">
                        {x.children_data.filter(y => y.include_in_menu && y.include_in_menu_column2 && !y.include_in_menu_column3).map(y => (
                            <SmallButton data={y} key={y.id}/>
                        ))}
                    </div>
                    <div className="desk__dropdown__3">
                        {x.children_data.filter(y => y.include_in_menu && !y.include_in_menu_column2 && y.include_in_menu_column3).map(y => (
                            <SmallButton data={y} key={y.id}/>
                        ))}
                    </div>
                    <div className="desk__dropdown__4">
                        {x.dropdown_image_enabled && <ImageBlock data={x} />}
                    </div>
                </div>
            </div>
        ))}</header>
    )
}

export default DesktopNav;

// to do - wrap larger lists (max-height and flex wrap). Account for margins in these cases.
// refactor our dropdown mark-up to use a mapping and a props object.