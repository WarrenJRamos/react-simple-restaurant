import React from 'react';

import classes from './Header.module.css';
import '../../utilities.css';

import logo from '../../assets/logo.svg';
//import mealsImage from '../../assets/chris-liverani-restaurant-unsplash.jpg';

import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <div class='container'>
          <nav class={classes.nav}>
            <div className={classes['logo-wrapper']}>
              <img src={logo} className={classes.logo} />
            </div>
            <HeaderCartButton onClick={props.onOpenCart} />
          </nav>
        </div>
      </header>
    </React.Fragment>
  )
};

export default Header;