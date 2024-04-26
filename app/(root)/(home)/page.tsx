import MeetingTypeList from "@/components/MeetingTypeList";
import UpcomingNotifier from "@/components/UpcomingNotifier";
import React from "react";

const Home = () => {
  const now = new Date();
  const time = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const date = new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
  }).format(now);

  

  return (
    <section className="flex flex-col size-full gap-16 text-white">
      <div className="relative w-full bg-gray-800 rounded-2xl flex flex-col gap-7 justify-center items-center h-[200px]">
        <p className="text-7xl font-bold max-sm:text-5xl">{time}</p>
        <p className="text-3xl text-red-1 font-semibold max-sm:text-2xl">
          {date}
        </p>
        {/* <UpcomingNotifier date={date} time={time} /> */}
      </div>

      <MeetingTypeList />
    </section>
  );
};

export default Home;
