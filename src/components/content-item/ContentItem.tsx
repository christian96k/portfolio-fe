import React from 'react'

export interface ContetItemProps {
    src:string;
    alt?:string;
    href?:string;
    imgWidth?:number;
    customClass?:string;
}

const ContentItem:React.FC<ContetItemProps> = (
  {
    src,
    alt = '',
    href='#',
    customClass='',
    imgWidth=55
  }
) => {
  return (
    <a href={href}  target='blank' className={`${customClass} content-item  d-flex  justify-content-center align-items-center`} >
        <img alt={alt} className="content-item__image img-fluid rounded-1" width={imgWidth} src={src} />
    </a>
  )
}

export default ContentItem