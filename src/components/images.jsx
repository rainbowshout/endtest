import React from 'react';

const ImageBlock = (props) => {
    return (
        <div className='desk__images'>
            <div className="desk__images__col">
                <a href={`https://www.endclothing.com/gb${props.data.dropdown_image_link1}`} target='_blank' rel='noopener noreferrer'>
                    <div className="desk__image__item">
                        <img className='desk__image' src={props.data.dropdown_image_url1} alt={props.data.dropdown_image_title1} />
                        <span className='desk__image__tag'>{props.data.dropdown_image_title1}</span>
                    </div>
                </a>
                {props.data.dropdown_image_link2 &&
                    <a href={`https://www.endclothing.com/gb${props.data.dropdown_image_link2}`} target='_blank' rel='noopener noreferrer'>
                        <div className="desk__image__item">
                            <img className='desk__image' src={props.data.dropdown_image_url2} alt={props.data.dropdown_image_title2} />
                            <span className='desk__image__tag'>{props.data.dropdown_image_title2}</span>
                        </div>
                    </a>
                }
           </div>
            {props.data.dropdown_image_link3 &&
                <div className='desk__images__col'>
                    <a href={`https://www.endclothing.com/gb${props.data.dropdown_image_link3}`} target='_blank' rel='noopener noreferrer'>
                        <div className="desk__image__item">
                            <img className='desk__image' src={props.data.dropdown_image_url3} alt={props.data.dropdown_image_title3} />
                            <span className='desk__image__tag'>{props.data.dropdown_image_title3}</span>
                        </div>
                    </a>
                    {props.data.dropdown_image_link4 &&
                        <a href={`https://www.endclothing.com/gb${props.data.dropdown_image_link4}`} target='_blank' rel='noopener noreferrer'>
                            <div className="desk__image__item">
                                <img className='desk__image' src={props.data.dropdown_image_url4} alt={props.data.dropdown_image_title4} />
                                <span className='desk__image__tag'>{props.data.dropdown_image_title4}</span>
                        </div>
                    </a>
                    }
                </div>
            }
        </div>
    )
}

export default ImageBlock;

// to do - refactor 4 blocks into 1 re-usable block, passing props in.