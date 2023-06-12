import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { saveAgent } from "../../lib/api";
import { DEFAULT_AGENT_MODEL, IAgent } from "../../types/Agent";
import "./Join.css";

export const Join: React.FC = () => {
  const navigate = useNavigate();
  const [model, setModel] = useState<IAgent>(DEFAULT_AGENT_MODEL);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await saveAgent(model);
      alert("Congratulations! You are now one of us");
      navigate("/");
    } catch (error) {
      alert("Save failed");
    }
  };

  return (
    <div className="join-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>First Name</label>
          <input
            required
            name="firstName"
            type="text"
            value={model.firstName}
            onChange={({ target: { value } }) =>
              setModel((old) => ({ ...old, firstName: value }))
            }
          />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input
            name="lastName"
            type="text"
            value={model.lastName}
            onChange={({ target: { value } }) =>
              setModel((old) => ({ ...old, lastName: value }))
            }
          />
        </div>
        <div className="form-group">
          <label>Photo URL</label>
          <input
            name="photoUrl"
            type="url"
            value={model.photoUrl}
            onChange={({ target: { value } }) =>
              setModel((old) => ({ ...old, photoUrl: value }))
            }
          />
        </div>
        <div className="form-group">
          <label>Agent License</label>
          <input
            name="agentLicense"
            type="text"
            value={model.agentLicence}
            onChange={({ target: { value } }) =>
              setModel((old) => ({ ...old, agentLicence: value }))
            }
          />
        </div>
        <div className="form-group">
          <label>Address</label>
          <input
            name="address"
            type="text"
            value={model.address}
            onChange={({ target: { value } }) =>
              setModel((old) => ({ ...old, address: value }))
            }
          />
        </div>
        <div className="form-group">
          <label>Practice Areas</label>
          <textarea
            required
            name="practiceAreas"
            value={model.practiceAreas}
            onChange={({ target: { value } }) =>
              setModel((old) => ({ ...old, practiceAreas: value }))
            }
          />
        </div>
        <div className="form-group">
          <label>About Me</label>
          <textarea
            name="aboutMe"
            value={model.aboutMe}
            onChange={({ target: { value } }) =>
              setModel((old) => ({ ...old, aboutMe: value }))
            }
          />
        </div>
        <button type="submit" className="btn">Submit</button>
      </form>
    </div>
  );
};
