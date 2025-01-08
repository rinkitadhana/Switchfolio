import React from "react"
interface BlogBoxProps {
  img: string
  head: string
  des: string
  link: string
}

const WritingsBox: React.FC<BlogBoxProps> = ({ img, head, des, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      className=" blog-post flex md:flex-row flex-col   items-center gap-2"
    >
      <img
        className="  md:size-[68px] object-cover w-full h-[100px] select-none rounded-md"
        src={img}
        alt="Blog Image"
      />
      <div className="flex flex-col ">
        <h1>{head}</h1>
        <p className=" text-sm opacity-80">{des}</p>
      </div>
    </a>
  )
}

export default WritingsBox
