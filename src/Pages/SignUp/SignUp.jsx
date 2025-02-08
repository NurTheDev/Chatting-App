// import signUpimg from "../../assets/signup/signup.gif";
import SignUpimg from "../component/SignUpImg";
const SignUp = () => {
  //   console.log(signUpimg);
  return (
    <div className="flex">
      <div>
        <h1>Get started with easily register</h1>
        <p>Free register and you can enjoy it</p>
      </div>
      <div>
        <SignUpimg />
      </div>
    </div>
  );
};

export default SignUp;
