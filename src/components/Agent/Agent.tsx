import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getAgent } from "../../lib/api";
import { IAgent } from "../../types/Agent";
import "./Agent.css";

export const Agent: React.FC = () => {
  const { id } = useParams();
  const [agent, setAgent] = useState<IAgent>();

  useEffect(() => {
    if (id) {
      getAgent(id).then(({ data }) => setAgent(data));
    }
  }, [id]);

  if (!agent) {
    return null;
  }

  return (
    <div className="wrapper">
      <div className="container">
        <header>
          <div className="avatar-holder">
            <img
              src={agent.photoUrl}
              className="avatar"
              alt={agent.firstName}
            />
          </div>
          <h2 className="agent-name">
            {agent.firstName + " " + agent.lastName}
          </h2>
        </header>
        <div className="body">{agent.aboutMe}</div>
        <footer>
          <div className="full-width-flex-box">
            <div className="one-third-flex-box">
              <span>{agent.address}</span>
            </div>
            <div className="one-third-flex-box">
              <span>Areas of Practice: {agent.practiceAreas}</span>
            </div>
          </div>
        </footer>
        <Link to="/">See All Agents</Link>
      </div>
    </div>
  );
};
