import React from 'react';
import Create from '../components/Create';
import Invitation from '../components/Invitation';

const CreateRoom = () => {
  return (
    <div className="w-full flex lg:flex-row flex-col bg-[#EFF3EA]">
      <div className="lg:w-1/2 w-full bg-[#EFF3EA]">
        <Create />
      </div>
      <div className="lg:w-1/2 w-full rounded-l-3xl bg-[#D9DFC6]">
        <Invitation/>
      </div>
    </div>
  );
};

export default CreateRoom;
