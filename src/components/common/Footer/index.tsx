import Image from "next/image";
import * as React from "react";
import { ReactElement } from "react";
import Location from "../../../assets/icons/Location";
import Phone from "../../../assets/icons/Phone";
import IconButton from "../../custom/IconButton";
import samaneh from "../../../assets/imgs/samandehi.png";
import zarin from "../../../assets/imgs/zarinball.png";
import Telegram from "../../../assets/icons/Telegram";
import Instagram from "../../../assets/icons/Instagram";
import WhatsApp from "../../../assets/icons/WhatsApp";

const Footer = () => {
  return (
    <footer className="flex  bg-red-400 py-16 lg:py-0 lg:h-[25rem] px-8">
      <div className="flex items-center flex-wrap  justify-center container gap-12 mx-auto">
        <div className="flex flex-col gap-4">
          <div>
            <h4 className="text-[1.75rem] mb-2 font-bold ">
              ما همیشه کنارتون هستیم!
            </h4>
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
          <h4 className="text-xl mb-2 font-bold">
            ما را در شبکه های اجتماعی دنبال کنید.
          </h4>
          <div className="flex gap-2 justify-center">
            <IconButton>
              <Telegram />
            </IconButton>
            <IconButton>
              <Instagram />
            </IconButton>
            <IconButton>
              <WhatsApp />
            </IconButton>
          </div>
        </div>
        <div>
          <Image src={samaneh} width={150} height={150} />
          <Image src={zarin} height={150} width={105.5} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
