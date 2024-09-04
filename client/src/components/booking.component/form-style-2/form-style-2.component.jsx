import { useState } from "react";
import { FormInput } from "../../universal.component/form-input/form-input.component";
import "./form-style-2.styles.scss";

import addUser from "../../../assets/add-user.png";
import deleteUser from "../../../assets/delete-user.png";
import naviBtn from "../../../assets/arrow-right.png";

export const FormStyle2 = () => {
  const [participants, setParticipants] = useState([{ name: "", age: "" }]);
  const [currentPage, setCurrentPage] = useState(0);

  const handleChange = (index, event) => {
    const values = [...participants];
    values[index][event.target.name] = event.target.value;
    setParticipants(values);
  };

  const isValidParticipant = () => {
    const current = participants[currentPage];
    return current.name.trim() !== "" && current.age.trim() !== "";
  };

  const handleAddParticipant = () => {
    if (!isValidParticipant()) {
      alert("Please fill in all fields before adding a new member.");
      return;
    }
    setParticipants([...participants, { name: "", age: "" }]);
    setCurrentPage(participants.length); /* Go to the new page */
  };

  const handleRemoveParticipant = (index) => {
    /* Prevent removal if there's only one participant left */
    if (participants.length === 1) {
      alert("At least one member must be present.");
      return;
    }

    const values = [...participants];
    values.splice(index, 1);
    setParticipants(values);

    /* Adjust currentPage if necessary */
    if (currentPage >= values.length) {
      setCurrentPage(values.length - 1);
    }
  };

  const handleNextPage = () => {
    if (isValidParticipant() && currentPage < participants.length - 1) {
      setCurrentPage(currentPage + 1);
    } else if (!isValidParticipant()) {
      alert("Please fill in all fields before moving to the next member.");
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="form-inner-box form-style--2">
      <div className="form-style--2-textbox">
        <h3 className="heading-tertiary utility-margin-btm-small">
          Traveller Info:
        </h3>
        {participants.length > 0 && (
          <div className="participant-entry">
            <FormInput
              name="name"
              type="text"
              placeholder="Member Name"
              label="Member Name"
              value={participants[currentPage].name}
              onChange={(event) => handleChange(currentPage, event)}
              required
            />
            <FormInput
              name="age"
              type="number"
              placeholder="Member Age"
              label="Age"
              value={participants[currentPage].age}
              onChange={(event) => handleChange(currentPage, event)}
              required
            />
          </div>
        )}
        <div className="navigation-buttons">
          <button
            type="button"
            onClick={handlePreviousPage}
            disabled={currentPage === 0}
          >
            <img src={naviBtn} alt="previous button" />
          </button>
          <button
            type="button"
            onClick={() => handleRemoveParticipant(currentPage)}
            disabled={participants.length === 1}
          >
            <img src={deleteUser} alt="remove member button" />
          </button>
          <button type="button" onClick={handleAddParticipant}>
            <img src={addUser} alt="add member button" />
          </button>
          <button
            type="button"
            onClick={handleNextPage}
            disabled={
              !isValidParticipant() || currentPage >= participants.length - 1
            }
          >
            <img src={naviBtn} alt="next button" />
          </button>
        </div>
        <FormInput
          name="nationality"
          type="text"
          placeholder="Nationality"
          label="Nationality"
          required
        />
        <textarea
          name="special requirements"
          id="special requirements"
          placeholder="Special Requirements"
          rows={4}
          cols={40}
        />
        <label className="form-input-label" htmlFor="special requirements">
          Special Requiements
        </label>
      </div>
      <div className="form-style--2-instructions">
        <h3 className="heading-tertiary">
          Instructions for Completing the Form
        </h3>
        <ul>
          <li>
            <span>Fill in Traveler Info:</span> Complete all fields for the
            traveler before moving to the next step.
          </li>
          <li>
            <span>Add New Traveler:</span> After filling out the details, click
            the "Add Traveler" button to add another.
          </li>
          <li>
            <span>Remove Traveler:</span> You can remove a traveler by clicking
            the remove icon. At least one traveler must remain.
          </li>
          <li>
            <span>Navigation:</span> Use the arrows to navigate between
            travelers and modify their details.
          </li>
          <li>
            <span>Nationality:</span> Enter your nationality for booking
            purposes.
          </li>
          <li>
            <span>Special Requirements:</span> List any special needs or
            requests you have for your tour.
          </li>
        </ul>
      </div>
    </div>
  );
};
