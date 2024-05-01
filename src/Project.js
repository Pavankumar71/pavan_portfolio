import React from "react";
import "./Project.css";
import Image from "./img/pavanss.png";
import Img from "./img/proj2.png";



export default function Projects() {
  return (
    <div id="projects">
      <div className="projects">
        <h1>Projects</h1>
        <div className="project-section">
          <div className="center">
            <div className="one">
              <img src={Image} alt="project" />
              <h2>Developed a clone of Travel Guide</h2>
              <p>
              About
This project is a clone of (Travel Guide). It's a website to choose the best travelling Guide to visits best Places.
              </p> 
              <p>
              Along with 3 other members, build the application in 6 days. each individual page was assigned by individual person. websites which we includes Places page, Home page & Different places.
              </p>
              <p>Teck-Stack: HTML | CSS | Javascript  | React .js</p>

              <a
                href="https://sumalathap.ccbp.tech/"
                target="_blank"
                rel="noreferrer"
              >
                <button className="btn1">Demo</button>
              </a>
              <a
                href="https://github.com/Pavankumar71/BookHub-react-js.git"
                target="_blank"
                rel="noreferrer"
              >
                <button className="btn1">GitHub Link</button>
              </a>
            </div>
            
            {/* <div className="one"> 
              <img src={Img} alt="project" />
              <h2>Developed a clone of Swiggy website</h2>
              <p>
              About
This project is a clone of (Swiggy.com) Swiggy is an Indian online food ordering and delivery platform.
              </p>
              
              <p>
                Along with other 1 member, build the application in 5 days. websites which we includes the features Signin page, Cart page, Offers page, Help Page & Search bar option.
              </p>
              <p>
                Teck-Stack: HTML | CSS | Javascript | React | Redux
              </p>

              <a
                href="https://www.swiggy.com/restaurants"
                target="_blank"
                rel="noreferrer"
              >
                <button>Demo</button>
              </a>
              <a
                href="https://github.com/YogendraRajpoot/Swiggy-Clone.git"
                target="_blank"
                rel="noreferrer"
              >
                <button>GitHub Link</button>
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
