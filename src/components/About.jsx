import React from "react";

function About() {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 ">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          hic esse nobis saepe neque possimus dolores eum beatae error provident
          laboriosam officiis, molestias accusantium totam magnam autem earum
          quisquam veritatis minus tenetur assumenda quasi laborum amet quae.
          Labore, veritatis quos atque blanditiis ipsam veniam quasi, ea culpa
          officia, officiis doloribus!
        </p>

        <p className="text-xl mt-5">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae
          ipsa autem quibusdam quam corrupti voluptatibus, eos eius dolor
          voluptatem nihil porro architecto totam recusandae praesentium
          adipisci? Architecto, voluptates repellendus quibusdam consequatur
          optio eaque? Inventore soluta laboriosam dolorum, et quia beatae
          voluptas reprehenderit optio ut deleniti, ullam eveniet? Ullam, illo
          soluta?
        </p>
      </div>
    </div>
  );
}

export default About;
