const particlesConfig = {
  autoPlay: true,
  particles: {
    number: {
      value: 45,
    },
    color: {
      value: "#42B01A",
      animation: {
        h: {
          count: 0,
          enable: true,
          offset: 0,
          speed: 200,
          decay: 0,
          sync: false,
        },
        s: {
          count: 0,
          enable: false,
          offset: 0,
          speed: 1,
          decay: 0,
          sync: true,
        },
        l: {
          count: 0,
          enable: false,
          offset: 0,
          speed: 1,
          decay: 0,
          sync: true,
        },
      },
    },
    shape: {
      type: "circle",
    },

    size: {
      random: {
        enable: true,
        minimumValue: 1,
      },
      value: {
        min: 8,
        max: 50,
      },
    },
    zIndex: {
      random: {
        enable: true,
        minimumValue: 0,
      },
      value: 0,
      opacityRate: 1,
      sizeRate: 1,
      velocityRate: 1,
    },

    move: {
      enable: true,
      speed: 2,
      direction: "top",
    },
    opacity: {
      random: {
        enable: true,
        minimumValue: 0.3,
      },
      value: {
        min: 0.2,
        max: 0.6,
      },
    },
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: "repulse",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
    },
    modes: {
      repulse: {
        distance: 50,
        duration: 0.5,
      },
    },
  },
};

export default particlesConfig;
