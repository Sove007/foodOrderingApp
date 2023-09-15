import React, { useState } from "react";

const Section = ({ title, description, isVisible, setIsvisible }) => {
  return (
    <div className="border border-black p-2 m-2">
      <h3 className="font-bold text-lg">{title}</h3>

      {isVisible ? (
        <>
          <button
            onClick={() => setIsvisible(false)}
            className="underline font-bold"
          >
            Hide
          </button>
          <p>{description}</p>
        </>
      ) : (
        <button
          onClick={() => setIsvisible(true)}
          className="underline font-bold m-2"
        >
          Show
        </button>
      )}
    </div>
  );
};

const Instamart = () => {
  const [visibleSection, setVisibleSection] = useState("team");
  return (
    <>
      <h1 className="text-3xl p-2 m-2 font-bold">Instamart</h1>
      <Section
        title={"About Instamart"}
        description={
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis earum ducimus magnam est perferendis odit, beatae voluptatem nisi ipsum debitis et iure, pariatur dolor. Numquam ipsam nesciunt animi illum maxime soluta alias ex quasi placeat odit consectetur quod deserunt magni deleniti cumque quibusdam, sequi suscipit!"
        }
        isVisible={visibleSection === "about"}
        setIsvisible={() => setVisibleSection("about")}
      />
      <Section
        title={"Team Instamart"}
        description={
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis earum ducimus magnam est perferendis odit, beatae voluptatem nisi ipsum debitis et iure, pariatur dolor. Numquam ipsam nesciunt animi illum maxime soluta alias ex quasi placeat odit consectetur quod deserunt magni deleniti cumque quibusdam, sequi suscipit!"
        }
        isVisible={visibleSection === "team"}
        setIsvisible={() => setVisibleSection("team")}
      />
      <Section
        title={"Career"}
        description={
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis earum ducimus magnam est perferendis odit, beatae voluptatem nisi ipsum debitis et iure, pariatur dolor. Numquam ipsam nesciunt animi illum maxime soluta alias ex quasi placeat odit consectetur quod deserunt magni deleniti cumque quibusdam, sequi suscipit!"
        }
        isVisible={visibleSection === "Career"}
        setIsvisible={() => setVisibleSection("Career")}
      />
    </>
  );
};

export default Instamart;
