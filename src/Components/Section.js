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
      background-image: url("https://cvws.icloud-content.com/B/ASLnrkFLMrV6qiyfkMBJU8rC11U2AQAssyh6xxSz4PtjJn8fup2ksg1_/image.jpeg?o=AsZGX-0s2X4IaQCEoQ8GJnjlrrimAXF_QMV7zDUyJfzl&v=1&x=3&a=CAog9xnm8PqEY_pHK9NODKAPcOWOcVYKZvHA61wOhqmPH_YSbRDwne6s_i8YkJWlrf4vIgEAUgTC11U2WgSksg1_aibKphiuPPuEK7BTeScYNt_M8Ynd8QjzDTFipgZ8oZKkt4bFuVnnpHIm1QhrZgWOcP2Pk8gx2psTqCswKHdk2p9iZMAIpFnW0ohwy4dwZwM&e=1648825551&fl=&r=0f6dc739-bb77-4791-b0c3-af4e5f54b8bd-1&k=AvoLkSS3VDBXKekBKWJWuw&ckc=com.apple.clouddocs&ckz=com.apple.CloudDocs&p=60&s=hC0JJfRbRGyPyvhNkt68LyF2QeU&cd=i");
      background-repeat: no-repeat;
      background-size: cover;
      width: 100%;
    `};
`;
