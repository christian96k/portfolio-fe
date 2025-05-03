import './ContentList.scss';

interface ContentListProps {
    images: {
        src: string;
        title: string;
    }[];

}

const ContentList: React.FC<ContentListProps> = ({ images }) => {
    return (
        <div className="content-list d-flex col-12 gap-3">
            {images.map((image, index) => (
                <div key={index} className="content-list__item d-flex flex-column align-items-center justify-content-center">
                    <img src={image.src} alt={image.title} />
                    {/* <h6 className='font-size-12'>{image.title}</h6> */}
                </div>
            ))}
        </div>
    );
};

export default ContentList;