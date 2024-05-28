import React from "react";

const project = () => {
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src="https://socialify.git.ci/whirlxd/ThyChatsApp/image?description=1&font=Rokkitt&language=1&name=1&owner=1&pattern=Solid&theme=Light"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Shoes!</h2>
          <p>Price: $100</p>
          <br></br>
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default project;
