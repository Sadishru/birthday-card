"use client";

import { useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import lottie from "lottie-web";
import loveJson from "../public/love.json";

export default function Welcome() {
  const router = useRouter();
  const animationContainer = useRef(null); // Ref for the animation container
  const [loveLoading, setLoveLoading] = useState(false); // State to control animation visibility

  let tapCount = 0;

  const trackTaps = () => {
    tapCount++;

    if (tapCount === 3) {
      setLoveLoading(true); // Start showing the animation
      setTimeout(() => {
        router.push("/home"); // Navigate to /home after 3 seconds
      }, 3000); // 3-second delay before navigating
    }
    setTimeout(() => (tapCount = 0), 500); // Reset tap count after a short period
  };

  useEffect(() => {
    // Load the Lottie animation when the component is mounted
    if (loveLoading) {
      lottie.loadAnimation({
        container: animationContainer.current, // Ref to the container
        renderer: "svg", // Use SVG rendering
        loop: true, // Make it loop
        autoplay: true, // Auto play the animation
        animationData: loveJson,
      });
    }

    return () => lottie.destroy(); // Cleanup animation on component unmount
  }, [loveLoading]); // Only run this when loveLoading is true

  return (
    <div onClick={trackTaps} className="welcome-container">
      <h1>Babe,</h1>
      <h1>I forgot to buy you a birthday card...</h1>
      <h1>So I created this for you! 💖</h1>

      {/* Show the Lottie animation only when loveLoading is true */}
      {loveLoading && (
        <div
          ref={animationContainer}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)", // Centers the div
            width: "18.75em", // 300px = 18.75em (assuming base font size of 16px)
            height: "18.75em", // 300px = 18.75em (assuming base font size of 16px)
          }}
        ></div>
      )}

      <div className=".second-container">
        <p className="hide">Tap 3 times to open</p>
      </div>
    </div>
  );
}
