export interface IAgent {
  id: string;
  firstName: string;
  lastName: string;
  photoUrl: string;
  agentLicence: string;
  address: string;
  practiceAreas: string;
  aboutMe: string;
}

export const DEFAULT_AGENT_MODEL: IAgent = {
  id: "",
  firstName: "",
  lastName: "",
  photoUrl: "",
  agentLicence: "",
  address: "",
  practiceAreas: "",
  aboutMe: "",
};
