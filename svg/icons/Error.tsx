import { FC, ReactNode } from "react";

interface Props {
  width?: string;
  height?: string; 
  fillColor?: string;
  className?: string;
}

const ErrorIcon: FC<Props> = ({ 
  width = '16', 
  height = '16', 
  fillColor="#316BFF", 
  className="h-5 w-5 text-red-500"
}): JSX.Element => {
  return (
    <svg 
      width={width}
      height={height}
      fill={fillColor} 
      viewBox="0 0 16 16" 
      aria-hidden="true"
      className={className}
    >
      <path
        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
    </svg>
  );
};

export default ErrorIcon;