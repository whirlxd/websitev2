/* eslint-disable react/no-unknown-property */

import Project from "./project";
import { AnimationOnScroll } from "react-animation-on-scroll";
const about = () => {
  return (
    <div className="bg-base-200">
      <section
        id="features"
        className="container min-h-screen px-4 py-8 mx-auto space-y-6 bg-base-200 md:py-12 lg:py-20"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <AnimationOnScroll
            animateIn="fadeInDown"
            animateOnce="true"
            offset={0}
          >
            <h2 className=" special font-bold text-3xl md:text-7xl leading-[1.1] sm:text-3xl  underline ">
              My Stack
            </h2>
          </AnimationOnScroll>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7 text-pretty">
            The Tech Stack I am familiar with and have worked on.
          </p>
        </div>

        <div className="mx-auto grid  gap-5 sm:grid-cols-2 md:max-w-[64rem] grid-cols-2 md:grid-cols-3">
          <AnimationOnScroll animateIn="fadeInUp" animateOnce="true">
            <div className="relative">
              <div className="relative p-2 overflow-hidden transition-transform ease-in-out border-b-4 select-none hover:p-1 hover:border-b-8 hover:scale-105 bg-secondary rounded-3xl hover:font-extrabold hover:shadow-teal-200 hover:border-4 border-primary will-change-transform">
                <div className="flex h-[180px] flex-col justify-between rounded-md p-6 items-center text-center">
                  <div
                    className="text-xl font-bold radial-progress "
                    style={{ "--value": 100 }}
                    role="progressbar"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="30"
                      height="30"
                      viewBox="0,0,256,256"
                      style={{ fill: "#000000;" }}
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
                        // style="mix-blend-mode: normal"
                      >
                        <g transform="scale(8.53333,8.53333)">
                          <path d="M10.67969,4.18164c-0.611,0 -1.17769,0.13678 -1.67969,0.42578c-1.56887,0.90579 -2.16603,3.11312 -1.84961,5.86133c-2.53769,1.10008 -4.15039,2.71992 -4.15039,4.53125c0,1.81133 1.6127,3.43117 4.15039,4.53125c-0.31626,2.7481 0.28074,4.95554 1.84961,5.86133c0.501,0.289 1.06769,0.42578 1.67969,0.42578c1.30263,0 2.80816,-0.65377 4.32031,-1.77539c1.51228,1.12162 3.01964,1.77539 4.32227,1.77539c0.611,0 1.17769,-0.13678 1.67969,-0.42578c1.56886,-0.90579 2.16602,-3.11315 1.84961,-5.86133c2.53674,-1.10007 4.14844,-2.72031 4.14844,-4.53125c0,-1.81133 -1.6127,-3.43117 -4.15039,-4.53125c0.31626,-2.7481 -0.28074,-4.95554 -1.84961,-5.86133c-0.501,-0.29 -1.06769,-0.42578 -1.67969,-0.42578c-1.30263,0 -2.80816,0.65377 -4.32031,1.77539c-1.51224,-1.12162 -3.01814,-1.77539 -4.32031,-1.77539zM10.67969,5.93164c0.78163,0 1.81527,0.41561 2.9375,1.18555c-0.65982,0.62268 -1.30604,1.33074 -1.92774,2.11914c-1.00837,0.14459 -1.95911,0.35536 -2.83984,0.61914c-0.00473,-0.06108 -0.01593,-0.12517 -0.01953,-0.18555c-0.107,-1.78 0.28392,-3.10688 1.04492,-3.54687c0.225,-0.13 0.48769,-0.19141 0.80469,-0.19141zM19.32031,5.93164c0.316,0 0.57969,0.06141 0.80469,0.19141c0.761,0.439 1.15192,1.76687 1.04492,3.54688c-0.00363,0.06038 -0.01478,0.12447 -0.01953,0.18555c-0.88129,-0.26394 -1.83272,-0.47454 -2.8418,-0.61914c-0.62169,-0.78829 -1.26598,-1.49653 -1.92578,-2.11914c1.12215,-0.76981 2.15627,-1.18555 2.9375,-1.18555zM15,8.22852c0.27108,0.24674 0.54027,0.50752 0.8125,0.79297c-0.26978,-0.00906 -0.53813,-0.02148 -0.8125,-0.02148c-0.27371,0 -0.5414,0.01247 -0.81055,0.02148c0.27199,-0.28515 0.53972,-0.54647 0.81055,-0.79297zM15,10.75c0.82869,0 1.61413,0.04632 2.35938,0.12695c0.45449,0.61774 0.9024,1.27086 1.32227,1.99805c0.40243,0.69703 0.7583,1.41049 1.07227,2.125c-0.31401,0.71494 -0.66959,1.4295 -1.07227,2.12695c-0.41856,0.72509 -0.86536,1.374 -1.31836,1.99023c-0.77157,0.08442 -1.56306,0.13281 -2.36328,0.13281c-0.82869,0 -1.61413,-0.04632 -2.35937,-0.12695c-0.45449,-0.61774 -0.9024,-1.26891 -1.32227,-1.99609c-0.40267,-0.69745 -0.75816,-1.41201 -1.07226,-2.12695c0.31388,-0.71451 0.66983,-1.42797 1.07226,-2.125c0.41872,-0.72509 0.86525,-1.37595 1.31836,-1.99219c0.77157,-0.08442 1.56306,-0.13281 2.36328,-0.13281zM19.74609,11.29102c0.39675,0.09579 0.77816,0.19919 1.13672,0.31445c-0.08123,0.36705 -0.18058,0.74114 -0.29297,1.11914c-0.12868,-0.24147 -0.25347,-0.48371 -0.39258,-0.72461c-0.14313,-0.2478 -0.30202,-0.47044 -0.45117,-0.70898zM10.25195,11.29297c-0.14865,0.23781 -0.30655,0.46002 -0.44922,0.70703c-0.13907,0.24094 -0.26394,0.48311 -0.39258,0.72461c-0.11265,-0.37878 -0.21361,-0.75331 -0.29492,-1.12109c0.36514,-0.11537 0.7456,-0.21753 1.13672,-0.31055zM7.46875,12.24609c0.2107,0.88962 0.50298,1.81182 0.87891,2.75195c-0.37513,0.9379 -0.66618,1.85841 -0.87695,2.74609c-1.74147,-0.84094 -2.7207,-1.88777 -2.7207,-2.74414c0,-0.879 0.95188,-1.88073 2.54688,-2.67773c0.05444,-0.02724 0.11625,-0.04957 0.17188,-0.07617zM22.5293,12.25586c1.74147,0.84094 2.7207,1.88777 2.7207,2.74414c0,0.879 -0.95188,1.88073 -2.54687,2.67773c-0.05444,0.02723 -0.11625,0.04957 -0.17187,0.07617c-0.21082,-0.89014 -0.50071,-1.81321 -0.87695,-2.75391c0.37468,-0.93709 0.66441,-1.8572 0.875,-2.74414zM15,13c-1.105,0 -2,0.895 -2,2c0,1.105 0.895,2 2,2c1.105,0 2,-0.895 2,-2c0,-1.105 -0.895,-2 -2,-2zM9.41016,17.27539c0.12872,0.24156 0.25537,0.48362 0.39453,0.72461c0.14297,0.24762 0.30023,0.47061 0.44922,0.70898c-0.39675,-0.09579 -0.77816,-0.19919 -1.13672,-0.31445c0.08129,-0.36728 0.18048,-0.7409 0.29297,-1.11914zM20.58984,17.27734c0.11252,0.37842 0.21367,0.75171 0.29492,1.11914c-0.36514,0.11537 -0.7456,0.21753 -1.13672,0.31055c0.14865,-0.23781 0.30655,-0.46002 0.44922,-0.70703c0.13878,-0.24044 0.26418,-0.48166 0.39258,-0.72266zM8.84961,20.14453c0.88129,0.26394 1.83272,0.47454 2.8418,0.61914c0.62188,0.78867 1.26568,1.49826 1.92578,2.12109c-1.12215,0.76972 -2.15592,1.18555 -2.9375,1.18555c-0.316,0 -0.57969,-0.06336 -0.80469,-0.19336c-0.761,-0.439 -1.15192,-1.76492 -1.04492,-3.54492c0.00366,-0.06101 0.01472,-0.12578 0.01953,-0.1875zM21.15039,20.14453c0.00479,0.06172 0.01589,0.12649 0.01953,0.1875c0.107,1.78 -0.28392,3.10492 -1.04492,3.54492c-0.225,0.13 -0.48769,0.19336 -0.80469,0.19336c-0.78158,0 -1.81535,-0.4157 -2.9375,-1.18555c0.66015,-0.6229 1.30573,-1.33231 1.92773,-2.12109c1.00837,-0.14459 1.95911,-0.35536 2.83984,-0.61914zM14.1875,20.97852c0.26978,0.00906 0.53813,0.02148 0.8125,0.02148c0.27437,0 0.54272,-0.01242 0.8125,-0.02148c-0.27223,0.28545 -0.54142,0.54625 -0.8125,0.79297c-0.27108,-0.24674 -0.54027,-0.50752 -0.8125,-0.79297z"></path>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <h1 className="pt-2 text-xl extrabold ">React</h1>
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold"></h3>
                  <p className="text-sm text-muted-foreground"></p>
                </div>
              </div>
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="fadeInUp" animateOnce="true">
            <div className="relative p-2 overflow-hidden transition-transform ease-in-out border-b-4 select-none hover:p-1 hover:border-b-8 hover:scale-105 rounded-3xl hover:font-extrabold hover:shadow-teal-200 bg-secondary hover:border-4 border-primary">
              <div className="flex h-[180px] flex-col justify-between rounded-md p-6 items-center text-center">
                <div
                  className="text-xl font-bold radial-progress "
                  style={{ "--value": 100 }}
                  role="progressbar"
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
                      // style="mix-blend-mode: normal"
                    >
                      <g transform="scale(8,8)">
                        <path d="M15.99414,3c-0.365,0 -0.72992,0.08953 -1.04492,0.26953l-9.91016,5.7207c-0.64,0.37 -1.03906,1.07055 -1.03906,1.81055v10.37891c0,0.75 0.39906,1.44055 1.03906,1.81055l2.60156,1.5c1.26,0.62 1.7093,0.61914 2.2793,0.61914c1.87,0 2.93945,-1.12984 2.93945,-3.08984v-10.70898c0,-0.16 -0.12906,-0.29102 -0.28906,-0.29102h-1.25c-0.17,0 -0.29101,0.13102 -0.29101,0.29102v10.69922c0,0.88 -0.90891,1.73977 -2.37891,1.00977l-2.7207,-1.57031c-0.1,-0.05 -0.16016,-0.15953 -0.16016,-0.26953v-10.36914c0,-0.12 0.06016,-0.22125 0.16016,-0.28125l9.91016,-5.71875c0.09,-0.06 0.21055,-0.06 0.31055,0l9.91016,5.71875c0.1,0.06 0.16016,0.16148 0.16016,0.27148v10.37891c0,0.11 -0.06039,0.21953 -0.15039,0.26953l-9.91992,5.73047c-0.09,0.05 -0.22055,0.05 -0.31055,0l-2.55078,-1.50977c-0.07,-0.05 -0.16828,-0.05953 -0.23828,-0.01953c-0.71,0.4 -0.84,0.44969 -1.5,0.67969c-0.16,0.05 -0.41016,0.14969 0.08984,0.42969l3.30859,1.96094c0.32,0.18 0.68102,0.2793 1.04101,0.2793c0.37,0 0.72883,-0.0993 1.04883,-0.2793l9.92188,-5.73047c0.64,-0.37 1.03906,-1.06055 1.03906,-1.81055v-10.36914c0,-0.75 -0.39906,-1.44055 -1.03906,-1.81055l-9.92188,-5.73047c-0.315,-0.18 -0.67992,-0.26953 -1.04492,-0.26953zM18.66016,11.00586c-2.83,0 -4.51953,1.19922 -4.51953,3.19922c0,2.17 1.67844,2.76906 4.39844,3.03906c3.25,0.32 3.5,0.80141 3.5,1.44141c0,1.1 -0.88852,1.57031 -2.97852,1.57031c-2.63,0 -3.21039,-0.66094 -3.40039,-1.96094c-0.02,-0.14 -0.1393,-0.24023 -0.2793,-0.24023h-1.29101c-0.16,0 -0.2793,0.13125 -0.2793,0.28125c0,1.67 0.91,3.6582 5.25,3.6582c3.14,0 4.93945,-1.23844 4.93945,-3.39844c0,-2.14 -1.45023,-2.71109 -4.49023,-3.12109c-3.09,-0.4 -3.40039,-0.61008 -3.40039,-1.33008c0,-0.6 0.27078,-1.38867 2.55078,-1.38867c2.03,0 2.78961,0.43859 3.09961,1.80859c0.03,0.13 0.1393,0.23047 0.2793,0.23047h1.29102c0.08,0 0.14898,-0.03961 0.20898,-0.09961c0.05,-0.05 0.08031,-0.1307 0.07031,-0.2207c-0.2,-2.36 -1.76922,-3.46875 -4.94922,-3.46875z"></path>
                      </g>
                    </g>
                  </svg>
                </div>
                <h1 className="pt-2 text-xl extrabold ">Node</h1>
              </div>
              <div className="space-y-2">
                <h3 className="font-bold"></h3>
                <p className="text-sm text-muted-foreground"></p>
              </div>
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="fadeInUp" animateOnce="true">
            <div className="relative p-2 overflow-hidden transition-transform ease-in-out border-b-4 select-none hover:p-1 hover:border-b-8 hover:scale-105 rounded-3xl hover:font-extrabold hover:shadow-teal-200 bg-secondary hover:border-4 border-primary">
              <div className="flex h-[180px] flex-col justify-between rounded-md p-6 items-center text-center">
                <div
                  className="text-xl font-bold radial-progress "
                  style={{ "--value": 100 }}
                  role="progressbar"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0,0,256,256"
                    // style="fill:#000000;"
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
                      // style="mix-blend-mode: normal"
                    >
                      <g transform="scale(5.12,5.12)">
                        <path d="M25,2c-4.05859,0 -6.8125,0.96875 -8.5625,2.375c-1.75,1.40625 -2.4375,3.21484 -2.4375,4.71875v4.90625h10v1h-14.90625c-1.82812,0 -3.68359,0.79297 -5,2.46875c-1.31641,1.67578 -2.09375,4.17578 -2.09375,7.53125c0,3.35547 0.77734,5.85547 2.09375,7.53125c1.31641,1.67578 3.17188,2.46875 5,2.46875h4.90625v5.90625c0,1.50391 0.6875,3.3125 2.4375,4.71875c1.75,1.40625 4.50391,2.375 8.5625,2.375c4.05859,0 6.8125,-0.96875 8.5625,-2.375c1.75,-1.40625 2.4375,-3.21484 2.4375,-4.71875v-4.90625h-10v-1h14.90625c1.82813,0 3.68359,-0.79297 5,-2.46875c1.31641,-1.67578 2.09375,-4.17578 2.09375,-7.53125c0,-3.35547 -0.77734,-5.85547 -2.09375,-7.53125c-1.31641,-1.67578 -3.17187,-2.46875 -5,-2.46875h-4.90625v-5.90625c0,-1.54297 -0.68359,-3.35547 -2.4375,-4.75c-1.75391,-1.39453 -4.50781,-2.34375 -8.5625,-2.34375zM25,4c3.74609,0 6.01563,0.875 7.3125,1.90625c1.29688,1.03125 1.6875,2.23047 1.6875,3.1875v11.90625c0,1.65625 -1.34375,3 -3,3h-12c-2.05859,0 -3.83203,1.26953 -4.59375,3.0625c-0.12891,0.29688 -0.24609,0.61328 -0.3125,0.9375c-0.06641,0.32422 -0.09375,0.65625 -0.09375,1v4h-4.90625c-1.26953,0 -2.44531,-0.49609 -3.40625,-1.71875c-0.96094,-1.22266 -1.6875,-3.23828 -1.6875,-6.28125c0,-3.04297 0.72656,-5.05859 1.6875,-6.28125c0.96094,-1.22266 2.13672,-1.71875 3.40625,-1.71875h16.90625v-5h-10v-2.90625c0,-0.89453 0.38672,-2.11328 1.6875,-3.15625c1.30078,-1.04297 3.57031,-1.9375 7.3125,-1.9375zM20,7c-1.10156,0 -2,0.89844 -2,2c0,1.10156 0.89844,2 2,2c1.10156,0 2,-0.89844 2,-2c0,-1.10156 -0.89844,-2 -2,-2zM36,17h4.90625c1.26953,0 2.44531,0.49609 3.40625,1.71875c0.96094,1.22266 1.6875,3.23828 1.6875,6.28125c0,3.04297 -0.72656,5.05859 -1.6875,6.28125c-0.96094,1.22266 -2.13672,1.71875 -3.40625,1.71875h-16.90625v5h10v2.90625c0,0.89453 -0.38672,2.11328 -1.6875,3.15625c-1.30078,1.04297 -3.57031,1.9375 -7.3125,1.9375c-3.74219,0 -6.01172,-0.89453 -7.3125,-1.9375c-1.30078,-1.04297 -1.6875,-2.26172 -1.6875,-3.15625v-11.90625c0,-0.20703 0.02344,-0.39844 0.0625,-0.59375c0.28125,-1.36719 1.48828,-2.40625 2.9375,-2.40625h12c2.74609,0 5,-2.25391 5,-5zM30,39c-1.10156,0 -2,0.89844 -2,2c0,1.10156 0.89844,2 2,2c1.10156,0 2,-0.89844 2,-2c0,-1.10156 -0.89844,-2 -2,-2z"></path>
                      </g>
                    </g>
                  </svg>
                </div>
                <h1 className="pt-2 text-xl extrabold ">Python</h1>
              </div>
              <div className="space-y-2">
                <h3 className="font-bold"></h3>
                <p className="text-sm text-muted-foreground"></p>
              </div>
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="fadeInUp" animateOnce="true">
            <div className="relative">
              <div className="relative p-2 overflow-hidden transition-transform ease-in-out border-b-4 select-none hover:p-1 hover:border-b-8 hover:scale-105 rounded-3xl hover:font-extrabold hover:shadow-teal-200 bg-secondary hover:border-4 border-primary">
                <div className="flex h-[180px] flex-col justify-between rounded-md p-6 items-center text-center">
                  <div
                    className="text-xl font-bold radial-progress "
                    style={{ "--value": 100 }}
                    role="progressbar"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="30"
                      height="30"
                      viewBox="0,0,256,256"
                      // style="fill:#000000;"
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
                        // style="mix-blend-mode: normal"
                      >
                        <g transform="scale(5.12,5.12)">
                          <path d="M25,0c-5.64453,0 -10.76953,1.01172 -14.5625,2.71875c-1.89453,0.85156 -3.45703,1.88281 -4.59375,3.09375c-1.13672,1.21094 -1.84375,2.64453 -1.84375,4.1875v9.8125c-0.00781,0.0625 -0.00781,0.125 0,0.1875v9.8125c-0.00781,0.0625 -0.00781,0.125 0,0.1875v9c0,1.54297 0.70703,2.97656 1.84375,4.1875c1.13672,1.21094 2.69922,2.24219 4.59375,3.09375c3.79297,1.70703 8.91797,2.71875 14.5625,2.71875c5.64453,0 10.76953,-1.01172 14.5625,-2.71875c1.89453,-0.85156 3.45703,-1.88281 4.59375,-3.09375c1.13672,-1.21094 1.84375,-2.64453 1.84375,-4.1875v-29c0,-1.54297 -0.70703,-2.97656 -1.84375,-4.1875c-1.13672,-1.21094 -2.69922,-2.24219 -4.59375,-3.09375c-3.79297,-1.70703 -8.91797,-2.71875 -14.5625,-2.71875zM25,2c5.40234,0 10.27344,1.01172 13.71875,2.5625c1.72266,0.77344 3.08203,1.67969 3.96875,2.625c0.88672,0.94531 1.3125,1.87109 1.3125,2.8125c0,0.94141 -0.42578,1.86719 -1.3125,2.8125c-0.88672,0.94531 -2.24609,1.85156 -3.96875,2.625c-3.44531,1.55078 -8.31641,2.5625 -13.71875,2.5625c-5.40234,0 -10.27344,-1.01172 -13.71875,-2.5625c-1.72266,-0.77344 -3.08203,-1.67969 -3.96875,-2.625c-0.88672,-0.94531 -1.3125,-1.87109 -1.3125,-2.8125c0,-0.94141 0.42578,-1.86719 1.3125,-2.8125c0.88672,-0.94531 2.24609,-1.85156 3.96875,-2.625c3.44531,-1.55078 8.31641,-2.5625 13.71875,-2.5625zM6,14.34375c1.12109,1.14453 2.62109,2.12109 4.4375,2.9375c3.79297,1.70703 8.91797,2.71875 14.5625,2.71875c5.64453,0 10.76953,-1.01172 14.5625,-2.71875c1.81641,-0.81641 3.31641,-1.79297 4.4375,-2.9375v5.5c0,0.03125 0,0.0625 0,0.09375v0.0625c0,0.94141 -0.42578,1.86719 -1.3125,2.8125c-0.88672,0.94531 -2.24609,1.85156 -3.96875,2.625c-3.44531,1.55078 -8.31641,2.5625 -13.71875,2.5625c-5.40234,0 -10.27344,-1.01172 -13.71875,-2.5625c-1.72266,-0.77344 -3.08203,-1.67969 -3.96875,-2.625c-0.88672,-0.94531 -1.3125,-1.87109 -1.3125,-2.8125c0.00781,-0.0625 0.00781,-0.125 0,-0.1875zM6,24.34375c1.12109,1.14453 2.62109,2.12109 4.4375,2.9375c3.79297,1.70703 8.91797,2.71875 14.5625,2.71875c5.64453,0 10.76953,-1.01172 14.5625,-2.71875c1.81641,-0.81641 3.31641,-1.79297 4.4375,-2.9375v5.5c0,0.03125 0,0.0625 0,0.09375v0.0625c0,0.94141 -0.42578,1.86719 -1.3125,2.8125c-0.88672,0.94531 -2.24609,1.85156 -3.96875,2.625c-3.44531,1.55078 -8.31641,2.5625 -13.71875,2.5625c-5.40234,0 -10.27344,-1.01172 -13.71875,-2.5625c-1.72266,-0.77344 -3.08203,-1.67969 -3.96875,-2.625c-0.88672,-0.94531 -1.3125,-1.87109 -1.3125,-2.8125c0.00781,-0.0625 0.00781,-0.125 0,-0.1875zM6,34.34375c1.12109,1.14453 2.62109,2.12109 4.4375,2.9375c3.79297,1.70703 8.91797,2.71875 14.5625,2.71875c5.64453,0 10.76953,-1.01172 14.5625,-2.71875c1.81641,-0.81641 3.31641,-1.79297 4.4375,-2.9375v4.65625c0,0.94141 -0.42578,1.86719 -1.3125,2.8125c-0.88672,0.94531 -2.24609,1.85156 -3.96875,2.625c-3.44531,1.55078 -8.31641,2.5625 -13.71875,2.5625c-5.40234,0 -10.27344,-1.01172 -13.71875,-2.5625c-1.72266,-0.77344 -3.08203,-1.67969 -3.96875,-2.625c-0.88672,-0.94531 -1.3125,-1.87109 -1.3125,-2.8125z"></path>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <h1 className="pt-2 text-xl extrabold ">SQL</h1>
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold"></h3>
                  <p className="text-sm text-muted-foreground"></p>
                </div>
              </div>
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="fadeInUp" animateOnce="true">
            <div className="relative p-2 overflow-hidden transition-transform ease-in-out border-b-4 select-none hover:p-1 hover:border-b-8 hover:scale-105 rounded-3xl hover:font-extrabold hover:shadow-teal-200 bg-secondary hover:border-4 border-primary">
              <div className="flex h-[180px] flex-col justify-between rounded-md p-6 items-center text-center">
                <div
                  className="text-xl font-bold radial-progress "
                  style={{ "--value": 100 }}
                  role="progressbar"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="#fff"
                  >
                    <path d="M18 13c-1.858 0-3.489-1.297-5.748-3.092C10.731 8.699 7.246 8.289 6.7 8.714L5.293 7.293C7.346 5.239 8.586 4 11 4c3.018 0 5.214 1.688 6.979 3.046.554.425 1.077.827 1.527 1.092.342.201 1.073.436 1.685.253.391-.115.689-.39.914-.838l1.834.789C22.879 11.259 20.659 13 18 13zM8.983 6.633c1.707.234 3.512.913 4.514 1.709C15.632 10.04 16.894 11 18 11c.745 0 1.435-.207 2.042-.599-.611-.097-1.158-.31-1.548-.539-.557-.328-1.128-.767-1.732-1.231C15.156 7.397 13.337 6 11 6 10.214 6 9.641 6.176 8.983 6.633zM13 20c-1.858 0-3.489-1.297-5.748-3.092C5.732 15.7 2.246 15.287 1.7 15.714l-1.407-1.421C2.346 12.239 3.586 11 6 11c3.018 0 5.214 1.688 6.979 3.046.554.425 1.077.827 1.527 1.092.342.201 1.073.433 1.685.253.391-.115.689-.39.914-.838l1.834.789C17.879 18.259 15.659 20 13 20zM3.983 13.633c1.707.234 3.512.913 4.514 1.709C10.632 17.04 11.894 18 13 18c.745 0 1.435-.207 2.042-.599-.611-.097-1.158-.31-1.548-.539-.557-.328-1.128-.767-1.732-1.231C10.156 14.397 8.337 13 6 13 5.214 13 4.641 13.176 3.983 13.633z"></path>
                  </svg>
                </div>
                <h1 className="pt-2 text-xl extrabold ">Tailwind</h1>
              </div>
              <div className="space-y-2">
                <h3 className="font-bold"></h3>
                <p className="text-sm text-muted-foreground"></p>
              </div>
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="fadeInUp" animateOnce="true">
            <div className="relative p-2 overflow-hidden transition-transform ease-in-out border-b-4 select-none hover:p-1 hover:scale-105 rounded-3xl hover:font-extrabold hover:shadow-teal-200 bg-secondary hover:border-4 border-primary hover:border-b-8">
              <div className="flex h-[180px] flex-col justify-between rounded-md p-6 items-center text-center">
                <div
                  className="text-xl font-bold radial-progress "
                  style={{ "--value": 100 }}
                  role="progressbar"
                >
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 32 32"
                    fill="#fff"
                  >
                    <path
                      d="M0 0 C3.5625 1.5625 3.5625 1.5625 6 4 C6.875 7.75 6.875 7.75 7 11 C4.25 11.25 4.25 11.25 1 11 C-0.33333333 9.66666667 -1.66666667 8.33333333 -3 7 C-6.3321498 7.19198522 -6.3321498 7.19198522 -9 9 C-9.23819228 11.29615554 -9.23819228 11.29615554 -9.25 13.9375 C-9.27578125 14.83339844 -9.3015625 15.72929687 -9.328125 16.65234375 C-9.21984375 17.42707031 -9.1115625 18.20179687 -9 19 C-6.24104365 21.29637779 -6.24104365 21.29637779 -3.4375 20.75 C-0.84999433 20.16191948 -0.84999433 20.16191948 1 18 C4.125 17.875 4.125 17.875 7 18 C6.39053254 23.4852071 6.39053254 23.4852071 4.625 25.8125 C0.59561939 28.75704737 -4.23903317 28.46100911 -9 28 C-13.27443772 26.23447138 -14.94721566 24.07673744 -17 20 C-17.3984375 17.0625 -17.3984375 17.0625 -17.375 14 C-17.38273437 12.989375 -17.39046875 11.97875 -17.3984375 10.9375 C-16.82023476 6.67467196 -15.21388978 4.1509287 -12.1171875 1.21484375 C-8.26589188 -0.99503252 -4.29551565 -0.59528406 0 0 Z M-13 5 C-14.90644098 8.05561969 -15.2718013 10.42458668 -15.25 14 C-15.25515625 14.845625 -15.2603125 15.69125 -15.265625 16.5625 C-14.98025415 19.18119719 -14.38832128 20.77481607 -13 23 C-10.13639535 25.29088372 -8.20759371 25.96980455 -4.5625 26.5 C0.11941359 25.84288932 1.66212868 24.25645983 5 21 C4.01 20.67 3.02 20.34 2 20 C1.4740625 20.7425 1.4740625 20.7425 0.9375 21.5 C-2.02552179 23.79395236 -4.37042697 23.38888282 -8 23 C-10.0851971 21.43732301 -10.87875535 20.43452782 -11.58203125 17.9140625 C-12.37828291 10.0055291 -12.37828291 10.0055291 -10 6 C-6.90826248 4.45413124 -4.40570448 4.70640479 -1 5 C1.4375 7 1.4375 7 3 9 C3.66 8.67 4.32 8.34 5 8 C2.45395403 4.47618313 2.45395403 4.47618313 -1 2 C-5.97067782 1.6248545 -9.05151502 1.84121201 -13 5 Z "
                      fill="#fff"
                      transform="translate(20,1)"
                    />
                  </svg>
                </div>

                <h1 className="pt-2 text-xl extrabold ">C Language</h1>
              </div>

              <div className="space-y-2">
                <h3 className="font-bold"></h3>
                <p className="text-sm text-muted-foreground"></p>
              </div>
            </div>
          </AnimationOnScroll>
        </div>
      </section>

      <AnimationOnScroll animateIn="fadeInDown" animateOnce="true">
        <h2 className=" special font-bold text-3xl md:text-7xl leading-[1.1] sm:text-3xl  underline text-center">
          My Road
        </h2>
      </AnimationOnScroll>
      <br></br>
      <br></br>
      <AnimationOnScroll animateIn="fadeInUp" animateOnce="true">
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical bg-base-200">
          <li>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="mb-10 timeline-start md:text-end">
              <time className="font-mono italic">2024</time>
              <div className="text-lg font-black ">Learnt working with AI</div>
              <p className="text-gray-400 text-clip">
                Recently got on the AI hype train
              </p>
            </div>

            <hr className="bg-accent" />
          </li>

          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="mb-10 timeline-end">
              <time className="font-mono italic">2023</time>
              <div className="text-lg font-black">
                Learnt Editing & UI/UX Design
              </div>
              <p className="text-gray-400 text-balanced">
                Focused more on creative parts like UI/UX design and VFX
              </p>
            </div>
            <hr className="bg-primary" />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="mb-10 timeline-start md:text-end">
              <time className="font-mono italic">2022</time>
              <div className="text-lg font-black">
                Learnt Programming Languages
              </div>
              <p className="text-gray-400 text-ellipsis">
                Started learning c++ and react
              </p>
            </div>
            <hr className="bg-accent" />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="mb-10 timeline-end">
              <time className="font-mono italic">2021</time>
              <div className="text-lg font-black">
                Learnt Scripting Languages
              </div>
              <p className="text-gray-400 text-clip">
                Had my first experience with javascript and python
              </p>
            </div>
            <hr className="bg-primary" />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="mb-10 timeline-start md:text-end">
              <time className="font-mono italic">2019 & 2020</time>
              <div className="text-lg font-black">
                Learnt Visual Basic & Scratch
              </div>
            </div>
          </li>
        </ul>
      </AnimationOnScroll>
      <br></br>
      <br></br>
      <AnimationOnScroll animateIn="fadeInDown" animateOnce="true">
        <h2 className=" special font-bold text-3xl md:text-7xl leading-[1.1] sm:text-3xl  underline text-center">
          My Projects
        </h2>
      </AnimationOnScroll>
      <br></br>
      <br></br>

      <div className="hero ">
        <div className="text-center align-center ">
          <div className="grid grid-cols-1 gap-4 text-center md:grid-cols-2 lg:grid-cols-3 ">
            <div>
              <AnimationOnScroll animateIn="fadeInUp" animateOnce="true">
                <Project
                  name="IMG to PDF"
                  href="https://github.com/whirlxd/IMG-To-PDF "
                  des="Lightweight Image to PDF converter"
                  stack="https://skillicons.dev/icons?i=typescript,nodejs,react,tailwind"
                  image="https://socialify.git.ci/whirlxd/IMG-To-PDF/image?description=1&font=Rokkitt&language=1&name=1&owner=1&theme=Light"
                />
              </AnimationOnScroll>
            </div>
            <div>
              <AnimationOnScroll animateIn="fadeInUp" animateOnce="true">
                <Project
                  name="Musico"
                  href="https://github.com/whirlxd/musico "
                  stack="https://skillicons.dev/icons?i=js,nodejs,discordjs,discord"
                  des="An open source all in one music bot"
                  image="https://socialify.git.ci/whirlxd/Musico/image?description=1&font=Rokkitt&language=1&name=1&owner=1&theme=Light"
                />
              </AnimationOnScroll>
            </div>
            <div>
              <AnimationOnScroll animateIn="fadeInUp" animateOnce="true">
                <Project
                  name="NPC Comment Blocker"
                  href="https://github.com/whirlxd/npc-comment-blocker"
                  stack="https://skillicons.dev/icons?i=js,html,gcp,tailwind"
                  des="Extension to block NPC comments"
                  image="https://socialify.git.ci/whirlxd/npc-comment-blocker/image?description=1&language=1&name=1&owner=1&theme=Light"
                />
              </AnimationOnScroll>
            </div>
            <div>
              <AnimationOnScroll animateIn="fadeInUp" animateOnce="true">
                <Project
                  name="Welcomer Bot"
                  href="https://github.com/whirlxd/welcomer "
                  stack="https://skillicons.dev/icons?i=js,nodejs,discordjs,discord"
                  des="Bot to welcome new members in a server"
                  image="https://socialify.git.ci/whirlxd/Welcomer/image?description=1&descriptionEditable=%20An%20open%20source%20highly%20customizable%20and%20easy%20to%20use%20welcomer%20bot.&font=Rokkitt&language=1&name=1&owner=1&theme=Light"
                />
              </AnimationOnScroll>
            </div>
            <div>
              <AnimationOnScroll animateIn="fadeInUp" animateOnce="true">
                <Project
                  name="SpotifyDL"
                  href="https://github.com/whirlxd/SpotifyDL "
                  stack="https://skillicons.dev/icons?i=js,nodejs,windows,bash"
                  des="Convert spotify playlists to mp3 files"
                  image="https://socialify.git.ci/whirlxd/SpotifyDL/image?description=1&descriptionEditable=%20a%20simple%20nodejs%20program%20to%20convert%20spotify%20playlists%20to%20mp3%20files&font=Rokkitt&language=1&name=1&owner=1&theme=Light"
                />
              </AnimationOnScroll>
            </div>
            <div>
              <AnimationOnScroll animateIn="fadeInUp" animateOnce="true">
                <Project
                  name="Text Editor"
                  href="https://github.com/whirlxd/text-editor "
                  stack="https://skillicons.dev/icons?i=react,vite,nodejs,markdown"
                  des="Simple text editor with basic features"
                  image="https://socialify.git.ci/whirlxd/Text-Editor/image?description=1&language=1&name=1&owner=1&theme=Light"
                />
              </AnimationOnScroll>
            </div>
            <br></br>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
