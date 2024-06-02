import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "./realdoof.svg";
const hero = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="align-center text-center">
        <AnimationOnScroll animateIn="zoomInDown">
          <div className="avatar">
            <div className="w-32 mask mask-squircle">
              <img src="https://avatars.githubusercontent.com/u/71062861?v=4" />
            </div>
          </div>
        </AnimationOnScroll>
        <div className="hero-content text-center">
          <div className="max-w-md">
            <AnimationOnScroll animateIn="lightSpeedInLeft">
              <h1 className="text-5xl font-bold">Whirl</h1>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="lightSpeedInRight">
              <p className="py-6 text-pretty">
                I am a full stack developer and a budding entrepreneur who
                enjoys problem solving and dealing with philosophical questions.
              </p>
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="backInUp">
              <a
                href="https://x.com/whirlxd"
                className="btn btn-circle  btn-outline btn-secondary"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="30"
                  height="30 "
                  viewBox="0,0,256,256"
                  style={{ fill: "white" }}
                >
                  <g
                    fill="#ffffff"
                    fill-rule="nonzero"
                    stroke="none"
                    stroke-width="1"
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                    stroke-miterlimit="10"
                    stroke-dasharray=""
                    stroke-dashoffset="0"
                    font-family="none"
                    font-weight="none"
                    font-size="none"
                    text-anchor="none"
                  >
                    <g transform="scale(5.33333,5.33333)">
                      <path d="M44.719,10.305c-0.295,-0.305 -0.749,-0.392 -1.136,-0.214l-0.164,0.075c-0.139,0.064 -0.278,0.128 -0.418,0.191c0.407,-0.649 0.73,-1.343 0.953,-2.061c0.124,-0.396 -0.011,-0.829 -0.339,-1.085c-0.328,-0.256 -0.78,-0.283 -1.135,-0.066c-1.141,0.693 -2.237,1.192 -3.37,1.54c-1.71,-1.659 -4.039,-2.685 -6.61,-2.685c-5.247,0 -9.5,4.253 -9.5,9.5c0,0.005 0,0.203 0,0.5l-0.999,-0.08c-9.723,-1.15 -12.491,-7.69 -12.606,-7.972c-0.186,-0.47 -0.596,-0.813 -1.091,-0.916c-0.494,-0.105 -1.007,0.05 -1.365,0.407c-0.198,0.199 -1.939,2.041 -1.939,5.561c0,2.508 1.118,4.542 2.565,6.124c-0.674,-0.411 -1.067,-0.744 -1.077,-0.753c-0.461,-0.402 -1.121,-0.486 -1.669,-0.208c-0.546,0.279 -0.868,0.862 -0.813,1.473c0.019,0.211 0.445,4.213 5.068,7.235l-0.843,0.153c-0.511,0.093 -0.938,0.444 -1.128,0.928c-0.189,0.485 -0.115,1.032 0.197,1.448c0.105,0.141 2.058,2.68 6.299,4.14c-2.265,0.755 -5.377,1.46 -9.099,1.46c-0.588,0 -1.123,0.344 -1.366,0.88c-0.244,0.536 -0.151,1.165 0.237,1.607c0.161,0.185 4.064,4.513 14.129,4.513c16.713,0 24.5,-15.515 24.5,-26v-0.5c0,-0.148 -0.016,-0.293 -0.022,-0.439c2.092,-2.022 2.879,-3.539 2.917,-3.614c0.189,-0.38 0.119,-0.838 -0.176,-1.142z"></path>
                    </g>
                  </g>
                </svg>
              </a>

              <a
                href="https://instagram.com/whirlxd"
                className="btn btn-circle ml-4 btn-outline btn-secondary"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="30"
                  height="30"
                  viewBox="0,0,256,256"
                  style={{ fill: "#000000" }}
                >
                  <g
                    fill="#ffffff"
                    fill-rule="nonzero"
                    stroke="none"
                    stroke-width="1"
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                    stroke-miterlimit="10"
                    stroke-dasharray=""
                    stroke-dashoffset="0"
                    font-family="none"
                    font-weight="none"
                    font-size="none"
                    text-anchor="none"
                  >
                    <g transform="scale(10.66667,10.66667)">
                      <path d="M8,3c-2.757,0 -5,2.243 -5,5v8c0,2.757 2.243,5 5,5h8c2.757,0 5,-2.243 5,-5v-8c0,-2.757 -2.243,-5 -5,-5zM8,5h8c1.654,0 3,1.346 3,3v8c0,1.654 -1.346,3 -3,3h-8c-1.654,0 -3,-1.346 -3,-3v-8c0,-1.654 1.346,-3 3,-3zM17,6c-0.55228,0 -1,0.44772 -1,1c0,0.55228 0.44772,1 1,1c0.55228,0 1,-0.44772 1,-1c0,-0.55228 -0.44772,-1 -1,-1zM12,7c-2.757,0 -5,2.243 -5,5c0,2.757 2.243,5 5,5c2.757,0 5,-2.243 5,-5c0,-2.757 -2.243,-5 -5,-5zM12,9c1.654,0 3,1.346 3,3c0,1.654 -1.346,3 -3,3c-1.654,0 -3,-1.346 -3,-3c0,-1.654 1.346,-3 3,-3z"></path>
                    </g>
                  </g>
                </svg>
              </a>

              <a
                href="https://github.com/whirlxd"
                className="btn btn-circle ml-4 btn-outline btn-secondary"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="30"
                  height="30"
                  viewBox="0,0,256,256"
                  style={{ fill: "#000000" }}
                >
                  <g
                    fill="#ffffff"
                    fill-rule="nonzero"
                    stroke="none"
                    stroke-width="1"
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                    stroke-miterlimit="10"
                    stroke-dasharray=""
                    stroke-dashoffset="0"
                    font-family="none"
                    font-weight="none"
                    font-size="none"
                    text-anchor="none"
                  >
                    <g transform="scale(10.66667,10.66667)">
                      <path d="M10.9,2.1c-4.6,0.5 -8.3,4.2 -8.8,8.7c-0.6,5 2.5,9.3 6.9,10.7v-2.3c0,0 -0.4,0.1 -0.9,0.1c-1.4,0 -2,-1.2 -2.1,-1.9c-0.1,-0.4 -0.3,-0.7 -0.6,-1c-0.3,-0.1 -0.4,-0.1 -0.4,-0.2c0,-0.2 0.3,-0.2 0.4,-0.2c0.6,0 1.1,0.7 1.3,1c0.5,0.8 1.1,1 1.4,1c0.4,0 0.7,-0.1 0.9,-0.2c0.1,-0.7 0.4,-1.4 1,-1.8c-2.3,-0.5 -4,-1.8 -4,-4c0,-1.1 0.5,-2.2 1.2,-3c-0.1,-0.2 -0.2,-0.7 -0.2,-1.4c0,-0.4 0,-1 0.3,-1.6c0,0 1.4,0 2.8,1.3c0.5,-0.2 1.2,-0.3 1.9,-0.3c0.7,0 1.4,0.1 2,0.3c1.3,-1.3 2.8,-1.3 2.8,-1.3c0.2,0.6 0.2,1.2 0.2,1.6c0,0.8 -0.1,1.2 -0.2,1.4c0.7,0.8 1.2,1.8 1.2,3c0,2.2 -1.7,3.5 -4,4c0.6,0.5 1,1.4 1,2.3v3.3c4.1,-1.3 7,-5.1 7,-9.5c0,-6 -5.1,-10.7 -11.1,-10z"></path>
                    </g>
                  </g>
                </svg>
              </a>
            </AnimationOnScroll>
          </div>
        </div>
      </div>
    </div>
  );
};

export default hero;
