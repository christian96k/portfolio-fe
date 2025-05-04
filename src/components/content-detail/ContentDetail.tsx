import React from 'react';
import './ContentDetail.scss';
import DecryptedText from '../advanced-banner-top/decripted-text/DecryptedText';

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
        <div id={id} className={`content-detail bg-black-gradient rounded-3 gap-5 d-flex justify-content-md-between align-items-center row  ${order === 'left' ? 'flex-row' : 'flex-row-reverse'}`}>
            <div className="col-12 col-md-3 d-flex justify-content-center align-items-center">
                <div className="content-detail__bubble bg-primary-color-gradient">
                    <img src={img_src} alt="img" /> 
                </div>
            </div>

            <div className="col-12 col-md-8">

            <DecryptedText
                text= {description}
                animateOn='view'
                sequential={true}
                speed={0.01}
                maxIterations={1}
                revealDirection='start'
                className="font-size-16"
                encryptedClassName=' color-primary font-size-12'
            />
                {/* <p className='text-start font-size-18'>
                    {description}
                </p> */}
            </div>
        </div>
    )
}

export default ContentDetail;