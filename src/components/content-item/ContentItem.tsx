import React from 'react'

export interface ContetItemProps {
    src:string;
    alt?:string;
    href?:string;
    imgWidth?:number;
    customClass?:string;
    name:string;
    onSetActive?: (activeItem: ContetItemProps) => void;
    imageCases?: string[];
    description: string;
}

const ContentItem:React.FC<ContetItemProps> = (
  {
    src,
    alt = '',
    href='#',
    customClass='',
    imgWidth=55,
    onSetActive = () => null,
    name
  }
) => {
  return (
    <a  onClick={()=>onSetActive({
      src,
      alt,
      href,
      imgWidth,
      customClass,
      name,
      description: '',
    })}  className={`${customClass} content-item  d-flex  justify-content-center align-items-center`} >
      <img alt={alt} className="content-item__image img-fluid rounded-1" width={imgWidth} src={src} />
    </a>
  )
}

export default ContentItem