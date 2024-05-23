import React from "react";
import styled from "styled-components";

const StListLi = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 20px 50px;

  background-color: #f7f7f7;
  border-radius: 20px;
`;
const StSpanDiv = styled.div`
  span {
    font-size: 22px;
    font-weight: bolder;
  }
`;
const StDate = styled.span`
  display: inline-block;
  margin-bottom: 10px;
  font-size: 15px;
`;
const StPrice = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
`;

const CashItem = ({ cashArray, clickMonth }) => {
  const filteredMonth = cashArray.filter((item) => {
    return clickMonth === item.month;
  });
  return (
    <>
      {filteredMonth.map((item) => {
        return (
          <StListLi key={item.id}>
            <div>
              <StDate>{item.date}</StDate>
              <StSpanDiv>
                <span>{item.category} - </span>
                <span>{item.contents}</span>
              </StSpanDiv>
            </div>
            <StPrice> ✔️ {item.price}</StPrice>
          </StListLi>
        );
      })}
    </>
  );
};

export default CashItem;
