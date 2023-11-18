import React from "react";
import "./CardView.css";
function CardView({ data, onDelete, onArsip }) {
  console.log(data, "ini data");
  return (
    <div className="container-view">
      <h2 className="not-act">Catatan Aktif</h2>
      {data.filter((item) => item.archived === false).length === 0 && (
        <div className="del-0">
          <p>Belum ada catatan</p>
        </div>
      )}
      <div className="card-container">
        {data
          .filter((item) => item.archived === false)
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
                  <button
                    onClick={() => onArsip(item.id)}
                    className="btn-s br-y"
                  >
                    Arsip
                  </button>
                </div>
              </div>
            );
          })}{" "}
      </div>
    </div>
  );
}
export default CardView;
