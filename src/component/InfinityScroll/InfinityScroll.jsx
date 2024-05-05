import { useEffect, useRef, useState } from "react";
import Comments from "./Comments";
const commentsPerPage = 10;

export default function InfinityScroll() {
  const [comments, setComments] = useState([]);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  const loaderRef = useRef(null);

  useEffect(() => {
    const fetchComments = async () => {
      const response = await fetch(
        `https://dummyjson.com/comments?limit=${commentsPerPage}&skip=${
          page * commentsPerPage
        }`
      );
      const data = await response.json();

      if (data.comments.length === 0) {
        setHasMore(false);
      } else {
        setComments((prevComments) => [...prevComments, ...data.comments]);
        setPage((prevPage) => prevPage + 1);
      }
    };

    const onIntersection = (items) => {
      const loaderItem = items[0];
      if (loaderItem.isIntersecting && hasMore) {
        fetchComments();
      }
    };

    const observer = new IntersectionObserver(onIntersection);

    if (observer && loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (observer) observer.disconnect();
    };
  }, [page, hasMore]);

  return (
    <div className="max-w-2xl mx-auto mt-2">
      <h1 className="text-center font-bold text-xl my-4">
        Infinity Scroll Example
      </h1>
      {comments.map((comment) => (
        <Comments key={comment.id} comment={comment} />
      ))}

      {hasMore && (
        <div ref={loaderRef} className="flex gap-2 justify-center my-3">
          <div className="w-5 h-5 rounded-full animate-pulse bg-blue-600"></div>
          <div className="w-5 h-5 rounded-full animate-pulse bg-blue-600"></div>
          <div className="w-5 h-5 rounded-full animate-pulse bg-blue-600"></div>
        </div>
      )}
    </div>
  );
}
