import axios from "axios";
import { IAgent } from "../types/Agent";

export const getAgents = (search: string) =>
  axios.get<IAgent[]>("/agents", { params: { q: search } });

export const saveAgent = ({ id, ...model }: IAgent) =>
  axios.post("/agents", model);

export const getAgent = (id: number | string) =>
  axios.get<IAgent>(`/agents/${id}`);
