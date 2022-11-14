import { FC } from 'react';

interface Props {
  width?: string;
  height?: string; 
  fillColor?: string;
  className?: string;
}

const MyRewards: FC<Props> = ({ width = '18', height = '18', fillColor="#84878B", className  }): JSX.Element => {
  return (
    <svg 
      width={width} 
      height={height}
      viewBox="0 0 18 18" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M1.18031 9.97158C0.759861 9.55114 0.599613 8.97015 0.692522 8.42254L1.83876 1.83852L8.42278 0.692278C8.9704 0.599369 9.55138 0.759617 9.97183 1.18006L16.8173 8.03807C17.5056 8.72636 17.5073 9.83959 16.8134 10.5335L10.5337 16.8132C9.83984 17.5071 8.7266 17.5053 8.03832 16.817L1.18031 9.97158ZM15.5676 9.28772L8.7159 2.436L3.36794 3.3677L2.43624 8.71565L9.28797 15.5674L15.5676 9.28772ZM5.58889 6.80605C6.14756 6.80605 6.60046 6.35315 6.60046 5.79448C6.60046 5.23581 6.14756 4.78291 5.58889 4.78291C5.03022 4.78291 4.57732 5.23581 4.57732 5.79448C4.57732 6.35315 5.03022 6.80605 5.58889 6.80605Z" fill={fillColor}/>
    </svg>
  );
};

export default MyRewards;