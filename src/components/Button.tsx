interface Props {
  onClick: () => void;
  children: React.ReactNode;
  filled?: boolean;
  whiteText?: boolean;
  mxAuto?: boolean;
  greenBorder?: boolean;
}

const Button: React.FC<Props> = ({
  onClick,
  children,
  filled,
  mxAuto,
  greenBorder,
  whiteText,
}) => {
  const baseStyles = 'flex items-center rounded-full border-2 px-5 py-2 text-lg font-medium';
  const layout = mxAuto ? 'mx-auto' : 'mx-2.5';

  const filledStyles = greenBorder
    ? 'border-green-300 text-green-300 hover:bg-green-300 hover:text-black'
    : `border-blue-500 ${whiteText ? 'text-white' : 'text-blue-500'
    } hover:bg-blue-500 hover:text-white`;

  const outlineStyles = 'text-blue-500 hover:text-blue-700';

  const classes = filled
    ? `${layout} ${baseStyles} ${filledStyles}`
    : `${layout} ${outlineStyles}`;

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
};

export default Button;
