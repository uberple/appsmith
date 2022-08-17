import React from "react";

const ptIconWrapper = (
  path: React.SVGProps<SVGPathElement>,
  viewboxDefault = 24,
) => {
  return (
    <span className="bp3-icon">
      <svg
        className="pt-icon"
        height="16px"
        id="Capa_1"
        version="1.1"
        viewBox={`0 0 ${viewboxDefault} ${viewboxDefault}`}
        width="16px"
        x="0px"
        xmlns="http://www.w3.org/2000/svg"
        y="0px"
      >
        {path}
      </svg>
    </span>
  );
};

export const flaskIcon = ptIconWrapper(
  <path
    d="M42.504,39.673L29.88,16.027V4.021h1.249c0.553,0,1-0.447,1-1V1c0-0.552-0.447-1-1-1H29.88H17.042h-1.144
c-0.553,0-1,0.448-1,1v2.021c0,0.553,0.447,1,1,1h1.144v12.007L5.421,39.57C2.451,44.226,4.519,48,10.042,48h27.999
C43.563,48,45.561,44.271,42.504,39.673z M20.628,17.798l0.413-0.837v-0.933V4.021h4.839v12.007v1.001l0.471,0.883l5.41,10.132
h-16.19L20.628,17.798z"
  />,
  48,
);
