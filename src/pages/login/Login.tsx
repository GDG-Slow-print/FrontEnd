import Loading from "@/components/common/Loading";
import RegisterModal from "@/components/Login/RegisterModal";
import { USER_ID } from "@/data/sessionKey";
import { postLoginInfo } from "@/service/login/login.api";
import {
  Flex,
  Image,
  Text,
  Button,
  Input,
  IconCheck,
} from "@flowwwkr/design-system-tailwind";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [idValue, setIdValue] = useState<string | undefined>(undefined);
  const [passwordValue, setPasswordValue] = useState<string | undefined>(
    undefined
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleIdInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIdValue(e.target.value);
  };

  const handlePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(e.target.value);
  };

  const handleLogin = async () => {
    // 로그인 API 전송!
    if (idValue === "" || passwordValue === "") {
      alert("Please fill in all fields");
      return;
    }

    const payload = {
      email: idValue ?? "",
      password: passwordValue ?? "",
    };
    try {
      await postLoginInfo(payload);
      alert("Successfully Login!");

      sessionStorage.setItem(USER_ID, JSON.stringify(idValue));

      setIsLoading(true);
      setTimeout(() => {
        navigate("/home");
        setIsLoading(false);
      }, 1000);
    } catch (E) {
      alert("failed Login");
      console.log(E);
    }
  };

  const goToResetPasswordPage = () => {
    setIsLoading(true);
    setTimeout(() => {
      navigate("/resetPassword");
      setIsLoading(false);
    }, 1000);
  };

  const handleRegisterModal = () => {
    setIsModalOpen(true);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Flex
      direction="flex-col"
      height="h-full"
      width="w-full"
      justifyContent="jc-center"
      alignItems="ai-center"
    >
      <Image
        alt="background"
        src="/imgs/natureBackgroundImg.jpg"
        width="w-full"
        height="h-full"
        zIndex="-z-1"
        position="fixed"
        top="t-4.5"
        left="l-0"
        objectFit="obj-cover"
      />
      <Flex maxWidth="xw-44" height="h-56" direction="flex-col" gap="g-1">
        <Text
          color="c-primary-sf-03"
          fontFamily="ff-secondary"
          fontWeight="fw-700"
          fontSize="fs-2.5"
        >
          Login
        </Text>
        <Flex direction="flex-col" width="w-full" gap="g-2">
          <Flex
            color="c-primary-sf"
            borderRadius="rad-0.75"
            borderWidth="bw-0.125"
            borderColor="bc-primary-sf-03"
            width="w-full"
            height="h-[54px]"
          >
            <Input
              color="c-primary-sf-03"
              width="w-90%"
              noDefaultStyle
              value={idValue}
              onChange={handleIdInput}
              type="text"
              placeholder="Enter your ID(email)"
              placeholderStyle={{
                color: "placeholder:c-[#9ca3af]",
                fontWeight: "placeholder:fw-600",
                fontSize: "placeholder:fs-1.25",
              }}
            ></Input>
          </Flex>
          <Flex
            color="c-primary-sf"
            borderRadius="rad-0.75"
            borderWidth="bw-0.125"
            borderColor="bc-primary-sf-03"
            width="w-full"
            height="h-[54px]"
          >
            <Input
              color="c-primary-sf-03"
              width="w-90%"
              noDefaultStyle
              value={passwordValue}
              onChange={handlePasswordInput}
              type="password"
              placeholder="Enter your password"
              placeholderStyle={{
                color: "placeholder:c-[#9ca3af]",
                fontWeight: "placeholder:fw-600",
                fontSize: "placeholder:fs-1.25",
              }}
            ></Input>
          </Flex>
        </Flex>
        <Flex width="w-full" gap="g-1" justifyContent="jc-between">
          <Flex
            justifyContent="jc-start"
            direction="flex-col"
            wrap="flex-wrap"
            gap="g-1"
          >
            <Button noDefaultStyle onClick={goToResetPasswordPage}>
              <Text
                color="c-primary-sf-03"
                fontFamily="ff-primary"
                fontSize="fs-[1.3rem]"
                fontWeight="fw-600"
              >
                Forget Password?
              </Text>
            </Button>
            <Button noDefaultStyle onClick={handleRegisterModal}>
              <Text
                color="c-primary-sf-03"
                fontFamily="ff-primary"
                fontSize="fs-[1.3rem]"
                fontWeight="fw-600"
              >
                Regsiter
              </Text>
            </Button>
          </Flex>
          <Button
            noDefaultStyle
            borderRadius="rad-0.75"
            borderWidth="bw-0.125"
            borderStyle="bs-solid"
            borderColor="bc-primary-sf-03"
            color="c-primary-sf"
            hover
            onClick={handleLogin}
          >
            <IconCheck size="sz-4" color="c-primary-sf-03" />
          </Button>
        </Flex>
      </Flex>
      <RegisterModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </Flex>
  );
};
export default Login;
