'use client'

import React from 'react'
import { Particles} from "react-tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { useCallback } from "react";
import { loadFull } from "tsparticles"

const ParticlesContainer = () => {

  const particlesInit = useCallback(async (engine : Engine) => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        //await loadFull(engine);
        await loadFull(engine);
    }, []);

     const particlesLoaded = useCallback(async () => {}, []);

    return (
        <Particles
            className='hidden sm:block w-[70%] h-full absolute top-20 right-24 translate-z-0 -z-[10]'
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                fullScreen : {enable  : false},
                background: {
                    color: {
                        value: {},
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: false,
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                            
                            parallax	:	{
                              enable	:	true,
                              force	:	60,
                              smooth	:	10
                            }
                          
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            default:2,
                            quantity: 4,
                        },
                        repulse: {
                            distance: 150,
                            duration: 0.5,
                        },
                        grab : {
                          distance : 400,
                          links : {
                            blink : false,
                            consent : false,
                            opacity : 1
                          }
                        }
                    },
                },
                particles: {
                  
                    color: {
                        value: "#FFF",
                    },
                    links: {
                        color: "#F8C471",
                        distance: 150,
                        enable: true,
                        opacity: 0,
                        width: 1.5,
                    },
                    collisions: {
                      enable: true,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 1,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 99,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 2, max: 6 },
                    },
                },
                detectRetina: true,
            }}
        />
    );

  
}

export default ParticlesContainer
