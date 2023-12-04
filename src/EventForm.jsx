// EventForm.js

import React, { useState } from 'react';
import './EventForm.scss';

const EventForm = () => {
  const [eventName, setEventName] = useState('');
  const [selectedColor, setSelectedColor] = useState('');

  const handleInputChange = (e) => {
    setEventName(e.target.value);
  };

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic, e.g., sending data to the server
    console.log(`Event Name: ${eventName}, Selected Color: ${selectedColor}`);
  };

  const colorOptions = [
    '#ff5733',
    '#33ff57',
    '#5733ff',
    '#ff33b5',
    '#33b5ff',
    '#b5ff33',
    '#ff3366',
    '#3366ff',
    '#66ff33',
    '#ff3333',
    '#3333ff',
    '#ff9933',
    '#33ff99',
    '#9933ff',
    '#ffcc33',
    '#33ccff',
    '#ccff33',
    '#ff33cc',
    '#cc33ff',
  ];

  return (
    <div className="event-form-container">
      <form onSubmit={handleSubmit}>
        <label>
          Event Name:
          <input type="text" value={eventName} onChange={handleInputChange} />
        </label>
        <div className="color-options">
          {colorOptions.map((color, index) => (
            <div
              key={index}
              className={`color-option ${selectedColor === color ? 'selected' : ''}`}
              style={{ backgroundColor: color }}
              onClick={() => handleColorChange(color)}
            ></div>
          ))}
        </div>
        <button type="submit">Submit</button>
      </form>
      {selectedColor && (
        <div className="selected-color-preview" style={{ backgroundColor: selectedColor }}>
          Selected Color Preview
        </div>
      )}
    </div>
  );
};

export default EventForm;
