import {memo} from "react";

const SVGComponent = (props) => (
  <svg
    width={18}
    height={19}
    viewBox="0 0 18 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        d="M0 1.04A.534.534 0 0 1 .533.506h1.6a.533.533 0 0 1 .518.405l.432 1.73h12.384a.533.533 0 0 1 .524.632l-1.6 8.542a.534.534 0 0 1-.524.435h-9.6a.533.533 0 0 1-.524-.435L2.144 3.289l-.427-1.715H.533A.533.533 0 0 1 0 1.04Zm3.309 2.669 1.4 7.474h8.715l1.401-7.474H3.309Zm2.024 8.541A2.132 2.132 0 0 0 3.2 14.386a2.136 2.136 0 0 0 2.133 2.135 2.132 2.132 0 0 0 2.134-2.136 2.136 2.136 0 0 0-2.133-2.135Zm7.467 0a2.132 2.132 0 0 0-2.133 2.136A2.136 2.136 0 0 0 12.8 16.52a2.132 2.132 0 0 0 2.134-2.136A2.136 2.136 0 0 0 12.8 12.25Zm-7.467 1.068a1.066 1.066 0 0 1 .755 1.822 1.066 1.066 0 1 1-1.509-1.51c.2-.2.472-.312.755-.312Zm7.467 0a1.066 1.066 0 1 1 0 2.133 1.066 1.066 0 0 1 0-2.133Z"
        fill={props.mode === 'dark' ? '#000' : '#fff'}
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill={props.mode === 'dark' ? '#fff' : '#000'} d="M0 .122h18v18.581H0z" />
      </clipPath>
    </defs>
  </svg>
);

const CartIcon = memo(SVGComponent);
export default CartIcon;
