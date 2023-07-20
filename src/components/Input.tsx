export default ({ className, ...props }: any) => {
  return <input {...props} className={`form-control ${className}`} />;
};
