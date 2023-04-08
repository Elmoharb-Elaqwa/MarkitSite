import React, { useEffect, useState } from 'react';
import './gallery.css';
import { Link } from 'react-router-dom';
import image1 from '../../assets/one.jpg';
import image2 from '../../assets/two.jpg';
import image3 from '../../assets/three.jpg';
import image4 from '../../assets/four.jpg';
import image5 from '../../assets/five.jpg';
import image6 from '../../assets/six.jpg';
import image7 from '../../assets/seven.jpg';
import image8 from '../../assets/eight.jpg';
import CloseIcon from '@mui/icons-material/Close';
const Gallery = () => {
  const [model, setModel] = useState(false);
  const [temimgSrc, setTemImgSrc] = useState('');
  const data = [
    {
      image: image1,
      galleryType: 'programming',
      link2: 'Web',
    },
    {
      image: image2,
      galleryType: 'programming',
      link2: 'Mobile',
    },
    {
      image: image3,
      galleryType: 'markting',
      link2: 'SEO',
    },
    {
      image: image4,
      galleryType: 'markting',
      link2: 'Markting',
    },
    {
      image: image5,
      galleryType: 'markting',
      link2: 'Photoshop',
    },
    {
      image: image6,
      galleryType: 'design',
      link2: 'UI&UX',
    },
    {
      image: image7,
      galleryType: 'markting',
      link2: 'Brand',
    },
    {
      image: image8,
      galleryType: 'markting',
      link2: 'Mangement',
    },
  ];
  const getImage = (imageSrc) => {
    setTemImgSrc(imageSrc);
    setModel(true);
  };
  const [galleryData, setGalleryData] = useState(data);
  const [collection, setCollection] = useState([]);
  useEffect(() => {
    setCollection([...new Set(data.map((data1) => data1.galleryType))]);
  }, []);
  const galleryFilter = (itemData) => {
    const filterPictures = data.filter((data) => data.galleryType === itemData);
    setGalleryData(filterPictures);
  };
  return (
    <div>
      <div className="general-background-image">
        <div className="back">
          <h2>Our Work</h2>
          <Link className="link back-link" to="/">
            Home
          </Link>
        </div>
      </div>
      <div className="galleries" id="gallery">
        <h2 className="general-header">OUR WORK</h2>
        <hr className="general-hr" />
        <div className="filterPictures">
          <ul>
            <li className="all" onClick={() => setGalleryData(data)}>
              All
            </li>
            {collection.map((collection) => {
              return (
                <li>
                  <button
                    className="gallery-li-button"
                    onClick={() => galleryFilter(collection)}
                  >
                    {collection}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="container galleries-container">
          <div className={model ? 'model open' : 'model'}>
            <img src={temimgSrc} alt="" />
            <CloseIcon onClick={() => setModel(false)} />
          </div>

          {galleryData.map((data, index) => {
            return (
              <div className="gallery" key={index}>
                <img
                  src={data.image}
                  alt=""
                  onClick={() => getImage(data.image)}
                />

                <Link className=" gallery-link">{data.link2}</Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
