import { Icon } from "@iconify/react";

const About = () => {
  return (
    <div className="w-3/6 mx-auto text-center my-14 text-5xl flex justify-between ">
    <a  href=" https://www.facebook.com/ashikuraju16"><Icon className=" mb-12 transition-all duration-1000 hover:scale-150" icon="logos:facebook" /></a>
    <a href="https://github.com/ashikuraju16"><Icon className=" mb-12 transition-all duration-1000 hover:scale-150" icon="mdi:github" /></a>
    <a  href="https://www.fiverr.com/ashik_raju?up_rollout=true"><Icon className="bg-green-500 text-white p-2 rounded-full mb-12 transition-all duration-1000 hover:scale-150" icon="jam:fiverr" /></a>
</div>
  );
};

export default About;
