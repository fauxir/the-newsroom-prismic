import mobileImage from "/home/michael/Desktop/Training/Training/the-newsroom/public/image-web-3-mobile.jpg";
import desktopImage from "/home/michael/Desktop/Training/Training/the-newsroom/public/image-web-3-desktop.jpg";
import Image from "next/image";
import { useEffect } from "react";

function HeroSection() {
  let srcSet = desktopImage;

  useEffect(() => {
    if (window.innerWidth > 900) {
      srcSet = desktopImage;
    } else {
      srcSet = mobileImage;
    }
  });
  // console.log(srcSet); // TODO need to adjust image accoding to screen size

  return (
    <section className="head">
      <Image
        src={srcSet}
        // srcset={`${mobileImage} 320w, ${desktopImage} 1440w`}
        alt="gaming mobile"
      />
      <div className="bottom">
        <div className="font-bold text-6xl">The Bright Future of Web 3.0?</div>
        <div className="writeup">
          <p>
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
            <a href="#read-more" className="btn">Read More</a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
