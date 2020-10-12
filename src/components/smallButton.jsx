import React from 'react';
import '../styles/desktopNav.css'

const SmallButton = (props) => {
    return (
        <a className={`desk__smallButton ${props.data.is_column_header ? 'top' : ''}`} href={`https://www.endclothing.com/gb/${props.data.custom_category_link || props.data.url_path}`} target='_blank' rel='noopener noreferrer'>
            <button className='desk__linkName' >
                {props.data.custom_category_name || props.data.name}
            </button>
        </a>
    )
}

export default SmallButton;