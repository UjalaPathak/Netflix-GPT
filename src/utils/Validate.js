const ValidationCheck = (email, password) => {
  const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email);
  const isPasswordValid =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
      password
    );
  let messages = [];

  if (!isEmailValid) {
    return "Email is not valid";
  }

  if (!isPasswordValid) {
    return "Password is not valid";
  }
  return null;
};
export default ValidationCheck;
