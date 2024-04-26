import React from "react";

const PersonalRoomContents = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col gap-5">
      <h3 className="text-3xl font-semibold text-red-300">{title} :</h3>
      <h2 className="text-2xl font-semibold text-gray-300">{description}</h2>
    </div>
  );
};

export default PersonalRoomContents;
