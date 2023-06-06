import React from 'react';
import '../css/Body.css';
import {RoomCard} from './Rooms.js';

const Body = () => {
  return (
    <div className="body">
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <RoomCard />
                </div>
                <div className="col-md-4">
                    <RoomCard />
                </div>
                <div className="col-md-4">
                    <RoomCard />
                </div>
            </div>
        </div>
    </div>
  );
};

export default Body;