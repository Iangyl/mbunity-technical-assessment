import { memo } from 'react';

const SVGComponent = (props) => (
  <svg
    width={30}
    height={30}
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={15} cy={15} r={15} fill="#1B1B1B" />
    <path
      d="M20.698 10.83a13.729 13.729 0 0 0-3.053-.83.053.053 0 0 0-.028.004.045.045 0 0 0-.02.017 7.132 7.132 0 0 0-.381.683 13.046 13.046 0 0 0-3.43 0 6.44 6.44 0 0 0-.386-.683.046.046 0 0 0-.02-.017c-.01-.003-.02-.005-.029-.003a13.632 13.632 0 0 0-3.053.829.037.037 0 0 0-.02.014c-1.944 2.541-2.478 5.02-2.216 7.467.001.012.01.023.02.03a13.204 13.204 0 0 0 3.745 1.657c.01.003.02.003.03 0a.046.046 0 0 0 .023-.015 7.72 7.72 0 0 0 .766-1.09.037.037 0 0 0 .005-.026.04.04 0 0 0-.014-.023.05.05 0 0 0-.017-.009 8.9 8.9 0 0 1-1.17-.487.043.043 0 0 1-.022-.024.037.037 0 0 1 .003-.03.043.043 0 0 1 .014-.016c.08-.052.158-.106.233-.16a.053.053 0 0 1 .048-.006c2.455.98 5.113.98 7.538 0a.056.056 0 0 1 .026-.003.053.053 0 0 1 .024.009c.075.054.154.108.232.16.007.004.012.01.015.016a.037.037 0 0 1-.002.04.046.046 0 0 1-.017.014c-.373.19-.765.353-1.17.487a.048.048 0 0 0-.018.01.039.039 0 0 0-.013.032c0 .005.002.01.005.016.225.381.483.745.766 1.09a.046.046 0 0 0 .024.015c.009.003.02.003.029 0a13.166 13.166 0 0 0 3.75-1.656.042.042 0 0 0 .014-.013.036.036 0 0 0 .006-.018c.313-2.83-.524-5.287-2.218-7.466a.027.027 0 0 0-.007-.01.032.032 0 0 0-.012-.006Zm-7.685 5.99c-.74 0-1.348-.593-1.348-1.32 0-.73.597-1.323 1.348-1.323.757 0 1.36.598 1.348 1.322 0 .728-.597 1.322-1.348 1.322Zm4.984 0c-.74 0-1.349-.593-1.349-1.32 0-.73.598-1.323 1.349-1.323.756 0 1.36.598 1.348 1.322a1.33 1.33 0 0 1-1.348 1.322Z"
      fill="#fff"
    />
  </svg>
);

const DiscordIcon = memo(SVGComponent);
export default DiscordIcon;
