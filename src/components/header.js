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
    const burgerPosition = isToggled ? 'fixed' : 'absolute'


    return (
      <>
        <Menu isToggled={isToggled} />

        <div className='header navbar'

        >
          <div
            className='nav-burger-container'
            onClick={this.toggle}
            style={{ position: burgerPosition }}

          >

            <NavBurger isToggled={isToggled} />
          </div>



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
