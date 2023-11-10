import TopHeader from "../componnent/banner/TopHeader";
import MainHeader from "../componnent/banner/MainHeader";
import Body from "../componnent/body/Body";
import RankBox from "../componnent/body/rankBox/RankBox";
import BotAdBox from "../componnent/body/adBox/BotAdBox";
import Bottom from "../componnent/body/bottom/Bottom";
import QnA from "./qna/QnA";

import { Component } from "react";

class Main extends Component {
  render() {
    return (
      <div>
        <TopHeader />
        <MainHeader />
        <Body />
        <RankBox />
        <BotAdBox />
        <Bottom />
        <QnA />
      </div>
    );
  }
}

export default Main;
