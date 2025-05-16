import { motion } from "framer-motion";
import { Footprints } from "lucide-react";
import { Flex, Text } from "@flowwwkr/design-system-tailwind";
const SlowPrintLoading = () => {
  return (
    <Flex
      width="w-full"
      height="h-full"
      justifyContent="jc-center"
      alignItems="ai-center"
      direction="flex-col"
      gap="g-4"
    >
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
      >
        <Footprints size={64} strokeWidth={2.5} />
      </motion.div>

      <Text
        fontSize="fs-2"
        fontWeight="fw-500"
        color="c-primary-sf-03"
        className="text-center"
      >
        We make revolution
      </Text>
    </Flex>
  );
};

export default SlowPrintLoading;
