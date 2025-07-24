import gitImg from "../assets/git.png";
import logo from "../assets/linkdin.jpg";
export const Foot = () => {
  return (
    <footer id="contact" className="h-auto bg-black opacity-80 p-5 ">
      <h2 className="underline text-3xl text-center text-blue-400 font-bold">
        Contact
      </h2>

      
        <h2 className="cursor-pointer text-xl my-2 text-center">
          E mail - kfddk@gamil.com
        </h2>
        <div className="flex justify-center items-center gap-4">
        <a href="#">
          <img className="w-10 sm:w-12 bg-red-500" src={logo} alt="profile" />
        </a>
        <a href="https://github.com/rookiedev-new" target="_blank">
          <img className="w-9 sm:w-10 sm:m-1" src={gitImg} alt="git" />
        </a>
        </div>
      
    </footer>
  );
};
export default Foot;
