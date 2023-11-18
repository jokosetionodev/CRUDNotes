import React from "react";
import "./CardArsip.css";
function CardArsip({ data, onDelete }) {
  return (
    <div className="container-view">
      <h2 className="not-act">Catatan Arsip</h2>
      {data.filter((item) => item.archived === true).length === 0 && (
        <div className="del-0">
          <p>Belum ada catatan</p>
        </div>
      )}
      <div className="card-container">
        {data
          .filter((item) => item.archived === true)
          .map((item) => {
            return (
              <div className="satu">
                <div className="items">
                  <h2>{item.title}</h2>
                  <p>{item.createdAt}</p>
                  <p className="des-note">{item.body}</p>
                </div>
                <div className="tombol">
                  {" "}
                  <button
                    onClick={() => onDelete(item.id)}
                    className="btn-s br-border"
                  >
                    Hapus
                  </button>
                  <button className="btn-s br-y">Arsip</button>
                </div>
              </div>
            );
          })}{" "}
      </div>
    </div>
  );
}
export default CardArsip;
