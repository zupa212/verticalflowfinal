import React from "react";

const ReelsSection = () => {
  return (
    <div className="flex flex-col bg-white">
      <div className="flex flex-col items-start self-stretch bg-neutral-50 h-[1987px]">
        <div className="flex items-start self-stretch mt-[524px] mb-4">
          <div className="flex flex-1 flex-col items-start mr-3">
            <div className="flex flex-col items-center relative">
              <div className="bg-[#00000033] w-[372px] h-[498px] rounded-3xl">
              </div>
              <span className="text-[#22282B] text-[38px] font-bold w-[225px] absolute top-0 right-[-147px]">
                {"Get \nStarted Now"}
              </span>
            </div>
            <div className="flex flex-col items-end self-stretch mb-[103px]">
              <img
                src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ksBwElDCQY/b0kx8nhl_expires_30_days.png"} 
                className="w-[52px] h-[52px] object-fill"
                alt="Icon"
              />
            </div>
            <div className="self-stretch bg-[#00000033] h-[498px] ml-[294px] rounded-3xl">
            </div>
            <span className="text-[#22282B] text-xl font-bold mb-[52px] ml-[71px]">
              {"Technology Irrigation"}
            </span>
            <img
              src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ksBwElDCQY/ufi7f1bl_expires_30_days.png"} 
              className="w-14 h-14 ml-[138px] object-fill"
              alt="Icon"
            />
            <img
              src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ksBwElDCQY/jjqve23o_expires_30_days.png"} 
              className="w-14 h-14 ml-[218px] object-fill"
              alt="Icon"
            />
          </div>
          <div className="flex flex-col shrink-0 items-center mr-5 gap-4">
            <div className="bg-[#00000033] w-[372px] h-[498px] rounded-3xl">
            </div>
            <div className="flex items-center">
              <span className="text-[#22282B] text-xl font-bold mr-[148px]">
                {"03"}
              </span>
              <span className="text-[#22282B] text-xl font-bold">
                {"Technology Irrigation"}
              </span>
            </div>
          </div>
          <div className="flex flex-col shrink-0 items-center my-[60px] gap-4">
            <div className="bg-[#00000033] w-[356px] h-[498px] rounded-3xl">
            </div>
            <div className="flex items-center">
              <span className="text-[#22282B] text-xl font-bold mr-[125px]">
                {"04"}
              </span>
              <span className="text-[#22282B] text-xl font-bold">
                {"Agricultural Monitoring"}
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center mb-[84px] ml-[294px]">
          <span className="text-[#22282B] text-xl font-bold mr-[187px]">
            {"02"}
          </span>
          <span className="text-[#22282B] text-xl font-bold">
            {"Organic Fertilizer"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ReelsSection;