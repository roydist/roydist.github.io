import { Graph } from "react-d3-graph";
import React from "react";
import styled from "styled-components";

export default function Services() {
  const data = {
    nodes: [
      { id: "Design", color: "#C4C4C4", x: 50, y: 200 },
      { id: "Develop", color: "#FBDCDC", x: 300, y: 200 },
      { id: "QA", color: "#C4C4C4", x: 500, y: 200 },
      { id: "Support", color: "#FBDCDC", x: 750, y: 200 },
    ],
    links: [
      { source: "Design", target: "Develop" },
      { source: "Develop", target: "QA" },
      { source: "QA", target: "Support" },
    ],
  };
  const myConfig = {
    automaticRearrangeAfterDropNode: true,
    collapsible: false,
    directed: true,
    focusAnimationDuration: 0.75,
    focusZoom: 1,
    height: 400,
    linkHighlightBehavior: true,
    panAndZoom: false,
    staticGraphWithDragAndDrop: false,
    width: 800,
    freezeAllDragEvents: true,
    d3: {
      alphaTarget: 0.05,
      gravity: -400,
      linkLength: 180,
      linkStrength: 1,
    },
    node: {
      size: 10000,
      fontSize: "32px",
      fontColor: "#fff",
      labelPosition: "bottom",
    },
    link: {
      color: "black",
      opacity: 1,
      strokeWidth: 3,
      type: "STRAIGHT",
    },
  };

  return <StyedGraph id="graph-id" data={data} config={myConfig} />;
}

const StyedGraph = styled(Graph)`
  text {
    position: relative;
    top: 100px;
  }
`;
