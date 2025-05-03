import React from 'react';
import './ContentDetail.scss';

export interface ContentDetailProps {
    id: string;
    img_src: string;
    description: string;
    order: 'left' | 'right';
}

const ContentDetail: React.FC<ContentDetailProps> = ({
    id,
    img_src,
    description,
    order
}) => {
    return(
        <div id={id} className={`content-detail d-flex align-items-center gap-5 ${order === 'left' ? 'flex-row' : 'flex-row-reverse'}`}>
            <div className="content-detail__bubble col-3">
                <img src={img_src} alt="img" /> 
            </div>
            <p className='col-9 text-start'>
                {description}
            </p>
        </div>
    )
}

export default ContentDetail;