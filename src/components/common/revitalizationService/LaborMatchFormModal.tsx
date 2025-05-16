import { useState } from "react";
import { LaborMatchPostPayloadType } from "@/types/local";
import {
  Flex,
  Input,
  Text,
  ThemeButton,
  ThemeTextArea,
} from "@flowwwkr/design-system-tailwind";
import { postLaborMatch } from "@/service/local/laborMatch.api";

interface Props {
  onClose: () => void;
}

const LaborMatchFormModal = ({ onClose }: Props) => {
  const [form, setForm] = useState<LaborMatchPostPayloadType>({
    title: "",
    contents: "",
    nation: "",
    province: "",
    city: "",
    photos: [], // 추후 이미지 업로드 기능 연결
  });

  const handleChange = (field: keyof typeof form, value: string) => {
    setForm({ ...form, [field]: value });
  };

  const handleSubmit = async () => {
    try {
      await postLaborMatch(form);
      alert("Recruitment post registration completed");
      onClose();
    } catch {
      alert("Registration failed");
    }
  };

  return (
    <Flex
      position="fixed"
      top="t-0"
      left="l-0"
      width="w-full"
      height="h-full"
      shadow="shd-gray"
      alignItems="ai-center"
      justifyContent="jc-center"
      zIndex="z-1001"
    >
      <Flex
        width="w-[600px]"
        padding="p-2"
        color="c-primary-sf"
        direction="flex-col"
        borderRadius="rad-1"
        gap="g-1"
        borderStyle="bs-solid"
        borderColor="bc-primary-sf-04"
        borderWidth="bw-0.125"
      >
        <Text fontSize="fs-2" fontWeight="fw-700">
          Register a recruitment post
        </Text>
        <Input
          placeholder="title"
          value={form.title}
          onChange={(e) => handleChange("title", e.target.value)}
        />
        <ThemeTextArea
          placeholder="contents"
          value={form.contents}
          onChange={(e) => handleChange("contents", e)}
        />
        <Input
          placeholder="nation"
          value={form.nation}
          onChange={(e) => handleChange("nation", e.target.value)}
        />
        <Input
          placeholder="province"
          value={form.province}
          onChange={(e) => handleChange("province", e.target.value)}
        />
        <Input
          placeholder="city"
          value={form.city}
          onChange={(e) => handleChange("city", e.target.value)}
        />
        <Flex justifyContent="jc-end" gap="g-1">
          <ThemeButton
            onClick={onClose}
            buttonStyle={{
              color: "c-primary-sf-04",
              size: "sz-2",
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
            Close
          </ThemeButton>
          <ThemeButton
            buttonStyle={{
              color: "c-primary-sf-04",
              size: "sz-2",
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
            onClick={handleSubmit}
          >
            Register
          </ThemeButton>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default LaborMatchFormModal;
