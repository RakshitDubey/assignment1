import React from 'react';

function BottomHero() {
  return (
    <div className="md:flex justify-around py-8 border-t bg-gray-200  ">
      <div className="flex flex-col items-center pr-4 relative m-5">
        <h4 className="text-3xl font-bold">680K</h4>
        <span>Requests Submitted in 2021</span>
        <div className="absolute top-0 right-0 h-full bg-black font-bold-400 w-px hidden lg:block "></div>
      </div>
      <div className="flex flex-col items-center px-4 relative m-5">
        <h4 className="text-3xl font-bold">195</h4>
        <span>Countries Access the Marketplace</span>
        <div className="absolute top-0 right-0 h-full bg-black font-bold-400 w-px hidden lg:block"></div>
      </div>
      <div className="flex flex-col items-center pl-4 m-5">
        <h4 className="text-3xl font-bold">4.9/5</h4>
        <span>Average Client Satisfaction Rating</span>
      </div>
    </div>
  );
}

export default BottomHero;
