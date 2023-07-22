import style from "./ButtonPrimary.module.scss";

export const ButtonPrimary = ({ className, children, ...props }: any) => {
  return (
    <button {...props} className={`  ${style.button} ${className}`}>
      {children}
    </button>
  );
};

export default ButtonPrimary;
