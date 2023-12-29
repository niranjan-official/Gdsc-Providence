// import React from 'react'
import "./PageHead.css";
import FadeDown from "../../styles/fadeDown";
import FadeUp from "../../styles/fadeUp";

interface Name {
  name: string;
}
const PageHead = ({ name }: Name) => {
  return (
    <div className="flex">
      <div className="flex lg:flex-row flex-col items-center team">
        <FadeUp>
          <hr
            className="lg:w-32 lg:block hidden mt-2"
            style={{ borderColor: "#f9ab00" }}
          />
        </FadeUp>
        <FadeDown>
          <h1 className="pl-4 pr-4 text-5xl">{name}</h1>
        </FadeDown>
        <FadeUp>
          <hr className=" w-32 mt-2" style={{ borderColor: "#34a853" }} />
        </FadeUp>
      </div>
    </div>
  );
};

export default PageHead;
