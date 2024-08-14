import React from "react";
import { Post } from "../../../types/blog.type";
import { useDispatch, useSelector } from "react-redux";
import { addPost, cancelUpdatingPost, startUpdatingPost, updatePost } from "../blog.reducer";
import { RootState } from "../../../store";

const initialState: Post = {
  id: "",
  description: "",
  featuredImage: "",
  published: true,
  title: "",
};

function CreatePost() {
  const [formData, setFormData] = React.useState(initialState);
  const updatingPost = useSelector((state: RootState) => state.blog.updatingPost);
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(updatingPost != null) {
      dispatch(updatePost(formData));
    } else {
      const formDataWithId = { ...formData, id: new Date().toISOString() };
      dispatch(addPost(formDataWithId));
      setFormData(initialState);
    }
  };

  const handleCancelUpdatingPost = () => {
    dispatch(cancelUpdatingPost());
  }


  React.useEffect(() => {
    if(updatingPost != null) {
      setFormData(updatingPost);
    } else {
      setFormData(initialState);
    }
  }, [updatingPost]);

  return (
    <div>
      <div className="heading text-center font-bold text-2xl m-5 text-gray-800">
        New Post
      </div>
      <form
        onSubmit={handleSubmit}
        className="editor mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl"
      >
        <input
          className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
          spellCheck="false"
          placeholder="Title"
          type="text"
          required
          value={formData.title}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, title: e.target.value }))
          }
        />
        <input
          className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
          spellCheck="false"
          placeholder="URL Image"
          type="text"
          required
          value={formData.featuredImage}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, featuredImage: e.target.value }))
          }
        />
        <textarea
          className="description bg-gray-100 sec p-3 h-60 border border-gray-300 outline-none"
          spellCheck="false"
          placeholder="Describe everything about this post here"
          value={formData.description}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, description: e.target.value }))
          }
        ></textarea>
        <div className="mt-3 flex justify-end">
          {updatingPost && <button className="btn border border-gray-300 p-1 px-4 font-semibold cursor-pointer text-gray-500 ml-auto" onClick={handleCancelUpdatingPost}>
            Huỷ
          </button>}
          <button className="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-white ml-2 bg-indigo-500">
            {updatingPost ? 'Cập nhật' : 'Đăng'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreatePost;
