import React from 'react';

import classes from './Header.module.css';
import '../../utilities.css';

import logo from '../../assets/logo.svg';
import mealsImage from '../../assets/chris-liverani-restaurant-unsplash.jpg';

import HeaderCartButton from './HeaderCartButton';

const Header = () => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <div class='container'>
          <nav class={classes.nav}>
            <div className={classes['logo-wrapper']}>
              <img src={logo} className={classes.logo} />
            </div>
            <HeaderCartButton />
          </nav>
        </div>
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt='A table full of delicious food!' />
      </div>
    </React.Fragment>
  )
};

export default Header;