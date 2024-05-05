/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";

var settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
};

export const Card = ({post}) => {
  return (
    <a className="block max-w-sm p-6 h-48 bg-white border border-gray-200 rounded-lg shadow cursor-pointer">
      <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
        {(post?.title).slice(0,50)}.
      </h5>
      <p className="font-normal text-gray-700">{(post?.body).slice(0, 100)}...</p>
    </a>
  );
};

export default function DragEample() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div className="mt-10">
      <Slider className="" {...settings}>
        {posts?.map((post) => (
          <Card key={post.id} post={post} />
        ))}
      </Slider>
    </div>
  );
}
