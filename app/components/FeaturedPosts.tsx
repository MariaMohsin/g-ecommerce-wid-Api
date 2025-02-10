"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

interface PostProps {
  title: string;
  image: string;
  description: string;
  date: string;
  comments: number;
  url: string;
}

const FeaturedPost: React.FC<PostProps> = ({
  title,
  image,
  description,
  date,
  comments,
  url,
}) => {
  return (
    <div
      className="w-full bg-white rounded-lg shadow-md overflow-hidden md:w-1/3 lg:w-[348px] p-4 py-10 flex flex-col"
      style={{ height: "550px" }} 
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-delay="300"
      data-aos-offset="0"// Consistent height for all cards
    >
      <div className="relative w-full h-[200px] lg:h-[250px]">
        <Image
          className="rounded-lg"
          src={image}
          alt={title}
          fill style={{ objectFit: 'cover' }}
          priority
        />
      </div>
      <div className="flex-grow p-4 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-900">{title}</h2>
          <p className="text-gray-700 text-base mt-2">{description}</p>
        </div>
        <div className="flex justify-between items-center mt-4">
          <span className="text-gray-500 text-sm">{date}</span>
          <span className="flex items-center text-gray-500 text-sm">
            <svg
              className="w-4 h-4 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 8h10M7 12h10M7 16h10"
              />
            </svg>
            {comments} Comments
          </span>
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
          <a href={url} className="text-white">
            Learn More
          </a>
        </button>
      </div>
    </div>
  );
};

const FeaturedPosts = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out",
    });
  }, []);
  const posts: PostProps[] = [
    {
      title: "Loudest à la Madison #1 (L’integral)",
      image: "/image9.png",
      description:
        "We focus on ergonomics and meeting you where you where you work. It’s only a keystroke away.",
      date: "22 April 2021",
      comments: 10,
      url: "/post1",
    },
    {
      title: "Loudest à la Madison #2 (L’integral)",
      image: "/image10.png",
      description:
        "We focus on ergonomics and meeting you where you where you work. It’s only a keystroke away.",
      date: "23 April 2021",
      comments: 5,
      url: "/post2",
    },
    {
      title: "Loudest à la Madison #2 (L’integral)",
      image: "/image11.png",
      description:
        "We focus on ergonomics and meeting you where you where you work. It’s only a keystroke away.",
      date: "23 April 2021",
      comments: 5,
      url: "/post2",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6 lg:mt-60 mt-40">
      {posts.map((post, index) => (
        <FeaturedPost
          key={index}
          title={post.title}
          image={post.image}
          description={post.description}
          date={post.date}
          comments={post.comments}
          url={post.url}
        />
      ))}
    </div>
  );
};

export default FeaturedPosts;