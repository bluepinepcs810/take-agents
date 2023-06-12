import React from "react";
import { IReview } from "../../types/Review";

export const ReviewForm: React.FC<{
  value: IReview;
  onChange: (value: IReview) => void;
  onSubmit: () => void;
}> = ({ onSubmit, value, onChange }) => {
  return (
    <form
      className="review-form"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <p>Leave a review</p>
      <div className="form-group">
        <label>First Name</label>
        <input
          type="text"
          required
          name="firstName"
          value={value.firstName}
          onChange={({ target: { value: firstName } }) =>
            onChange({ ...value, firstName })
          }
        />
      </div>
      <div className="form-group">
        <label>Last Name</label>
        <input
          type="text"
          required
          name="lastName"
          value={value.lastName}
          onChange={({ target: { value: lastName } }) =>
            onChange({ ...value, lastName })
          }
        />
      </div>
      <div className="form-group">
        <label>Feedback</label>
        <textarea
          name="content"
          required
          value={value.content}
          onChange={({ target: { value: content } }) =>
            onChange({ ...value, content })
          }
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
