import React, { useEffect, useState } from 'react';
import './homeGallery.css';
import image1 from '../../../assets/one.jpg';
import image2 from '../../../assets/two.jpg';
import image3 from '../../../assets/three.jpg';
import image4 from '../../../assets/four.jpg';
import CloseIcon from '@mui/icons-material/Close';
import logo from '../../../assets/logo.jpg';

import { Link } from 'react-router-dom';
const HomeGallery = () => {
  const data = [
    {
      image: logo,
      galleryType: 'Logo',
      link2: 'Logo',
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
      image: image1,
      galleryType: 'markting',
      link2: 'Markting',
    },
  ];
  const [model, setModel] = useState(false);
  const [temimgSrc, setTemImgSrc] = useState('');
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
      <div className="home-galleries" id="gallery">
        <div className=" galleries-container">
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

export default HomeGallery;
