import Image from "next/image";
import { GrTwitter } from "react-icons/gr";
import React from "react";
import { BiHash, BiHomeCircle, BiMoney, BiUser } from "react-icons/bi";
import { BsBell, BsBookmark, BsEnvelope } from "react-icons/bs";
import FeedCard from "@/components/FeedCard";
import { CiCircleMore } from "react-icons/ci";


interface TwitterSideBarButton{
  title: string;
  icon: React.ReactNode;
}

const sideBarMenuItems: TwitterSideBarButton[] = [
  {
    title: "Home",
    icon: <BiHomeCircle />
  },
  {
    title: "Explore",
    icon: <BiHash />
  },
  {
    title: "Notifications",
    icon: <BsBell />
  },
  {
    title: "Messages",
    icon: <BsEnvelope />
  },
  {
    title: "Bookmarks",
    icon: <BsBookmark/>
  },
  {
    title: "Twitter Blue",
    icon: <BiMoney/>
  },
  {
    title: "Profile",
    icon: <BiUser/>
  },
  {
    title: "More",
    icon: <CiCircleMore />
  }

]
export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-12 h-screen w-screen px-56">
        <div className="col-span-3 justify-start ml-8">
          <div className="text-4xl h-fit hover:bg-gray-600 rounded-full p-2 cursor-pointer transition-all w-fit">
            <GrTwitter />
          </div>
          <div className="mt-4 text-l font-semibold pr-4">
            <ul>
              {sideBarMenuItems.map(item => (
                <li className="flex justify-start items-center gap-4 hover:bg-gray-600 rounded-full cursor-pointer px-4 py-2 w-fit mt-3">
                  <span className="text-2xl">{item.icon}</span>
                  <span>{item.title}</span>
                </li>
              )
              )}
            </ul>
            <div className="pr-4">
              <button className="bg-[#1d9bf0] font-semibold text-lg rounded-full justify-start items-center mt-5 px-8 py-2 w-full">
                Tweet
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-5 border-r-[1px] border-l-[1px] border-gray-600 h-screen overflow-scroll">
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
        </div>
        <div className="col-span-3"></div>
      </div>
    </div>
  );
}
