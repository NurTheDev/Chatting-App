import { Input } from "@material-tailwind/react";
import PropTypes from "prop-types";
// import { children } from "react";

export default function InputDefault({
  name,
  type,
  className,
  id,
  onChange,
  children,
  onClick,
}) {
  return (
    <div className="mt-10 w-72 relative">
      <Input
        label={name}
        name={name}
        className={className}
        type={type}
        id={id}
        onChange={onChange}
      />
      <div
        className="absolute right-4 top-[50%] text-xl cursor-pointer"
        onClick={onClick}
      >
        {children}
      </div>
    </div>
  );
}

InputDefault.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string,
  onChange: PropTypes.func,
  children: PropTypes.string,
  onClick: PropTypes.func,
};
