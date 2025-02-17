import React from 'react';
import asus from '../../assets/brands/asus.png';
import dng from '../../assets/brands/dng.png';
import hurley from '../../assets/brands/hurley.png';
import oppo from '../../assets/brands/oppo.png';
import samsung from '../../assets/brands/samsung.png';
import zara from '../../assets/brands/zara.png';

const images = {
asus: asus,
dng: dng,
hurley: hurley,
oppo: oppo,
samsung: samsung,
zara: zara,
};

const Brands = () => {
    return (
        <div className="brands">
            <div className="container">
                <div className="wrapper flexitem">
                    <div className="item">
                        <a href="#">
                            <img src={images.zara} alt="Zara"/>
                        </a>
                    </div>
                    <div className="item">
                        <a href="#">
                            <img src={images.samsung} alt="Samsung"/>
                        </a>
                    </div>
                    <div className="item">
                        <a href="#">
                            <img src={images.oppo} alt="Oppo"/>
                        </a>
                    </div>
                    <div className="item">
                        <a href="#">
                            <img src={images.asus} alt="Asus"/>
                        </a>
                    </div>
                    <div className="item">
                        <a href="#">
                            <img src={images.hurley} alt="Hurley"/>
                        </a>
                    </div>
                    <div className="item">
                        <a href="#">
                            <img src={images.dng} alt="Dolce & Gabbana"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Brands;