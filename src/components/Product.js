import React from 'react'
import Button from './Button'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import "./Product.css";

const Product = ({title, desc, descLink, backgroundImg, leftBtnTxt, leftBtnLink, rightBtnTxt, rightBtnLink, twoButtons, first}) => {
    return (
        <div className="product" style={{
            backgroundImage: `url(${backgroundImg})`
        }}>
            <div className="product__container">
                <div className="product__title">
                    <p>{title}</p>
                    <div className="product__description">
                        <p>{desc}</p>
                    </div>
                </div>

                <div className="product__lowerThird">
                    <div className="product__buttons">
                        <Button imp="primary" text={leftBtnTxt} link={leftBtnLink} />
                        {twoButtons && (
                            <Button imp="secondary" text={rightBtnTxt} link={rightBtnLink} />
                        )}
                    </div>
                    {first && (
                        <div className="product__scroll">
                             <ExpandMoreIcon />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Product
