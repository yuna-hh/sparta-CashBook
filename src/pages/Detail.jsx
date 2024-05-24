import React from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";

const StDetailBox = styled.div`
  width: 1200px;
  background-color: #fff08c;
  margin: 100px auto;
  padding: 30px 20px;
  border-radius: 20px;
  box-sizing: border-box;
`;

const StDetaildiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  width: 1100px;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 20px;
  padding: 30px 20px;

  label {
    padding-left: 12px;
    letter-spacing: 2px;
  }

  input {
    display: block;
    width: 1000px;
    margin-top: 5px;
    padding: 10px 20px;
    border-radius: 20px;
    border: 1px solid #d9d9d9;
    box-sizing: border-box;
  }
`;
const StBtnWrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;

  :nth-child(1) {
    background-color: #ecfc7c;
  }

  button {
    width: 100px;
    padding: 10px 0;
    border-radius: 20px;
    border: 1px solid transparent;
    letter-spacing: 2px;
    cursor: pointer;
  }
`;

const Detail = ({ cashArray, setClickMonth, setCashArray }) => {
  const navigate = useNavigate();
  const { detailId } = useParams();
  // console.log("params", params);

  const item = cashArray.find((item) => item.id === detailId);
  const { date, category, price, contents, id } = item;

  const [detailDate, setDetailDate] = useState(date);
  const [detailCategory, setDetailCategory] = useState(category);
  const [detailPrice, setDetailPrice] = useState(price);
  const [detailContents, setDetailContents] = useState(contents);

  const handleEditeBtn = () => {
    const monthArray = detailDate.split("-");
    const editItem = {
      id,
      date: detailDate,
      category: detailCategory,
      price: detailPrice,
      contents: detailContents,
      month: Number(monthArray[1]),
    };
    setCashArray((prev) => {
      return prev.map((item) => {
        if (item.id === detailId) {
          return editItem;
        }
        return item;
      });
    });
    navigate("/");
  };

  const handleDelteBtn = () => {
    const filteredArray = cashArray.filter((item) => {
      return item.id !== detailId;
    });
    setCashArray(filteredArray);
    navigate("/");
  };

  const handleBackBtn = () => {
    navigate("/");
  };

  const handleDetailDate = (event) => {
    setDetailDate(event.target.value);
  };
  const handleDetailCategory = (event) => {
    setDetailCategory(event.target.value);
    console.log(event.target.value);
  };
  const handleDetailPrice = (event) => {
    setDetailPrice(event.target.value);
  };
  const handleDetailContent = (event) => {
    setDetailContents(event.target.value);
  };
  return (
    <>
      <StDetailBox>
        <StDetaildiv>
          <div>
            <label htmlFor="date">날짜</label>
            <input type="date" value={detailDate} onChange={handleDetailDate} />
          </div>
          <div>
            <label htmlFor="category">항목</label>
            <input
              type="text"
              value={detailCategory}
              onChange={handleDetailCategory}
            />
          </div>
          <div>
            <label htmlFor="price">금액</label>
            <input
              type="number"
              value={detailPrice}
              onChange={handleDetailPrice}
            />
          </div>
          <div>
            <label htmlFor="content">내용</label>
            <input
              type="text"
              value={detailContents}
              onChange={handleDetailContent}
            />
          </div>
          <StBtnWrap>
            <button onClick={handleEditeBtn}>수정</button>
            <button onClick={handleDelteBtn}>삭제</button>
            <button onClick={handleBackBtn}>뒤로가기</button>
          </StBtnWrap>
        </StDetaildiv>
      </StDetailBox>
    </>
  );
};

export default Detail;