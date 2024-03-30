import React from "react";

function Dropdown({ rooms }) {
  return (
    <div>
      <select
        style={{
          padding: "10px",
          borderRadius: "5px",
          border: "1px solid gray",
        }}
      >
        {rooms.map((room) => (
          <option
            style={{
              marginTop: "10px",
            }}
            key={room.number}
            value={room.number}
          >
            {room.number} rooms (${room.price})
          </option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;
