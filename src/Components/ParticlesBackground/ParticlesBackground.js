import React, { useCallback } from "react";
import Particles from "react-tsparticles";
//import particlesConfig from "./particles-config";
import particlesConfig from "./particles-config-custom1";

//ts particles stuff
import { loadFull } from "tsparticles";

function ParticlesBackground(props) {
  //from https://stackoverflow.com/questions/71903252/particle-js-not-showing-particles-on-reactjs-website

  const particlesInit = useCallback(async (engine) => {
    //console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    //console.log(container);
  }, []);

  return (
    <div className="ParticlesBackground">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: "0",
          left: "0",
        }}
        params={particlesConfig}
      ></Particles>
      ;
    </div>
  );
}

export default ParticlesBackground;
