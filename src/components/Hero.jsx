import React from 'react';

function Hero() {
  const backgroundStyle = {
    backgroundImage: `url('https://static.wixstatic.com/media/0784b1_06a84b59ce2c452187a8e444677cfdfd~mv2.png/v1/fill/w_1874,h_370,fp_0.50_0.50,q_90,usm_0.66_1.00_0.01,enc_auto/drop%20down%20open%20on%20haver%20menu.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className="relative" style={backgroundStyle}>
      <div className="container mx-auto px-4 lg:px-0 py-12 flex flex-col lg:flex-row items-center justify-between">
        <div className="max-w-md text-white mb-8 lg:mb-0">
          <h2 className="text-4xl font-bold mb-4">Hire a Professional agency or freelancer</h2>
          <select className="block w-full py-3 px-3 p-2 mb-4 bg-white font-bold text-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="">Browse Service</option>
          </select>
          <p className="mb-4">Top requested Pros</p>
          <div className="flex flex-wrap gap-2">
            <button className='flex items-center justify-center bg-transparent border border-white font-bold text-white rounded-full p-2 hover:bg-white- hover:text-black transition duration-300'>Web Designer</button>
            <button className='flex items-center justify-center bg-transparent border border-white font-bold text-white rounded-full p-2 hover:bg-white hover:text-black transition duration-300'>Web Developer</button>
            <button className='flex items-center justify-center bg-transparent border border-white font-bold text-white rounded-full p-2 hover:bg-white hover:text-black transition duration-300'>Graphic Designer</button>
            <button className='flex items-center justify-center bg-transparent border border-white font-bold text-white rounded-full p-2 hover:bg-white hover:text-black transition duration-300'>SEO Expert</button>
            <button className='flex items-center justify-center bg-transparent border border-white font-bold text-white rounded-full p-2 hover:bg-white hover:text-black transition duration-300'>eCommerce Specialist</button>
            <button className='flex items-center justify-center bg-transparent border border-white font-bold text-white rounded-full p-2 hover:bg-white hover:text-black transition duration-300'>Logo Designer</button>
          </div>
        </div>
        <div className="max-w-lg">
          <img src="https://static.wixstatic.com/media/0784b1_4231f50027a543d29a585cedf6e9df17~mv2.png/v1/fill/w_703,h_849,fp_0.50_0.50,q_90,usm_0.66_1.00_0.01,enc_auto/image%20desktop.png" alt="Professional" className="w-full" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
