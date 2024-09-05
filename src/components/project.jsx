import React from "react";

const project = (props) => {
  return (
    <div>
      <div className="transition-transform duration-150 shadow-xl card w-80 md:w-96 bg-secondary group hover:scale-105">
        <figure className="transition-transform duration-150 ease-in-out border-t-4 border-accent group-hover:scale-75 group-hover:border-t-0 ">
          <img src={props.image} alt="project preview" className="rounded-lg" />
        </figure>
        <div className="items-center text-center card-body">
          <h2 className="card-title">{props.name}</h2>

          <p className="mb-2 italic text-md text-clip">
            {props.des}
            <img
              src={props.stack}
              height={100}
              width={100}
              className="mx-auto text-center"
            />
          </p>

          <div className="card-actions">
            <a
              target="_blank"
              href={props.href}
              className="mt-2 w-36 btn btn-primary hover:bg-opacity-75"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="24"
                height="24"
                viewBox="0,0,256,256"
                fill="currentColor"
                className="fill-black"
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
                  <g transform="scale(10.66667,10.66667)">
                    <path d="M19.98047,2.99023c-0.03726,0.00118 -0.07443,0.00444 -0.11133,0.00977h-4.86914c-0.36064,-0.0051 -0.69608,0.18438 -0.87789,0.49587c-0.18181,0.3115 -0.18181,0.69676 0,1.00825c0.18181,0.3115 0.51725,0.50097 0.87789,0.49587h2.58594l-9.29297,9.29297c-0.26124,0.25082 -0.36647,0.62327 -0.27511,0.97371c0.09136,0.35044 0.36503,0.62411 0.71547,0.71547c0.35044,0.09136 0.72289,-0.01388 0.97371,-0.27511l9.29297,-9.29297v2.58594c-0.0051,0.36064 0.18438,0.69608 0.49587,0.87789c0.3115,0.18181 0.69676,0.18181 1.00825,0c0.3115,-0.18181 0.50097,-0.51725 0.49587,-0.87789v-4.87305c0.04031,-0.29141 -0.04973,-0.58579 -0.24615,-0.80479c-0.19643,-0.219 -0.47931,-0.34042 -0.77338,-0.33192zM5,3c-1.09306,0 -2,0.90694 -2,2v14c0,1.09306 0.90694,2 2,2h14c1.09306,0 2,-0.90694 2,-2v-6c0.0051,-0.36064 -0.18438,-0.69608 -0.49587,-0.87789c-0.3115,-0.18181 -0.69676,-0.18181 -1.00825,0c-0.3115,0.18181 -0.50097,0.51725 -0.49587,0.87789v6h-14v-14h6c0.36064,0.0051 0.69608,-0.18438 0.87789,-0.49587c0.18181,-0.3115 0.18181,-0.69676 0,-1.00825c-0.18181,-0.3115 -0.51725,-0.50097 -0.87789,-0.49587z"></path>
                  </g>
                </g>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default project;
