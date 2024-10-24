/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useEffect, useState } from "react";
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  addEdge,
  useNodesState,
  useEdgesState,
  type OnConnect,
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";

import { initialNodes, nodeTypes } from "./nodes";
import { initialEdges, edgeTypes } from "./edges";
import { AppNode } from "./nodes/types";

import { kickoffs } from "./data";

type MemberTeam = {
  name: string;
  role: string;
};

type Teams = {
  name: string;
  members: MemberTeam[];
};

type Award = {
  category: string;
  winner: string;
}

export default function App() {
  const [panelOpened, setPanelOpened] = useState(false);
  const [currentNode, setCurrentNode] = useState<AppNode | null>(null);
  const [panelContent, setPanelContent] = useState<any>(null);
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect: OnConnect = useCallback(
    (connection) => setEdges((edges) => addEdge(connection, edges)),
    [setEdges]
  );

  const handleNodeClick = (event: React.MouseEvent, node: AppNode) => {
    setCurrentNode(node);
    setPanelOpened(true);
  };

  const handleOnPanelClick = (event: React.MouseEvent) => {
    setPanelOpened(false);
  };

  const fetchNodeContent = async (id: string): Promise<any> => {
    const key = Object.keys(kickoffs).includes(id)
      ? (id as keyof typeof kickoffs)
      : null;
    if (key) return kickoffs[key];
    return "";
  };

  useEffect(() => {
    if (currentNode?.id) {
      fetchNodeContent(currentNode?.id)
        .then((data) => {
          setPanelContent(data);
        })
        .catch((error) => console.error(error));
    }
  }, [currentNode?.id]);

  console.log("currentNode: ", currentNode);

  return (
    <main style={{ height: "100vh" }}>
      <ReactFlow
        nodes={nodes}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        edges={edges}
        edgeTypes={edgeTypes}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        onNodeClick={handleNodeClick}
        onPaneClick={handleOnPanelClick}
      >
        <Background />
        {/* <MiniMap /> */}
        <Controls />
      </ReactFlow>

      <div className={`overlay ${panelOpened ? "show" : ""}`} id="sideOverlay">
        <div className="overlay-content">
          <button
            className="close-btn"
            title="close-btn"
            type="button"
            onClick={() => setPanelOpened(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-x"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          <h2>{panelContent?.event}</h2>
          <p>Thời gian: {panelContent?.date}</p>
          <p>Danh sách team dự án:</p>
          <ul>
            {panelContent?.teams
              ? panelContent.teams.map((team: Teams, index: number) => (
                  <li key={index}>
                    <span className="font-semibold">{team.name}: </span>
                    {team.members.map((member: MemberTeam, index: number) => (
                      <span key={index}>
                        {member.name} ({member.role})
                        {index < team.members.length - 1 ? ", " : ""}
                      </span>
                    ))}
                  </li>
                ))
              : null}
          </ul>
          {panelContent?.awards && panelContent?.awards.length > 0 && (
            <>
            <p>Danh sách giải thưởng kỳ {Number(currentNode?.id.replace("kickoff_", '')) - 1}:</p>
            <div>{panelContent?.awards[0].category}: <span className="font-semibold">{panelContent?.awards[0].winner}</span></div>
            <div>{panelContent?.awards[1].category}: <span className="font-semibold">{panelContent?.awards[1].winner.split(" - ")[0]}</span> - {panelContent?.awards[1].winner.split(" - ")[1]}</div>
            </>
          )}
        </div>
      </div>
    </main>
  );
}
