import React, { useEffect, useState } from "react";
import "./NotesInput.css";
function NotesInput({ addNote }) {
  const [isTitle, setTitle] = useState("");
  const [isBody, setBody] = useState("");

  const onAddNote = () => {
    const data = {
      id: Date.now(),
      title: isTitle,
      body: isBody,
      archived: false,
      createdAt: new Date().toISOString(),
    };

    addNote((prevDefaulth) => [...prevDefaulth, data]);
    setTitle("");
    setBody("");
  };
  return (
    <div className="box">
      <div className="container-notes-input">
        <h1>Buat Catatan</h1>
        <p>Sisa Karakter {50 - isTitle.length}</p>
        <div className="form-input">
          <input
            maxLength={50}
            value={isTitle}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            name=""
            id=""
            placeholder="Tambahkan Judul ...."
          />
          <textarea
            name=""
            value={isBody}
            onChange={(e) => setBody(e.target.value)}
            id=""
            cols="60"
            rows="10"
            placeholder=" Descripsi...."
          ></textarea>
          <button onClick={onAddNote}>Tambah</button>
        </div>
      </div>
    </div>
  );
}

export default NotesInput;
