import { animated, useSpring } from "@react-spring/web";
import { FC, ReactNode } from "react";

import { colors } from "shared/lib";

interface CheckboxInputProps {
  isChecked?: boolean;
  onChange: () => void;
  radio?: boolean;
  value?: string;
}

interface CheckboxFigureProps {
  isChecked: boolean;
  circle?: boolean;
}

interface CheckboxProps extends CheckboxInputProps {
  children: ReactNode;
  circle?: boolean;
  checkedValue?: string;
}

const CheckboxInput: FC<CheckboxInputProps> = ({
  isChecked,
  onChange,
  radio,
  value,
}) => (
  <input
    className={"sr-only peer"}
    type={radio ? "radio" : "checkbox"}
    checked={isChecked}
    onChange={onChange}
    name="radio"
    value={value}
  />
);

const CheckboxFigure: FC<CheckboxFigureProps> = ({ isChecked, circle }) => {
  const checkboxAnimationStyle = useSpring({
    backgroundColor: isChecked && !circle ? `${colors.blue}` : "#fff",
    borderColor: isChecked ? `${colors.blue}` : "#ddd",
  });

  if (circle) {
    return (
      <animated.svg
        fill="none"
        className={`checkbox border-gray-pale rounded-full`}
        style={checkboxAnimationStyle}
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <animated.circle
          cx="10"
          cy="10"
          r="6.55"
          fill={isChecked ? "#0D6EFD" : "#fff"}
        />
      </animated.svg>
    );
  }

  return (
    <animated.svg
      className={"checkbox border-gray-hot rounded-md"}
      xmlns="http://www.w3.org/2000/svg"
      style={checkboxAnimationStyle}
      width="13"
      height="9"
      fill="none"
      viewBox="-1 0 15 8"
      aria-hidden="true"
    >
      <animated.path
        fill="#fff"
        d="M4.643 9 0 4.673l1.3-1.211 3.343 3.115L11.7 0 13 1.212 4.643 9Z"
      />
    </animated.svg>
  );
};

export const Checkbox: FC<CheckboxProps> = ({
  children,
  isChecked,
  onChange,
  radio = false,
  value,
  checkedValue,
  circle = false,
}) => {
  const isCheckRadio = checkedValue === value;

  return (
    <label className={"inline-flex items-center select-none"}>
      <CheckboxInput
        isChecked={radio ? isCheckRadio : isChecked}
        value={value}
        onChange={onChange}
      />
      <CheckboxFigure
        circle={circle}
        isChecked={radio ? isCheckRadio : !!isChecked}
      />
      {children}
    </label>
  );
};