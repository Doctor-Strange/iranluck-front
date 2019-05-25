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
    return { valid: false, Message: "طول ورودی بیشتر از حد مجاز" };
  if (props.value.length < props.minlength)
    return { valid: false, Message: "طول ورودی کمتر از حد مجاز" };
  if (props.type === "FA") {
    let patern = /^([^a-zA-Z0-9]*)$/;
    if (!patern.test(props.value)) {
      return { valid: false, Message: "حروف فارسی فقط مجاز است" };
    }
  } else if (props.type === "FN") {
    let patern = /^([^a-zA-Z]*)$/;
    if (!patern.test(props.value)) {
      return { valid: false, Message: "حروف فارسی و اعداد فقط مجاز است" };
    }
  } else if (props.type === "EN") {
    let patern = /^([^\u0600-\u06FF0-9]*)$/;
    if (!patern.test(props.value)) {
      return { valid: false, Message: "حروف انگلیسی فقط مجاز است" };
    }
  } else if (props.type === "FE") {
    let patern = /^([^0-9]*)$/;
    if (!patern.test(props.value)) {
      return { valid: false, Message: "حروف فارسی و انگلیسی مجاز است" };
    }
  } else if (props.type === "NE") {
    let patern = /^[a-zA-Z0-9_.-]*$/;
    if (!patern.test(props.value)) {
      return { valid: false, Message: "حروف انگلیسی و اعداد فقط مجاز است" };
    }
  } else if (props.type === "PASS") {
    let patern = /^(?=.*[a-z A-Z])(?=.*[0-9])(?=.{9,})/;
    if (!patern.test(props.value)) {
      return {
        valid: false,
        Message: "کلمه عبور باید حداقل 9 کاراکتر و شامل حروف و عدد باشد"
      };
    }
  }else if (props.type === "NOFA") {
    let patern = /^([^\u0600-\u06FF]*)$/;
    if (!patern.test(props.value)) {
      return { valid: false, Message: "کاراکتر فارسی مجاز نیست" };
    }
  }
  return { valid: true, Message: "" };
};

const NumberValidatior = props => {
  if (props.value.length === 0) return { valid: false, Message: null };
  if (props.value.length > props.maxLength)
    return { valid: false, Message: "طول ورودی بیشتر از حد مجاز" };
  if (props.value.length < props.minlength)
    return { valid: false, Message: "طول ورودی کمتر از حد مجاز" };
  if (props.type === "NUM") {
    if (isNaN(props.value)) {
      return { valid: false, Message: "فقط ورودی عدد مجاز است" };
    }
  }
  return { valid: true, Message: "" };
};

const EmailValidatior = props => {
  if (props.value.length === 0) return { valid: false, Message: null };
  if (props.value.length > props.maxLength)
    return { valid: false, Message: "طول ورودی بیشتر از حد مجاز" };
  if (props.value.length < props.minlength)
    return { valid: false, Message: "طول ورودی کمتر از حد مجاز" };
  if (props.type === "NE") {
    let patern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    if (!patern.test(props.value)) {
      return { valid: false, Message: "فرمت ایمیل رعایت نشده است" };
    }
  }
  return { valid: true, Message: "" };
};

export default ValidationCenter;
