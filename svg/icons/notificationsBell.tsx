import { FC } from "react";

interface Props {
  width?: string;
  height?: string; 
  fillColor?: string; 
}

const NotificationsBell: FC<Props> = ({ width = '17', height = '20', fillColor="#84878B"  }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 17 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M13.0006 14.9996H4.00049V8.49956C4.00049 5.99953 6.00051 3.99951 8.50054 3.99951C11.0006 3.99951 13.0006 5.99953 13.0006 8.49956V14.9996ZM15.0002 14.0002V8.5001C15.0002 5.43006 12.8601 2.86003 10.0001 2.18002V1.50002C10.0001 0.671581 9.32853 0 8.5001 0C7.67166 0 7.00008 0.671581 7.00008 1.50002V2.18002C4.13005 2.86003 2.00002 5.43006 2.00002 8.5001V14.0002L0 16.0002V17.0002H17.0002V16.0002L15.0002 14.0002ZM8.50051 20C9.60509 20 10.5005 19.1046 10.5005 18H6.50049C6.50049 19.1046 7.39593 20 8.50051 20Z" fill={fillColor}/>
    </svg>
  );

}

export default NotificationsBell;