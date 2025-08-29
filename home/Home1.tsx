import React from 'react';

const Home1 = () => {
  return (
    <div className="p-6 mt-10 mb-10">
      <h1 className="text-2xl font-bold mb-6 text-center">
        All our room types include complementary breakfast
      </h1>

      <div className="flex gap-10 justify-center">
        <div className=" py-10 w-280 pr-10" >
          <h1 className='text-2xl py-3 font-bold'>Welcome to Hotel Forest Backpackin</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia nam est cumque, eos assumenda esse facilis 
            natus voluptas nihil quo rerum beatae, laborum nobis, ut illum tempore debitis possimus corporis?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. In molestiae accusamus quisquam, Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim perferendis omnis reprehenderit error accusantium culpa assumenda cumque? Hic, sunt illum minima dolor maxime magni facere, labore quis quo sint corrupti laboriosam, magnam excepturi. Ducimus aut ipsa ratione accusantium ut culpa labore molestias natus. Enim ipsa vitae similique doloremque quis quibusdam! aut consequuntur sit itaque corrupti deleniti aperiam? Doloribus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus sit officiis deleniti consequatur.
          </p>
        </div>

        <div className="flex relative w-80 h-80 ">
          <img
            src="1.jpg"
            alt=""
            className="absolute top-20 right-20 w-90 h-80 object-cover rounded-lg  z-20"
          />
          <img
            src="2.jpg"
            alt=""
            className="absolute top-0 left-0 w-90 h-80 object-cover rounded-lg z-10"
          />
        </div>
      </div>
    </div>
  );
};

export default Home1;
