import React from "react";

const Recommended = ({ posRef }) => {
  return (
    <div className="flex flex-col">
      <p className="text-xl mt-4 mb-2 font-thin text-gray-900 dark:text-white">
       FitFission Recommendations to try...
      </p>
      {[
        "Create a visually appealing infographic showcasing the benefits of regular exercise, targeting a general audience.",
        "Write a motivational blog post about overcoming obstacles and staying committed to a fitness routine.",
        "Generate a short video tutorial demonstrating a beginner-friendly home workout routine, focusing on core strength and flexibility.",
        // "Develop a social media campaign promoting the importance of exercise for mental health, featuring inspirational quotes and success stories.",
        // "Compose a personalized workout plan for a user who wants to lose weight and improve their overall fitness, considering their age, fitness level, and goals.",
      ]
        .sort(() => Math.random() - 0.5)
        .map((item, i) => {
          return (
            <div
              key={i}
              className="cursor-pointer flex items-center w-full p-3 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
              onClick={() => (posRef.current.value = item)}
            >
              <div className=" inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-yellow-400 dark:text-yellow-900">
                <svg
                  fill="#000000"
                  height="800px"
                  width="800px"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 512 512"
                  xml:space="preserve"
                  className="w-6 h-6"
                >
                  <g>
                    <g>
                      <path
                        d="M256,0C155.174,0,73.143,82.027,73.143,182.857c0,67.839,38.46,130.937,98.424,162.232l1.817,25.482
                    c0.357,5.036,4.719,8.911,9.772,8.464c5.036-0.357,8.826-4.732,8.469-9.768l-2.187-30.661c-0.232-3.259-2.192-6.152-5.134-7.571
                    c-56.42-27.348-92.875-85.518-92.875-148.178c0-90.741,73.826-164.571,164.571-164.571c90.745,0,164.571,73.83,164.571,164.571
                    c0,66.919-39.969,126.652-101.821,152.196c-3.201,1.322-5.379,4.339-5.629,7.795l-3.978,55.661
                    c-0.357,5.036,3.433,9.411,8.469,9.768c0.223,0.018,0.442,0.027,0.661,0.027c4.755,0,8.768-3.679,9.112-8.491l3.58-50.116
                    c65.732-29.527,107.893-94.402,107.893-166.839C438.857,82.027,356.826,0,256,0z"
                      />
                    </g>
                  </g>
                  <g>
                    <g>
                      <path
                        d="M312.915,420.804l-118.857-27.429c-4.906-1.134-9.83,1.937-10.969,6.857c-1.134,4.92,1.933,9.83,6.853,10.964
                    l118.857,27.429c0.692,0.161,1.384,0.232,2.067,0.232c4.161,0,7.924-2.857,8.902-7.089
                    C320.902,426.848,317.835,421.937,312.915,420.804z"
                      />
                    </g>
                  </g>
                  <g>
                    <g>
                      <path
                        d="M312.915,457.375l-118.857-27.429c-4.906-1.134-9.83,1.937-10.969,6.857c-1.134,4.92,1.933,9.83,6.853,10.964
                    l118.857,27.429c0.692,0.161,1.384,0.232,2.067,0.232c4.161,0,7.924-2.857,8.902-7.089
                    C320.902,463.42,317.835,458.509,312.915,457.375z"
                      />
                    </g>
                  </g>
                  <g>
                    <g>
                      <path
                        d="M312.915,493.947l-118.857-27.429c-4.906-1.143-9.83,1.928-10.969,6.857c-1.134,4.92,1.933,9.83,6.853,10.964
                    l118.857,27.429c0.692,0.161,1.384,0.232,2.067,0.232c4.161,0,7.924-2.857,8.902-7.089
                    C320.902,499.991,317.835,495.08,312.915,493.947z"
                      />
                    </g>
                  </g>
                </svg>
              </div>
              <div className="ms-3 text-sm font-normal">{item}</div>
            </div>
          );
        })}
    </div>
  );
};
export default Recommended;
