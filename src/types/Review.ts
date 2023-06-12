export interface IReview {
  id: number;
  firstName: string;
  lastName: string;
  content: string;
  agentId: number;
}

export const REVIEW_DEFAULT_MODEL = {
  id: 0,
  firstName: "",
  lastName: "",
  content: "",
  agentId: 0,
};
