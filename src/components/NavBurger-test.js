import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { navBurger, navCloseIcon } from '../../public/icons/SVG/icons'
import { Spring, Transition, animated, config } from 'react-spring'
import Menu from './menu';


const styles = {
  burger: {
    width: "109.74",
    height: "110.675",
    viewBox: "0 0 109.74 110.675",
    gTransform: 'translate(-1159 -42.923)',
    path: {
      d: 'M54.87,0c30.3,0,54.87,24.775,54.87,55.337s-24.566,55.337-54.87,55.337S0,85.9,0,55.337,24.566,0,54.87,0Z'
    },
    line1: {
      x2:"59.612",    
      transform: "translate(1184.064 79.131)"
    } ,
    line2: {
      x2: "39.29",
      transform: "translate(1204.386 98.26)"
    },
    line3: {
      x2:"59.612" ,
      transform: "translate(1184.064 117.389)"
    }

  },




  closeNav: {
    width: "45", 
    height: "45", 
    viewBox: "0 0 69.957 69.957",
    gTransform: "translate(-19.272 -20.017)",
    path: {
      d:"M0,37.986,60.851,0",
      transform:"translate(67.067 21.077) rotate(77)"        
    },
    
    line2: {
      d: "M0,37.986,60.851,0",
      transform: "translate(20.331 43.539) rotate(-13)"
    }
    
    
  }


}



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
    const {burger, closeNav} = styles;

    console.log(burger)
    console.log(closeNav)


    console.log('toggle ====', closeNav.line2.d, 'no toggle = ', burger.line3.x2)
    return (
      <>


<Transition
native
items={isToggled}
from={{opacity: 0,
  // transformBottom: "translate(20.331 43.539) rotate(31)",
  transformBottom: isToggled ? "translate(20.331 43.539) rotate(31)" : burger.line3.transform ,
  bottomLine: isToggled ? closeNav.line2.d : burger.line3.x2 ,
  
  
  
}}
enter={{ 
  opacity: 1,  
  // transform: "translate(20.331 43.539) rotate(-13)"
  // transformBottom: "translate(20.331 43.539) rotate(-
  bottomLine: !isToggled ? closeNav.line2.d : burger.line3.x2 ,
  transformBottom: !isToggled ? "translate(20.331 43.539) rotate(31)" : burger.line3.transform ,
  stroke: "#fffbfb"  
  
}}
// leave={{ opacity: 1,
//   bottomLine: isToggled ? closeNav.line2.d : burger.line3.x2 ,
//   transformBottom: isToggled ? "translate(20.331 43.539) rotate(31)" : burger.line3.transform ,
//   // transformBottom: "translate(20.331 43.539) rotate(31)",
// }}

// {console.log('the botom line is ',bottomLine, 'theTransform bottom is ---', transformBottom)}


>
{item => ({bottomLine, transformBottom, opacity, stroke}) => 
<animated.div 
// style={{transform}} 
// style={props} 
className="item" 
// children={item} 
>



<div className='nav-burger--close' >
<svg   
  xmlns="http://www.w3.org/2000/svg" 
  width="45" 
  height="45" 
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
 strokeWidth="3"/>




 
 <animated.path 
 d="M0,37.986,60.851,0" 
//  d={bottomLine} 
//  d='none' 
//  transform="translate(20.331 43.539) 
//  transform="translate(20.331 43.539) rotate(-13)" 
// style={stroke} 
 transform={transformBottom} 

 fill="none" 
 stroke="#fffbfb" 
//  stroke={stroke} 
 strokeWidth="3"/>
 </g>
 </svg>


 </div>
            </animated.div>
          }
 </Transition>

   

     </>
    )
  }








}


export default NavBurger















// import PropTypes from 'prop-types'
// import React, { Component } from 'react'
// import { navBurger, navCloseIcon } from '../../public/icons/SVG/icons'
// import { Spring, Transition, animated, config } from 'react-spring'
// import Menu from './menu';


// const styles = {
//   burger: {
//     width: "109.74",
//     height: "110.675",
//     viewBox: "0 0 109.74 110.675",
//     gTransform: 'translate(-1159 -42.923)',
//     path: {
//       d: 'M54.87,0c30.3,0,54.87,24.775,54.87,55.337s-24.566,55.337-54.87,55.337S0,85.9,0,55.337,24.566,0,54.87,0Z'
//     },
//     line1: {
//       x2:"59.612",    
//       transform: "translate(1184.064 79.131)"
//     } ,
//     line2: {
//       x2: "39.29",
//       transform: "translate(1204.386 98.26)"
//     },
//     line3: {
//       x2:"59.612" ,
//       transform: "translate(1184.064 117.389)"
//     }

