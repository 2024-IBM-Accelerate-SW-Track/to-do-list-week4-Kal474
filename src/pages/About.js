import React, { Component } from "react";
import "./About.css";
import profile_pic from "../assets/profile_pic.jpg";

export default class About extends Component {
  render() {
    return (
      <div>
        {/* <p>Design your About me page </p> */}
        <div class="split left">
          <div className="centered">
            <img
              className="profile_image"
              src={profile_pic}
              alt="Profile Pic"
            ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Kalkidan Asgedom</div>
            <div className="brief_description">
            Hello! My name is Kalkidan Asgedom and I am a Student at the University of Maryland College Park
                   I am majoring in Computer Science and persuing a career in Software Engineering. During my free 
                   I like to satay acive so I go to the gym or go on a run with my brotheres. I also like spending 
                   time with my friends and family and the being creative in anyway that I can. 
            </div>
          </div>
        </div>
      </div>
    );
  }
}
