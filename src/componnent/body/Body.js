import "./Body.css";
import RankBox from "./rankBox/RankBox";
import { FaSearch } from "react-icons/fa";
import AdBox from "./adBox/AdBox";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Body = () => {
  const [findId, setFindId] = useState("");

  const idOnChange = (e) => {
    setFindId(e.target.value);
    console.log(e.target.value);
  };

  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate("/Login");
  };

  return (
    <div className="body">
      <div>
        <img src="//cdn.dak.gg/valorant/images/logo/img-logo-sub.png"></img>
      </div>

      <div className="mainSearch">
        <input
          placeholder="플레이어#KR1 전적검색"
          onChange={idOnChange}
        ></input>
        <button onClick={() => console.log(1)}>
          <FaSearch color="#ff4655" size="14" />
        </button>
      </div>
      <button className="login-button" onClick={navigateToLogin}>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.6173 0.714294L0 6.27033L1.95143 14.6429H4.52503L4.08042 8.65377L4.47531 8.5396L6.02284 14.6429H8.6969L8.5978 7.34757L8.9927 7.2334L10.3453 14.6429H13.1762L13.8437 5.83068L14.2386 5.71641L14.9394 14.6429H18.6826L20 2.38882L12.6173 0.714294Z"
            fill="#FEFEFE"
          ></path>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9.93317 17.6425L17.6142 19.2857L18 15.97L9 15.5714L9.93317 17.6425Z"
            fill="#FEFEFE"
          ></path>
        </svg>
        Riot ID로 로그인
      </button>

      <p>Riot ID로 로그인하여 프로필 공개여부를 설정할 수 있습니다.</p>
      <AdBox />
    </div>
  );
};

export default Body;