//   },




//   closeNav: {
//     width: "45", 
//     height: "45", 
//     viewBox: "0 0 69.957 69.957",
//     gTransform: "translate(-19.272 -20.017)",
//     path: {
//       d:"M0,37.986,60.851,0",
//       transform:"translate(67.067 21.077) rotate(77)"        
//     },
    
//     line2: {
//       d: "M0,37.986,60.851,0",
//       transform: "translate(20.331 43.539) rotate(-13)"
//     }
    
    
//   }


// }



// // const Header = ({ siteTitle }) => (
// class NavBurger extends Component {
//   state = {
//     toggle: false
//   }

//   toggle = () => {
//     this.setState({
//       toggle: !this.state.toggle
//     })
//   }


//   render() {
//     // const isToggled = this.state.toggle;
//     const {isToggled} = this.props;

//     return (
//       <>


//           {!isToggled &&
      
//             <>
//  <div className='nav-burger' >
//             <Spring from={{ opacity: 0.6, scale: 0.2, height: '80.675'}} to={{ opacity: 1, scale: 1, height: '110.675' }} >
//               {props => (

//                 <svg 

              
                
//                 // style={props}
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="109.74"
//                   height="110.675"
//                   viewBox="0 0 109.74 110.675"
//                   >
//                   <g
//                     transform="translate(-1159 -42.923)"
//                     >
//                     <path
//                       d="M54.87,0c30.3,0,54.87,24.775,54.87,55.337s-24.566,55.337-54.87,55.337S0,85.9,0,55.337,24.566,0,54.87,0Z"
//                       // transform="translate(1159 42.923)"
//                       fill="none"
//                     />
//                     <line
//                       x2="59.612"
//                       transform="translate(1184.064 79.131)"
//                       fill="none"
//                       stroke="#fffbfb"
//                       // stroke-width="3"
//                       strokeWidth="3"
//                     />
//                     <line 
//                     x2="39.29"
//                       transform="translate(1204.386 98.26)"
//                       fill="none" 
//                       stroke="#fffbfb" 
//                       strokeWidth="3" 
//                       />
//                     <line
//                       x2="59.612" 
//                       transform="translate(1184.064 117.389)"
//                       fill="none" stroke="#fffbfb" strokeWidth="3" 
//                       />
//                   </g>
//                 </svg>

//               )}
//             </Spring>


// </div>
// </>

//           }
//           {isToggled &&
// <>

// <Transition
// native
// items={isToggled}
// from={{opacity: 0,
//   transformBottom: "translate(20.331 43.539) rotate(31)",
//   // transform: "translate(20.331 43.539) rotate(-373)",
//   // stroke: "#fffbfb" 

// }}
// enter={{ 
//   opacity: 1,  
//   // transform: "translate(20.331 43.539) rotate(-13)"
//   transformBottom: "translate(20.331 43.539) rotate(-13)",
//   stroke: "#fffbfb"  

// }}
// leave={{ opacity: 1,
//   transformBottom: "translate(20.331 43.539) rotate(31)",
// }}



// >
// {item => ({transformBottom, opacity, stroke}) => 

// <animated.div 
// // style={{transform}} 
// // style={props} 
// className="item" 
// // children={item} 
// >



// <div className='nav-burger--close' >
// <svg   
//   xmlns="http://www.w3.org/2000/svg" 
//   width="45" 
//   height="45" 
//   viewBox="0 0 69.957 69.957"
// >

// <g 
// transform="translate(-19.272 -20.017)"
// >
// <path
//  d="M0,37.986,60.851,0" 
//  transform="translate(67.067 21.077) 
//  rotate(77)" 
//  fill="none" 
//  stroke="#fffbfb" 
//  strokeWidth="3"/>




 
//  <animated.path 
//  d="M0,37.986,60.851,0" 
// //  transform="translate(20.331 43.539) 
//  transform="translate(20.331 43.539) rotate(-13)" 
// // style={stroke} 
//  transform={transformBottom} 

//  fill="none" 
// //  stroke="#fffbfb" 
//  stroke={stroke} 
//  strokeWidth="3"/>
//  </g>
//  </svg>


//  </div>
//             </animated.div>
//           }
//  </Transition>

//             </>
//           }

//         {/* </div> */}

//       </>
//     )
//   }
// }


// export default NavBurger
