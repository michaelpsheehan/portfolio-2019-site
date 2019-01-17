import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { navBurger, navCloseIcon } from '../../public/icons/SVG/icons'
import { Spring } from 'react-spring'
import Menu from './menu';

// const Header = ({ siteTitle }) => (
class NavBurger extends Component {
  state = {
    toggle: false
  }

  toggle = () => {
    this.setState({
      toggle: !this.state.toggle
    })
  }


  render() {
    // const isToggled = this.state.toggle;
    const {isToggled} = this.props;

    return (
      <>
{/* <Menu/> */}
        <div className='nav-burger' 
        // onClick={this.toggle}
        >
          {/* <Spring
        from={{ color: 'white' }}
        to={{
          // color: toggle ? '#247BA0' : '#70C1B3',
          // start: toggle ? '#B2DBBF' : '#B2DBBF',
          // end: toggle ? '#247BA0' : '#F3FFBD',
          scale: toggle ? 0.6 : 1.5,
          shape: toggle ? navBurger : navCloseIcon,
          // stop: toggle ? '0%' : '50%',
          // rotation: toggle ? '0deg' : '45deg'
        }}
        toggle={this.toggle} // Additional props will be spread over the child
        // children={Content} // Render prop
      /> */}

          {!isToggled &&
            // navBurger
            <>

            <Spring from={{ opacity: 0.6, scale: 0.2, height: '80.675'}} to={{ opacity: 1, scale: 1, height: '110.675' }} >
              {props => (

                <svg style={props}
                  xmlns="http://www.w3.org/2000/svg"
                  width="109.74"
                  height="110.675"
                  viewBox="0 0 109.74 110.675">
                  <g
                    transform="translate(-1159 -42.923)"
                    >
                    <path
                      d="M54.87,0c30.3,0,54.87,24.775,54.87,55.337s-24.566,55.337-54.87,55.337S0,85.9,0,55.337,24.566,0,54.87,0Z"
                      // transform="translate(1159 42.923)"
                      fill="none"
                    />
                    <line
                      x2="59.612"
                      transform="translate(1184.064 79.131)"
                      fill="none"
                      stroke="#fffbfb"
                      stroke-width="3"
                    />
                    <line x2="39.29"
                      transform="translate(1204.386 98.26)"
                      fill="none" 
                      stroke="#fffbfb" 
                      stroke-width="3" 
                      />
                    <line
                      x2="59.612" 
                      transform="translate(1184.064 117.389)"
                      fill="none" stroke="#fffbfb" stroke-width="3" />
                  </g>
                </svg>

              )}
            </Spring>

{/* <Menu/> */}
</>

          }
          {isToggled &&
<>


<svg 
xmlns="http://www.w3.org/2000/svg" 
width="69.957" 
height="69.957" 
viewBox="0 0 69.957 69.957"
>

<g 
transform="translate(-19.272 -20.017)"
>
<path
 d="M0,37.986,60.851,0" 
 transform="translate(67.067 21.077) 
 rotate(77)" 
 fill="none" 
 stroke="#fffbfb" 
 stroke-width="3"/>
 <path d="M0,37.986,60.851,0" 
 transform="translate(20.331 43.539) 
 rotate(-13)" 
 fill="none" 
 stroke="#fffbfb" 
 stroke-width="3"/>
 </g>
 </svg>


            

            </>
          }

        </div>

      </>
    )
  }
}


export default NavBurger
