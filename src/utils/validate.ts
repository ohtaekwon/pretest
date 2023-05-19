const DISPLAY_NAME_REGEX = /^[가-힣]{1,8}$/;
const EMAIL_REGEX =
  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]+$/;

const signInValidation = ({
  displayName,
  email,
  password,
}: SignUpValidationProps) => {
  const errors: SignUpValidationProps = {};

  if (!displayName) {
    errors.displayName = "이름이 입력되지 않았습니다.";
  } else if (!DISPLAY_NAME_REGEX.test(displayName)) {
    errors.displayName =
      "이름은 한글로 입력해주세요 최소 1글자 최대 8글자로 해야 합니다.";
  }

  if (!email) {
    errors.email = "이메일이 입력되지 않았습니다.";
  } else if (!EMAIL_REGEX.test(email)) {
    errors.email = "이메일 형식으로 작성 해야 합니다..";
  }

  if (!password) {
    errors.password = "비밀번호를 입력하지 않았습니다.";
  } else if (!PWD_REGEX.test(password)) {
    errors.password =
      "비밀번호는 소문자,대문자,숫자로 사용한 조합이며, 시작문자는 문자로 해야 합니다.";
  }

  return errors;
};
export default { signInValidation };

type SignUpValidationProps = {
  displayName?: string;
  email?: string;
  password?: string;
};
