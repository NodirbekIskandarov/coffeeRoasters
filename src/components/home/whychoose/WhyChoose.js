import React from "react";

function WhyChoose() {
  return (
    <div className="choose">
      <div className="choose_main">
        <div className="choose_text">
          <h3>Why choose us?</h3>
          <p>
            A large part of our role is choosing which particular coffees will
            be featured in our range. This means working closely with the best
            coffee growers to give you a more impactful experience on every
            level.
          </p>
        </div>
      </div>
      <div className="choose_bottom">
        <div className="row">
            <div className="col-4 quality">
                <div className="quality_son">
                    <img src="images/coffee-bean.png" alt="."/>
                    <h3>Best quality</h3>
                    <p>Discover an endless variety of the world’s best artisan coffee from each of our roasters.</p>
                </div>
            </div>
            <div className="col-4 quality">
                <div className="quality_son">
                    <img src="images/coffee-bean.png" alt="."/>
                    <h3>Best quality</h3>
                    <p>Discover an endless variety of the world’s best artisan coffee from each of our roasters.</p>
                </div>
            </div>
            <div className="col-4 quality">
                <div className="quality_son">
                    <img src="images/coffee-bean.png" alt="."/>
                    <h3>Best quality</h3>
                    <p>Discover an endless variety of the world’s best artisan coffee from each of our roasters.</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChoose;
