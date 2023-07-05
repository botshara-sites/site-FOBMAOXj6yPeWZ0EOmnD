import React from "react";
import ThemeProvider from "../theme-provider";
import Navbar from "../defaultNavbar"

import {
  Button,
  Typography,
} from "@material-tailwind/react";

export function HeroSectionFour() {
  return (
    <ThemeProvider>
      <Navbar />
      <header className="h-screen min-h-screen w-screen bg-white">
        <div className="relative h-screen flex align-center flex-col justify-center text-center bg-cover" style={{backgroundImage: `url('https://images.unsplash.com/photo-1520683197291-667c5475ed63?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80')`}}>
          <span className="absolute top-0 left-0 w-full h-full bg-center bg-cover bg-gradient-to-tl from-gray-900 to-slate-900"></span>
          <Typography
            variant="h1"
            color="white"
            className="!leading-tight lg:text-7xl z-20"
          >
            Under Construction
          </Typography>
          <Typography
            variant="lead"
            color="white"
            className="mb-12 w-full opacity-80 md:w-10/12 lg:w-7/12 z-10 mx-auto"
          >
            We&apos;re constantly trying to express ourselves and actualize our
            dreams. If you have the opportunity to play this game.
          </Typography>
          <div className="w-auto mx-auto">
            <div className="flex items-center">
              <Button color="white" className="w-full px-4 z-10">
                Go Home
              </Button>
            </div>
          </div>
        </div>
      </header>
    </ThemeProvider>
  );
}

export default HeroSectionFour;