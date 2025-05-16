import { postSignUpInfo } from "@/service/login/login.api";
import {
  Modal,
  ThemeButton,
  Text,
  Input,
  Flex,
} from "@flowwwkr/design-system-tailwind";
import { useState } from "react";

interface SimpleFeedbackModalProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const RegisterModal = ({
  isModalOpen,
  setIsModalOpen,
}: SimpleFeedbackModalProps) => {
  const [idValue, setIdValue] = useState<string | undefined>(undefined);
  const [passwordValue, setPasswordValue] = useState<string | undefined>(
    undefined
  );
  const [confirmPasswordValue, setConfirmPasswordValue] = useState<
    string | undefined
  >(undefined);

  const handleIdInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIdValue(e.target.value);
  };

  const handlePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(e.target.value);
  };

  const handleConfirmPasswordInput = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPasswordValue(e.target.value);
  };

  const handleSubmitForm = async () => {
    // API 호출
    if (idValue === "" || passwordValue === "" || confirmPasswordValue === "") {
      return;
    }

    if (idValue) {
      if (idValue.length < 8 || idValue.length > 20) {
        alert(
          "Please enter a password of at least 8 characters and no more than 20 characters."
        );
      }
    }
    const payload = {
      email: idValue,
      password1: passwordValue,
      password2: confirmPasswordValue,
    };

    try {
      await postSignUpInfo(payload);
      alert("You have successfully registered");
      setIsModalOpen(false);
    } catch (E) {
      alert("failed registering");
      console.log(E);
    }
  };

  return (
    <Modal
      rootStyle={{
        zIndex: "z-1001",
      }}
      closeModal={() => {
        setIdValue(undefined);
        setPasswordValue(undefined);
        setIsModalOpen(false);
      }}
      isModalOpen={isModalOpen}
      size="sm"
      color="primary"
      placement="center"
      mainStyle={{
        maxWidth: "xw-[40rem]",
        width: "w-full",
        color: "c-neutral-sf-00",
        gap: "g-2",
        padding: "p-3",
        borderRadius: "rad-0.75",
        borderStyle: "bs-solid",
        borderWidth: "bw-0.125",
        borderColor: "bc-primary-sf-04",
        pointerEvents: "pe-auto",
      }}
      closeButtonIconStyle={{
        color: "c-primary-sf-04",
      }}
      header={
        <Text
          width="w-full"
          textAlign="ta-center"
          fontFamily="ff-primary"
          fontSize="fs-2.5"
          fontWeight="fw-700"
          lineHeight="lh-140%"
          color="c-primary-sf-03"
          lineClamp="lc-none"
        >
          Register Form
        </Text>
      }
      footer={
        <ThemeButton
          onClick={handleSubmitForm}
          buttonStyle={{
            color: "c-primary-sf-04",
            height: "h-5",
            borderRadius: "rad-0.75",
          }}
          theme="filled"
          textStyle={{
            color: "c-primary-sf-00",
            fontSize: "fs-2",
            fontWeight: "fw-600",
            fontFamily: "ff-primary",
            lineHeight: "lh-150%",
          }}
        >
          Submit
        </ThemeButton>
      }
    >
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
            value={confirmPasswordValue}
            onChange={handleConfirmPasswordInput}
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
    </Modal>
  );
};

export default RegisterModal;
