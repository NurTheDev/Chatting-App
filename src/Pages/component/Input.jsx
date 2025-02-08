import { Input } from "@material-tailwind/react";
import PropTypes from "prop-types";

export default function InputDefault({ name, type, className, id, onChange }) {
  return (
    <div className="mt-10 w-72">
      <Input
        label={name}
        name={name}
        className={className}
        type={type}
        id={id}
        onChange={onChange}
      />
    </div>
  );
}

InputDefault.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string,
  onChange: PropTypes.func,
};
