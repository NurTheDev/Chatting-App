import SignUpImg from "../component/SignUpImg";
import Input from "../component/Input";
import { inputSource } from "../../lib/inputSource.js";
import { useState } from "react";
import { PiEyeClosedDuotone } from "react-icons/pi";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [conPass, setConfPass] = useState("");
  const [showPass, setShowPass] = useState(false);
  const input = inputSource();
  // console.log(conPass);

  /**
   * todo: handleInput function;
   * @param {event} event - The input event
   * @return null
   * The handleInput function in JavaScript React sets the value based on the input event.
   */
  const handleInput = (event) => {
    const { name, value } = event.target;
    if (name == "Username") {
      setName(value);
    } else if (name == "Email") {
      setEmail(value);
    } else if (name == "Password") {
      setPass(value);
    } else if (name === "Confirm Password") {
      setConfPass(value);
    }
  };

  /**
   * todo: ShowPass Function;
   * @param ({})
   * @return null
   */
  const getPassShow = () => {
    setShowPass(!showPass);
    // console.log(showPass);
  };
  return (
    <div className="container">
      <div className="grid h-screen grid-cols-12 items-center justify-center">
        <div className="col-span-7 flexCol">
          <div>
            <h1 className="text-4xl font-nunito text-primary-purple font-bold">
              Get started with easily register
            </h1>
            <p className="font-nunito text-black-50 text-xl mt-3">
              Free register and you can enjoy it
            </p>
          </div>
          <div className="w-1/2">
            {input?.map((data) => (
              <div key={data.id} className="mt-14">
                {data.type !== "password" ? (
                  <Input
                    name={data.name}
                    type={data.type}
                    className="w-full border-dark-blue px-14 border-t-2 focus:outline-0 py-7 focus:border-dark-blue"
                    onChange={handleInput}
                  />
                ) : (
                  <Input
                    name={data.name}
                    type={!showPass ? data.type : "text"}
                    className="w-full border-dark-blue px-14 border-t-2 focus:outline-0 py-7 focus:border-dark-blue"
                    onChange={handleInput}
                  >
                    <PiEyeClosedDuotone onClick={getPassShow} />
                  </Input>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-5">
          <SignUpImg />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
