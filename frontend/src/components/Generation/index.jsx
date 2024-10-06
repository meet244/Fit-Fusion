import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import Container from "./Container";
import Chat from "./Chat";

const Generation = () => {
  const [data, setData] = useState([]);
  let posRef = useRef();
  let negRef = useRef();
  const [loading, setLoading] = useState(false);
  const [generate, setGenerate] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const handleRadioChange = (e) => {
    setSelectedValue(e.target?.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let headersList = {
      Accept: "*/*",
    };

    let formdata = new FormData();
    formdata.append("prompt", posRef.current.value);
    formdata.append("bad_prompt", negRef.current?.value);
    formdata.append("speed", selectedValue ? selectedValue : "Quality");
    formdata.append("generate_n_imgs", Number(e.target?.quantity?.value));

    let bodyContent = formdata;

    let reqOptions = {
      url: "http://192.168.137.233:5000/generate",
      method: "POST",
      headers: headersList,
      data: bodyContent,
    };

    try {
      let response = await axios.request(reqOptions);

      const timeout = setInterval(async () => {
        try {
          const response = await axios.get(
            "http://192.168.137.233:5000/ready_imgs"
          );
          if (response.data.length > 0) setData(response.data);
          console.log(response.data);

          if (response.data.someConditionForReady) {
            clearInterval(timeout);
          }
        } catch (error) {
          console.error("Error fetching ready images:", error);
        }
      }, 5000);
    } catch (error) {
      console.error("Error during form submission:", error);
    }
  };

  return (
    <>
      <div className="min-h-screen w-full p-2 pt-4">
        <Chat
          handleSubmit={handleSubmit}
          posRef={posRef}
          negRef={negRef}
          handleRadioChange={handleRadioChange}
          setGenerate={setGenerate}
        />
        {generate && <Container loading={loading} data={data} />}
      </div>
    </>
  );
};

export default Generation;
