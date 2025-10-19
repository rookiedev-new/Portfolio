import gitImg from "../assets/git.png";
import logo from "../assets/linkdin.jpg";
export const Foot = () => {
  return (
    <footer id="contact" className="h-auto bg-black opacity-90 p-3 ">
        <div className="flex flex-wrap justify-center  items-center gap-4">
        <h2 className="cursor-pointer text-xl my-2 text-center">
          E mail- gautam.jun46@gamil.com
        </h2>
        <div className=" w-11 rounded-full border-2 p-0.5">
        <a href="https://www.linkedin.com/in/gautam-373bb9305/" target="_blank">
          <img className="w-10 rounded-full" src={logo} alt="profile" />
        </a>
        </div>
        <div className=" w-12  rounded-full p-2 border-2 ">
        <a href="https://github.com/rookiedev-new" target="_blank">
          <img className="w-10" src={gitImg}  alt="git" />
        </a>
        </div>
        <hr/>
       
        </div>
        <hr className="my-2 w-[70vw] opacity-35 mx-auto"/>
        <p className="text-center">
          © 2025 MyPortfolio. Built with React | All rights reserved</p>
      
    </footer>
  );
};
export default Foot;
