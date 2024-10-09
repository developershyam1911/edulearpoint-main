import React from 'react';
// import founderImg from "@/public/images/founder-img.jpeg"
import cofounderimg from "@/public/images/co-founder-img.jpg"
import Image from 'next/image';
import img1 from "@/public/default-avatar.jpg"

const Founder = () => {
  const founders = [
    {
      id: 1,
      name: 'Mr. _______',
      position: 'Founder ',
      role: 'Meet Mr______, the Founder of an innovative education course selling platform THESKILLSTRACK, dedicated to democratizing access to quality education. Having earned 10 lakhs, She is on a mission to empower over 500 entrepreneurs in India. With business acumen, she inspires growth, learning, and entrepreneurship for a brighter future.',
      socialLink: 'https://www.linkedin.com/in/shweta-kumari-0106901b0/',
      image: img1,
    },
    {
      id: 2,
      name: 'Ms. RITIKA GOSH',
      position: 'Co-Founder',
      role: 'Meet Ms.RITIKA GOSH, the Co -founder of an innovative education platform EDULEARPOINT dedicated to democratizing access to quality education. Having earned 20 lakh, He is on a mission to empower over 1lakh entrepreneurs in India. With visionary leadership, They inspire growth, learning, and entrepreneurship for a bright future',
      socialLink: 'https://www.linkedin.com/in/ayush-kumar-3b0b8b1b0/',
      image: cofounderimg,
    },
    
  ];

  return (
    <section className='bg-white z-[100]'>
      <div className="max-w-[80vw] mx-auto ">
        {founders.map((founder, index) => (
          <section key={founder.id} className="relative my-8">
            {/* Gradient circles */}
            <div className="absolute inset-0 flex justify-between">
              <div className="h-36 w-36 absolute top-[70px] left-[-10px] rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 opacity-50"></div>
              <div className="h-48 w-48 absolute top-0 right-0 rounded-full bg-gradient-to-r from-pink-500 to-red-500 opacity-50"></div>
            </div>
            <div className="relative mx-auto px-4 py-16 sm:px-6 lg:px-8">
              <div className={`flex flex-col lg:flex-row ${index % 2 !== 0 && 'lg:flex-row-reverse'}`}>
                <div className="relative z-50 lg:py-16 lg:w-1/2">
                  <div className="relative h-[250px] sm:h-[350px] lg:h-[500px]">
                    <Image width={900} height={900}
                      alt={founder.name}
                      src={founder.image}
                      className="absolute inset-0 h-full w-full object-fill"
                    />
                  </div>
                </div>
                <div className="relative flex flex-col items-center bg-gray-100 lg:w-1/2">
                  <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"></span>
                  <div className="p-8 sm:p-16 lg:p-24">
                    <h2 className="text-2xl font-bold sm:text-3xl">{founder.name}</h2>
                    <h3 className="text-lg font-semibold sm:text-xl text-indigo-600">{founder.position}</h3>
                    <p className="mt-4 text-gray-600">{founder.role}</p>

                    <a

                      href={founder.socialLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-8 inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                    >
                      Connect on Instagram
                    </a>

                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </section>
  );
};

export default Founder;