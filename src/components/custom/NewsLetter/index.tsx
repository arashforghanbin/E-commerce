import * as React from "react";
import Button from "../Button";

const NewsLetter = () => {
  return (
    <div className="absolute bottom-0 right-1/2 translate-y-1/2 translate-x-1/2 h-20 w-[45rem] border-2 border-red-600 border-dashed rounded-2xl flex items-center justify-center">
      <div className="bg-white w-[99%] h-[90%] flex rounded-2xl shadow-md">
        <input
          className="bg-white flex grow px-4 rounded-2xl"
          type="text"
          placeholder="جهت اطلاع از تحفیف ها و اخبار ایمیل خود را وارد کنید."
        />
        <Button variant="primary" size="md">
          ارسال
        </Button>
      </div>
    </div>
  );
};

export default NewsLetter;
