import { CARBON_MILEAGE, USER_ID } from "@/data/sessionKey";
import { postGettingCarbonMileage } from "@/service/carbon/carbon.api";
import {
  GettingCarbonMileagePayloadType,
  GettingCarbonMileageResponseType,
} from "@/types/carbon";
import {
  Flex,
  IconClose,
  ThemeButton,
  Text,
  Select,
} from "@flowwwkr/design-system-tailwind";
import { FootprintsIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const CarbonPrint = () => {
  const [isTracking, setIsTracking] = useState(false);
  const [distance, setDistance] = useState(0);
  const [positionList, setPositionList] = useState<[number, number][]>([]);
  const [transportation, setTransportation] = useState("");
  const [parsed, setParsed] = useState<GettingCarbonMileageResponseType | null>(
    null
  );

  useEffect(() => {
    const carbonMileageResultBeforeParse = localStorage.getItem(CARBON_MILEAGE);
    if (carbonMileageResultBeforeParse) {
      try {
        const parsedResult = JSON.parse(carbonMileageResultBeforeParse);
        setParsed(parsedResult);
      } catch (e) {
        alert("failed load");
      }
    }
  }, []);

  const watchIdRef = useRef<number | null>(null);

  const haversineDistance = (
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number
  ): number => {
    const R = 6371000; // 지구 반지름 (미터)
    const toRad = (value: number) => (value * Math.PI) / 180;
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // 단위: 미터
  };

  const toggleTracking = async () => {
    if (transportation === "") {
      alert("Choose Transportation");
      return;
    }
    if (!isTracking) {
      alert("Start");
      // 추적 시작
      setDistance(0);
      setPositionList([]);
      setIsTracking(true);

      if (navigator.geolocation) {
        watchIdRef.current = navigator.geolocation.watchPosition(
          (pos) => {
            const { latitude, longitude } = pos.coords;

            setPositionList((prev) => {
              if (prev.length === 0) return [[latitude, longitude]];

              const [prevLat, prevLon] = prev[prev.length - 1];
              const dist = haversineDistance(
                prevLat,
                prevLon,
                latitude,
                longitude
              );
              setDistance((d) => d + dist);
              return [...prev, [latitude, longitude]];
            });
          },
          () =>
            alert(
              "Failed to retrieve your location. Please make sure location access is allowed."
            ),
          {
            enableHighAccuracy: true,
            maximumAge: 0,
            timeout: 10000,
          }
        );
      } else {
        alert("Tracking failure");
      }
    } else {
      // 추적 종료
      setIsTracking(false);
      if (watchIdRef.current !== null) {
        navigator.geolocation.clearWatch(watchIdRef.current);
      }
      const userID = sessionStorage.getItem(USER_ID) ?? undefined;

      const payload: GettingCarbonMileagePayloadType = {
        email: userID,
        distance: Number((distance / 1000).toFixed(2)),
        transportation: transportation,
      };

      try {
        const response = await postGettingCarbonMileage(payload);
        localStorage.setItem(CARBON_MILEAGE, JSON.stringify(response));

        alert("Stop using carbon footprint! mileage paid");
      } catch {
        alert("Failed Store");
      }
    }
  };

  const transportationOptions = [
    { label: "SUBWAY", value: "subway" },
    { label: "BUS", value: "bus" },
    { label: "WALK", value: "WALK" },
    { label: "BYCYCLE", value: "bycycle" },
  ];

  return isTracking ? (
    <Flex
      position="fixed"
      bottom="b-3"
      left="l-8"
      justifyContent="jc-between"
      direction="flex-col"
      gap="g-0.25"
    >
      <Flex width="w-12" color="c-primary-sf-00" borderRadius="rad-0.75">
        <Text
          fontFamily="ff-primary"
          fontSize="fs-1"
          fontWeight="fw-500"
          color="c-primary-sf-04"
        >
          Distance: {(distance / 1000).toFixed(3)}km
        </Text>
      </Flex>
      <ThemeButton
        onClick={toggleTracking}
        buttonStyle={{
          color: "c-primary-sf-04",
          size: "sz-2",
          borderRadius: "rad-0.75",
          opacity: "oc-0.7",
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
        <IconClose />
      </ThemeButton>
    </Flex>
  ) : (
    <Flex
      position="fixed"
      bottom="b-3"
      left="l-10"
      justifyContent="jc-between"
      direction="flex-col"
      gap="g-0.25"
    >
      <Text fontFamily="ff-primary" fontSize="fs-1.25" color="c-primary-sf-03">
        Saved Carbon:{" "}
        {parsed?.savedCarbon ? parsed.savedCarbon : "Nothing to look up"}
      </Text>
      <Text fontFamily="ff-primary" fontSize="fs-1.25" color="c-primary-sf-03">
        Carbon Mileage:{" "}
        {parsed?.earnedMileage ? parsed.savedCarbon : "Nothing to look up"}
      </Text>
      <Select
        size="sm"
        required
        options={transportationOptions}
        onChange={(option) => setTransportation(option)}
        value={transportation}
        placeholder="Transportation"
        rootStyle={{
          width: "w-[217px]",
          color: "c-primary-sf",
          opacity: "oc-0.7",
          alignSelf: "as-start",
        }}
        triggerStyle={{
          paddingX: "px-1.5",
          paddingY: "py-1",
          borderRadius: "rad-0.75",
          borderStyle: "bs-solid",
          borderWidth: "bw-0.125",
          borderColor: "bc-primary-sf-01",
        }}
        triggerTextStyle={{
          color: "c-[#050505]",
          fontFamily: "ff-primary",
          fontSize: "fs-[1.3rem]",
          fontWeight: "fw-600",
          opacity: "oc-1",
        }}
        menuWrapperStyle={{
          borderRadius: "rad-0.75",
          borderStyle: "bs-solid",
          borderWidth: "bw-0.125",
          borderColor: "bc-primary-sf-01",
          color: "c-primary-sf-00",
        }}
        optionTextStyle={{
          fontFamily: "ff-primary",
          fontSize: "fs-[1.3rem]",
          fontWeight: "fw-600",
          color: "c-[#424242]",
        }}
        optionStyle={{
          borderRadius: "rad-0.75",
          color: "c-primary-sf-00",
        }}
      />
      <ThemeButton
        onClick={toggleTracking}
        buttonStyle={{
          color: "c-primary-sf-04",
          size: "sz-2",
          borderRadius: "rad-0.75",
          opacity: "oc-0.7",
          alignSelf: "as-start",
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
        <FootprintsIcon />
      </ThemeButton>
    </Flex>
  );
};

export default CarbonPrint;
