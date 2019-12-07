const ValidationCenter = props => {
  if (props.string) {
    return StringValidatior(props.string);
  }
  if (props.number) {
    return NumberValidatior(props.number);
  }
  if (props.email) {
    return EmailValidatior(props.email);
  }
};
const StringValidatior = props => {
  if (props.value.length === 0) return { valid: false, Message: null };
  if (props.value.length > props.maxLength)
    return { valid: false, Message: "So long" };
  if (props.value.length < props.minlength)
    return { valid: false, Message: "So short" };
  if (props.type === "FA") {
    let patern = /^([^a-zA-Z0-9]*)$/;
    if (!patern.test(props.value)) {
      return { valid: false, Message: "حروف فارسی فقط مجاز است" };
    }
  } else if (props.type === "FN") {
    let patern = /^([^a-zA-Z]*)$/;
    if (!patern.test(props.value)) {
      return { valid: false, Message: "Just Number allowed" };
    }
  } else if (props.type === "EN") {
    let patern = /^([^\u0600-\u06FF0-9]*)$/;
    if (!patern.test(props.value)) {
      return { valid: false, Message: "just English letter allowed" };
    }
  } else if (props.type === "FE") {
    let patern = /^([^0-9]*)$/;
    if (!patern.test(props.value)) {
      return { valid: false, Message: "just English letter allowed" };
    }
  } else if (props.type === "NE") {
    let patern = /^[a-zA-Z0-9_.-]*$/;
    if (!patern.test(props.value)) {
      return { valid: false, Message: "Just Englih letter and number allowed" };
    }
  } else if (props.type === "PASS") {
    let patern = /^(?=.*[a-z A-Z])(?=.*[0-9])(?=.{9,})/;
    if (!patern.test(props.value)) {
      return {
        valid: false,
        Message: "Must be at least 9 letters."
      };
    }
  }else if (props.type === "NOFA") {
    let patern = /^([^\u0600-\u06FF]*)$/;
    if (!patern.test(props.value)) {
      return { valid: false, Message: "Not allowed" };
    }
  }
  return { valid: true, Message: "" };
};

const NumberValidatior = props => {
  if (props.value.length === 0) return { valid: false, Message: null };
  if (props.value.length > props.maxLength)
    return { valid: false, Message: "So Long" };
  if (props.value.length < props.minlength)
    return { valid: false, Message: "So short" };
  if (props.type === "NUM") {
    if (isNaN(props.value)) {
      return { valid: false, Message: "Please enter just number" };
    }
  }
  return { valid: true, Message: "" };
};

const EmailValidatior = props => {
  if (props.value.length === 0) return { valid: false, Message: null };
  if (props.value.length > props.maxLength)
    return { valid: false, Message: "So long" };
  if (props.value.length < props.minlength)
    return { valid: false, Message: "So short" };
  if (props.type === "NE") {
    let patern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    if (!patern.test(props.value)) {
      return { valid: false, Message: "Your email address is not correct" };
    }
  }
  return { valid: true, Message: "" };
};

export default ValidationCenter;
