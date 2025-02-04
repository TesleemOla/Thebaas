import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-9">
          {/* Sharp Event Section */}
          <div className="mb-6 md:mb-0">
            <h3 className="mb-10 lg:mt-5 text-[#0166FF] text-2xl font-extrabold">
              SHARP EVENT
            </h3>
            <p className="text-xl font-semibold text-gray-600 Roboto">
              Sharp Event is a service provider site for finding the best places
              to host your events.
            </p>
          </div>

          {/* Our Service/Company Section */}
          <div className="flex justify-between lg:justify-around">
            <div className="flex flex-col gap-y-7">
              <h4 className="text-md font-medium mb-2">Our Service</h4>
              <ul className="text-sm text-gray-600 space-y-5">
                <li className="text-xl font-semibold">
                  <Link href="#">Hot center</Link>
                </li>
                <li className="text-xl font-semibold">
                  <Link href="#">FAQ</Link>
                </li>
                <li className="text-xl font-semibold">
                  <a href="#">Activities</a>
                </li>
                <li className="text-xl font-semibold">
                  <a href="#">Cities</a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-y-7">
              <h4 className="text-md font-medium mb-2">Company</h4>
              <div className="gap-y-5 flex flex-col font-semibold text-xl text-gray-600">
                <Link href="#">About us</Link>
                <Link href="#">Host</Link>
                <Link href="#">Activities</Link>
                <Link href="#">Cities</Link>
              </div>
            </div>
          </div>

          {/* Get in Touch Section */}
          <div>
            <h4 className="text-md font-medium mb-2">Get in touch</h4>
            <div className="text-xl font-semibold text-gray-600 space-y-1">
              <p>
                <a href="mailto:Emailadress@gmail.com">Emailadress@gmail.com</a>
              </p>
              <p>Address of the company</p>
              <div className="flex space-x-4">
                {" "}
                {/* Social media icons */}
                <a href="#">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z"
                      fill="black"
                    />
                  </svg>
                </a>
                <a href="#">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17 3H7C5.93913 3 4.92172 3.42143 4.17157 4.17157C3.42143 4.92172 3 5.93913 3 7V17C3 18.0609 3.42143 19.0783 4.17157 19.8284C4.92172 20.5786 5.93913 21 7 21H17C18.0609 21 19.0783 20.5786 19.8284 19.8284C20.5786 19.0783 21 18.0609 21 17V7C21 5.93913 20.5786 4.92172 19.8284 4.17157C19.0783 3.42143 18.0609 3 17 3Z"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 16C13.0609 16 14.0783 15.5786 14.8284 14.8284C15.5786 14.0783 16 13.0609 16 12C16 10.9391 15.5786 9.92172 14.8284 9.17157C14.0783 8.42143 13.0609 8 12 8C10.9391 8 9.92172 8.42143 9.17157 9.17157C8.42143 9.92172 8 10.9391 8 12C8 13.0609 8.42143 14.0783 9.17157 14.8284C9.92172 15.5786 10.9391 16 12 16Z"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M17.5 7.5C17.7652 7.5 18.0196 7.39464 18.2071 7.20711C18.3946 7.01957 18.5 6.76522 18.5 6.5C18.5 6.23478 18.3946 5.98043 18.2071 5.79289C18.0196 5.60536 17.7652 5.5 17.5 5.5C17.2348 5.5 16.9804 5.60536 16.7929 5.79289C16.6054 5.98043 16.5 6.23478 16.5 6.5C16.5 6.76522 16.6054 7.01957 16.7929 7.20711C16.9804 7.39464 17.2348 7.5 17.5 7.5Z"
                      fill="black"
                    />
                  </svg>
                </a>
                <a href="#">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_1_982)">
                      <mask
                        id="mask0_1_982"
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="24"
                        height="24"
                      >
                        <path d="M0 0H24V24H0V0Z" fill="white" />
                      </mask>
                      <g mask="url(#mask0_1_982)">
                        <path
                          d="M18.9 1.12451H22.5806L14.5406 10.3371L24 22.8754H16.5943L10.7897 15.2725L4.15543 22.8754H0.471429L9.07029 13.0182L0 1.12623H7.59429L12.8331 8.07423L18.9 1.12451ZM17.6057 20.6674H19.6457L6.48 3.21765H4.29257L17.6057 20.6674Z"
                          fill="black"
                        />
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_1_982">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-600 mt-8 pt-8 border-t border-gray-300">
          <p>&copy; 2024 SharpEvent. Event booking agency</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
