import { memo } from 'react';

const SVGComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width ?? 400}
    height={props.height ?? 249}
    viewBox='0 0 400 249'
    {...props}
  >
    <path
      fill="transparent"
      d="M399.414 250H0V0h399.414l.576.067.01 244.424c0 .784.24 5.23-.143 5.48l-.443.03Z"
    />
    <path
      fill={props.mode === 'dark' ? '#000' : '#fff'}
      d="m399.414 0 .576.067.01 244.424c0 .784.24 5.23-.143 5.48l-.443.03V0Z"
    />
    <path
      fill="#58EFE1"
      d="m199.215 37.048.442.067c.224.85.12 1.762.124 2.621l.01 4.277-12.383 3.225c-9.422 2.552-18.733 5.645-28.567 7.51-.395.075-1.547.386-1.913.36-.304-.021-.832-.212-1.147-.289l-2.51-.57-2.391-.591c.234-.221 1.206-.466 1.606-.601l5.915-1.926 17.185-5.732 23.63-8.35Z"
    />
    <path
      fill="#328E7F"
      d="m320.65 121.54 27.195 12.903-.002 11.678c0 1.855.314 3.931-.11 5.76l-27.245-16.575.162-13.767Z"
    />
    <defs>
      <linearGradient
        id="a"
        gradientUnits="userSpaceOnUse"
        x1={434.197}
        y1={425.107}
        x2={341.935}
        y2={567.285}
      >
        <stop offset={0} stopColor="#245349" />
        <stop offset={1} stopColor="#3BA696" />
      </linearGradient>
    </defs>
    <path
      fill="url(#a)"
      transform="scale(.52083 .32552)"
      d="M385.572 392.174c1.533 1.631 2.541 3.777 3.812 5.631l5.965 8.056 14.435 20.705c7.591 10.797 15.471 21.43 22.351 32.715 5.713 9.372 10.382 19.352 16.33 28.594.507.788.84 1.407 1.787 1.615l.349-.447c1.336 2.12 2.438 5.251 4.3 6.899l-.454 6.31c-9.729 3.573-18.45 9.583-27.267 14.963l-25.873 16.235c-9.993 5.507-19.162 12.496-29.302 17.793-5.884 3.074-12.071 4.788-18.437 6.515l-20.439 4.944c-1.129-1.38-3.572-2.753-5.035-3.878 2.725-1.05 5.242-2.565 7.907-3.755 7.896-3.525 15.985-7.072 23.479-11.403l41.927-26.837 39.939-21.978-16.381-11.003-28.834-17.124c-2.212-1.265-6.097-4.208-8.499-4.536-.448-.062-1.275.172-1.751.236l-.424-67.106.115-3.144Z"
    />
    <path
      fill={props.mode === 'dark' ? '#000' : '#fff'}
      d="m320.488 135.306 27.245 16.575c.414.702.085 2.192.076 2.97l-.118 8.21-.009 18.775c-1.86.847-3.854 1.55-5.822 2.291l-9.503 3.53-22.081 8.024c-4.915 1.764-10.288 3.484-14.739 5.675l.007-19.152c1.262-.372 2.48-.888 3.679-1.335l9.103-3.538c4.098-1.583 8.644-3.004 12.431-4.855l-.269-37.17Z"
    />
    <defs>
      <linearGradient
        id="b"
        gradientUnits="userSpaceOnUse"
        x1={520.038}
        y1={464.459}
        x2={324.66}
        y2={486.857}
      >
        <stop offset={0} stopColor="#B6C0C0" />
        <stop offset={1} stopColor="#F4F4F4" />
      </linearGradient>
    </defs>
    <path
      fill="url(#b)"
      transform="scale(.52083 .32552)"
      d="M507.636 354.033c.377 2.987-.118 5.971-.2 8.967l-.13 16.647c-.011 3.473-.22 7.106.084 10.56l-.92 64.139-.527 25.441.119 28.765c.057 4.986.611 10.487.05 15.423-3.204 1.136-6.288 3.465-9.237 5.173l-13.156 7.359-67.987 38.669-9.607 5.354c-.849.467-2.426 1.579-3.365 1.705-1.791 1.352-4.017 2.404-5.971 3.523l-11.209 6.655-37.72-20.535c-4.84-2.768-10.551-5.523-14.731-9.176l20.439-4.944c6.366-1.727 12.553-3.441 18.437-6.515 10.14-5.297 19.309-12.286 29.302-17.793l25.873-16.235c8.817-5.38 17.538-11.39 27.267-14.963l.454-6.31c1.435-6.854 2.942-13.733 4.997-20.432l3.301-9.319c1.169-.899 1.579-2.337 2.091-3.671l3.566-9.479 13.7-34.728 14.014-34.915c3.677-9.653 6.395-20.164 11.066-29.365Z"
    />
    <defs>
      <linearGradient
        id="c"
        gradientUnits="userSpaceOnUse"
        x1={577.273}
        y1={482.271}
        x2={497.034}
        y2={360.311}
      >
        <stop offset={0} stopColor="#276056" />
        <stop offset={1} stopColor="#36A392" />
      </linearGradient>
    </defs>
    <path
      fill="url(#c)"
      transform="scale(.52083 .32552)"
      d="M512.489 338.693c.691-.151 1.454-.36 2.011-.818 4.146-3.408 7.941-7.713 11.763-11.5 10.342-10.245 20.339-20.861 31.399-30.347 2.179-1.869 5.226-5.027 8.026-5.813l.899.754c-.352 1.108-.835 2.3-1.011 3.444-.786 2.251-.593 4.962-.634 7.343l-.139 13.69.431 176.124c-5.091 2.124-9.815 5.148-14.633 7.821l-31.275 17.691c-4.01 2.25-8.84 5.736-13.214 6.893.561-4.936.007-10.437-.05-15.423l-.119-28.765.527-25.441.92-64.139c-.304-3.454-.095-7.087-.084-10.56l.13-16.647c.082-2.996.577-5.98.2-8.967l4.853-15.34Z"
    />
    <path
      fill="#40BCAD"
      d="M266.921 110.252c.36-.05.757-.118 1.048-.267 2.159-1.109 4.136-2.51 6.126-3.743 5.387-3.335 10.593-6.79 16.354-9.879 1.135-.608 2.722-1.636 4.18-1.892l.468.246c-.183.36-.435.748-.526 1.12-.41.733-.31 1.616-.33 2.39l-.073 4.457c-1.848.543-3.6 1.795-5.047 2.697-7.61 4.745-14.125 10.107-20.622 15.44-1.275 1.047-2.994 2.117-3.99 3.257-.032.898.157 2.09-.244 2.943-.158-1.125-.049-2.307-.043-3.438l.067-5.419c.043-.975.3-1.946.105-2.919l2.527-4.993Z"
    />
    <path
      fill="#54CFC3"
      d="M109.81 92.226c.626.247 1.18.558 1.81.793 1.308.486 3.002.823 4.406 1.22l9.668 2.783 9.259 2.78c1.183.392 2.598.778 3.548 1.377-1.963.737-4.013 1.538-6.12 2.098 1.044 1.691 1.754 3.436 2.537 5.18.13.29.6 1.008.538 1.252-.35 1.01.415 2.531.533 3.597l.511 7.578.251 49.92-30.792-11.065.01-66.46c1.34-.27 2.58-.668 3.842-1.053Z"
    />
    <path
      fill={props.mode === 'dark' ? '#000' : '#fff'}
      d="m248.602 183.655.499-.064c.164.406.062.917.052 1.337l-.048 2.594-.07 11.636c-.007 1.784-.36 3.96.173 5.703l.04.12c-3.155 1.62-7.167 2.784-10.668 4.116l-27.303 10.471c-3.37 1.323-7.253 2.541-10.359 4.083l-.162.083c-1.755-.287-3.66-1.112-5.252-1.682l-15.493-5.939-27.703-10.206-1.764-.721c.554-2.28.208-4.848.21-7.156l.03-14.233c1.73.376 3.337 1.066 4.932 1.628l6.946 2.378 23.569 8.187c4.9 1.722 9.87 3.291 14.542 5.26l47.829-17.595Zm4.995-102.863.504-.257.79.08c2.192.756 4.72 1.276 7.02 1.921l15.503 4.337 4.048 1.14c.701.22 2.236.937 2.927.895.135.142.23.302.407.425.306.215 1.406.502 1.843.65l6.95 2.26c.536.18 1.884.57 2.066.958.053.112-.014.402-.05.518-.042.14-.388.942-.508.998l-.468-.246c-1.458.256-3.045 1.284-4.18 1.892-5.76 3.088-10.967 6.544-16.354 9.879-1.99 1.233-3.967 2.634-6.126 3.743-.29.15-.688.218-1.048.267l-2.527 4.993c-2.433 2.995-3.849 6.417-5.764 9.56l-7.299 11.365-7.135 11.304-1.858 3.086c-.266.434-.48.902-1.089 1.195l-1.719 3.033c-1.07 2.181-1.855 4.42-2.603 6.652-.97-.537-1.543-1.556-2.24-2.246l-.18.145c-.494-.067-.668-.269-.932-.525-3.098-3.009-5.53-6.258-8.505-9.308-3.583-3.674-7.687-7.135-11.641-10.65l-7.518-6.74-3.107-2.622c-.662-.604-1.187-1.302-1.985-1.833l-.06 1.023c-.26-.872-.162-1.826-.159-2.71l.022-4.398-.025-14.963-.047-6.025c.25-.47.763-.842.894-1.344.234-.166.424-.307.727-.428 2.2-.88 4.862-1.525 7.182-2.31l15.148-5.282 17.813-6.503 11.283-3.929Z"
    />
    <path
      fill="#58EFE1"
      d="M254.89 80.615c2.193.756 4.721 1.276 7.022 1.921l15.502 4.337 4.048 1.14c.701.22 2.236.937 2.927.895.135.142.23.302.407.425.306.215 1.406.502 1.843.65l6.95 2.26c.536.18 1.884.57 2.066.958.053.112-.014.402-.05.518-.042.14-.388.942-.508.998l-.468-.246c-1.458.256-3.045 1.284-4.18 1.892-5.76 3.088-10.967 6.544-16.354 9.879-1.99 1.233-3.967 2.634-6.126 3.743-.29.15-.688.218-1.048.267l2.49-5.988-14.615-5.553c-.196-.612-.11-1.293-.115-1.919l-.012-3.562c.001-4.186-.21-8.439.221-12.615Z"
    />
    <path
      fill="#328E7F"
      d="m200.597 106.613.226-.38.313.03 9.646 7.592c.33-.155.218-.071.379-.228 1.442-.484 2.918-1.064 4.51-1.323 1.662 1.11 2.955 2.108 4.003 3.493 1.625 2.148 2.71 4.432 4.007 6.66l6.034 10.111c3.835 6.34 8.594 12.667 11.534 19.187l-1.719 3.033c-1.07 2.181-1.855 4.42-2.603 6.652-.97-.537-1.543-1.556-2.24-2.246l-.18.145c-.494-.067-.668-.269-.932-.525-3.098-3.009-5.53-6.258-8.505-9.308-3.583-3.674-7.687-7.135-11.641-10.65l-7.518-6.74-3.107-2.622c-.662-.604-1.187-1.302-1.985-1.833l-.06 1.023c-.26-.872-.162-1.826-.159-2.71l.022-4.398-.025-14.963Z"
    />
    <path
      fill="#40BCAD"
      d="m200.597 106.613.226-.38.313.03 9.646 7.592c.33-.155.218-.071.379-.228 1.349 1.24 1.996 2.894 2.633 4.327 1.763 3.972 2.62 8.133 4.688 12.042-.102.09-.038.023-.098.237l-.053.2-.264.091c-.676-.38-1.091-1.015-1.59-1.493l-3.38-3.064c-3.028-2.563-6.675-4.827-9.426-7.522-1.218-1.194-1.9-2.348-2.744-3.644l-.108 12.86-.06 1.023c-.26-.872-.162-1.826-.159-2.71l.022-4.398-.025-14.963Z"
    />
    <path
      fill="#313131"
      d="M211.16 113.627c1.443-.484 2.919-1.064 4.51-1.323 1.663 1.11 2.956 2.108 4.004 3.493 1.625 2.148 2.71 4.432 4.007 6.66l6.034 10.111c3.835 6.34 8.594 12.667 11.534 19.187l-1.719 3.033c-1.07 2.181-1.855 4.42-2.603 6.652-.97-.537-1.543-1.556-2.24-2.246-1.681-2.259-2.731-4.628-3.904-7l-3.087-5.837-4.82-8.823-4.394-7.538c-2.069-3.909-2.925-8.07-4.688-12.042-.637-1.433-1.284-3.087-2.633-4.327Z"
    />
    <path
      fill="#54CFC3"
      d="M201.444 99.244c.234-.166.424-.307.727-.428 2.2-.88 4.862-1.525 7.182-2.31l15.148-5.282 17.813-6.503 11.283-3.929.061 13.038-.012 3.098c.002.607.1 1.276-.087 1.87-1.261.689-2.737 1.2-4.168 1.738l-7.245 2.607-18.665 6.624c-2.507.84-5.512 1.532-7.81 2.537-1.592.259-3.068.839-4.51 1.323-.16.157-.05.073-.38.228l-9.645-7.593-.313-.03-.226.381-.047-6.025c.25-.47.763-.842.894-1.344Z"
    />
    <path
      fill="#58EFE1"
      d="m109.81 92.226 35.93-11.665.087.149c.473.787 1.092 1.11 2.173 1.584 3.56 1.56 7.468 2.883 11.251 4.22l23.223 7.927 11.43 3.98c1.995.7 4.254 1.647 6.39 2.123l.256.044.047 6.025.025 14.963-.022 4.398c-.003.884-.1 1.838.159 2.71l.22 21.845c-2.31 1.229-5.645 2.136-8.305 3.071l-18.096 6.279-6.27 2.157c-.836.293-1.63.68-2.509.913l-2.025-4.194c-.35-.757-.636-1.648-1.16-2.356l-27.158-46.69c.063-.244-.408-.962-.538-1.253-.783-1.743-1.493-3.488-2.538-5.18 2.108-.56 4.158-1.36 6.121-2.097-.95-.599-2.365-.985-3.548-1.377l-9.26-2.78-9.667-2.783c-1.404-.397-3.098-.734-4.405-1.22-.63-.235-1.185-.546-1.81-.793Z"
    />
    <path
      fill={props.mode === 'dark' ? '#000' : '#fff'}
      d="m138.501 101.18 7.954-2.721 40.316 15.356c-1.433 1.746-2.312 3.597-3.344 5.442l-4.238 7.39-10.42 17.51-3.552 5.737c-.677 1.215-1.346 2.463-1.778 3.722-.298.868-.28 1.987-.826 2.783l-27.157-46.69c.063-.244-.408-.962-.538-1.253-.783-1.743-1.493-3.488-2.538-5.18 2.108-.56 4.158-1.36 6.121-2.097ZM284.59 88.72l-.04-.129c-.456-1.367-1.607-2.747-2.559-4.003-2.116-2.792-3.852-5.167-7.228-7.48a30.75 30.75 0 0 0-2.773-1.672c-.499-.27-1.212-.552-1.577-.893l17.929-7.064-46.085-16.793.05-.13c.296-.859.233-1.77.237-2.646v-3.795l.046-16.143c7.115 2.08 14.053 4.611 20.953 6.964l13.02 4.35L306.09 49.77l27.173 9.592c5.011 1.78 10.325 3.42 15.002 5.532l-.42 69.55-27.196-12.905.021-2.87c-.21-.975-.108-2.037-.117-3.02l-.047-5.647c-.004-.117-.001-.36-.101-.457-.238-.231-1.054-.55-1.412-.737l-4.196-2.169-11.08-6.029c-3.028-1.588-6.312-3.051-9.147-4.772.091-.373.343-.76.526-1.121.12-.056.466-.859.508-.998.036-.116.103-.406.05-.518-.182-.388-1.53-.777-2.066-.958l-6.95-2.26c-.437-.148-1.537-.435-1.843-.65-.176-.123-.272-.283-.407-.425l.2-.188Z"
    />
    <defs>
      <linearGradient
        id="d"
        gradientUnits="userSpaceOnUse"
        x1={621.599}
        y1={283.419}
        x2={550.001}
        y2={293.601}
      >
        <stop offset={0} stopColor="#ACC0C0" />
        <stop offset={1} stopColor="#DFDFDF" />
      </linearGradient>
    </defs>
    <path
      fill="url(#d)"
      transform="scale(.52083 .32552)"
      d="m546.413 272.547 69.084-39.364.279 90.477.004 27.048c.014 4.499.454 9.394-.091 13.842-.405-2.995-.208-6.258-.225-9.276l-.091-17.348c-.006-.359-.002-1.104-.194-1.403-.457-.712-2.022-1.69-2.711-2.264l-8.055-6.664-21.274-18.52c-5.814-4.88-12.12-9.375-17.563-14.662.176-1.144.659-2.336 1.011-3.444.23-.171.894-2.636.975-3.064.069-.357.197-1.247.096-1.593-.349-1.19-2.938-2.386-3.966-2.941l-13.345-6.946c-.839-.452-2.95-1.335-3.539-1.994-.338-.378-.521-.871-.781-1.306l.386-.578Z"
    />
    <path
      fill={props.mode === 'dark' ? '#000' : '#fff'}
      d="m83.178 127.37.04 46.493c2.452.69 4.84 1.85 7.151 2.74l14.123 5.373-.01 19.51-52.93-19.7-.066-116.467-.027-.146 105.834-37.095-.022 22.647c-4.49 1.167-8.84 2.982-13.033 4.52l-22.372 8.26c-3.513 1.314-7.007 2.824-10.604 4.025l-.147.048 90.329 31.666c-.131.502-.644.873-.894 1.344l-.256-.044c-2.136-.476-4.395-1.424-6.39-2.122l-11.43-3.981-23.223-7.928c-3.783-1.336-7.691-2.658-11.25-4.22-1.082-.474-1.7-.796-2.174-1.583l-.087-.15-35.93 11.666c-1.261.385-2.502.783-3.841 1.052l-.277-.627c.6-.555 2.03-.877 2.975-1.19 2.17-.722 4.492-1.386 6.48-2.295L83.614 77.11l-.348 40.132-.088 10.128Z"
    />
    <path
      fill="#58EFE1"
      d="m83.178 127.37-15.249-9.01c-1.467-.92-8.598-5.33-8.925-6.156-.237-.598-.046-1.571-.048-2.21v-6.167c7.343 4.983 15.945 9.132 24.31 13.415l-.088 10.128Z"
    />
  </svg>
);

const LogoIcon = memo(SVGComponent);
export default LogoIcon;
