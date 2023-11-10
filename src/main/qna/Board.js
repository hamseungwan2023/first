import "./qna.css";
import { useState } from "react";
import QnA from "./QnA";
import QnaImage from "./QnaImage";

const Board = () => {
  const [click, setClick] = useState(false);
  const [nonClick, setNonClick] = useState(true);

  const onClickHandler = (e) => {
    setClick(true);
    setNonClick(false);
    e.preventDefault();
  };

  return (
    <div>
      {nonClick == true ? (
        <div className="qnaX">
          <div>
            <div className="qnaTop">
              <p className="p1">메세지 보내기</p>
              <p className="p2">무엇을 도와드릴까요?</p>
              <p className="p3">문의 주신 내용을 확인 후 답변 드리겟습니다.</p>
            </div>
          </div>
          <QnaImage />
          <button
            className="qnaButton"
            onClick={onClickHandler}
            aria-label="Close Beacon popover"
            aria-expanded="true"
            aria-controls="HSBeaconContainerFrame"
          >
            <span
              class="FabButtoncss__IconUI-sc-8cshs0-2 hxnarW c-FabButton__icon--close is-fab-shown"
              data-testid="fab-close-icon"
            >
              <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M13.707.293a.999.999 0 0 0-1.414 0L7 5.586 1.707.293A.999.999 0 1 0 .293 1.707L5.586 7 .293 12.293a.999.999 0 1 0 1.414 1.414L7 8.414l5.293 5.293a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414L8.414 7l5.293-5.293a.999.999 0 0 0 0-1.414"
                  fill="#FFF"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </span>
          </button>
          <button className="submit">보내기</button>
        </div>
      ) : null}
      {click == true ? <QnA /> : null}
    </div>
  );
};

export default Board;
