// import React from 'react'
import PageHead from "../../components/PageHead/PageHead";
import "./Team.css";
import team_logo from "../../assets/team-logo .svg";
import { Link } from "react-router-dom";
import FadeLeft from "../../styles/FadeLeft";
import FadeRight from "../../styles/FadeRight";
import FadeUp from "../../styles/fadeUp";

const Team = () => {
  return (
    <section id="team" className="bg">
      <div className="w-full h-full">
        <PageHead name="Our Team" />
        <div className="w-full h-full flex flex-col-reverse sm:flex-row ">
          <div className="lg:w-1/2 lg:h-full w-full p-4 sm:pb-16 flex flex-col lg:text-left text-center items-center justify-center lg:items-start">
            <FadeLeft>
              <p className="sm:text-3xl text-justify">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Cupiditate nulla doloribus at delectus itaque, similique optio
                temporibus? Minima debitis temporibus ab tempore ut, voluptatum
                in, similique mollitia, architecto deleniti ipsam!
              </p>
            </FadeLeft>
            <FadeUp>
              <Link to="/team/" >
                <button className="w-40 text-xl mt-8 bg-blue-600 hover:bg-blue-700 text-center">
                  View Team
                </button>
              </Link>
            </FadeUp>
          </div>

          <div className="lg:w-1/2 lg:h-full w-full h-auto">
            <FadeRight>
              <img
                src={team_logo}
                alt=""
                className="lg:h-full lg:w-auto lg:relative lg:-top-16 lg:left-10 -z-20"
              />
            </FadeRight>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
