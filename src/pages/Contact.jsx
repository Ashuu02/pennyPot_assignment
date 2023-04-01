import React from "react";
import Navbar from "../components/Navbar";

const Contact = () => {

    const whatsapp = () => {
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;
        var message = document.getElementById("message").value;
         
        var url = "https://wa.me/8087572655?text="
        +"*Name :* "+name+"%0a"
        +"*Email :* "+email+"%0a"
        +"*Phone :* "+phone+"%0a"
        +"*Message :* "+message;
         
        window.open(url,'_blank').focus();
        }


  return (
    <>
    <Navbar/>
      <div id="contact" className="">
        <div className=" items-center flex justify-center col-span-2 h-auto shadow-xl lg:p-4">
          <div className="py-4 items-center justify-center ">
            <p className=" text-white mb-8 pr-[20px] border-b-4 pb-3 border-b-[#40f0f8] w-40 text-2xl font-bold ">
              Contact us
            </p>
            <form
              action="#"
              className="form-group"
              method="POST"
              enctype="multipart/form-data"
            >
              <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                <div className="flex flex-col">
                  <label className="uppercase text-sm text-left text-white py-2">
                    Name
                  </label>
                  <input
                    className=" form-control border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label className="uppercase text-left text-sm text-white py-2">
                    Phone Number
                  </label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Ph. No."
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col py-2">
                <label className="uppercase text-left text-sm text-white py-2">
                  Email
                </label>
                <input
                  className="border-2 rounded-lg p-3 flex border-gray-300"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="flex flex-col py-2">
                <label className="uppercase text-left text-sm text-white py-2">
                  Message
                </label>
                <textarea
                  className="border-2 rounded-lg p-3 border-gray-300"
                  rows="10"
                  name="message"
                  id="message"
                  placeholder="Your message"
                  required
                ></textarea>
              </div>
              <button
                type="button"
                onClick={whatsapp}
                // className="w-full p-4 bg-gradient-to-r from-[#00acb54a] to-[#40f0f8] hover:bg-[#40f0f8]  rounded-xl text-xl font-bold text-white mt-4"
                className="w-full p-4 bg-gradient-to-r bg-[#a6a6a6] hover:bg-[#858484] text-[#262626]  rounded-xl text-xl font-bold text-white mt-4"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
