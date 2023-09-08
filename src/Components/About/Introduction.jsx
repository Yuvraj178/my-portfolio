import React from "react";
import "./Introduction.css";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { ThemeContext } from "../../Context/theme";
//import profilePic from "../../assets/Photo_fw14_056.png";


export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <section id="#about">
        <div className="section" data-aos="fade-down">
          <h2 className="section__title">
            About <span className="different">Me</span>
          </h2>
          <div className={"introduction " + themename}>
            <div className="introduction_logocontainer">
             
            </div>
            <div className="introduction_datacontainer">
              <h4>
                Hi Everyone, My name is{" "}
                <span className="different">Yuvraj Singh </span> and I am from{" "}
                <span className="different">
                  {" "}
                  Kota, Rajasthan 
                </span>
                . I am B.Tech Electrical Engineering final year student
                in{" "}
                <span className="different">
                 IIT Indore
                </span>
                . I am good in electrical engineeringand i am also a good student in 
                  Software development and Web development. I have good skills in C/C++
                  along with data structure & algorithms and competitive programming.              
              </h4>
              <h4>My Hobbies :</h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Cooking{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Reading books{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Gardening{" "}
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
