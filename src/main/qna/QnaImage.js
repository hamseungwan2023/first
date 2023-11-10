import { useState, useCallback, useRef, useEffect } from "react";
import "./qna.css";

const QnaImage = () => {
  const [image, setImage] = useState([]);
  const [findImage, setFindImage] = useState(false);
  const [imoge, setImoge] = useState(false);
  const [inputs, setInputs] = useState({
    userName: "",
    title: "",
    email: "",
    qna: "",
  });

  const { userName, title, email, qna } = inputs;
  const imageUpload = (e) => {
    const file = e.target.files[0].name;
    image.push(file);
    console.log("image", image);
    if (image.length > 0) {
      setFindImage(true);
    }
  };

  const changeInput = (e) => {
    const { id, value } = e.target;
    setInputs({
      ...inputs,
      [id]: value,
    });
    console.log(inputs);
  };

  return (
    <div>
      <div className="qnaBody">
        <p>이름</p>
        <input
          className="qnaInput"
          id="userName"
          onChange={changeInput}
        ></input>
        <p>제목</p>
        <input className="qnaInput" id="title" onChange={changeInput}></input>
        <p>이메일 주소</p>
        <input className="qnaInput" id="email" onChange={changeInput}></input>
        <p>버그 제보, 제안사항 문의사항을 남겨주세요.</p>
        <input className="qnaMainInput" id="qna" onChange={changeInput}></input>
      </div>
      <div className="a">
        <div>
          <label for="ex_file">
            <img src="https://cdn.icon-icons.com/icons2/3862/PNG/512/gallery_add_icon_240526.png" />
          </label>
          <input type="file" id="ex_file" onChange={(e) => imageUpload(e)} />
          <button onClick={(e) => setImoge(!imoge)}>
            <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQK9ENiWxC_PnO_aIDGYa9PCLK7FESxa-XOgJW3bZCNa2ugt_Xb" />
          </button>
        </div>
        {findImage == true ? (
          <div className="b">{`files:${image.length}`}</div>
        ) : null}
        {imoge == true ? (
          <div className="imoge">
            <button>🦄</button>
            <button>❤️</button>
            <button>🙂</button>
            <button>🙁</button>
            <button>👍</button>
            <button>👎</button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default QnaImage;
