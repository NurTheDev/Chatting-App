// import signUpimg from "../../assets/signup/signup.gif";
import SignUpimg from "../component/SignUpImg";
const SignUp = () => {
  //   console.log(signUpimg);
  return (
    <div className="container">
      <div className="grid h-screen grid-cols-12 items-center justify-center ">
        <div className="col-span-7 flexCol">
          <div>
            <h1 className="text-4xl font-nunito text-primary-purple font-bold ">
              Get started with easily register
            </h1>
            <p className="font-nunito text-black-50 text-xl mt-3">
              Free register and you can enjoy it
            </p>
          </div>
        </div>
        <div className="col-span-5">
          <SignUpimg />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
