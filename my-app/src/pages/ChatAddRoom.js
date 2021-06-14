import React, { useState } from "react";
import Dropzone from 'react-dropzone';
import { PlusOutlined } from '@ant-design/icons'
import axios from 'axios';
import "./ChatAddRoom.css";
import { Link } from "react-router-dom";



const ChatAddRoom = ({ addData }) => {
  const [hobby, setHobby] = useState("");
  const [image, setImage] = useState(null);
  const [Images, setImages] = useState([]);

  const handleChange = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!hobby) {
      alert("Please add a task");
    }
    addData({ hobby, image });
    setHobby("");
    setImage("");
  };

  const dropHandle = async (files) => {
    let formData = new FormData();

    const config = {
      header: { 'content-type': 'multipart/form-data' },
    };
    formData.append('file', files[0]);

    axios.post('http://localhost:80/api/product/image', formData, config).then((response) => {
      if (response.data.success) {
        console.log(response.data);
        setImages([...Images, response.data.filePath]);
      } else {
        alert('파일을 저장하는데 실패했습니다.');
        console.log(response.data.err);
      }
    });
  };

  return (
    <div className="chatAdd__container">
      <h2>채팅방 정보를 입력해주세요!</h2>

      <form onSubmit={onSubmit}>
        <label>업로드</label>
        <input type="file" onChange={handleChange} />

        <div style={{ width: 100, height: 100, border: "1px solid red" }}>
          <Dropzone onDrop={dropHandle}>
            {({ getRootProps, getInputProps }) => (
              <div style={{
                width: 100, height: 100, border: "1px solid red"
                ,
              }}
                {...getRootProps()}
              >
                <input {...getInputProps()} />
                <PlusOutlined style={{
                  fontSize: "3rem", display: "flex",
                  justifyContent: "center", marginTop: "1rem"
                }} />
              </div>
            )}
          </Dropzone>
          <div
          >
            {Images.map((image, index) => (
              <div key={index}>
                <img
                  src={`http://localhost:80/${image}`}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="hobby-group">
          <label>Hobby </label>
          <input
            type="text"
            value={hobby}
            onChange={(e) => setHobby(e.target.value)}
          />
        </div>
        <Link to="/">
          <button type="submit">Create</button>
        </Link>
        <Link to="/">Go back </Link>
      </form>
    </div>
  );
};

export default ChatAddRoom;
