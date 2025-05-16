import { ChatBotPayloadType, ChatBotResponseType } from "@/types/chatbot";
import axios from "axios";

const chatbotApi = axios.create({
  baseURL: "http://54.180.102.231:8080",
  timeout: 3000,
  headers: {
    "Content-Type": "application/json",
  },
});

// 쳇봇 응답 생성
export const postGenerateGeminiResponse = async (
  payload: ChatBotPayloadType
): Promise<ChatBotResponseType> => {
  const response = await chatbotApi.post("gemini/request", payload, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.data;
};
