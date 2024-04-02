import React from 'react';

function How() {
  return (
    <div className="bg-black text-white py-16">
      <h2 className="text-3xl font-semibold mb-8 text-center">How it works</h2>
      <div className="flex flex-col md:flex-row md:justify-between">
        <div className="text-center md:w-1/3 mb-8 md:mb-0">
          <h2 className="text-5xl mb-4 ">01</h2>
          <div className="w-40 mx-auto  border-t border-white mb-2"></div>
          <h4 className="text-xl font-semibold mb-2">Find a Professional</h4>
          <p className="text-gray-300">
            Browse services, portfolios, and client reviews and then connect with agencies and freelancers you’d like to work with. You can also fill out a form and get matched with providers that fit your needs.
          </p>
        </div>
        <div className="text-center md:w-1/3 mb-8 md:mb-0">
          <h2 className="text-5xl mb-4">02</h2>
          <div className="w-40 mx-auto  border-t border-white mb-2"></div>
          <h4 className="text-xl font-semibold mb-2">Discuss Your Needs</h4>
          <p className="text-gray-300">
            Browse services, portfolios, and client reviews and then connect with agencies and freelancers you’d like to work with. You can also fill out a form and get matched with providers that fit your needs.
          </p>
        </div>
        <div className="text-center md:w-1/3">
          <h2 className="text-5xl mb-4">03</h2>
          <div className="w-40 mx-auto  border-t border-white mb-2"></div>
          <h4 className="text-xl font-semibold mb-2">Get Your Project Done</h4>
          <p className="text-gray-300">
            Browse services, portfolios, and client reviews and then connect with agencies and freelancers you’d like to work with. You can also fill out a form and get matched with providers that fit your needs.
          </p>
        </div>
      </div>

    </div>
  );
}

export default How;
