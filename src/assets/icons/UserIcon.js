import {memo} from "react";

const SVGComponent = (props) => (
  <svg
    width={19}
    height={19}
    viewBox="-0.5 0 33 33"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16.5 0a9.5 9.5 0 0 1 4.581 17.825C27.427 19.947 32 25.94 32 33h-2c0-7.732-6.268-14-14-14S2 25.268 2 33H0c0-7.3 4.888-13.458 11.57-15.379A9.5 9.5 0 0 1 16.5 0Zm0 2a7.5 7.5 0 1 0 0 15 7.5 7.5 0 0 0 0-15Z"
      fill={props.mode === 'dark' ? '#252528' : '#fff'}
    />
  </svg>
);

const UserIcon = memo(SVGComponent);
export default UserIcon;
