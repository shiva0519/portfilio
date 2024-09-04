import React from 'react'
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Web Development"
          des="Crafting modern websites with responsive design and user-friendly interfaces. Building dynamic and interactive web applications."
          icon={<AiFillAppstore />}
        />
        <Card
          title="Logo Design"
          des="Creating unique and memorable logos that capture brand identity. Designing visual symbols that stand out and leave a lasting impression."
         
          icon={<SiProgress />}
        />
        <Card
          title="UX Design"
          des="Enhancing user experience through intuitive and engaging interfaces. Designing seamless interactions that prioritize user needs and accessibility."
          
          icon={<SiAntdesign />}
        />
        {/* <Card
          title="Logo Design"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          hic consequuntur eum repellendus ad."
          icon={<FaMobile />}
        />
        <Card
          title="UX Design"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          hic consequuntur eum repellendus ad."
         
        />
        <Card
          title="Hosting Websites"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          hic consequuntur eum repellendus ad."
          icon={<FaGlobe />}
        /> */}
      </div>
    </section>
  );
}

export default Features