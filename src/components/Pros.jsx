import React from 'react';

function Pros() {
  return (
    <div className="flex flex-col lg:flex-row bg-cover bg-center mt-20" style={{backgroundImage: 'url("https://static.wixstatic.com/media/0784b1_008eb3baf5e048d7b3eb36aeb6a67d4b~mv2.jpg/v1/fill/w_1874,h_1221,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/6%20fold%20BG.jpg")'}}>
      <div className="lg:w-1/2 text-white mt-20 bg-opacity-75 p-8">
        <h2 className="text-5xl font-bold mb-4">Who are our pros?</h2>
        <div className="mt-10">
          <h5 className="text-3xl font-semibold mb-2">They're industry leaders</h5>
          <p>Wix Partners are the masterminds behind some of the most successful brands, businesses and sites on Wix. Whether they’re designers, developers or marketers, they’re all vetted, trusted leaders in their fields.</p>
        </div>
        <div className="mt-10">
          <h5 className="text-3xl font-semibold mb-2">They’re specially selected</h5>
          <p>Each of our professionals have been pre-screened for quality. They’re not Wix employees, they’re just real people with real skills who want to help you reach your goals.</p>
        </div>
        <div className='mt-10'>
          <h5 className="text-3xl font-semibold mb-2">They’re ready to do the <br /> heavy lifting</h5>
          <p>From big projects to small tasks, no matter the brief you can rest assured knowing that they’ll deliver.</p>
        </div>
      </div>
      <div className="lg:w-1/2">
        <img src="https://static.wixstatic.com/media/0784b1_98c45b6990504efd80cdba5b40d921af~mv2.png/v1/fill/w_890,h_1090,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/deaktop%206%20fold%20composition%201_5.png" alt="" className="w-full h-auto" />
      </div>
    </div>
  );
}

export default Pros;
