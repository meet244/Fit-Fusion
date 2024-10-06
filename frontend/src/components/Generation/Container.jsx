import { useState } from "react";
import Loading from "../../utils/Loading";
import { LazyLoadImage } from "react-lazy-load-image-component";
const Container = ({ loading, data }) => {
  const [tab, setTab] = useState(1);
  return (
    <>
      {loading ? (
        <div className="grid  gap-2  min-w-[20rem]   bg-white  dark:bg-gray-800 p-6 rounded-lg border-2 border-[#e5e7eb] dark:border-gray-700">
          <div className="w-full flex justify-center">
            <Loading />
          </div>
        </div>
      ) : (
        <>
          <div className="flex flex-col gap-2 w-full    bg-white  dark:bg-gray-800 p-3 rounded-lg border-2 border-[#e5e7eb] dark:border-gray-700">
            <div className="flex">
              <div
                onClick={() => setTab(1)}
                className={`${
                  tab === 1 ? "border-4" : ""
                } cursor-pointer inline-flex items-center justify-center h-9 mr-3 px-3 text-md font-medium text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-500 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700`}
              >
                <svg
                  width="800px"
                  height="800px"
                  viewBox="0 0 24 24"
                  fill="#ffffff"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3.5 h-3.5 mr-2 text-gray-700"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M23 4C23 2.34315 21.6569 1 20 1H4C2.34315 1 1 2.34315 1 4V20C1 21.6569 2.34315 23 4 23H20C21.6569 23 23 21.6569 23 20V4ZM21 4C21 3.44772 20.5523 3 20 3H4C3.44772 3 3 3.44772 3 4V20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20V4Z"
                  />
                  <path d="M4.80665 17.5211L9.1221 9.60947C9.50112 8.91461 10.4989 8.91461 10.8779 9.60947L14.0465 15.4186L15.1318 13.5194C15.5157 12.8476 16.4843 12.8476 16.8682 13.5194L19.1451 17.5039C19.526 18.1705 19.0446 19 18.2768 19H5.68454C4.92548 19 4.44317 18.1875 4.80665 17.5211Z" />
                  <path d="M18 8C18 9.10457 17.1046 10 16 10C14.8954 10 14 9.10457 14 8C14 6.89543 14.8954 6 16 6C17.1046 6 18 6.89543 18 8Z" />
                </svg>
                Generated Photos
              </div>
              <div
                onClick={() => setTab(2)}
                className={`${
                  tab === 2 ? "border-4" : ""
                } cursor-pointer inline-flex items-center justify-center h-9 mr-3 px-3 text-md font-medium text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-500 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700`}
              >
                <svg
                  width="800px"
                  height="800px"
                  viewBox="0 -0.5 25 25"
                  fill="#ffffff"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 mr-2 text-gray-700"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M18.168 19.0028C20.4724 19.0867 22.41 17.29 22.5 14.9858V9.01982C22.41 6.71569 20.4724 4.91893 18.168 5.00282H6.832C4.52763 4.91893 2.58998 6.71569 2.5 9.01982V14.9858C2.58998 17.29 4.52763 19.0867 6.832 19.0028H18.168Z"
                    stroke="#000000"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.008 9.17784L15.169 11.3258C15.3738 11.4454 15.4997 11.6647 15.4997 11.9018C15.4997 12.139 15.3738 12.3583 15.169 12.4778L12.008 14.8278C11.408 15.2348 10.5 14.8878 10.5 14.2518V9.75184C10.5 9.11884 11.409 8.77084 12.008 9.17784Z"
                    stroke="#000000"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Generated Videos
              </div>
              <div
                onClick={() => setTab(3)}
                className={`${
                  tab === 3 ? "border-4" : ""
                } cursor-pointer inline-flex items-center justify-center h-9 mr-3 px-3 text-md font-medium text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-500 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700`}
              >
                <svg
                  width="800px"
                  height="800px"
                  viewBox="0 -0.5 25 25"
                  fill="#ffffff"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 mr-2 text-gray-700"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M18.168 19.0028C20.4724 19.0867 22.41 17.29 22.5 14.9858V9.01982C22.41 6.71569 20.4724 4.91893 18.168 5.00282H6.832C4.52763 4.91893 2.58998 6.71569 2.5 9.01982V14.9858C2.58998 17.29 4.52763 19.0867 6.832 19.0028H18.168Z"
                    stroke="#000000"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.008 9.17784L15.169 11.3258C15.3738 11.4454 15.4997 11.6647 15.4997 11.9018C15.4997 12.139 15.3738 12.3583 15.169 12.4778L12.008 14.8278C11.408 15.2348 10.5 14.8878 10.5 14.2518V9.75184C10.5 9.11884 11.409 8.77084 12.008 9.17784Z"
                    stroke="#000000"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Generated Captions
              </div>
            </div>
            {tab === 1 && <Photos data={data} loading={loading} />}
            {tab === 2 && <Videos loading={loading} />}
            {tab === 3 && <Captions loading={loading} />}
          </div>
        </>
      )}
    </>
  );
};
const Photos = ({ data }) => {
  return (
    <div className="grid grid-cols-3 gap-2    bg-white  dark:bg-gray-800 p-3 rounded-lg border-2 border-[#e5e7eb] dark:border-gray-700">
      {data?.map((item, index) => {
        return (
          //   <img
          //     key={index}
          //     className="h-auto max-w-full rounded-lg"
          //     src={item}
          //     alt=""
          //   />
          <LazyLoadImage alt="No image" src={item} />
        );
      })}
    </div>
  );
};
const Videos = ({ loading }) => {
  return (
    <div className="grid grid-cols-2 gap-2 bg-white  dark:bg-gray-800 p-4 rounded-lg border-2 border-[#e5e7eb] dark:border-gray-700">
      <video className="w-full" controls>
        <source
          src="https://res.cloudinary.com/dk5acaaxg/video/upload/v1728201974/ueqxvhkkfqc0lmryvqnc.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <video className="w-full" controls>
        <source src="/docs/videos/flowbite.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};
const Captions = ({ loading }) => {
  return (
    <div className="grid grid-cols-2 gap-2 bg-white  dark:bg-gray-800 p-4 rounded-lg border-2 border-[#e5e7eb] dark:border-gray-700">
      {loading}
      <div class="flex items-center p-4 text-sm text-gray-800 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600">
        <svg
          className="w-6 h-6 mr-2 text-gray-200 cursor-pointer"
          fill="#ffffff"
          height="800px"
          width="800px"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 64 64"
          enable-background="new 0 0 64 64"
          xml:space="preserve"
        >
          <g id="Text-files">
            <path
              d="M53.9791489,9.1429005H50.010849c-0.0826988,0-0.1562004,0.0283995-0.2331009,0.0469999V5.0228
		C49.7777481,2.253,47.4731483,0,44.6398468,0h-34.422596C7.3839517,0,5.0793519,2.253,5.0793519,5.0228v46.8432999
		c0,2.7697983,2.3045998,5.0228004,5.1378999,5.0228004h6.0367002v2.2678986C16.253952,61.8274002,18.4702511,64,21.1954517,64
		h32.783699c2.7252007,0,4.9414978-2.1725998,4.9414978-4.8432007V13.9861002
		C58.9206467,11.3155003,56.7043495,9.1429005,53.9791489,9.1429005z M7.1110516,51.8661003V5.0228
		c0-1.6487999,1.3938999-2.9909999,3.1062002-2.9909999h34.422596c1.7123032,0,3.1062012,1.3422,3.1062012,2.9909999v46.8432999
		c0,1.6487999-1.393898,2.9911003-3.1062012,2.9911003h-34.422596C8.5049515,54.8572006,7.1110516,53.5149002,7.1110516,51.8661003z
		 M56.8888474,59.1567993c0,1.550602-1.3055,2.8115005-2.9096985,2.8115005h-32.783699
		c-1.6042004,0-2.9097996-1.2608986-2.9097996-2.8115005v-2.2678986h26.3541946
		c2.8333015,0,5.1379013-2.2530022,5.1379013-5.0228004V11.1275997c0.0769005,0.0186005,0.1504021,0.0469999,0.2331009,0.0469999
		h3.9682999c1.6041985,0,2.9096985,1.2609005,2.9096985,2.8115005V59.1567993z"
            />
            <path
              d="M38.6031494,13.2063999H16.253952c-0.5615005,0-1.0159006,0.4542999-1.0159006,1.0158005
		c0,0.5615997,0.4544001,1.0158997,1.0159006,1.0158997h22.3491974c0.5615005,0,1.0158997-0.4542999,1.0158997-1.0158997
		C39.6190491,13.6606998,39.16465,13.2063999,38.6031494,13.2063999z"
            />
            <path
              d="M38.6031494,21.3334007H16.253952c-0.5615005,0-1.0159006,0.4542999-1.0159006,1.0157986
		c0,0.5615005,0.4544001,1.0159016,1.0159006,1.0159016h22.3491974c0.5615005,0,1.0158997-0.454401,1.0158997-1.0159016
		C39.6190491,21.7877007,39.16465,21.3334007,38.6031494,21.3334007z"
            />
            <path
              d="M38.6031494,29.4603004H16.253952c-0.5615005,0-1.0159006,0.4543991-1.0159006,1.0158997
		s0.4544001,1.0158997,1.0159006,1.0158997h22.3491974c0.5615005,0,1.0158997-0.4543991,1.0158997-1.0158997
		S39.16465,29.4603004,38.6031494,29.4603004z"
            />
            <path
              d="M28.4444485,37.5872993H16.253952c-0.5615005,0-1.0159006,0.4543991-1.0159006,1.0158997
		s0.4544001,1.0158997,1.0159006,1.0158997h12.1904964c0.5615025,0,1.0158005-0.4543991,1.0158005-1.0158997
		S29.0059509,37.5872993,28.4444485,37.5872993z"
            />
          </g>
        </svg>
        <span class="sr-only">Info</span>
        <div>
          <span class="font-medium">Dark alert!</span> Change a few things up
          and try submitting again.
        </div>
      </div>
    </div>
  );
};
export default Container;
