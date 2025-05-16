import Loading from "@/components/common/Loading";
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

const ResetPassword = () => {
  const [newPasswordValue, setNewPasswordValue] = useState<string | undefined>(
    undefined
  );
  const [confirmedPasswordValue, setConfirmedPasswordValue] = useState<
    string | undefined
  >(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handlePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPasswordValue(e.target.value);
  };

  const handleComparisonPasswordInput = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmedPasswordValue(e.target.value);
  };

  const handleResetPassword = () => {
    if (newPasswordValue === undefined) {
      alert("Please fill in the password field");
      return;
    }
    if (newPasswordValue?.length < 8) {
      alert("Please enter a new password of at least 8 characters");
      return;
    }
    if (newPasswordValue !== confirmedPasswordValue) {
      alert("The two passwords do not match! Try again.");
      return;
    }

    // 비밀번호 초기화 API 호출

    alert("The existing password has been successfully changed.");
    setIsLoading(true);
    setTimeout(() => {
      navigate("/");
      setIsLoading(false);
    }, 1000);
  };

  const goToLoginPage = () => {
    navigate("/");
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
          Reset Password
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
              value={newPasswordValue}
              onChange={handlePasswordInput}
              type="password"
              placeholder="Enter new password"
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
              value={confirmedPasswordValue}
              onChange={handleComparisonPasswordInput}
              type="password"
              placeholder="Enter new password again"
              placeholderStyle={{
                color: "placeholder:c-[#9ca3af]",
                fontWeight: "placeholder:fw-600",
                fontSize: "placeholder:fs-1.25",
              }}
            ></Input>
          </Flex>
        </Flex>
        <Flex width="w-full" gap="g-1" justifyContent="jc-between">
          <Button noDefaultStyle onClick={goToLoginPage}>
            <Text
              color="c-primary-sf-03"
              fontFamily="ff-primary"
              fontSize="fs-[1.3rem]"
              fontWeight="fw-600"
            >
              Go Back
            </Text>
          </Button>
          <Button
            noDefaultStyle
            borderRadius="rad-0.75"
            borderWidth="bw-0.125"
            borderStyle="bs-solid"
            borderColor="bc-primary-sf-03"
            color="c-primary-sf"
            hover
            onClick={handleResetPassword}
          >
            <IconCheck size="sz-4" color="c-primary-sf-03" />
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default ResetPassword;
