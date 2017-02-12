import React from 'react'
import { IndexLink, Link } from 'react-router'
import './Header.scss'

export const Header = () => (
  <div>
    <h1>Testování a výuka španělštiny</h1>
    <IndexLink to='/' activeClassName='route--active'>
      Home
    </IndexLink>
    {' ·-· '}
    <Link to='/counter' activeClassName='route--active'>
      Counter
    </Link>
    {' ·-· '}
    <Link to='/vocabulary' activeClassName='route--active'>
     Vocabulary
    </Link>
    {' ·-· '}
    <Link to='/grammer' activeClassName='route--active'>
     Grammer
    </Link>

  </div>
)

export default Header
