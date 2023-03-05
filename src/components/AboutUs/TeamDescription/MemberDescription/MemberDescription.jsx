import React from "react";

export const MemberDescription = ({
  isPhotoLeft,
  memberImage,
  memberText,
  memberProffesion,
}) => {
  if (isPhotoLeft) {
    return (
      <div className="our-team-description women">
        <div className="image__block">
          <img src={memberImage} className="images" alt="women" />
        </div>
        <div className="specific-description-of-the-person">
          <h2 className="description__title"> {memberProffesion}</h2>
          <p className="description">{memberText}</p>
        </div>
      </div>
    );
  }
  return (
    <div className="our-team-description men">
      <div className="specific-description-of-the-person">
        <h2 className="description__title">{memberProffesion}</h2>
        <p className="description">{memberText}</p>
      </div>

      <div className="image__block">
        <img src={memberImage} className="images" alt="man" />
      </div>
    </div>
  );
};
