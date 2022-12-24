import parrot from "../images/parrot.png";
import "../global.css";
import { Link } from "react-router-dom";

import { TbVocabulary, TbWriting } from "react-icons/tb";
import { GiRead, GiPublicSpeaker } from "react-icons/gi";
import { FaAssistiveListeningSystems } from "react-icons/fa";
import { SiGrammarly } from "react-icons/si";

function Skills() {
  return (
    <div className="ff-primary text-neutral-800 bg-neutral-800 ">
      <div className="bg-neutral-800">
        <header className="primary-header flex align-items-center">
          <div className="primary-header flex">
            <a
              href="/#"
              className="flex align-items-center justify-content-space-between"
            >
              <img src={parrot} alt="" width={50} height={50} />
              <h1 className="ff-header fs-750 gradient-text padding-left-1">
                Parrot
              </h1>
            </a>
          </div>
        </header>
      </div>
      <div className="container main ">
        <Link
          to="/lesson/0"
          className="btn btn-primary  option text-neutral-800"
        >
          Vocabulary
          <TbVocabulary size={30} />
        </Link>
        <button
          class="btn btn-primary  option disabled"
          disabled
          href="#"
          role="button"
        >
          Reading
          <GiRead size={30} />
        </button>

        <button
          class="btn btn-primary disabled option disabled"
          disabled
          href="#"
          role="button"
        >
          Writing
          <TbWriting size={30} />
        </button>
        <button
          class="btn btn-primary disabled option disabled"
          disabled
          href="#"
          role="button"
        >
          Listening
          <FaAssistiveListeningSystems size={30} />
        </button>
        <button
          class="btn btn-primary disabled option disabled"
          disabled
          href="#"
          role="button"
        >
          Speaking
          <GiPublicSpeaker size={30} />
        </button>
        <button
          class="btn btn-primary disabled option disabled"
          disabled
          href="#"
          role="button"
        >
          Grammar
          <SiGrammarly size={30} />
        </button>
      </div>
    </div>
  );
}

export default Skills;