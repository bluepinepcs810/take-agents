import React, { useCallback, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getAgent, saveReview } from "../../lib/api";
import { IAgent } from "../../types/Agent";
import { IReview, REVIEW_DEFAULT_MODEL } from "../../types/Review";
import "./Agent.css";
import { ReviewForm } from "./ReviewForm";

export const Agent: React.FC = () => {
  const { id } = useParams();
  const [agent, setAgent] = useState<IAgent>();
  const [reviewModel, setReviewModel] = useState<IReview>({
    ...REVIEW_DEFAULT_MODEL,
    agentId: Number(id),
  });

  const fetchAgent = useCallback((id) => {
    return getAgent(id).then(({ data }) => setAgent(data));
  }, []);

  const handleReviewSubmit = async () => {
    await saveReview(reviewModel);
    await fetchAgent(id);
  };

  useEffect(() => {
    if (id) {
      fetchAgent(id);
    }
  }, [id, fetchAgent]);

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
        <div className="reviews-container">
          {agent.reviews?.map((review) => (
            <div className="review" key={review.id}>
              <p>
                <span className="first-name">{review.firstName}</span> <span className="last-name">{review.lastName}</span>
              </p>
              <p>{review.content}</p>
            </div>
          ))}
          <ReviewForm
            value={reviewModel}
            onChange={setReviewModel}
            onSubmit={handleReviewSubmit}
          />
        </div>
        <Link to="/" className="btn">See All Agents</Link>
      </div>
    </div>
  );
};
