import "./App.css";

import React, { Component } from "react";

import Linkedin from "Assets/linkedin.svg";
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import ServicesGraph from "Assets/services.svg";
import styled from "styled-components";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Section title="" dark={false} id="section1">
          <div className="text-2xl flex flex-col items-end">
            <div>We Build</div>
            <div className="3xl">SOFTWARE</div>
          </div>
        </Section>
        <Section title="Services" dark={true} id="section2">
          <Services src={ServicesGraph} alt="Services" />
        </Section>
        <Section title="About Us" dark={false} id="section3">
          Roy Distler - Full Stack software developer A result-driven,
          project-focused Full Stack software developer. Currently developing
          and maintaining an advertising tool for creating and managing
          audiences and online-campaigns. Gained excellent communication skills
          by collaborating with other departments such as DBA and Project
          Management in order to work effectively on projects. Out-of-the-box
          thinker when working on team-based projects, and involved in meetings
          throughout the project’s process.
          <div>
            <img src={Linkedin} alt="" />
            <a href="https://www.linkedin.com/in/roy-distler-1217a747/">
              Linkedin
            </a>
          </div>
          Dikla Levi - product Manager
          <div className="mt-10">
            <img src={Linkedin} alt="" />
            <a href="https://www.linkedin.com/in/dikla-levi-b79777154/">
              Linkedin
            </a>
          </div>
        </Section>
        <Section title="Contact Us" dark={true} id="section4">
          <form>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-200 dark:text-gray-300"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@flowbite.com"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-500 dark:text-gray-300"
              >
                Your name
              </label>
              <input
                type="text"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div className="flex items-start mb-6">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  aria-describedby="remember"
                  type="checkbox"
                  className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                  required
                />
              </div>
              <div className="ml-3 text-sm">
                <label
                  htmlFor="remember"
                  className="font-medium text-gray-200 dark:text-gray-300"
                >
                  Remember me
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </form>
        </Section>
      </div>
    );
  }
}

export default App;

const Services = styled.img`
  width: 800px;
  height: 800px;
`;
