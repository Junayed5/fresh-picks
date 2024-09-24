import React from "react";

const page = () => {
  return (
    <div className="bg-[url('https://demo.xpeedstudio.com/marketov2/grocery/wp-content/uploads/sites/12/revslider/grocery/banner3_img-min-1.jpg')] bg-no-repeat ">
      <form action="">
        <div>
          <label htmlFor="Email">Email</label>
          <input type="email" name="email" id="email  " />
        </div>
        <div>
          <label htmlFor="Password">Password</label>
          <input type="password" name="password" id="password  " />
        </div>
        <div>
          <input type="checkbox" name="check" id="email  " />
          <label htmlFor="Remember Me">Remember Me</label>
        </div>

        <input type="submit" value="Login now" />
      </form>
    </div>
  );
};

export default page;
