import { useEffect, useRef, useState } from "react";
import Recommended from "./Recommended";
import GenerateButton from "./GenerateButton";

const useOutsideClick = (callback) => {
  const ref = useRef();
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [callback]);

  return ref;
};
const Chat = ({
  handleSubmit,
  posRef,
  negRef,
  handleRadioChange,
  setGenerate,
}) => {
  const countQuantity = useRef();
  const [dropdown, setDropdown] = useState(false);
  const handleClickOutside = () => {
    setDropdown(false);
  };

  const ref = useOutsideClick(handleClickOutside);
  return (
    <form onSubmit={handleSubmit} className="w-full mb-4">
      <div className="flex gap-4">
        <div className="h-max min-w-[60vw] gap-4 bg-white dark:text-white  dark:bg-gray-800 p-6 rounded-lg border-2 border-[#e5e7eb] dark:border-gray-700">
          <h1 className="text-2xl">AI Content Generator</h1>
          <h2 className="py-2 text-xs">
            Generate an image using Generative AI by describing what you want to
            see, all images are published publicly by default.
          </h2>
          <div className="my-4">
            <textarea
              ref={posRef}
              id="message"
              rows="4"
              height="300px"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="What do you want to see?"
            ></textarea>
          </div>

          <button
            onClick={() => setDropdown(!dropdown)}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
          >
            Advanced Options
            <svg
              className="w-2.5 h-2.5 ms-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>

          <div
            ref={ref}
            className={`${
              dropdown ? "absolute" : "hidden"
            } z-10  bg-white divide-y divide-gray-100 rounded-lg shadow w-60 dark:bg-gray-700 dark:divide-gray-600`}
          >
            <ul className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200">
              <li>
                <div className="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                  <div className="flex items-center h-5">
                    <input
                      id="helper-checkbox-1"
                      aria-describedby="helper-checkbox-text-1"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                  </div>
                  <div className="ms-2 text-sm">
                    <label
                      for="helper-checkbox-1"
                      className="font-medium text-gray-900 dark:text-gray-300"
                    >
                      <div>Negative Prompt</div>
                      <p
                        id="helper-checkbox-text-1"
                        className="text-xs font-normal text-gray-500 dark:text-gray-300"
                      >
                        Resources to avoid during generation.
                      </p>
                    </label>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                  <div className="flex items-center h-5">
                    <input
                      id="helper-checkbox-2"
                      aria-describedby="helper-checkbox-text-2"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                  </div>
                  <div className="ms-2 text-sm">
                    <label
                      for="helper-checkbox-2"
                      className="font-medium text-gray-900 dark:text-gray-300"
                    >
                      <div>Speed</div>
                      <p
                        id="helper-checkbox-text-2"
                        className="text-xs font-normal text-gray-500 dark:text-gray-300"
                      >
                        Generate images faster.
                      </p>
                    </label>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                  <div className="flex items-center h-5">
                    <input
                      id="helper-checkbox-3"
                      aria-describedby="helper-checkbox-text-3"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                  </div>
                  <div className="ms-2 text-sm">
                    <label
                      for="helper-checkbox-3"
                      className="font-medium text-gray-900 dark:text-gray-300"
                    >
                      <div> Images Count</div>
                      <p
                        id="helper-checkbox-text-3"
                        className="text-xs font-normal text-gray-500 dark:text-gray-300"
                      >
                        Generate multiple images.
                      </p>
                    </label>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          {document.getElementById("helper-checkbox-1")?.checked && (
            <div className="my-4">
              <label
                for="message"
                className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
              >
                (negative prompt)
              </label>
              <textarea
                id="message"
                ref={negRef}
                defaultValue={"Bad Ugly Scary Uneven Dark Unusual"}
                rows="4"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="What do you want to avoid?"
              ></textarea>
            </div>
          )}
          {document.getElementById("helper-checkbox-2")?.checked && (
            <>
              <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">
                Speed
              </h3>
              <ul className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                  <div className="flex items-center ps-3">
                    <input
                      id="list-radio-license"
                      type="radio"
                      value="Quality"
                      name="list-radio"
                      onChange={handleRadioChange}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label
                      htmlFor="list-radio-license"
                      className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Quality
                    </label>
                  </div>
                </li>
                <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                  <div className="flex items-center ps-3">
                    <input
                      id="list-radio-speed"
                      type="radio"
                      value="Speed"
                      name="list-radio"
                      onChange={handleRadioChange}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label
                      htmlFor="list-radio-speed"
                      className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Speed
                    </label>
                  </div>
                </li>
                <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                  <div className="flex items-center ps-3">
                    <input
                      id="list-radio-extreme"
                      type="radio"
                      value="Extreme Speed"
                      name="list-radio"
                      onChange={handleRadioChange}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label
                      htmlFor="list-radio-extreme"
                      className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Extreme Speed
                    </label>
                  </div>
                </li>
                <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                  <div className="flex items-center ps-3">
                    <input
                      id="list-radio-lightning"
                      type="radio"
                      value="Lightning"
                      name="list-radio"
                      onChange={handleRadioChange}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label
                      htmlFor="list-radio-lightning"
                      className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Lightning
                    </label>
                  </div>
                </li>
                <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                  <div className="flex items-center ps-3">
                    <input
                      id="list-radio-hypersd"
                      type="radio"
                      value="Hyper-SD"
                      name="list-radio"
                      onChange={handleRadioChange}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label
                      htmlFor="list-radio-hypersd"
                      className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Hyper-SD
                    </label>
                  </div>
                </li>
              </ul>
            </>
          )}
          {document.getElementById("helper-checkbox-3")?.checked && (
            <div className="max-w-xs mt-3">
              <label
                for="quantity-input"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Count of Images
              </label>
              <div className="relative flex items-center max-w-[8rem]">
                <button
                  type="button"
                  onClick={() =>
                    (countQuantity.current.value =
                      parseInt(countQuantity.current.value) - 1)
                  }
                  className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                >
                  <svg
                    className="w-3 h-3 text-gray-900 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 2"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      strokeLinejoin="round"
                      stroke-width="2"
                      d="M1 1h16"
                    />
                  </svg>
                </button>
                <input
                  ref={countQuantity}
                  type="text"
                  id="quantity"
                  name="quantity"
                  data-input-counter
                  aria-describedby="helper-text-explanation"
                  className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="1"
                  defaultValue="1"
                  required
                />
                <button
                  type="button"
                  onClick={() =>
                    (countQuantity.current.value =
                      parseInt(countQuantity.current.value) + 1)
                  }
                  className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                >
                  <svg
                    className="w-3 h-3 text-gray-900 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 18"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      strokeLinejoin="round"
                      stroke-width="2"
                      d="M9 1v16M1 9h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          )}

          <GenerateButton
            className="pb-6 mt-4  "
            onClick={() => {
              setGenerate(true);
            }}
          />
        </div>
        <Recommended posRef={posRef} />
      </div>
    </form>
  );
};

export default Chat;
