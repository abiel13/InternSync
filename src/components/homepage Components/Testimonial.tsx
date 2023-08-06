import React from "react";

const Testimonial: React.FC = () => {
  return (
    <div className="min-h-[70vh] bg-[#ddf0f7] items-center py-5 px-3 flex flex-col gap-8">
      <div className="flex flex-col gap-3">
        <h1 className="font-normal capitalize text-3xl leading-8 tracking-wider mt-3  ">Dont just take our word for it</h1>
        <p className="text-center text-xl font-light mt-2"> Read what our clients are saying</p>
      </div>
      <div  className="px-4 .text-wrap font-medium t italic leading-snug text-xl">
        We partnered with InternSync to build out our core engineering team and we
        couldn't be more thrilled! IternSync pool of high-quality, motivated
        and entrepreneurial engineers was a game-changer during the critical
        phases of launching our startup. We are excited to work closely with
        InternSync to keep on expanding our team and growing together!{" "}
      </div>
      <div></div>
      <div  className="px-4 .text-wrap font-medium t italic leading-snug text-xl">
        InternSync is a network of hand selected and rigorously vetted African
        developers. Join 50+ teams who have hired talents from InternSync from few
        months to many years.
      </div>
    </div>
  );
};

export default Testimonial;
