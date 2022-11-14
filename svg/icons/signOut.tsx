import { FC } from 'react';

interface Props {
  width?: string;
  height?: string; 
  fillColor?: string;
  className?: string;
}

const signOut: FC<Props> = ({ width = '16', height = '14', fillColor="#84878B", className  }): JSX.Element => {
  return (
    <svg 
      width={width} 
      height={height}
      viewBox="0 0 16 14" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M3.36102 8.48109L2.72159 7.82742L6.39032 7.82742C6.6023 7.82742 6.8056 7.74025 6.9555 7.58508C7.1054 7.4299 7.18961 7.21945 7.18961 7C7.18961 6.78055 7.1054 6.5701 6.9555 6.41492C6.8056 6.25975 6.6023 6.17258 6.39032 6.17258L2.72159 6.17258L3.36102 5.51891C3.43593 5.44199 3.4954 5.35048 3.53597 5.24965C3.57655 5.14882 3.59744 5.04067 3.59744 4.93144C3.59744 4.82221 3.57655 4.71406 3.53597 4.61324C3.4954 4.51241 3.43593 4.42089 3.36102 4.34397C3.28671 4.26642 3.19831 4.20486 3.10091 4.16286C3.00351 4.12085 2.89904 4.09922 2.79352 4.09922C2.68801 4.09922 2.58354 4.12085 2.48613 4.16286C2.38873 4.20486 2.30033 4.26642 2.22603 4.34397L0.227808 6.41253C0.15504 6.49122 0.0979987 6.58401 0.0599571 6.68558C-0.0199861 6.88702 -0.0199861 7.11298 0.0599571 7.31442C0.0979987 7.41599 0.15504 7.50878 0.227808 7.58747L2.22603 9.65603C2.37654 9.81183 2.58067 9.89936 2.79352 9.89936C3.00637 9.89936 3.21051 9.81183 3.36102 9.65603C3.51153 9.50022 3.59608 9.2889 3.59608 9.06856C3.59608 8.84821 3.51153 8.63689 3.36102 8.48109ZM4.44006 2.03546C4.36448 2.1137 4.30453 2.20658 4.26363 2.30879C4.22273 2.41101 4.20168 2.52057 4.20168 2.63121C4.20168 2.74185 4.22273 2.8514 4.26363 2.95362C4.30453 3.05584 4.36448 3.14872 4.44006 3.22695C4.51563 3.30519 4.60535 3.36724 4.70409 3.40958C4.80283 3.45192 4.90866 3.47372 5.01554 3.47372C5.12242 3.47372 5.22825 3.45192 5.32699 3.40958C5.42574 3.36724 5.51546 3.30519 5.59103 3.22695C6.31195 2.48038 7.23055 1.9719 8.23066 1.76581C9.23076 1.55973 10.2674 1.6653 11.2096 2.06918C12.1517 2.47306 12.957 3.1571 13.5236 4.03479C14.0901 4.91247 14.3925 5.94438 14.3925 7C14.3925 8.05562 14.0901 9.08753 13.5236 9.96521C12.957 10.8429 12.1517 11.5269 11.2096 11.9308C10.2674 12.3347 9.23076 12.4403 8.23066 12.2342C7.23055 12.0281 6.31195 11.5196 5.59103 10.773C5.51546 10.6948 5.42574 10.6328 5.327 10.5904C5.22825 10.5481 5.12242 10.5263 5.01554 10.5263C4.90867 10.5263 4.80283 10.5481 4.70409 10.5904C4.60535 10.6328 4.51563 10.6948 4.44006 10.773C4.36448 10.8513 4.30453 10.9442 4.26363 11.0464C4.22273 11.1486 4.20168 11.2582 4.20168 11.3688C4.20168 11.4794 4.22273 11.589 4.26363 11.6912C4.30453 11.7934 4.36448 11.8863 4.44006 11.9645C5.38734 12.9393 6.59227 13.6018 7.90286 13.8685C9.21344 14.1352 10.571 13.9942 11.8042 13.4631C13.0374 12.9321 14.0911 12.0349 14.8324 10.8846C15.5736 9.7344 15.9691 8.38268 15.9691 7C15.9691 5.61731 15.5736 4.2656 14.8324 3.11536C14.0911 1.96513 13.0374 1.0679 11.8042 0.536863C10.571 0.00582172 9.21344 -0.135245 7.90286 0.131459C6.59227 0.398163 5.38734 1.06069 4.44006 2.03546Z" fill={fillColor}/>
    </svg>
  );
};

export default signOut;