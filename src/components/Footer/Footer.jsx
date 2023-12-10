// import React from 'react';
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className=" bg-zinc-800 text-white footer mt-5">
        <div className="grid grid-cols-5 gap-2 mx-5 py-20 border-b-2">
          <div className="">
            <ul>
              <li className=" text-3xl font-bold pb-5">Job Portal</li>
              <li>
                An online market place for looking jobs and seek seek employees.{" "}
              </li>
            </ul>
          </div>
          <div className="company">
            {/* <p>Company</p> */}
            <ul>
              <li className=" text-lg font-bold ">Company</li>
              <li>About us</li>
              <li>Work</li>
              <li>Latest News</li>
              <li>Careers</li>
            </ul>
          </div>
          <div className="product">
            <ul>
              <li className=" text-lg font-bold ">Product</li>
              <li>Plans & Pricing</li>
              <li>Customers</li>
              <li>Prototype</li>
              <li>Integrations</li>
            </ul>
          </div>
          <div className="support">
            <ul>
              <li className=" text-lg font-bold ">Support</li>
              <li>Help Desk</li>
              <li>Sales</li>
              <li>Become a Partner</li>
              <li>Developers</li>
            </ul>
          </div>
          <div className="contact">
            <ul>
              <li className=" text-lg font-bold ">Contact</li>
              <li>524 Broadway , NYC</li>
              <li>+1-788****</li>
            </ul>
          </div>
        </div>
        <div className="footer_lower mx-5 py-10">
          <p>@2023 Job Portal. All Rights Reserved</p>
          <p>Powered by Md. Anonto Shuvo</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
