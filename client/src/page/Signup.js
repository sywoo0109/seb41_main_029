import styled from "styled-components";
import { useForm, FormProvider } from "react-hook-form";
import { useRef } from "react";
import Input from "../component/Input";
import AlertWarning from "../component/AlertWarning";
import { MainBtn } from "../component/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

let SignupBackground = styled.div`
  margin: 120px 16px 0 16px;
  width: 316px;
  background-color: ${({ theme }) => theme.colors.container};
  border-radius: 10px;
  align-items: center;
`;

const InputLayout = styled.div`
  margin-top: 30px;
  margin-left: 35px;
`;

const LabelLayout = styled.div`
  margin-top: 12px;
`;

let Title = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.fs24};
`;

let InputForm = styled.div``;
let InputBox = styled.div``;
let SignupBtn = styled.button``;

let BtnLayout = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4px;
`;

const InputContainer = styled.div`
  margin-top: 4px;
`;

// ---------------SocialLogin------------------------

let SocialLogin = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4px;
  margin-bottom: 4px;
`;
let SocialLoginLogo = styled.img`
  width: 40px;
  height: 40px;
  margin: 20px;
`;

export default function Signup() {
  const methods = useForm();
  const getValues = methods?.getValues;
  const password = useRef();

  const navigate = useNavigate();

  const idValidation = {
    required: "아이디를 입력해주세요.",
    minLength: {
      value: 4,
      message: "최소 4자 이상의 아이디를 입력해주세요.",
    },
    maxLength: {
      value: 12,
      message: "최대 12자 이하의 아이디를 입력해주세요.",
    },
  };

  const nicknameValidation = {
    required: "닉네임을 입력해주세요.",
    maxLength: {
      value: 8,
      message: "최대 8자 이하의 닉네임을 입력해주세요.",
    },
  };

  const pwdValidation = {
    required: "비밀번호를 입력해주세요.",
    pattern: {
      value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/,
      message: "8자리이상, 숫자,문자,특수문자가 들어가야됩니다.",
    },
  };
  const confirmPwdValidation = {
    required: "비밀번호를 입력해주세요.",
    validate: {
      check: (val) => {
        if (getValues("password") !== val) {
          return "비밀번호가 일치하지 않습니다.";
        }
      },
    },
  };

  const error = methods?.formState?.errors;

  // 회원가입 요청
  // 버튼을 누르면 validation이 완료된 후에 실행되서 각 필드를 다시 확인안해도 됨
  const onSubmit = (data) => {
    // console.log(data);
    axios
      .post(
        "http://ec2-13-209-237-254.ap-northeast-2.compute.amazonaws.com:8080/users/signup",
        data,
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((res) => {
        console.log(res.data);
        navigate("/login");
      })
      .catch((err) => {
        console.log(err.data);
      });
    // if (res?.status !== 200) {
    //   alert("중복된 아이디입니다.");
    //   return setisAuthorized(false);
    // } else {
    //   // console.log(res?.data?.body?.token?.userId);
    //   const userId1 = res?.data?.body?.token?.userId;
    //   // console.log(userId1);
    //   localStorage.setItem("userId", JSON.stringify(userId1));
    //   const token = res.data?.body?.token?.refreshToken;
    //   cookie.set("token", token);
    //   // dispatch(setUser({ token, userId1 }));
    //   navigate("/");
    // }
    // };
  };

  // 아이디 중복 체크
  // 회원검색 get 요청해서 id 확인 후 input 밑에 에러문구 띄우기
  // 이것도 react-hook-form으로 가능??

  return (
    <>
      <LoginLayout>
        <SignupBackground>
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
              <InputLayout>
                <LabelLayout>
                  <label>아이디</label>
                </LabelLayout>
                <InputContainer>
                  <Input
                    id="id"
                    width="15rem"
                    height="40px"
                    fieldName="userId"
                    validation={idValidation}
                    error={error.id}
                  />
                  {error?.id && <AlertWarning text={error.id?.message} />}
                </InputContainer>
                <LabelLayout>
                  <label>닉네임</label>
                </LabelLayout>
                <InputContainer>
                  <Input
                    id="id"
                    width="15rem"
                    height="40px"
                    fieldName="username"
                    validation={nicknameValidation}
                    error={error.nickname}
                  />
                  {error?.nickname && (
                    <AlertWarning text={error.nickname?.message} />
                  )}
                </InputContainer>
                <LabelLayout>
                  <label>비밀번호</label>
                </LabelLayout>
                <InputContainer>
                  <Input
                    type="password"
                    width="15rem"
                    height="40px"
                    fieldName="password"
                    validation={pwdValidation}
                    error={error.password}
                  />
                  {error?.password && (
                    <AlertWarning text={error.password?.message} />
                  )}
                </InputContainer>
                {/* <LabelLayout>
                  <label>비밀번호 확인</label>
                </LabelLayout> */}
                {/* <InputContainer> */}
                {/* <Input
                    type="password"
                    width="15rem"
                    height="40px"
                    fieldName="confirmPassword"
                    validation={confirmPwdValidation}
                    error={error.confirmPassword}
                  /> */}
                {/* {error?.confirmPassword && (
                    <AlertWarning text={error.confirmPassword?.message} />
                  )} */}
                {/* </InputContainer> */}
              </InputLayout>
              <BtnLayout>
                <MainBtn
                  type="submit"
                  text={"회원 가입"}
                  width="210px"
                  height="40px"
                />
                {/* 폰트사이즈 16으로 */}
              </BtnLayout>
            </form>
          </FormProvider>
          <SocialLogin>
            <SocialLoginLogo
              src={process.env.PUBLIC_URL + "/image/google.svg"}
              alt=""
            />
            <SocialLoginLogo
              src={process.env.PUBLIC_URL + "/image/naver.svg"}
              alt=""
            />
            <SocialLoginLogo
              src={process.env.PUBLIC_URL + "/image/cacao.svg"}
              alt=""
            />
          </SocialLogin>
        </SignupBackground>
      </LoginLayout>
    </>
  );
}
