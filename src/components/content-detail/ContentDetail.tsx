import React from 'react';
import './ContentDetail.scss';
import DecryptedText from '../a-framer-motion/decripted-text/DecryptedText';

export interface ContentDetailProps {
    id: string;
    img_src: string;
    description: string;
    order: 'left' | 'right';
    decryptMode?: boolean;
}

const ContentDetail: React.FC<ContentDetailProps> = ({
    id,
    img_src,
    description,
    order,
    decryptMode = false
}) => {
    return(
        <div id={id} className={`content-detail border-gradient rounded-3 gap-5 d-flex justify-content-md-between align-items-center row  ${order === 'left' ? 'flex-row left' : 'flex-row-reverse right'}`}>
            <div className="col-12 col-md-3 d-flex justify-content-center align-items-center">
                <div className="content-detail__bubble bg-primary-color-gradient">
                    <img loading='lazy' src={img_src} alt="img" /> 
                </div>
            </div>

            <div className="col-12 col-md-8 backdrop-blur-50  rounded-3 p-3">
            {
                decryptMode ?

                <DecryptedText
                    text= {description}
                    animateOn='view'
                    sequential={true}
                    speed={0.1}
                    maxIterations={0.1}
                    revealDirection='start'
                    className="font-size-16"
                    encryptedClassName='color-primary font-size-14' 
                />
                    :
                <p className='text-start font-size-16' >
                    {description}
                </p>
            }
            </div>

            

           
        </div>
    )
}

export default ContentDetail;