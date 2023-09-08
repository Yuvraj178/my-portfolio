import React from "react";
import "./Projects.css";
import img1 from "C:/Users/91889/Downloads/my personal portfolio/portfolio-app/src/Captcha.png";
import img2 from "C:/Users/91889/Downloads/my personal portfolio/portfolio-app/src/Drawing-app.png";
import img3 from "C:/Users/91889/Downloads/my personal portfolio/portfolio-app/src/Quiz-app.png";
import img4 from "C:/Users/91889/Downloads/my personal portfolio/portfolio-app/src/Expense.png";

export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different">Projects</h2>
        <div className="allProjects">
          <div className="projects_container" data-aos="flip-down">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src={img3} alt="Quiz-app"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Quiz App</h2>
                <p>
                  This is a Quiz app. Here I put 15 questions related to web development like as: HTML, CSS, Javascript and React.
                  I used basic to medium react to develope this quiz.
                </p>
                <div>
                  
                </div>
                <div>
                  
                  <a
                    href="https://github.com/Yuvraj178/Quiz-app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                  <a
                    href=" https://yuvraj178.github.io/Quiz-app/ "
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      Open Link
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="projects_container" data-aos="flip-down">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src={img4} alt="Expense-Tracker" />
                </div>
              </div>
              <div className="project_information">
                <h2>Expanse Tracker</h2>
                <p>
                  This is a Expense tracker app. Where we can note our expenses record. this is useful for every one.
                  react.js used in this Expense tracker app.
                </p>
                <div>
                  
                </div>
                <div>
                  <a
                    href="https://github.com/Yuvraj178/expense-tracker"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                  <a
                    href=" https://yuvraj178.github.io/expense-tracker/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      Open Link
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="projects_container" data-aos="flip-down">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src={img2} alt="Drawing-app" />
                </div>
              </div>
              <div className="project_information">
                <h2>Drawing App</h2>
                <p>
                  This is a Drawing app. Where we can draw a painting in a sheet and we can download
                  this painting. I used Canvas to develop this drawing app. This is a javascript project. 
                </p>
                <div>
                  
                </div>
                <div>
                  <a
                    href="https://github.com/Yuvraj178/drawing-app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                  <a
                    href="https://yuvraj178.github.io/drawing-app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      Open Link
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="projects_container" data-aos="flip-down">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src={img1} alt="Captcha-Generator" />
                </div>
              </div>
              <div className="project_information">
                <h2>Captcha Generator</h2>
                <p>
                  This is Captcha generator app where we put captcha then this app show us that 
                  This captcha is right and wrong. This project based on javascript.
                </p>
                <div>
                  
                </div>
                <div>
                  <a
                    href="https://github.com/Yuvraj178/Captcha-generator"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                  <a
                    href="https://yuvraj178.github.io/Captcha-generator/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      Open Link
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      
      </>
  );
};
