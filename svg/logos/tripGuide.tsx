import { FC, ReactNode } from "react";

interface Props {
  width?: string;
  height?: string; 
  fillLogo?: string; 
  fillText?: string;
  className?: string;
}


const TripGuide: FC<Props> = ({ 
  width = '148', 
  height = '38', 
  fillLogo="#316BFF", 
  fillText="#222529",
  className
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 148 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M22.1346 0.552309C20.8042 -0.181246 19.1941 -0.184267 17.861 0.544292L2.33056 9.03154C0.894374 9.8164 0.000195393 11.3285 0.000173373 12.9722L4.0833e-10 25.9145C-2.29943e-05 27.6311 0.974256 29.1971 2.5093 29.9478L4.70556 31.022C5.24504 29.7223 5.89827 28.4569 6.68583 27.2913C11.0634 20.8126 14.1449 18.7185 17.0134 16.8011C17.2279 16.6577 17.2354 16.3441 17.0283 16.1901L10.3798 11.2476C10.2736 11.1686 10.2808 11.0067 10.3936 10.9377L12.4095 9.70296C12.5121 9.64012 12.6386 9.63103 12.749 9.67855L17.1143 11.5569C17.227 11.6054 17.3561 11.5949 17.4596 11.529L18.9955 10.5496C19.083 10.4939 19.1989 10.5208 19.2533 10.6095L20.1671 12.1014C20.2107 12.1726 20.2019 12.2643 20.1457 12.3259L19.9863 12.5003C19.8989 12.5959 19.9328 12.7498 20.0522 12.7994L22.0868 13.6447C22.1509 13.6714 22.2243 13.6596 22.2786 13.6161C23.1691 12.9036 25.4069 11.6935 28.1451 11.8252C28.3662 11.8358 28.5184 12.0457 28.441 12.2543C28.0396 13.3349 26.7638 15.2381 23.9118 16.602C23.8531 16.6301 23.8119 16.6869 23.8048 16.7518L23.5754 18.847C23.5633 18.9576 23.6494 19.0543 23.7601 19.0543H24.0246C24.0932 19.0543 24.1561 19.0922 24.1885 19.153L24.9803 20.6404C25.0265 20.7273 24.9977 20.8354 24.9144 20.8874L23.2521 21.925C23.2045 21.9547 23.1728 22.0044 23.1658 22.0603L22.5552 26.9251C22.5475 26.9865 22.51 27.0401 22.4552 27.0682L20.2077 28.2196C20.0892 28.2803 19.9476 28.1999 19.938 28.0666L19.3268 19.5853C19.3176 19.4572 19.1866 19.3763 19.0713 19.4314C16.8589 20.488 12.7208 23.8142 12.145 29.6349C11.9581 31.5247 12.0715 33.2465 12.4073 34.7888L18.0494 37.5483C19.2808 38.1506 20.7191 38.1506 21.9506 37.5483L37.4907 29.9478C39.0257 29.1971 40 27.6311 40 25.9145V13.0585C40 11.4207 39.1123 9.91312 37.6842 9.12575L22.1346 0.552309Z" fill={fillLogo}/>
      <path d="M57.3047 26.5H54.2773V14.7422H50.4004V12.2227H61.1816V14.7422H57.3047V26.5ZM69.2383 15.377C69.388 15.377 69.5605 15.3867 69.7559 15.4062C69.9577 15.4193 70.1204 15.4388 70.2441 15.4648L70.0195 18.2578C69.9219 18.2253 69.7819 18.2025 69.5996 18.1895C69.4238 18.1699 69.2708 18.1602 69.1406 18.1602C68.7565 18.1602 68.3822 18.209 68.0176 18.3066C67.6595 18.4043 67.3372 18.5638 67.0508 18.7852C66.7643 19 66.5365 19.2865 66.3672 19.6445C66.2044 19.9961 66.123 20.429 66.123 20.9434V26.5H63.1445V15.582H65.4004L65.8398 17.418H65.9863C66.2012 17.0469 66.4681 16.7083 66.7871 16.4023C67.1126 16.0898 67.4805 15.8424 67.8906 15.6602C68.3073 15.4714 68.7565 15.377 69.2383 15.377ZM75.2051 15.582V26.5H72.2266V15.582H75.2051ZM73.7207 11.3047C74.1634 11.3047 74.5443 11.4089 74.8633 11.6172C75.1823 11.819 75.3418 12.1999 75.3418 12.7598C75.3418 13.3132 75.1823 13.6973 74.8633 13.9121C74.5443 14.1204 74.1634 14.2246 73.7207 14.2246C73.2715 14.2246 72.8874 14.1204 72.5684 13.9121C72.2559 13.6973 72.0996 13.3132 72.0996 12.7598C72.0996 12.1999 72.2559 11.819 72.5684 11.6172C72.8874 11.4089 73.2715 11.3047 73.7207 11.3047ZM84.4141 15.377C85.6445 15.377 86.6374 15.8555 87.3926 16.8125C88.1543 17.7695 88.5352 19.1725 88.5352 21.0215C88.5352 22.2585 88.3561 23.3001 87.998 24.1465C87.64 24.9863 87.1452 25.6211 86.5137 26.0508C85.8822 26.4805 85.1562 26.6953 84.3359 26.6953C83.8086 26.6953 83.3561 26.6302 82.9785 26.5C82.6009 26.3633 82.2786 26.1908 82.0117 25.9824C81.7448 25.7676 81.5137 25.5397 81.3184 25.2988H81.1621C81.2142 25.5592 81.2533 25.8262 81.2793 26.0996C81.3053 26.373 81.3184 26.64 81.3184 26.9004V31.3047H78.3398V15.582H80.7617L81.1816 16.998H81.3184C81.5137 16.7051 81.7513 16.4349 82.0312 16.1875C82.3112 15.9401 82.6465 15.7448 83.0371 15.6016C83.4342 15.4518 83.8932 15.377 84.4141 15.377ZM83.457 17.7598C82.9362 17.7598 82.5228 17.8672 82.2168 18.082C81.9108 18.2969 81.6862 18.6191 81.543 19.0488C81.4062 19.4785 81.3314 20.0221 81.3184 20.6797V21.002C81.3184 21.7051 81.3835 22.3008 81.5137 22.7891C81.6504 23.2773 81.875 23.6484 82.1875 23.9023C82.5065 24.1562 82.9427 24.2832 83.4961 24.2832C83.9518 24.2832 84.3262 24.1562 84.6191 23.9023C84.9121 23.6484 85.1302 23.2773 85.2734 22.7891C85.4232 22.2943 85.498 21.6921 85.498 20.9824C85.498 19.9147 85.332 19.1107 85 18.5703C84.668 18.0299 84.1536 17.7598 83.457 17.7598ZM96.6504 18.4824H102.314V25.8848C101.566 26.1322 100.788 26.3307 99.9805 26.4805C99.1732 26.6237 98.2585 26.6953 97.2363 26.6953C95.8171 26.6953 94.6126 26.4154 93.623 25.8555C92.6335 25.2956 91.8815 24.4688 91.3672 23.375C90.8529 22.2812 90.5957 20.9368 90.5957 19.3418C90.5957 17.8444 90.8822 16.5488 91.4551 15.4551C92.0345 14.3613 92.8776 13.515 93.9844 12.916C95.0977 12.3171 96.4551 12.0176 98.0566 12.0176C98.8118 12.0176 99.5573 12.099 100.293 12.2617C101.029 12.4245 101.696 12.6361 102.295 12.8965L101.289 15.3184C100.853 15.097 100.355 14.9115 99.7949 14.7617C99.235 14.612 98.6491 14.5371 98.0371 14.5371C97.1582 14.5371 96.3932 14.7389 95.7422 15.1426C95.0977 15.5462 94.5964 16.1126 94.2383 16.8418C93.8867 17.5645 93.7109 18.4173 93.7109 19.4004C93.7109 20.3314 93.8379 21.1582 94.0918 21.8809C94.3457 22.597 94.7461 23.1602 95.293 23.5703C95.8398 23.974 96.5527 24.1758 97.4316 24.1758C97.8613 24.1758 98.2227 24.1562 98.5156 24.1172C98.8151 24.0716 99.0951 24.026 99.3555 23.9805V21.002H96.6504V18.4824ZM115.508 15.582V26.5H113.223L112.822 25.1035H112.666C112.432 25.4746 112.139 25.7773 111.787 26.0117C111.436 26.2461 111.048 26.4186 110.625 26.5293C110.202 26.64 109.762 26.6953 109.307 26.6953C108.525 26.6953 107.845 26.5586 107.266 26.2852C106.686 26.0052 106.234 25.5723 105.908 24.9863C105.589 24.4004 105.43 23.6387 105.43 22.7012V15.582H108.408V21.959C108.408 22.7402 108.548 23.3294 108.828 23.7266C109.108 24.1237 109.554 24.3223 110.166 24.3223C110.771 24.3223 111.247 24.1855 111.592 23.9121C111.937 23.6322 112.178 23.2253 112.314 22.6914C112.458 22.151 112.529 21.4935 112.529 20.7188V15.582H115.508ZM121.611 15.582V26.5H118.633V15.582H121.611ZM120.127 11.3047C120.57 11.3047 120.951 11.4089 121.27 11.6172C121.589 11.819 121.748 12.1999 121.748 12.7598C121.748 13.3132 121.589 13.6973 121.27 13.9121C120.951 14.1204 120.57 14.2246 120.127 14.2246C119.678 14.2246 119.294 14.1204 118.975 13.9121C118.662 13.6973 118.506 13.3132 118.506 12.7598C118.506 12.1999 118.662 11.819 118.975 11.6172C119.294 11.4089 119.678 11.3047 120.127 11.3047ZM128.203 26.6953C126.986 26.6953 125.993 26.2201 125.225 25.2695C124.463 24.3125 124.082 22.9095 124.082 21.0605C124.082 19.1921 124.469 17.7793 125.244 16.8223C126.019 15.8587 127.031 15.377 128.281 15.377C128.802 15.377 129.261 15.4486 129.658 15.5918C130.055 15.735 130.397 15.9271 130.684 16.168C130.977 16.4089 131.224 16.679 131.426 16.9785H131.523C131.484 16.7702 131.436 16.4642 131.377 16.0605C131.325 15.6504 131.299 15.2305 131.299 14.8008V11.3047H134.287V26.5H132.002L131.426 25.084H131.299C131.11 25.3835 130.872 25.6569 130.586 25.9043C130.306 26.1452 129.971 26.3372 129.58 26.4805C129.189 26.6237 128.73 26.6953 128.203 26.6953ZM129.248 24.3223C130.062 24.3223 130.635 24.0814 130.967 23.5996C131.305 23.1113 131.484 22.3789 131.504 21.4023V21.0801C131.504 20.0189 131.341 19.2083 131.016 18.6484C130.69 18.082 130.085 17.7988 129.199 17.7988C128.542 17.7988 128.027 18.082 127.656 18.6484C127.285 19.2148 127.1 20.0319 127.1 21.0996C127.1 22.1673 127.285 22.9714 127.656 23.5117C128.034 24.0521 128.564 24.3223 129.248 24.3223ZM141.904 15.377C142.913 15.377 143.783 15.5723 144.512 15.9629C145.241 16.347 145.804 16.9069 146.201 17.6426C146.598 18.3783 146.797 19.2767 146.797 20.3379V21.7832H139.756C139.788 22.623 140.039 23.2839 140.508 23.7656C140.983 24.2409 141.641 24.4785 142.48 24.4785C143.177 24.4785 143.815 24.4069 144.395 24.2637C144.974 24.1204 145.57 23.9056 146.182 23.6191V25.9238C145.641 26.1908 145.075 26.3861 144.482 26.5098C143.896 26.6335 143.184 26.6953 142.344 26.6953C141.25 26.6953 140.28 26.4935 139.434 26.0898C138.594 25.6862 137.933 25.071 137.451 24.2441C136.976 23.4173 136.738 22.3757 136.738 21.1191C136.738 19.8431 136.953 18.7819 137.383 17.9355C137.819 17.0827 138.424 16.4447 139.199 16.0215C139.974 15.5918 140.876 15.377 141.904 15.377ZM141.924 17.4961C141.344 17.4961 140.863 17.6816 140.479 18.0527C140.101 18.4238 139.883 19.0065 139.824 19.8008H144.004C143.997 19.3581 143.916 18.9642 143.76 18.6191C143.61 18.2741 143.382 18.0007 143.076 17.7988C142.777 17.597 142.393 17.4961 141.924 17.4961Z" fill={fillText}/>
    </svg>
  );

}

export default TripGuide;