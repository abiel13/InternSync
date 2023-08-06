import React from "react";
import Card from "./Card";

const HowItWorks: React.FC = () => {
  const CardData = [
    {
      id: 1,
      title: "Create an account ",
      desc: "after creating an account then login",
    },
    {
      id: 2,
      title: "Account Assesment ",
      desc: "Update your profile and fill in the whole form creating while updating your profile.",
    },
    {
      id: 3,
      title: "Visit the Dashboard  ",
      desc: "Apply for any internship opening with just a click of a button. remember you no longer have to fill anything else ",
    },
    {
      id: 1,
      title: "Create an account ",
      desc: "after creating an account then login",
    },
    {
      id: 2,
      title: "Account Assesment",
      desc: "Update Your Proile and fill in the form creating while updating your profile",
    },
    {
      id: 3,
      title: "Visit The Dashboard",
      desc: "visit the dashboard and create and internship opening post . you will get notified as interns apply via your post intern porile servea s their cv, in the profile of applicants you can see links to their pojects etc",
    },
  ];

  return (
    <div className="flex flex-col items-center mt-[6rem] w-full px-3 py-2 ">
      <div className="text-3xl text-center tracking-wide leading-8 mb-3 font-medium">
        How InternSync Works
      </div>
      <p className="text-xl text-gray-600 leading-8 text-center ">
        Whether you’re just getting started or your business is booming,
        InternSync has you covered.
      </p>
      <div className="w-full md:flex md:gap-8">
        {CardData.slice(0, 3).map((items) => (
          <Card pagination={items.id} title={items.title} desc={items.desc} />
        ))}
      </div>
      
     <h3 className="font-bold text-3xl my-8 text-center">InternSync For Employers</h3>
 
      <div className="w-full block md:flex gap-8 ">
        {CardData.slice(3, 6).map((items) => (
          <Card pagination={items.id} title={items.title} desc={items.desc} />
        ))}
      </div>

      <div className="w-full block mt-10 md:flex justify-center">
        <button className="bg-black tracking-wide text-lg md:text-xl text-white font-bold px-4 rounded-full py-4">Join InternSync</button>
      </div>

    </div>
    
  );
};

export default HowItWorks;
