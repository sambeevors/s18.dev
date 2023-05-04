import * as React from "react";

const Menu = React.memo((props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 48 48" fill="none" {...props}>
    <path
      d="M6 36v-3h36v3H6zm0-10.5v-3h36v3H6zM6 15v-3h36v3H6z"
      className="fill-current"
    />
  </svg>
));

export default Menu;
