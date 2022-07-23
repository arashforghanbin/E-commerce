import Image from "next/image";
import * as React from "react";
import Location from "../../../assets/icons/Location";
import Phone from "../../../assets/icons/Phone";
import IconButton from "../../custom/IconButton";

const Footer = () => {
  return (
    <footer className="flex bg-red-400 h-[25rem]">
      <div className="flex items-center container mx-auto">
        <div className="flex flex-col gap-4">
          <div>
            <h4 className="text-[1.75rem] mb-2">ما همیشه کنارتون هستیم!</h4>
            <p className="opacity-50">
              لورم ایپسوم متن ساختگی با تولید سادگی مفهوم است.
            </p>
          </div>
          <div>
            <div className="flex gap-2 mb-2">
              <Phone />
              <span>تلفن تماس:</span>
            </div>
            <p className="opacity-50">۰۹۲۱۵۹۷۷۳۱۸ | ۰۹۲۱۵۹۷۷۳۱۸</p>
          </div>
          <div>
            <div className="flex gap-2 mb-2">
              <Location />
              <span>آدرس دفتر:</span>
            </div>
            <p className="opacity-50">تهران خیابان آزادی</p>
          </div>
        </div>
        <div className="flex justify-center items-center flex-col grow">
          <h4 className="text-xl mb-2">
            ما را در شبکه های اجتماعی دنبال کنید.
          </h4>
          <div className="flex gap-2 justify-center">
            <IconButton></IconButton>
            <IconButton></IconButton>
            <IconButton></IconButton>
          </div>
        </div>
        <div></div>
      </div>
    </footer>
  );
};

export default Footer;
