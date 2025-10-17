import React, { useEffect, useReducer, useRef } from "react";
//for dashboard page

function reducer(state, action) {
  switch (action.type) {
    case "EDIT":
      return { ...state, isEditing: true, tempValue: state.propValue };
    case "SAVE":
      return {
        ...state,
        isEditing: false,
        propValue: action.payload,
      };
    case "CANCEL":
      return { ...state, isEditing: false };
    default:
      return state;
  }
}

export const DashboardCard = ({
  title,
  value,
  typeValue,
  editable,
  onValueChange,
}) => {
  const refValue = useRef(null);
  const [state, dispatch] = useReducer(reducer, {
    isEditing: false,
    propValue: value,
    tempValue: value,
  });

  //focus on text when clicl on edit btn
  useEffect(() => {
    if (state.isEditing) refValue.current.focus();
  }, [state.isEditing]);

  useEffect(() => {
    if (!state.isEditing) dispatch({ type: "SAVE", payload: value });
  }, [value]);

  const handleEditClick = () => {
    dispatch({ type: "EDIT" });
  };
  const handleSaveClick = () => {
    const newValue = Number(refValue.current.value);
    if (isNaN(newValue)) {
      handleCancleClick();
      return;
    }
    dispatch({ type: "SAVE", payload: newValue });
    onValueChange?.(newValue);
  };

  const handleCancleClick = () => {
    dispatch({ type: "CANCEL" });
    refValue.current.value = state.tempValue;
  };

  return (
    <div className="infocard">
      <h3>{title}</h3>
      <div>
        {!state.isEditing ? (
          <span>{state.propValue}</span>
        ) : (
          <input
            type="number"
            ref={refValue}
            style={{
              border: state.isEditing ? "1px dashed gray" : "none",
              background: state.isEditing ? "#fafafa" : "transparent",
              padding: "2px 4px",
            }}
            defaultValue={state.propValue}
          />
        )}

        <span> {typeValue}</span>
        {editable !== undefined && !state.isEditing && (
          <button onClick={handleEditClick}>edit</button>
        )}
        {state.isEditing && (
          <div>
            <button onClick={handleSaveClick}>save</button>
            <button onClick={handleCancleClick}>cancel</button>
          </div>
        )}
      </div>
    </div>
  );
};
