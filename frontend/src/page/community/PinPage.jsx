import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { PinData } from "../../context/PinContext";
import { Loading } from "../../components/community/Loading";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { UserData } from "../../context/UserContext";  // Import UserContext

const PinPage = () => {
  const params = useParams();
  const { user, loading: userLoading } = UserData();  // Get user from context
  const { loading, fetchPin, pin, updatePin, addComment, deleteComment, deletePin } = PinData();
  const [edit, setEdit] = useState(false);
  const [title, setTitle] = useState("");
  const [pinValue, setPinValue] = useState("");
  const [link, setLink] = useState("");
  const [comment, setComment] = useState("");

  const navigate = useNavigate();

  // Fetch pin data
  useEffect(() => {
    fetchPin(params.id);
  }, [params.id]);

  // Set form data if pin is available
  useEffect(() => {
    if (pin) {
      setTitle(pin.title);
      setPinValue(pin.pin);
      setLink(pin.link);
    }
  }, [pin]);

  const editHandler = () => {
    setEdit(!edit);
  };

  const updateHandler = () => {
    updatePin(pin._id, title, pinValue, link, setEdit);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    addComment(pin._id, comment, setComment);
  };

  const deleteCommentHandler = (id) => {
    if (window.confirm("Are you sure you want to delete this comment?"))
      deleteComment(pin._id, id);
  };

  const deletePinHandler = () => {
    if (window.confirm("Are you sure you want to delete this pin?"))
      deletePin(pin._id, navigate);
  };

  const navigateToLink = () => {
    if (link) {
      window.open(link, "_blank");
    } else {
      alert("No link available.");
    }
  };

  if (userLoading || loading) {
    return <Loading />;
  }

  return (
    <div className="mt-[60px]">
      {pin && (
        <div className="flex flex-col items-center bg-gray-100 min-h-screen">
          <div className="bg-white rounded-lg shadow-lg flex flex-col md:flex-row w-full max-w-4xl">
            <div className="w-full md:w-1/2 bg-gray-200 rounded-t-lg md:rounded-l-lg md:rounded-t-none flex items-center justify-center">
              {pin.image && (
                <img
                  src={pin.image.url}
                  alt="Pin"
                  className="object-cover w-full rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                />
              )}
            </div>

            <div className="w-full md:w-1/2 p-6 flex flex-col">
              <div className="flex items-center justify-between mb-4">
                {edit ? (
                  <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="common-input w-1/2 md:w-1/3"
                    placeholder="Enter Title"
                  />
                ) : (
                  <h1 className="text-2xl font-bold">{pin.title}</h1>
                )}

                {pin.owner && pin.owner._id === user._id && (
                  <div className="flex space-x-2">
                    <button onClick={editHandler}>
                      <FaEdit />
                    </button>
                    <button
                      onClick={deletePinHandler}
                      className="bg-orange-500 text-white py-1 px-3 rounded"
                    >
                      <MdDelete />
                    </button>
                  </div>
                )}
              </div>

              {edit ? (
                <>
                  <input
                    value={pinValue}
                    onChange={(e) => setPinValue(e.target.value)}
                    className="common-input w-full md:w-1/2 mb-2"
                    placeholder="Enter Description"
                  />
                  <input
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                    className="common-input w-full md:w-1/2"
                    placeholder="Enter Link"
                  />
                </>
              ) : (
                <p className="mb-6">{pin.pin}</p>
              )}

              {edit && (
                <button
                  className="bg-orange-500 text-white py-1 px-3 mt-2 mb-2 w-1/2 md:w-1/4"
                  onClick={updateHandler}
                >
                  Update
                </button>
              )}

              {pin.owner && (
                <div className="flex items-center justify-between border-b pb-4 mb-4">
                  <div className="flex items-center">
                    <Link to={`/user/${pin.owner._id}`}>
                      <div className="rounded-full h-12 w-12 bg-gray-300 flex items-center justify-center">
                        <span className="font-bold">{pin.owner.name.slice(0, 1)}</span>
                      </div>
                    </Link>
                    <div className="ml-4">
                      <h2 className="text-lg font-semibold">{pin.owner.name}</h2>
                      <p className="text-gray-500">{pin.owner.followers.length} Followers</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Tags Section */}
              {pin.tags && pin.tags.length > 0 && (
                <div className="mb-4">
                  <h3 className="text-lg font-semibold">Tags:</h3>
                  <div className="flex flex-wrap mt-2">
                    {pin.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center bg-gray-200 rounded-full px-3 py-1 text-sm text-gray-800 mr-2 mb-2"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <button
                onClick={navigateToLink}
                className="bg-gray-950 text-white py-2 px-4 rounded mt-4 mb-4"
              >
                GO TO LINK
              </button>

              <div className="flex items-center mt-4">
                <div className="rounded-full h-12 w-12 bg-gray-300 flex items-center justify-center mr-4">
                  <span className="font-bold">{pin.owner && pin.owner.name.slice(0, 1)}</span>
                </div>

                <form className="flex-1 flex" onSubmit={submitHandler}>
                  <input
                    type="text"
                    placeholder="Enter Comment"
                    className="flex-1 border rounded-lg p-2"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    required
                  />

                  <button
                    type="submit"
                    className="ml-2 bg-[#23b1e1] px-4 py-2 rounded-md text-white"
                  >
                    Add+
                  </button>
                </form>
              </div>

              <hr className="font-bold text-gray-400 mt-3 mb-3" />

              <div className="overflow-y-auto h-64">
                {pin.comments && pin.comments.length > 0 ? (
                  pin.comments.map((e, i) => (
                    <div className="flex items-center justify-between mb-4" key={i}>
                      <div className="flex items-center mb-4 justify-center gap-3">
                        <Link to={`/user/${e.user}`}>
                          <div className="rounded-full h-12 w-12 bg-gray-300 flex items-center justify-center">
                            <span className="font-bold">{e.name.slice(0, 1)}</span>
                          </div>
                        </Link>

                        <div className="ml-4">
                          <h2 className="text-lg font-semibold">{e.name}</h2>
                          <p className="text-gray-500">{e.comment}</p>
                        </div>

                        {e.user === user._id && (
                          <button
                            onClick={() => deleteCommentHandler(e._id)}
                            className="bg-orange-500 text-white py-1 px-3 rounded"
                          >
                            <MdDelete />
                          </button>
                        )}
                      </div>
                    </div>
                  ))
                ) : (
                  <p>Be the first one to add a comment</p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PinPage;
