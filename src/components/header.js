import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { navBurger } from '../../public/icons/SVG/icons'
import NavBurger from './NavBurger'
import Menu from './menu';

// const Header = ({ siteTitle }) => (
class Header extends Component {
  state = {
    toggle: false
  }

  toggle = () => {
    this.setState({
      toggle: !this.state.toggle
    })
  }


  render() {
    const siteTitle = this.props;
    const isToggled = this.state.toggle;



    return (
      <>
        <Menu isToggled={isToggled} />

        <div className='header navbar'

        >
          <div className='nav-burger' onClick={this.toggle}>
            {/* {navBurger} */}
            <NavBurger isToggled={isToggled} />
          </div>

          {/* <NavBurger /> */}


          {/* 
  <div
  style={{
    margin: `0 auto`,
    maxWidth: 960,
    padding: `1.45rem 1.0875rem`,
  }}
  >
  <h1 style={{ margin: 0 }}>
  <Link
  to="/"
  style={{
    color: `white`,
    textDecoration: `none`,
  }}
  >
  {/* {siteTitle} */}
          {/* </Link>
      </h1 >
    </div > */}

          {/* * /} */}

        </div >

      </>
    )




  }
}
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
