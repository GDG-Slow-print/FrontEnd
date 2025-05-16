import { useEffect, useState } from "react";
import { getPromotionMatchList } from "@/service/local/promotionMatch.api";
import { PromotionMatchPostListResponseType } from "@/types/local";
import {
  Flex,
  Text,
  Image,
  ThemeButton,
} from "@flowwwkr/design-system-tailwind";
import PromotionMatchFormModal from "@/components/common/revitalizationService/PromotionMatchFormModal";
import PromotionMatchDetailModal from "@/components/common/revitalizationService/PromotionMAtchDetailModal";

const PromotionMatchBoard = () => {
  const [posts, setPosts] = useState<PromotionMatchPostListResponseType[]>([]);
  const [error, setError] = useState("");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const fetchPosts = async () => {
    try {
      const result = await getPromotionMatchList();
      setPosts(result);
    } catch {
      setError("Failed to load promotion matching posts.");
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
          buttonStyle={{
            color: "c-primary-sf-04",
            size: "sz-2",
            borderRadius: "rad-0.75",
          }}
          theme="filled"
          textStyle={{
            color: "c-primary-sf-00",
            fontSize: "fs-1.25",
            fontWeight: "fw-600",
            fontFamily: "ff-primary",
            lineHeight: "lh-150%",
          }}
          onClick={() => setIsFormOpen(true)}
        >
          Write
        </ThemeButton>
        <ThemeButton
          size="sm"
          buttonStyle={{
            color: "c-primary-sf-04",
            size: "sz-2",
            borderRadius: "rad-0.75",
          }}
          theme="filled"
          textStyle={{
            color: "c-primary-sf-00",
            fontSize: "fs-1.25",
            fontWeight: "fw-600",
            fontFamily: "ff-primary",
            lineHeight: "lh-150%",
          }}
          onClick={() => alert("Not yet")}
        >
          Filter
        </ThemeButton>
      </Flex>

      <Flex direction="flex-col" alignItems="ai-center" width="w-full">
        <Text fontSize="fs-2" fontWeight="fw-700" color="c-primary-sf-03">
          📢 Promoter Wanted
        </Text>
      </Flex>

      {error && (
        <Text color="c-error-mid" fontSize="fs-1.25">
          {error}
        </Text>
      )}

      {posts.map((post) => (
        <Flex
          key={post.matchId}
          direction="flex-col"
          padding="p-1"
          borderRadius="rad-1"
          shadow="shd-gray"
          gap="g-0.5"
        >
          <Text fontWeight="fw-600" fontSize="fs-1.5">
            {post.title}
          </Text>
          <Text fontSize="fs-1.25" color="c-primary-sf-03">
            {post.createdAt.split("T")[0]}
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
              onClick={() => setSelectedId(post.matchId)}
            >
              View Details
            </ThemeButton>
          </Flex>
        </Flex>
      ))}

      {selectedId && (
        <PromotionMatchDetailModal
          matchId={selectedId}
          onClose={() => setSelectedId(null)}
        />
      )}

      {isFormOpen && (
        <PromotionMatchFormModal
          onClose={() => {
            setIsFormOpen(false);
            fetchPosts();
          }}
        />
      )}
    </Flex>
  );
};

export default PromotionMatchBoard;
