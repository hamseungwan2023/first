import "./Bottom.css";

const Bottom = () => {
  return (
    <div className="bottom">
      <img
        className="bottom-logo"
        src="//cdn.dak.gg/valorant/images/logo/img-footer-logo.png"
        alt="DAK.GG"
      ></img>
      <div className="service-a">
        <div className="service">
          <img
            className="service-logo"
            width="20"
            height="12"
            src="//cdn.dak.gg/valorant/images/family/logo-pubg.svg"
            alt="배틀그라운드"
            loading="lazy"
          ></img>
          <p>배틀그라운드 전적검색 DAK.GG</p>
          <img
            className="service-logo"
            width="20"
            height="27"
            src="//cdn.dak.gg/valorant/images/family/logo-er.svg"
            alt="이터널 리턴"
            loading="lazy"
          />
          <p>이터널 리턴 전적검색 ER.DAK.GG</p>
          <img
            className="service-logo"
            width="20"
            height="17"
            src="//cdn.dak.gg/valorant/images/family/logo-val.svg"
            alt="발로란트"
            loading="lazy"
          />
          <p>발로란트 전적검색 VALORANT.DAK.GG</p>
          <img
            className="service-logo"
            width="20"
            height="20"
            src="//cdn.dak.gg/valorant/images/family/logo-lol.svg"
            alt="리그오브레전드"
            loading="lazy"
          ></img>
          <p>리그오브레전드 전적검색 PORO.GG</p>
        </div>
      </div>
      <div>
        <div className="service">
          <img
            className="service-logo"
            width="20"
            height="20"
            src="//cdn.dak.gg/valorant/images/family/logo-tft.svg"
            alt="전략적 팀 전투"
            loading="lazy"
          />
          <p>전략적팀전투 TFT 전적검색 LoLCHESS.GG</p>
          <img
            className="service-logo-lor"
            width="20"
            height="20"
            src="//cdn.dak.gg/valorant/images/family/logo-lor.svg"
            alt="룬테라"
            loading="lazy"
          />
          <p>룬테라 전적검색 LoR.DAK.GG</p>
          <img
            className="service-logo-maple"
            width="20"
            height="20"
            src="//cdn.dak.gg/valorant/images/family/logo-maple.svg"
            alt="메이플스토리"
            loading="lazy"
          />
          <p>메이플스토리 종합통계 MAPLE.GG</p>
          <img
            className="service-logo-won"
            width="20"
            height="20"
            src="//cdn.dak.gg/valorant/images/family/logo-genshin.svg"
            alt="원신"
            loading="lazy"
          />
          <p>원신 전적검색 GENSHIN.DAK.GG</p>
        </div>
      </div>
      <div className="row"> </div>

      <div className="info">
        <p>프로필 비공개</p>
        <div className="col"> </div>
        <p>이용약관</p>
        <div className="col"> </div>
        <p>개인정보취급방침</p>
        <div className="col"> </div>
        <p>채용</p>
      </div>

      <p className="leading">
        © All Rights Reserved. Hosted by PlayXP Inc. DAK.GG isn't endorsed by
        Riot Games and doesn't reflect the views or opinions of Riot Games or
        anyone officially involved in producing or managing Riot Games
        properties. Riot Games, and all associated properties are trademarks or
        registered trademarks of Riot Games, Inc.
      </p>
      <div className="t"> </div>
    </div>
  );
};

export default Bottom;
