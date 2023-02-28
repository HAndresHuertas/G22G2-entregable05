import React from 'react';
import { useDispatch } from 'react-redux';
import { setNameTrainerGlobal } from '../store/slices/nameTrainer.slice';
import './styles/Header.css';

const Header = () => {
  const dispatch = useDispatch();
  const handleCLickLogout = () => {
    dispatch(setNameTrainerGlobal(''));
  };
  return (
    <header className="header">
      <img className="header__img" src="/public/images/pokedex.png" alt="" />
      <div className="header__black"></div>
      <div className="header__circle"></div>
      <div className="header__circle-int">
        <i
          onClick={handleCLickLogout}
          className="header__logout bx bx-log-out"
        ></i>
      </div>
    </header>
  );
};

export default Header;
