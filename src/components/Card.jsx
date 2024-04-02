import React from 'react';

function Card() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 border p-4 mt-10">
      <div className="border border-l-0 border-r-0 border-t border-b p-4">
        <img src="https://static.wixstatic.com/media/0784b1_3524ffebd3944b25ae5be5edda3d0057~mv2.jpg/v1/fill/w_426,h_263,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/web%20design%20image.jpg" alt="Web Design" className="w-full h-auto mb-4" />
        <h2 className="text-xl font-semibold mb-2">Web Design</h2>
        <p className="text-gray-600 mb-2">New website, mobile site, site redesign, and site migration.</p>
        <span className="text-blue-600 cursor-pointer">Explore Now --&gt;</span>
      </div>
      <div className="border border-l-0 border-r-0 border-t border-b p-4">
        <img src="https://static.wixstatic.com/media/0784b1_d7ca7ad244c9441db87d8c42cbd13458~mv2.jpg/v1/fill/w_426,h_263,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/marketing%20and%20promoting%20image.jpg" alt="Marketing and Promoting" className="w-full h-auto mb-4" />
        <h2 className="text-xl font-semibold mb-2">Marketing and Promoting</h2>
        <p className="text-gray-600 mb-2">SEO, marketing and advertising, written content and more.</p>
        <span className="text-blue-600 cursor-pointer">Explore Now --&gt;</span>
      </div>
      <div className="border border border-r-0 border border-b p-4">
        <img src="https://static.wixstatic.com/media/0784b1_3524ffebd3944b25ae5be5edda3d0057~mv2.jpg/v1/fill/w_426,h_263,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/web%20design%20image.jpg" alt="Web Design" className="w-full h-auto mb-4" />
        <h2 className="text-xl font-semibold mb-2">Web Design</h2>
        <p className="text-gray-600 mb-2">New website, mobile site, site redesign, and site migration.</p>
        <span className="text-blue-600 cursor-pointer">Explore Now --&gt;</span>
      </div>
      <div className="border border-l-0 border-r-0 border-t border-b p-4">
        <img src="https://static.wixstatic.com/media/0784b1_3524ffebd3944b25ae5be5edda3d0057~mv2.jpg/v1/fill/w_426,h_263,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/web%20design%20image.jpg" alt="Web Design" className="w-full h-auto mb-4" />
        <h2 className="text-xl font-semibold mb-2">Web Design</h2>
        <p className="text-gray-600 mb-2">New website, mobile site, site redesign, and site migration.</p>
        <span className="text-blue-600 cursor-pointer">Explore Now --&gt;</span>
      </div>
      <div className="border border-l-0 border-r-0 border-t border-b p-4">
        <img src="https://static.wixstatic.com/media/0784b1_3524ffebd3944b25ae5be5edda3d0057~mv2.jpg/v1/fill/w_426,h_263,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/web%20design%20image.jpg" alt="Web Design" className="w-full h-auto mb-4" />
        <h2 className="text-xl font-semibold mb-2">Web Design</h2>
        <p className="text-gray-600 mb-2">New website, mobile site, site redesign, and site migration.</p>
        <span className="text-blue-600 cursor-pointer">Explore Now --&gt;</span>
      </div>
      <div className="border border-l-0 border-r-0 border-t border-b p-4">
        <img src="https://static.wixstatic.com/media/0784b1_3524ffebd3944b25ae5be5edda3d0057~mv2.jpg/v1/fill/w_426,h_263,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/web%20design%20image.jpg" alt="Web Design" className="w-full h-auto mb-4" />
        <h2 className="text-xl font-semibold mb-2">Web Design</h2>
        <p className="text-gray-600 mb-2">New website, mobile site, site redesign, and site migration.</p>
        <span className="text-blue-600 cursor-pointer">Explore Now --&gt;</span>
      </div>
      {/* Repeat this div for the other cards */}
    </div>
  );
}

export default Card;
