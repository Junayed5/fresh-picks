import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import RegisterForm from "../components/form/RegisterForm";
import LoginButton, { LoginFacebookButton } from "../components/button/LoginButton";

const page = () => {
  return (
    <div className="bg-[url('https://demo.xpeedstudio.com/marketov2/grocery/wp-content/uploads/sites/12/revslider/grocery/banner3_img-min-1.jpg')] bg-no-repeat bg-center bg-cover h-screen">
      <div className="max-w-7xl mx-auto pt-48">
        <div
          className="bg-white h-fit w-3/5 mx-auto rounded-lg grid grid-cols-2   px-10 py-14"
          action=""
        >
          <RegisterForm/>
          <div className="flex justify-center items-center">
            <div>
              <div>
                <p className="text-center text-sm font-serif">
                  Or <br /> Login with
                </p>
              </div>
              <div className="">
                <LoginButton text={"Continue With Goggle"} icon={<FcGoogle/>}/>
                <LoginFacebookButton text={"Continue With Facebook"} icon={<FaFacebookF/>}/>
              </div>
              <div>
                <p className="text-sm text-center">
                  Have an account?{" "}
                  <Link className="text-primary" href={"/login"}>
                    Login
                  </Link>{" "}
                  here
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
