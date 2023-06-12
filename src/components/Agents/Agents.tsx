import type { FC } from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { getAgents } from "../../lib/api";
import { IAgent } from "../../types/Agent";
import Agent from "./Agent";
import "./Agents.css";
import { SearchBar } from "./SearchBar";

const Agents: FC = () => {
  const [search, setSearch] = useState("");
  const [agents, setAgents] = useState<IAgent[]>([]);
  const searchRef = useRef<string>();

  const fetchAgents = useCallback(async () => {
    const response = await getAgents(searchRef.current || "");
    setAgents(response.data);
  }, []);

  useEffect(() => {
    fetchAgents();
  }, [fetchAgents]);

  useEffect(() => {
    searchRef.current = search;
  }, [search]);

  return (
    <div className="agents-container">
      <SearchBar value={search} onChange={setSearch} onSearch={fetchAgents} />
      <div className="agents">
        {agents.map((agent) => (
          <Agent key={agent.id} agent={agent} />
        ))}
      </div>
      <Link className="btn" to="/join">
        Join the team!
      </Link>
    </div>
  );
};

export default Agents;
