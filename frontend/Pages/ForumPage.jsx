import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faUsers,
  faHashtag,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const ForumPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const [forumTopic, setTopic] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const createPostModal = () => {
    setOpenModal(!openModal);
  };

  const addPost = () => {
    setTopic((prevTopic) => [...prevTopic, { topic: title, content: content }]);
    setTitle("");
    setContent("");
    setOpenModal(false); // Close the modal after adding the post
  };

  useEffect(() => {}, [forumTopic]);

  return (
    <div className="relative px-[10%] josefin py-10">
      <div className="flex justify-between">
        <div className="w-[400px] p-2  bg-white rounded-full flex flex-nowrap">
          <FontAwesomeIcon
            className="px-2"
            icon={faMagnifyingGlass}
            color="gray"
          />
          <input
            className="border border-white"
            type="text"
            placeholder="Search.."
          />
        </div>

        <div>
          <select
            className="px-4 py-2 rounded-md text-black focus:outline-none"
            name=""
            id=""
          >
            <option value="">Music</option>
            <option value="">Artist</option>
            <option value="">Live</option>
            <option value="">Announcement and News</option>
            <option value="">Fan</option>
          </select>
        </div>
      </div>

      {/* ---------------Trending discussion--------------------------- */}
      <div className="flex justify-between items-center ">
        <h1 className="mt-16 mb-6 text-2xl josefin">Trending Now</h1>
        <button
          onClick={createPostModal}
          className="flex gap-3 items-center mt-16 mb-6 bg-white px-4 py-2 rounded-md"
        >
          <FontAwesomeIcon icon={faMessage} color="black" />
          <h1 className="text-black">Create Post</h1>
        </button>
      </div>

      <div className="flex flex-col m-auto p-auto">
        <div className="flex overflow-x-scroll pb-2 hide-scroll-bar">
          <div className="flex flex-nowrap">
            <div className="inline-block px-3">
              <div className="w-[400px] h-[200px] border border-white p-2">
                <Link
                  to={`/forum/${"Taylor Swift - The Tortured Poets Department ALBUM REVIEW"}`}
                >
                  <h1 className="text-xl font-semibold josefin text-blue-500 underline">
                    Taylor Swift - The Tortured Poets Department ALBUM REVIEW
                  </h1>
                </Link>
                <p className="line-clamp-3">
                  Reviews:Rolling Stone: 100/100 The Tortured Poets Department
                  combines the intimacy of Folklore and Evermore with the
                  synth-pop gloss of Midnights to create music that's wildly
                  ambitious and gloriously chaotic.The Independent: 5/5 With its
                  playful narratives and hooks like anchors, Swift’s 11th studio
                  album is a terrific reminder of her storytelling
                  powers.Variety: 94/100 Taylor Swift Renews Her Vows With
                  Heartbreak in Audacious, Transfixing ‘Tortured Poets
                  Department’The Irish Times: 4.5/5 This album is the fruit of
                  abject misery but is also steeped in Swift’s trademark
                  indefatigable optimism.
                </p>
              </div>
            </div>

            <div className="inline-block px-3">
              <div className="w-[400px] h-[200px] border border-white p-2">
                <Link>
                  <h1 className="text-xl font-semibold josefin text-blue-500 underline">
                    What songs sound like they’d fit perfect for a movie
                    soundtrack, even though they aren’t?
                  </h1>
                </Link>
                <p className="line-clamp-3">
                  Are there any songs throughout time, that you thought would
                  sound really good for a specific movie (or TV series) despite
                  not being associated with the film in any way? I thought “My
                  Boy Only Breaks His Favorite Toys” by Taylor Swift would’ve
                  been great for the Barbie movie, she even references Ken. It
                  would’ve been a fitting song for when Ken has his tantrum! “II
                  MOST WANTED” by Beyoncé & Miley would fit well in any
                  sisterhood type movie, maybe Little Women? Or going back a
                  bit, Thelma and Louise? And just for fun - Lorde’s “Tennis
                  Court” for the new Challengers movie!
                </p>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-8" />
      </div>

      {/*-------------------- Top discussion------------------------------------- */}

      <div className="flex gap-[5%]">
        <div className="w-[60%] flex flex-col gap-4">
          {/* ---------sample post---------- */}
          <h1 className="text-2xl">New Post</h1>

          <div className="border bg-white p-2 rounded-md">
            <Link to={`/forum/${"Songs and Relatability"}`}>
              <h1 className="text-xl font-semibold josefin text-blue-500 underline">
                Songs and Relatability
              </h1>
            </Link>
            <p className="line-clamp-3 text-black">
              I'm older and grew up when music was a way for relaxation. So
              relatability has never been the primary reason for my listening to
              an artist or songs. Like how could I find relatability in Bon
              Jovi's Living on a Prayer as a teen still in school? Or more
              recently Ed Sheeran's The A Team as I'm not a sex worker or a drug
              addict. But I'm really moved by the lyrics of these songs every
              time I hear them.But like the majority of Taylor Swift's fans
              always cite accessibility and relatability as the main reason for
              their liking her.How about people here? Are those things important
              to you?
            </p>
          </div>

          {forumTopic
            .slice()
            .reverse()
            .map((topics, index) => (
              <div key={index} className="border bg-white p-2 rounded-md">
                <Link to={`/forum/${topics.topic}`}>
                  <h1 className="text-xl font-semibold josefin text-blue-500 underline">
                    {topics.topic}
                  </h1>
                </Link>
                <p className="line-clamp-3 text-black">{topics.content}</p>
              </div>
            ))}
        </div>

        <div className="w-[35%] flex flex-col gap-8">
          <div className="border p-2">
            <h1 className="">Top Comunities</h1>

            <div className="flex gap-3 my-2">
              <FontAwesomeIcon
                className="border rounded-full p-1"
                icon={faUsers}
              />
              <Link className="hover:underline">
                <h1>Swifties</h1>
              </Link>
            </div>

            <div className="flex gap-3 my-2">
              <FontAwesomeIcon
                className="border rounded-full p-1"
                icon={faUsers}
              />
              <Link className="hover:underline">
                <h1>Everything Mitsky</h1>
              </Link>
            </div>

            <div className="flex gap-3 my-2">
              <FontAwesomeIcon
                className="border rounded-full p-1"
                icon={faUsers}
              />
              <Link className="hover:underline">
                <h1>Live Laugh Lamp</h1>
              </Link>
            </div>

            <div className="flex gap-3 my-2">
              <FontAwesomeIcon
                className="border rounded-full p-1"
                icon={faUsers}
              />
              <Link className="hover:underline">
                <h1>Pop Genre Club</h1>
              </Link>
            </div>

            <div className="flex gap-3 my-2">
              <FontAwesomeIcon
                className="border rounded-full p-1"
                icon={faUsers}
              />
              <Link className="hover:underline">
                <h1>Music Discussion Group</h1>
              </Link>
            </div>
          </div>

          <div>
            <div className="border p-2">
              <h1>Top Search</h1>

              <div className="flex gap-3 my-2">
                <FontAwesomeIcon
                  className="border rounded-full p-1"
                  icon={faHashtag}
                />
                <Link className="hover:underline">
                  <h1>The Tortured Poets Album</h1>
                </Link>
              </div>

              <div className="flex gap-3 my-2">
                <FontAwesomeIcon
                  className="border rounded-full p-1"
                  icon={faHashtag}
                />
                <Link className="hover:underline">
                  <h1>New Releases</h1>
                </Link>
              </div>

              <div className="flex gap-3 my-2">
                <FontAwesomeIcon
                  className="border rounded-full p-1"
                  icon={faHashtag}
                />
                <Link className="hover:underline">
                  <h1>Coachella</h1>
                </Link>
              </div>

              <div className="flex gap-3 my-2">
                <FontAwesomeIcon
                  className="border rounded-full p-1"
                  icon={faHashtag}
                />
                <Link className="hover:underline">
                  <h1>Music Video</h1>
                </Link>
              </div>

              <div className="flex gap-3 my-2">
                <FontAwesomeIcon
                  className="border rounded-full p-1"
                  icon={faHashtag}
                />
                <Link className="hover:underline">
                  <h1>Tyler The Creator</h1>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ---------------create post modal----------------------- */}
      {openModal ? (
        <div className="absolute w-screen h-screen top-0 left-0 backdrop-blur-sm flex justify-center items-center">
          <div className=" w-[800px] h-[600px] bg-white rounded-md text-black">
            <div className="flex flex-col px-6 py-3">
              <label htmlFor="">Title:</label>
              <input
                onChange={(event) => setTitle(event.target.value)}
                className="border border-gray-600 rounded-md px-4 py-2"
                type="text"
              />
            </div>
            <div className="flex flex-col px-6 py-3">
              <label htmlFor="">Content:</label>
              <textarea
                onChange={(event) => setContent(event.target.value)}
                className="border border-gray-600 px-4 py-2"
                name=""
                id=""
                cols="30"
                rows="15"
              ></textarea>
            </div>

            <div className="px-6 flex gap-10">
              <button
                onClick={addPost}
                className="px-4 py-2 border-4 border-red-400 rounded-md"
              >
                Create
              </button>
              <button
                onClick={createPostModal}
                className="px-5 py-3 rounded-md bg-red-400 text-white"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ForumPage;
