import React from "react";

const page = () => {
  return (
    <div className="bg-[url('https://demo.xpeedstudio.com/marketov2/grocery/wp-content/uploads/sites/12/revslider/grocery/banner3_img-min-1.jpg')] bg-no-repeat bg-center bg-cover h-[600px]">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white h-96 rounded-lg">
          <form action="">
            <div>
              <label htmlFor="Email">Email</label><br />
              <input className="h-10 w-80 rounded-full bg-gray-100 pl-5 py-6 my-2" placeholder="Enter Your Email" type="email" name="email" id="email  " />
            </div>
            <div>
              <label htmlFor="Password">Password</label><br />
              <input className="h-10 w-80 rounded-full bg-gray-100 pl-5 py-6 my-2" placeholder="Enter Your Password" type="password" name="password" id="password  " />
            </div>
            <div>
              <input type="checkbox" name="check" id="email  " />
              <label htmlFor="Remember Me">Remember Me</label>
            </div>

            <input className="h-10 px-10 bg-primary hover:bg-primaryLite text-white rounded-full" type="submit" value="Login now" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
