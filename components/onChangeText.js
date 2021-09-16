// TextInput refs to focus programmatically while entering OTP
const firstTextInputRef = useRef(null);
const secondTextInputRef = useRef(null);
const thirdTextInputRef = useRef(null);
const fourthTextInputRef = useRef(null);
const onOtpChange = (index) => {
  return (value) => {
    if (isNaN(Number(value))) {
      // do nothing when a non digit is pressed
      return;
    }
    const otpArrayCopy = otpArray.concat();
    otpArrayCopy[index] = value;
    setOtpArray(otpArrayCopy);

    // auto focus to next InputText if value is not blank
    if (value !== "") {
      if (index === 0) {
        secondTextInputRef.current.focus();
      } else if (index === 1) {
        thirdTextInputRef.current.focus();
      } else if (index === 2) {
        fourthTextInputRef.current.focus();
      }
    }
  };
};
