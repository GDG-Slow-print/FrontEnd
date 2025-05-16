import { useEffect, useState } from "react";
import { LaborMatchPostListResponseType } from "@/types/local";
import { getLaborMatchList } from "@/service/local/laborMatch.api";
import {
  Flex,
  Text,
  Image,
  ThemeButton,
} from "@flowwwkr/design-system-tailwind";
import LaborMatchDetailModal from "@/components/common/revitalizationService/LaborMatchDetailModal";
import LaborMatchFormModal from "@/components/common/revitalizationService/LaborMatchFormModal";

const LaborMatchBoard = () => {
  const [posts, setPosts] = useState<LaborMatchPostListResponseType[]>([]);
  const [error, setError] = useState("");
  const [selectedId, setSelectedId] = useState<string | null>(null); // 상세 모달용
  const [isFormOpen, setIsFormOpen] = useState(false); // 글쓰기 모달용

  const fetchPosts = async () => {
    try {
      const result = await getLaborMatchList();
      setPosts(result);
    } catch {
      setError("Failed to load labor recruitment posts.");
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <Flex
      direction="flex-col"
      gap="g-1"
      padding="p-2"
      width="w-full"
      height="h-full"
      justifyContent="jc-start"
    >
      <Flex width="w-full" justifyContent="jc-between">
        <ThemeButton
          size="sm"
          theme="filled"
          onClick={() => setIsFormOpen(true)}
          buttonStyle={{
            color: "c-primary-sf-04",
            size: "sz-2",
            borderRadius: "rad-0.75",
          }}
          textStyle={{
            color: "c-primary-sf-00",
            fontSize: "fs-1.25",
            fontWeight: "fw-600",
            fontFamily: "ff-primary",
            lineHeight: "lh-150%",
          }}
        >
          Write
        </ThemeButton>
        <ThemeButton
          size="sm"
          theme="filled"
          onClick={() => {
            alert("Not yet");
          }}
          buttonStyle={{
            color: "c-primary-sf-04",
            size: "sz-2",
            borderRadius: "rad-0.75",
          }}
          textStyle={{
            color: "c-primary-sf-00",
            fontSize: "fs-1.25",
            fontWeight: "fw-600",
            fontFamily: "ff-primary",
            lineHeight: "lh-150%",
          }}
        >
          Filter
        </ThemeButton>
      </Flex>
      <Flex direction="flex-col" alignItems="ai-center" width="w-full">
        <Text fontSize="fs-2" fontWeight="fw-700" color="c-primary-sf-03">
          🧤 Help Wanted
        </Text>
      </Flex>

      {error && (
        <Text color="c-error-mid" fontSize="fs-1.25">
          {error}
        </Text>
      )}

      {posts.map((post) => (
        <Flex
          key={post.recruitmentId}
          direction="flex-col"
          padding="p-1"
          borderRadius="rad-1"
          color="c-primary-sf-01"
          shadow="shd-gray"
          gap="g-0.5"
        >
          <Text fontWeight="fw-600" fontSize="fs-1.5">
            {post.title}
          </Text>
          <Text fontSize="fs-1.25" color="c-primary-sf-03">
            {post.city}, {post.province}, {post.nation}
          </Text>
          <Text fontSize="fs-1.25">{post.contents}</Text>
          <Image
            src={post.mainPhoto}
            alt="main"
            width="w-full"
            height="h-[180px]"
            objectFit="obj-cover"
            borderRadius="rad-0.75"
          />
          <Flex justifyContent="jc-end">
            <ThemeButton
              theme="outlined"
              size="sm"
              onClick={() => setSelectedId(post.recruitmentId)}
              buttonStyle={{
                color: "c-primary-sf-04",
                size: "sz-2",
                borderRadius: "rad-0.75",
              }}
              textStyle={{
                color: "c-primary-sf-00",
                fontSize: "fs-1.25",
                fontWeight: "fw-600",
                fontFamily: "ff-primary",
                lineHeight: "lh-150%",
              }}
            >
              View details
            </ThemeButton>
          </Flex>
        </Flex>
      ))}

      {selectedId && (
        <LaborMatchDetailModal
          recruitmentId={selectedId}
          onClose={() => setSelectedId(null)}
        />
      )}

      {isFormOpen && (
        <LaborMatchFormModal
          onClose={() => {
            setIsFormOpen(false);
            fetchPosts(); // 글 등록 후 리스트 새로고침
          }}
        />
      )}
    </Flex>
  );
};

export default LaborMatchBoard;
