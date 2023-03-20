import { gql, useMutation } from "@apollo/client";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import AuthLayout from "../components/auth/AuthLayout";
import BottomBox from "../components/auth/BottomBox";
import Button from "../components/auth/Button";
import FormBox from "../components/auth/FormBox";
import FormError from "../components/auth/FormError";
import Input from "../components/auth/Input";
import { FatLink } from "../components/shared";
import routes from "../routes";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Subtitle = styled(FatLink)`
  font-size: 16px;
  text-align: center;
  margin-top: 10px;
`;

const CREATE_ACCOUNT_MUTATION = gql`
  mutation createAccount(
    $firstName: String!
    $lastName: String
    $username: String!
    $email: String!
    $password: String!
  ) {
    createAccount(
      firstName: $firstName
      lastName: $lastName
      username: $username
      email: $email
      password: $password
    ) {
      ok
      error
    }
  }
`;

export const SignUp = () => {
  const history = useHistory();
  const onCompleted = (data) => {
    const { username, password } = getValues();
    const {
      createAccount: { ok, error },
    } = data;

    if (!ok) {
      return;
    }

    history.push(routes.home, {
      message: "회원가입을 완료했습니다. 로그인 해주세요.",
      username,
      password,
    });
  };
  const [createAccount, { loading }] = useMutation(CREATE_ACCOUNT_MUTATION, {
    onCompleted,
  });
  const { register, handleSubmit, formState, getValues } = useForm({
    mode: "onChange",
  });

  const onSubmitValid = (data) => {
    if (loading) {
      return;
    }
    createAccount({
      variables: {
        ...data,
      },
    });
    console.log(data);
  };
  return (
    <AuthLayout>
      <Helmet>
        <title>Sign-Up | Instaclone</title>
      </Helmet>
      <FormBox>
        <HeaderContainer>
          <FontAwesomeIcon icon={faInstagram} size="3x" />
          <Subtitle>
            Sign up to see photos and videos from your friends.
          </Subtitle>
        </HeaderContainer>
        <form onSubmit={handleSubmit(onSubmitValid)}>
          <Input
            {...register("firstName", {
              required: "firstName은 필수 입력 사항입니다.",
            })}
            type="text"
            name="firstName"
            placeholder="First Name"
          />
          <FormError message={formState.errors?.firstName?.message} />
          <Input
            {...register("lastName")}
            type="text"
            name="lastName"
            placeholder="Last Name"
          />
          <Input
            {...register("username", {
              required: "username은 필수 입력 사항입니다.",
            })}
            type="text"
            name="username"
            placeholder="Username"
          />
          <FormError message={formState.errors?.username?.message} />
          <Input
            {...register("email", {
              required: "email은 필수 입력 사항입니다.",
            })}
            type="text"
            name="email"
            placeholder="Email"
          />
          <FormError message={formState.errors?.email?.message} />
          <Input
            {...register("password", {
              required: "password는 필수 입력 사항입니다.",
            })}
            type="password"
            name="password"
            placeholder="Password"
          />
          <FormError message={formState.errors?.password?.message} />
          <Button
            type="submit"
            value={loading ? "Loading..." : "Sign Up"}
            disabled={!formState.isValid || loading}
          />
        </form>
      </FormBox>
      <BottomBox cta="Have an account?" linkText="Log in" link={routes.home} />
    </AuthLayout>
  );
};

export default SignUp;
