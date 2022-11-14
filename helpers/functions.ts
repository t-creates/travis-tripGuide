import { toast } from 'react-toastify';


export const errorHelper = (formik: any, value: any) => ({
  error: formik.errors[value] && formik.touched[value] ? true : false,
  helpertext: formik.errors[value] && formik.touched[value] ? formik.errors[value] : null,
});

export const showToast = (type: any, msg:any) => {
  switch (type) {
    case "SUCCESS":
      toast.success(msg, {
        position: toast.POSITION.TOP_RIGHT,
        hideProgressBar: true,
      });
    break;
    case "ERROR":
      toast.error(msg, {
        position: toast.POSITION.TOP_RIGHT,
        hideProgressBar: true,
      });
    break;
    default:
      return false;
  }
};

export const classNames = (...classes: any) =>{
  return classes.filter(Boolean).join(' ')
}