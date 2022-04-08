import styled, { css } from "styled-components";

import React from "react";

export default function Section({ title, subtitle, dark, id, children }) {
  return (
    <Container
      background={id === "section1"}
      className={"section" + (dark ? " section-dark" : "")}
    >
      <div className={`section-content section-dark=${dark}`} id={id}>
        <div className="text-3xl mb-4">{title}</div>
        {children}
      </div>
    </Container>
  );
}

const Container = styled.div`
  ${({ background }) =>
    background &&
    css`
      background-image: url("/image.jpeg");
      background-repeat: no-repeat;
      background-size: cover;
      width: 100%;
    `};
`;
