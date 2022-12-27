import ReactImageGallery from "react-image-gallery";

const Images = () => {
    const images = [
        {
            original: '/images/sagals-concurs.png',
            thumbnail: '/images/sagals-concurs.png'
        },
        {
            original: '/images/sagals-diada.png',
            thumbnail: '/images/sagals-diada.png'
        }
    ];
    return (
        <ReactImageGallery 
        items={images} 
        showBullets={true}></ReactImageGallery>
    );
};

export default Images;