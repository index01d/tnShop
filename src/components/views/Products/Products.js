import React from 'react';

import { Link } from 'react-router-dom';
import { productPath } from 'helpers/routes';

import './Products.css';

const Products = ({ entries }) => (
  <div className='products'>
    {entries.map(entry => (
      <div className='products__card' key={entry.sys.id}>
        <Link className='products__card__img' to={productPath(entry.sys.id)}>
          <img src={entry.fields.cover.fields.file.url} />
        </Link>
        <span className='products__card__title'>{entry.fields.title}</span>
        <span className='products__card__price'>${entry.fields.price}</span>

        <div>
          <div className='products__card__btn'>Add to cart</div>
        </div>
      </div>
    ))}
  </div>
);

export default Products;