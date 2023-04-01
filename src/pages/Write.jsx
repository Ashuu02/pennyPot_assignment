import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ReactMarkdown from "react-markdown";
import { renderToStaticMarkup } from "react-dom/server";
import "../styles.scss";
import { useLocation } from "react-router-dom";

const Write = () => {
  const [markdown, setMarkdown] = useState(
    "# Hello, world!\n\nThis is **Markdown**!"
  );

  const state = useLocation().state;
  const [text, setText] = useState("");
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState(state?.cat || "");

  function getHtmlOutput(markdown) {
    const html = renderToStaticMarkup(
      <ReactMarkdown>{markdown}</ReactMarkdown>
    );
    return { __html: html };
  }

  function handleBoldClick() {
    const newText = `${text}**bold text**`;
    setText(newText);
    setMarkdown(markdown + "\n\n");
  }

  function handleItalicClick() {
    const newText = `${text}_italic text_`;
    setText(newText);
    setMarkdown(markdown + "_italic text_");
  }

  function handleNewLineClick() {
    const newText = `${text}_italic text_`;
    setText(newText);
    setMarkdown(markdown + "\n");
  }

  function handlePublishClick() {}

  return (
    <>
      <Navbar />
      <div className="bg-white h-full sm:p-10 sm:pb-0 pb-10 ">
        <div className="sm:flex sm:gap-3 pt-10 justify-center ">
          <div className="overflow-hidden">
            <h2 className="text-[20px] font-bold border-x-2 border-t-2 border-gray-600 ">
              Markdown
            </h2>
            {/* <textarea
              value={markdown}
              onChange={(event) => setMarkdown(event.target.value)}
              rows={10}
              cols={50}
              className=" border-gray-600 border-2"
            /> */}

            <textarea
              value={markdown}
              onChange={(event) => setMarkdown(event.target.value)}
              rows={10}
              cols={50}
              className="border-gray-600 border-2 w-full"
              style={{ maxWidth: "100%", minHeight: "100px" }}
            />

            <div className="flex gap-3 m-2">
              <button
                className="bg-[#1a1a1a]  hover:bg-[#3a3a3a] rounded-lg text-gray-200 p-2"
                onClick={handleBoldClick}
              >
                <b>Bold</b>
              </button>
              <button
                className=" border-[#262626] hover:bg-gray-200 rounded-lg p-2 border-2 "
                onClick={handleItalicClick}
              >
                <i>Italic</i>
              </button>
              <button
                className="bg-[#1a1a1a] hover:bg-[#3a3a3a] rounded-lg text-gray-200 p-2"
                onClick={handleNewLineClick}
              >
                New Line
              </button>
            </div>
          </div>
          <div className=" sm:pt-0 pt-10">
            <h2 className="text-[20px] font-bold border-x-2 border-t-2 border-gray-600 ">
              HTML Output
            </h2>
            <div
              dangerouslySetInnerHTML={getHtmlOutput(markdown)}
              className="lg:w-[400px] sm:w-[300px] flex flex-wrap overflow-x-scroll border-gray-600 border-2 sm:h-[150px] md:h-[240px] overflow-y-scroll "
              style={{
                wordWrap: "break-word",
                minWidth: "0",
                textAlign: "left",
              }}
            />
          </div>
        </div>

        <div className="sm:flex sm:gap-3 pt-10 justify-center sm:pb-10">
          <div className=" border-gray-600 border-2 text-left">
            <h2 className="font-bold text-center text-[20px] border-b-2 border-gray-600 pt-0 ">
              Category (Tag)
            </h2>
            <div className="px-5 py-5 flex gap-3">
              <div>
                <div className="cat">
                  <input
                    type="radio"
                    checked={cat === "art"}
                    name="cat"
                    value="art"
                    id="art"
                    onChange={(e) => setCat(e.target.value)}
                  />
                  <label htmlFor="art">Art</label>
                </div>

                <div className="cat">
                  <input
                    type="radio"
                    checked={cat === "science"}
                    name="cat"
                    value="science"
                    id="science"
                    onChange={(e) => setCat(e.target.value)}
                  />
                  <label htmlFor="science">Science</label>
                </div>
                <div className="cat">
                  <input
                    type="radio"
                    checked={cat === "technology"}
                    name="cat"
                    value="technology"
                    id="technology"
                    onChange={(e) => setCat(e.target.value)}
                  />
                  <label htmlFor="technology">Technology</label>
                </div>
              </div>
              <div>
                <div className="cat">
                  <input
                    type="radio"
                    checked={cat === "cinema"}
                    name="cat"
                    value="cinema"
                    id="cinema"
                    onChange={(e) => setCat(e.target.value)}
                  />
                  <label htmlFor="cinema">Cinema</label>
                </div>
                <div className="cat">
                  <input
                    type="radio"
                    checked={cat === "design"}
                    name="cat"
                    value="design"
                    id="design"
                    onChange={(e) => setCat(e.target.value)}
                  />
                  <label htmlFor="design">Design</label>
                </div>
                <div className="cat">
                  <input
                    type="radio"
                    checked={cat === "food"}
                    name="cat"
                    value="food"
                    id="food"
                    onChange={(e) => setCat(e.target.value)}
                  />
                  <label htmlFor="food">Food</label>
                </div>
              </div>
            </div>
          </div>

          {/* Publish */}
          <div className="border-gray-600 sm:mt-0 mt-10 border-2 text-left">
            <h2 className="text-[20px] font-bold text-center border-b-2 border-gray-600 pt-0">
              Publish
            </h2>
            <div className="px-5 py-5">
              <p>
                <b>Status: </b> Draft
              </p>
              <p>
                <b>Visibility: </b> Public
              </p>
              <input
                style={{ display: "none" }}
                type="file"
                id="file"
                name=""
                onChange={(e) => setFile(e.target.files[0])}
              />
              <label className="file hover:cursor-pointer" htmlFor="file">
                <u>Upload Image</u>
              </label>
              <div className="buttons gap-3 flex mt-3">
                <button className="border-2 border-[#1a1a1a] rounded-lg  p-2 ">
                  Save as a draft
                </button>
                <button
                  className="bg-[#1a1a1a]  hover:bg-[#3a3a3a] rounded-lg text-gray-200 p-2"
                  onClick={handlePublishClick}
                >
                  <b>Publish</b> 
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>


      <Footer/>
    </>
  );
};

export default Write;
