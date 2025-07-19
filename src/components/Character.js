import React, { useEffect, useState, useRef } from "react";

const video = ["vd1", "vd2"];

function Character() {
  const [index, setIndex] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      const nextIndex = (index + 1) % video.length;
      setIndex(nextIndex);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [index]);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, [index]);

  const videoSrc = `./videos/${video[index]}.mp4`;

  return (
    <section className="fixed bottom-10 right-5">
      <video
        width="200"
        height="200"
        autoPlay
        muted
        loop={false}
        ref={videoRef}
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
}

export default Character;
