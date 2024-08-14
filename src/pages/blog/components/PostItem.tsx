import { useDispatch } from "react-redux";
import { Post } from "../../../types/blog.type";
import { deletePost, startUpdatingPost } from "../blog.reducer";

type Props = {
  post: Post;
}

function PostItem(props: Props) {
  const {post} = props;
  const dispatch = useDispatch();

  const handleDeletePost = (id: Post['id']) => {
    dispatch(deletePost(id));
  }

  const handleUpdatingPost = (post: Post) => {
    dispatch(startUpdatingPost(post));
  }

  return (
    <div className="relative w-full rounded-lg shadow-md">
      <div className="h-full w-full">
        <img
          className="w-full object-cover aspect-square"
          src={post.featuredImage}
          alt=""
        />
        <div className="p-5">
          <h1 className="text-center font-serif text-xl font-semibold text-rose-500 text-length-1">
            {post.title}
          </h1>
          <p className="text-center text-gray-600 text-length-2">
            {post.description}
          </p>
          <div className="flex flex-row gap-2 justify-center items-center">
            <button className="text-blue-500 underline" onClick={() => handleUpdatingPost(post)}>Cập nhật</button>
            <button className="text-red-500 underline" onClick={() => handleDeletePost(post.id)}>Xoá</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostItem;
