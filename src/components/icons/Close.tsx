import * as React from "react";

const Close = React.memo((props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 48 48" fill="none" {...props}>
    <path
      d="M12.45 37.65l-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1 12.45 37.65z"
      className="fill-current"
    />
  </svg>
));

export default Close;
