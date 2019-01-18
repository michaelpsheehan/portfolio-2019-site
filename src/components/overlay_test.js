import React, { Component } from 'react'
import { Spring, config, Transition, animated } from 'react-spring'
import { Link } from 'gatsby'




const OverlayTest = (props) => {
    const { toggle } = props;
    return (
        <>
            {/* <div className="overlay-test"> */}
            <div className="testsy">
                YOYOYOYOYOYOYOYO
                                    </div>


            <Transition
                native
                items={toggle}
                from={{
                    // position: 'fixed',
                    opacity: 0.5,
                    paddingLeft: 100,
                    // top: 100
                }}
                enter={{
                    opacity: 1,
                    paddingLeft: 0,
                    // backgroundColor: '#5891c4',
                    // position: 'absolute',
                    // top: 0,
                    // bottom: 0,
                    // left: 0,
                    // right: 0,
                    // height: '100%',

                }}
                leave={{
                    opacity: 0,
                    paddingLeft: 100,
                    // top: 100
                }}
                delay={30}
                config={{ duration: 70 }}
            >
                {toggle => toggle && (props => (

                    <animated.div style={props} >



                        <div className="project-overlay__buttons">

                            <a href='' target="_blank" rel="noopener norefferer">
                                <button className="btn btn--ghost" >Visit Site</button>
                            </a>

                            <a href='' target="_blank" rel="noopener norefferer">
                                <button className="btn btn--ghost" >View Code</button>
                            </a>

                        </div>

                    </animated.div>
                ))}
            </Transition>

            {/* <button className="btn btn--ghost">test</button> */}

        </>
    )
}

export default OverlayTest


