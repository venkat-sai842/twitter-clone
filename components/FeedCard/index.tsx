import React from "react";
import Image from "next/image";
import { BiMessageRounded, BiUpload } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";

const FeedCard: React.FC = () => {
    return (
        <div className="p-4 hover:bg-slate-300 transition-all cursor-pointer">
            <div className="grid grid-cols-12 gap-3">
                <div className="col-span-1">
                    <Image
                        src="https://avatars.githubusercontent.com/u/71058069?v=4"
                        alt="User Image"
                        height={50}
                        width={50}
                    />
                </div>
                <div className="col-span-11">
                    <h3>Venkat Sai</h3>
                    <p>
                        Hostname "instagram.fhyd14-2.fna.fbcdn.net" is not configured under images in your 'next.config.js'. See more info: https://nextjs.org/docs/messages/next-image-unconfigured-host
                        at #defaultLoader
                    </p>
                    <div className="flex justify-between mt-5 text-2xl items-center w-[90%]">
                        <div>
                            <BiMessageRounded />
                        </div>
                        <div>
                            <FaRetweet />
                        </div>
                        <div>
                            <AiOutlineHeart />
                        </div>
                        <div>
                            <BiUpload />
                        </div>
                    </div>
                </div>
            </div>
        </div>)
};

export default FeedCard;