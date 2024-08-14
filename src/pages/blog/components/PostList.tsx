import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import PostItem from "./PostItem";

function PostList() {
  const postList = useSelector((state: RootState) => state.blog.postList);
  return (
    <div className="my-10 flex flex-col gap-2 text-center">
      <div className="font-bold text-lg">Bài viết mới</div>
      <div className="grid grid-cols-5 gap-5 mx-5">
        {postList.map((post) => (
          <PostItem post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
}

export default PostList;
