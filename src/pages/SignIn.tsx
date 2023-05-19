import React from "react";
import { Box, Button, Stack, TextField } from "@mui/material";
import formValidate from "utils/validate";
import useFormController from "hooks/useFormController";
import { useNavigate } from "react-router-dom";

const initialValues = {
  displayName: "",
  email: "",
  password: "",
};

const SignUp = () => {
  const navigate = useNavigate();
  const {
    values: { displayName, email, password },
    errors,
    isLoading,
    handleChange,
    handleSubmit,
  } = useFormController({
    initialValues,
    validate: formValidate.signInValidation,
    onSubmit: (e: unknown = {}) => {
      const newValue = JSON.stringify(e);
      localStorage.setItem("pretest", newValue);
      navigate("/");
    },
  });

  console.log(errors);

  return (
    <Box component="form" noValidate onSubmit={handleSubmit} width="500px">
      <Stack spacing={3}>
        <TextField
          sx={textStyle}
          fullWidth
          placeholder="이름을 입력해주세요."
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          error={!!errors.displayName}
          helperText={errors.displayName}
        />
        <TextField
          sx={textStyle}
          fullWidth
          placeholder="이메일을 입력해주세요."
          type="text"
          name="email"
          value={email}
          onChange={handleChange}
          error={!!errors.email}
          helperText={errors.email}
        />
        <TextField
          sx={textStyle}
          fullWidth
          placeholder="비밀번호를 입력해주세요."
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          error={!!errors.password}
          helperText={errors.password}
        />

        <Button type="submit" variant="contained">
          회원가입
        </Button>
      </Stack>
    </Box>
  );
};

export default SignUp;

const textStyle = {
  height: "80px",
};
