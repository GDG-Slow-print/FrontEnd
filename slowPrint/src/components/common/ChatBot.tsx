import IconBot from "@/components/icons/IconRobot";
import { postGenerateGeminiResponse } from "@/service/chatBot/chatBot.api";
import {
  Flex,
  ThemeButton,
  ThemeTextArea,
} from "@flowwwkr/design-system-tailwind";
import { useState } from "react";

const ChatBot = () => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [textValue, setTextValue] = useState("");

  const toggleChatBot = () => {
    setTextValue("");
    setIsButtonClicked((prev) => !prev);
  };

  const handleTextInput = (value: string) => {
    setTextValue(value);
  };

  const sendUserMessage = async () => {
    if (textValue === "") {
      alert("Please write a message");
    }

    const payload = {
      string: textValue,
    };

    try {
      await postGenerateGeminiResponse(payload);
      alert("Successfully sending!");
    } catch (E) {
      alert("Failed sending");
      console.log(E);
    }
  };

  return isButtonClicked ? (
    <Flex
      borderRadius="rad-0.75"
      borderStyle="bs-solid"
      borderColor="bc-primary-sf-04"
      borderWidth="bw-0.125"
      width="w-24"
      height="h-24"
      direction="flex-col"
      position="fixed"
      color="c-primary-sf"
      justifyContent="jc-between"
      wrap="flex-nowrap"
      gap="g-1"
      bottom="b-3"
      right="r-3"
      shadow="shd-gray"
      zIndex="z-1001"
    >
      <div></div>
      <ThemeTextArea
        placeholder="Get recommendations for carbon reduction or local revitalization travel courses for your destination. Or ask about the culture or customs of the destination to be careful of."
        value={textValue}
        onChange={handleTextInput}
        color="primary"
        autoSize
        rootStyle={{ width: "w-90%", height: "h-90%", borderWidth: "bw-0" }}
      />
      <Flex justifyContent="jc-around" width="w-full" gap="g-1">
        <ThemeButton
          onClick={sendUserMessage}
          buttonStyle={{
            color: "c-primary-sf-04",
            size: "sz-1",
            borderRadius: "rad-0.75",
            marginY: "my-0.375",
          }}
          theme="filled"
          textStyle={{
            color: "c-primary-sf-00",
            fontSize: "fs-1.25",
            fontWeight: "fw-600",
            fontFamily: "ff-primary",
            lineHeight: "lh-150%",
          }}
        >
          Send
        </ThemeButton>
        <ThemeButton
          onClick={toggleChatBot}
          buttonStyle={{
            color: "c-primary-sf-04",
            size: "sz-1",
            borderRadius: "rad-0.75",
            marginY: "my-0.375",
          }}
          theme="filled"
          textStyle={{
            color: "c-primary-sf-00",
            fontSize: "fs-1.25",
            fontWeight: "fw-600",
            fontFamily: "ff-primary",
            lineHeight: "lh-150%",
          }}
        >
          Close
        </ThemeButton>
      </Flex>
    </Flex>
  ) : (
    <Flex position="fixed" bottom="b-3" right="r-3" opacity="oc-0.7">
      <ThemeButton
        onClick={toggleChatBot}
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
        <IconBot />
      </ThemeButton>
    </Flex>
  );
};
export default ChatBot;
