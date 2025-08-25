import React, { useState } from 'react';

const images = [
    "img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg", "img6.jpg",
    "img7.jpg", "img8.jpg", "img9.jpg", "img10.jpg", "img11.jpg", "img12.jpg"
];

function PhotoPage() {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (imageUrl) => {
        setSelectedImage(imageUrl);
    };

    const handleClose = () => {
        setSelectedImage(null);
    };

    return (
        <div id="main">
            <section>
                <h2>사진첩</h2>
                <p>여기에 김예린의 다양한 사진들이 있습니다!</p>
                <div className="photo-grid">
                    {images.map((img, index) => (
                        <div key={index} className="photo-item">
                            <img 
                                src={`/picture/${img}`} 
                                alt={`김예린의 사진 ${index + 1}`} 
                                onClick={() => handleImageClick(`/picture/${img}`)} 
                            />
                        </div>
                    ))}
                </div>
            </section>
            
            {selectedImage && (
                <div className="modal" onClick={handleClose}>
                    <span className="close-button">&times;</span>
                    <img src={selectedImage} alt="확대된 이미지" onClick={(e) => e.stopPropagation()} />
                </div>
            )}
        </div>
    );
}

export default PhotoPage;