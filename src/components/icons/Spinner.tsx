import * as React from "react";

// eslint-disable-next-line react/display-name
const Spinner = React.memo((props: React.SVGProps<SVGSVGElement>) => (
  <svg fill="none" viewBox="0 0 24 24" {...props}>
    <circle
      cx={12}
      cy={12}
      r={10}
      className="stroke-current opacity-25"
      strokeWidth={4}
    />
    <path
      className="fill-current opacity-100"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    />
  </svg>
));

export default Spinner;
