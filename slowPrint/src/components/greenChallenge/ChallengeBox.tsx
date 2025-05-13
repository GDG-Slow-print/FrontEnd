import {
  Button,
  Flex,
  IconArrow,
  IconClose,
  Image,
  Text,
} from "@flowwwkr/design-system-tailwind";
import { Share } from "lucide-react";
import { useRef, useState } from "react";

interface ChallengeBoxProps {
  kindOfChallenge:
    | "ecoSpot"
    | "ecoAccommodation"
    | "greenMove"
    | "localFood"
    | "noPlastic"
    | "trashTag";
}

const ChallengeBox = ({ kindOfChallenge = "ecoSpot" }: ChallengeBoxProps) => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [capturedFile, setCapturedFile] = useState<File | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    setIsButtonClicked((prev) => !prev);
  };

  const handleCapturedImage = () => {
    setCapturedImage(null);
  };

  const handleCapturedFile = () => {
    setCapturedFile(null);
  };

  const handleDeleteButton = () => {
    handleCapturedFile();
    handleCapturedImage();
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setCapturedImage(URL.createObjectURL(file));
      setCapturedFile(file);
    }
  };

  const shareImage = async () => {
    if (navigator.canShare() && capturedFile) {
      try {
        await navigator.share({
          title: "My Eco Challenge 📸",
          text: printOutDescOfChallenge(),
          files: [capturedFile],
        });
      } catch (err) {
        console.error("Share failed:", err);
      }
    } else {
      alert("This device does not support file sharing.");
    }
  };

  const triggerCamera = () => {
    inputRef.current?.click();
  };

  const printOutDescOfChallenge = (): string => {
    switch (kindOfChallenge) {
      case "ecoSpot":
        return "Visit a local eco-friendly site and take a photo with the scenery. → Discover and share hidden sustainable gems.";
      case "ecoAccommodation":
        return "Stay at a green-certified place and share your favorite eco feature. → Sleep sustainably, live responsibly.";
      case "greenMove":
        return "Walk, bike, or use public transport and document your eco-ride. → Travel clean, travel green.";
      case "localFood":
        return "Enjoy a meal made with local ingredients and snap a photo! → Reduce food miles and support the local economy.";
      case "noPlastic":
        return "Use reusable items like tumblers or bags—show them in action! → Say no to single-use plastics.";
      case "trashTag":
        return "Clean a natural area and show the before & after photos. → Help nature by picking up trash during your trip!";
      default:
        return "";
    }
  };
  const printOutTitleOfChallenge = (): string => {
    switch (kindOfChallenge) {
      case "ecoSpot":
        return "Eco Spot";
      case "ecoAccommodation":
        return "Eco Accommodation";
      case "greenMove":
        return "Green Move";
      case "localFood":
        return "Local Food";
      case "noPlastic":
        return "No Plastic";
      case "trashTag":
        return "TrashTag";
      default:
        return "";
    }
  };

  return (
    <>
      <input
        type="file"
        accept="image/*"
        capture="environment"
        ref={inputRef}
        onChange={handleImageChange}
        style={{ display: "none" }}
      />
      <Flex direction="flex-col" gap="g-1" justifyContent="jc-start">
        <Flex
          width="w-20"
          height="h-20"
          justifyContent="jc-center"
          alignItems="ai-center"
          overflow="ovf-hidden"
          borderRadius="rad-0.25"
          borderWidth="bw-1"
          borderStyle="bs-solid"
          borderColor="bc-primary-sf-01"
          shadow="shd-gray"
        >
          {isButtonClicked ? (
            <Flex
              size="sz-full"
              direction="flex-col"
              gap="g-1"
              justifyContent="jc-between"
            >
              {!capturedImage && (
                <Text
                  fontFamily="ff-primary"
                  fontSize="fs-1.25"
                  fontWeight="fw-400"
                  color="c-primary-sf-03"
                  lineClamp="lc-none"
                  width="w-full"
                  textAlign="ta-center"
                >
                  {printOutDescOfChallenge()}
                </Text>
              )}

              <Flex width="w-full" height="h-[80px]" borderRadius="rad-0.25">
                {capturedImage ? (
                  <Image
                    src={capturedImage}
                    objectFit="obj-contain" // ✅ 비율 유지하면서 Fit
                    size="sz-full"
                    alt="preview"
                  />
                ) : (
                  <Button
                    onClick={triggerCamera}
                    width="w-full"
                    height="h-full"
                  >
                    📷 Take a Photo
                  </Button>
                )}
              </Flex>

              <Flex
                justifyContent="jc-between"
                width="w-full"
                gap="g-2"
                padding="p-0.25"
              >
                <Button
                  noDefaultStyle
                  onClick={handleDeleteButton}
                  justifyContent="jc-center"
                  alignItems="ai-center"
                >
                  <IconClose />
                </Button>
                <Button
                  hover
                  noDefaultStyle
                  justifyContent="jc-center"
                  alignItems="ai-center"
                  onClick={shareImage}
                  disabled={!capturedFile}
                >
                  <Share />
                </Button>
              </Flex>
            </Flex>
          ) : (
            <Image
              size="sz-full"
              objectFit="obj-cover"
              alt="challengeImg"
              src={`../../../public/imgs/${kindOfChallenge}.jpg`}
            />
          )}
        </Flex>
        <Flex gap="g-1" justifyContent="jc-between" width="w-full">
          <Text
            textAlign="ta-center"
            fontFamily="ff-primary"
            fontSize="fs-1.5"
            fontWeight="fw-600"
          >
            {printOutTitleOfChallenge()}
          </Text>
          <Button noDefaultStyle onClick={handleButtonClick}>
            {isButtonClicked ? (
              <IconArrow type="left" />
            ) : (
              <IconArrow type="right" />
            )}
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export default ChallengeBox;
