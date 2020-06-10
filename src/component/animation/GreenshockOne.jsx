import React, { useRef, useEffect } from "react";

import { TweenMax, Power3, gsap } from "gsap";

export default function GreenshockOne() {
  let logoItem = useRef(null);
  let textItem = useRef(null);

  useEffect(() => {
    TweenMax.to(logoItem, 0.8, {
      opacity: 1,
      y: -20,
      ease: Power3.easeInOut,
    });
  }, []);

  return (
    <div>
      <img
        className="w-100"
        src="/assets/images/service/socialmedia-panama.png"
        alt="Service Images"
      />
    
    </div>);
}
