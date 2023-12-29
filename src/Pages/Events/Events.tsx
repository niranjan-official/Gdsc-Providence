// import React from 'react'
import PageHead from "../../components/PageHead/PageHead";
import "./Events.css";
import event_logo from "../../assets/event-logo.svg";
import FadeLeft from "../../styles/FadeLeft";
import FadeRight from "../../styles/FadeRight";
import FadeUp from "../../styles/fadeUp";

const Events = () => {
  return (
    <section id="events" className="bg">
      <div className="w-full h-full">
        <PageHead name="What we do ?" />
        <div className="w-full h-full flex flex-col sm:flex-row overflow-hidden">
          <div className="sm:w-1/2 sm:h-full w-full h-auto sm:pt-14">
            <FadeLeft>
              <img
                src={event_logo}
                alt=""
                className="lg:h-auto lg:w-full lg:relative mt-3 lg:mt-0"
              />
            </FadeLeft>
          </div>

          <div className="lg:w-1/2 lg:h-full w-full p-4 lg:pb-16 lg:text-left text-center flex flex-col items-center justify-center">
            <FadeRight>
              <p className="sm:text-3xl text-justify ">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Tenetur soluta ut quod architecto, dignissimos iste accusantium
                enim libero quia sequi optio sapiente blanditiis vitae
                voluptatem ipsa modi quidem atque ratione. Lorem, ipsum dolor
                sit amet consectetur adipisicing elit.
              </p>
            </FadeRight>
            <FadeUp>
              <button className="w-40 text-xl mt-8 bg-blue-600 hover:bg-blue-700">
                View More
              </button>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
