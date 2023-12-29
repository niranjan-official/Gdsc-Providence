// import React from 'react'
import "./Home.css";
import logo from "../../assets/gdsc-logo.svg";
import colors from "../../assets/colors.svg";
import Header from "../../components/Header/Header";
import FadeDown from "../../styles/fadeDown";
import FadeUp from "../../styles/fadeUp";
import FadeLeft from "../../styles/FadeLeft";
import FadeRight from "../../styles/FadeRight";

const Home = () => {
  return (
    <section id="home">
      <Header />
      <div className="h-full w-full flex justify-between items-center home">
        <div className="flex flex-col items-center justify-center text-center p-2 w-full h-full  pb-20  home-animate">
          <FadeUp>
            <img src={logo} alt="" className="lg:w-40 w-28 h-auto" />
          </FadeUp>
          <FadeLeft>
            <h1>Google Developer Student Clubs</h1>
          </FadeLeft>
            <FadeRight>
          <div className="flex flex-col justify-center items-center">
              <h2 className="pt-3 lg:pt-0">
                Providence College of Engineering
              </h2>
              <img src={colors} alt="" className="w-36 h-auto mt-2" />
          </div>
            </FadeRight>
          <FadeDown>
            <p className="mt-10">
              " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
              earum delectus aspernatur, aperiam perferendis ""
            </p>
          </FadeDown>
        </div>
      </div>
    </section>
  );
};

export default Home;
