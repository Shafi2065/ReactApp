"use client";
import * as React from "react";
import { gsap } from "gsap";
import Button from "@mui/material/Button";
import "./style.css";
export default function MyApp() {
  const landingTitleRef = React.useRef(null);
  const buttonRef = React.useRef(null);

  React.useEffect(() => {
    gsap.to(landingTitleRef.current, { 
      color: "green", 
      duration: 2,
      repeat: 2,
    });
    gsap.to(buttonRef.current, {
      color: "green",
      duration: 2,
      repeat: 2,
    });
  }, []);
  return (
    <div>
      <h1 ref={landingTitleRef}>Title Placeholder</h1>
      <Button variant="contained" ref={buttonRef}>
        Hello World
      </Button>
    </div>
  );
}
