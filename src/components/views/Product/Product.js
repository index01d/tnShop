import React, { Component } from 'react';

import './Product.css';

class Gallery extends Component {
  constructor(props) {
    super(props);

    this.state = { active: {} };
  }

  componentDidMount() {
    this.setActive(0);
  }

  setActive(index) {
    this.setState({ active: this.props.images[index] });
  }

  render() {
    const { active } = this.state;
    const { images } = this.props;

    return (
      <div className='gallery'>
        <div className='gallery__thumbnails'>
          <ul>
            {
              images.map((image, index) => (
                <li 
                  key={index} 
                  onClick={() => this.setState({ active: image })}
                  className={`gallery__thumbnail ${active.src == image.src ? 'active' : ''}`}
                >
                  <img src={image.src} />
                </li>
              )) 
            }
          </ul>
        </div>
        <div className='gallery__cover'>
          <img src={active.src}/>
        </div>
      </div>
    );
  }
}

const Product = ({ entry }) => (
  <div className='product'>
    <div className='col--left'>
      <div className='product__title'><h1>{entry.fields && entry.fields.title}</h1></div> 
      {
        entry.sys && 
        <Gallery 
          images={
            [{ src: entry.fields.cover.fields.file.url}]
              .concat(
                entry.fields.images.map(image => ({ src: image.fields.file.url }))
              )
          } 
        />
      }
    </div>
    <div className='col--right'>
      <div className='product__details'>
        <div className='product__price__label'>Price as low as:</div>
        <div className='product__price'>$ {entry.fields && entry.fields.price}</div>
        <div>
          <div className='product__btn'>Add to cart</div>
        </div>
        <div className='product__description'>{entry.fields && entry.fields.description.content.map(c => c.content[0].value).join('  ')}</div>
      </div>
    </div>
  </div>
);

export default Product;