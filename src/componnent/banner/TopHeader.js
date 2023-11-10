import "./Header.css";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
const TopHeader = () => {
  const [findId, setFindId] = useState("");
  const [lengBox, setLengBox] = useState(false);

  const idOnChange = (e) => {
    setFindId(e.target.value);
    console.log(e.target.value);
  };
  return (
    <div className="topHeader">
      <div className="logo">
        <img
          className="logo"
          src="//cdn.dak.gg/valorant/images/logo/logo-dakgg.svg"
        ></img>
        <div className="select">
          <img
            src="//cdn.dak.gg/valorant/images/family/ico-val.svg"
            alt="발로란트"
          ></img>
          <select className="dropdown">
            <option>발로란트</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
        </div>
        <div className="search">
          <input
            placeholder="플레이어#KR1 전적검색"
            onChange={idOnChange}
          ></input>
          <button className="button" onClick={() => console.log(1)}>
            <FaSearch color="white" size="14" />
          </button>
        </div>

        <button
          className="lengDropdown"
          type="button"
          onClick={(e) => setLengBox(!lengBox)}
        >
          <svg viewBox="0 0 16 16" fill="none">
            <path
              d="M7.75 0.25C3.46875 0.25 0 3.71875 0 8C0 12.2812 3.46875 15.75 7.75 15.75C12.0312 15.75 15.5 12.2812 15.5 8C15.5 3.71875 12.0312 0.25 7.75 0.25ZM13.7812 5H11.1875C10.9062 3.625 10.4375 2.4375 9.84375 1.59375C11.5625 2.1875 12.9688 3.40625 13.7812 5ZM10.5 8C10.5 8.71875 10.4375 9.40625 10.3438 10H5.125C5.03125 9.40625 5 8.71875 5 8C5 7.3125 5.03125 6.625 5.125 6H10.3438C10.4375 6.625 10.5 7.3125 10.5 8ZM7.75 1.25C8.5625 1.25 9.65625 2.65625 10.1875 5H5.28125C5.8125 2.65625 6.90625 1.25 7.75 1.25ZM5.625 1.59375C5.03125 2.4375 4.5625 3.625 4.28125 5H1.6875C2.5 3.40625 3.90625 2.1875 5.625 1.59375ZM1 8C1 7.3125 1.09375 6.65625 1.28125 6H4.125C4.03125 6.65625 4 7.3125 4 8C4 8.71875 4.03125 9.375 4.125 10H1.28125C1.09375 9.375 1 8.71875 1 8ZM1.6875 11H4.28125C4.5625 12.4062 5.03125 13.5938 5.625 14.4375C3.90625 13.8438 2.5 12.625 1.6875 11ZM7.75 14.75C6.90625 14.75 5.8125 13.375 5.28125 11H10.1875C9.65625 13.375 8.5625 14.75 7.75 14.75ZM9.84375 14.4375C10.4375 13.5938 10.9062 12.4062 11.1875 11H13.7812C12.9688 12.625 11.5625 13.8438 9.84375 14.4375ZM11.3438 10C11.4375 9.375 11.5 8.71875 11.5 8C11.5 7.3125 11.4375 6.65625 11.3438 6H14.1875C14.375 6.65625 14.5 7.3125 14.5 8C14.5 8.71875 14.375 9.375 14.1875 10H11.3438Z"
              fill="white"
            ></path>
          </svg>
        </button>
        {lengBox == true ? (
          <div className="lenguige">
            <button className="lengButton">
              <svg
                width="12"
                height="9"
                viewBox="0 0 12 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="locale-item-icon checked"
              >
                <path
                  d="M10.1953 0.46875L4.03125 6.63281L1.78125 4.35938C1.66406 4.26562 1.47656 4.26562 1.38281 4.35938L0.703125 5.03906C0.609375 5.13281 0.609375 5.32031 0.703125 5.4375L3.84375 8.55469C3.96094 8.67188 4.125 8.67188 4.24219 8.55469L11.2734 1.52344C11.3672 1.42969 11.3672 1.24219 11.2734 1.125L10.5938 0.46875C10.5 0.351562 10.3125 0.351562 10.1953 0.46875Z"
                  fill="#FFB93B"
                ></path>
              </svg>
              한국어
            </button>
            <button className="lengButton1">
              <svg
                width="12"
                height="9"
                viewBox="0 0 12 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="locale-item-icon"
              >
                <path
                  d="M10.1953 0.46875L4.03125 6.63281L1.78125 4.35938C1.66406 4.26562 1.47656 4.26562 1.38281 4.35938L0.703125 5.03906C0.609375 5.13281 0.609375 5.32031 0.703125 5.4375L3.84375 8.55469C3.96094 8.67188 4.125 8.67188 4.24219 8.55469L11.2734 1.52344C11.3672 1.42969 11.3672 1.24219 11.2734 1.125L10.5938 0.46875C10.5 0.351562 10.3125 0.351562 10.1953 0.46875Z"
                  fill="#4F4F67"
                ></path>
              </svg>
              English
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default TopHeader;
