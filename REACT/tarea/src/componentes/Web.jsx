import React from 'react'
import './web.css';
import { Header } from './Header';
import { NavBar } from './NavBar';
import { Main } from './Main';
import { Footer } from './Footer';

export const Web = () => {
  return (
    <>
    <Header/>
    <NavBar/>
    <Main />
    <Footer/>
    </>
  )
}