import React from "react";
import "./Header.css";
function Header({ onSearch }) {
  return (
    <div className="container">
      <div className="logo">
        <h1>Buku Catatan</h1>
      </div>
      <div className="search-notes">
        <input
          onChange={(e) => onSearch(e.target.value)}
          type="text"
          placeholder="cari catatan..."
        />
      </div>
    </div>
  );
}
export default Header;
