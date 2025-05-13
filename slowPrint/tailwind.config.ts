import type { Config } from "tailwindcss";
import { wrapFTConfig } from "@flowwwkr/design-system-tailwind";

const config: Config = wrapFTConfig({
  theme: {
    colors: {
      "primary-sf": {
        light: {
          surface: "#F9F6F0",
          object: "#1E87F2",
        },
        dark: {
          surface: "#1E87F2",
          object: "#EEF9FF",
        },
      },
      "primary-sf-00": {
        light: {
          surface: "#FFFFFF",
          object: "#34A5FD",
        },
        dark: {
          surface: "#000000",
          object: "#f0fee7",
        },
      },
      "primary-sf-01": {
        light: {
          surface: "#6B8E23",
          object: "#1E87F2",
        },
        dark: {
          surface: "#1E87F2",
          object: "#DAF1FF",
        },
      },
      "primary-sf-02": {
        light: {
          surface: "#D2691E",
          object: "#1E87F2",
        },
        dark: {
          surface: "#1E87F2",
          object: "#BDE7FF",
        },
      },
      "primary-sf-03": {
        light: {
          surface: "#3E3E3E",
          object: "#1E87F2",
        },
        dark: {
          surface: "#1E87F2",
          object: "#8FDAFF",
        },
      },
      "primary-sf-04": {
        light: {
          surface: "#2E5E4E",
          object: "#1E87F2",
        },
        dark: {
          surface: "#1E87F2",
          object: "#5BC2FF",
        },
      },
      "primary-mid": {
        light: {
          surface: "#34A5FD",
          object: "#FFFFFF",
        },
        dark: {
          surface: "#FFFFFF",
          object: "#34A5FD",
        },
      },
      "primary-obj": {
        light: {
          surface: "#1E87F2",
          object: "#f0fee7",
        },
        dark: {
          surface: "#f0fee7",
          object: "#1E87F2",
        },
      },
      "primary-obj-01": {
        light: {
          surface: "#1A76E8",
          object: "#EEF9FF",
        },
        dark: {
          surface: "#EEF9FF",
          object: "#1A76E8",
        },
      },
      "primary-obj-02": {
        light: {
          surface: "#195AB4",
          object: "#EEF9FF",
        },
        dark: {
          surface: "#EEF9FF",
          object: "#195AB4",
        },
      },
      "primary-obj-03": {
        light: {
          surface: "#1A4D8E",
          object: "#EEF9FF",
        },
        dark: {
          surface: "#EEF9FF",
          object: "#1A4D8E",
        },
      },
      "primary-obj-04": {
        light: {
          surface: "#153056",
          object: "#EEF9FF",
        },
        dark: {
          surface: "#EEF9FF",
          object: "#153056",
        },
      },
      "secondary-sf": {
        light: {
          surface: "#f0f5fe",
          object: "#3661E2",
        },
        dark: {
          surface: "#1a2451",
          object: "#689DF2",
        },
      },
      "secondary-sf-00": {
        light: {
          surface: "#FFFFFF",
          object: "#4479ED",
        },
        dark: {
          surface: "#000000",
          object: "#4479ED",
        },
      },
      "secondary-sf-01": {
        light: {
          surface: "#DDE8FC",
          object: "#3661E2",
        },
        dark: {
          surface: "#233785",
          object: "#689DF2",
        },
      },
      "secondary-sf-02": {
        light: {
          surface: "#C2D7FB",
          object: "#3661E2",
        },
        dark: {
          surface: "#253CA8",
          object: "#689DF2",
        },
      },
      "secondary-sf-03": {
        light: {
          surface: "#98BFF8",
          object: "#3661E2",
        },
        dark: {
          surface: "#2647CF",
          object: "#689DF2",
        },
      },
      "secondary-sf-04": {
        light: {
          surface: "#689DF2",
          object: "#3661E2",
        },
        dark: {
          surface: "#3661E2",
          object: "#689DF2",
        },
      },
      "secondary-mid": {
        light: {
          surface: "#4479ED",
          object: "#FFFFFF",
        },
        dark: {
          surface: "#4479ED",
          object: "#000000",
        },
      },
      "secondary-obj": {
        light: {
          surface: "#3661E2",
          object: "#F5F9F4",
        },
        dark: {
          surface: "#689DF2",
          object: "#162112",
        },
      },
      "secondary-obj-01": {
        light: {
          surface: "#2647CF",
          object: "#f0f5fe",
        },
        dark: {
          surface: "#98BFF8",
          object: "#1a2451",
        },
      },
      "secondary-obj-02": {
        light: {
          surface: "#253CA8",
          object: "#f0f5fe",
        },
        dark: {
          surface: "#253CA8",
          object: "#1a2451",
        },
      },
      "secondary-obj-03": {
        light: {
          surface: "#233785",
          object: "#f0f5fe",
        },
        dark: {
          surface: "#DDE8FC",
          object: "#1a2451",
        },
      },
      "secondary-obj-04": {
        light: {
          surface: "#1A2451",
          object: "#f0f5fe",
        },
        dark: {
          surface: "#F0F5FE",
          object: "#1a2451",
        },
      },
      "tertiary-sf": {
        light: {
          surface: "#EFFEFB",
          object: "#049D96",
        },
        dark: {
          surface: "#013132",
          object: "#36E2D4",
        },
      },
      "tertiary-sf-00": {
        light: {
          surface: "#FFFFFF",
          object: "#09C3B7",
        },
        dark: {
          surface: "#000000",
          object: "#09C3B7",
        },
      },
      "tertiary-sf-01": {
        light: {
          surface: "#C9FEF5",
          object: "#049D96",
        },
        dark: {
          surface: "#0F5250",
          object: "#36E2D4",
        },
      },
      "tertiary-sf-02": {
        light: {
          surface: "#93FCED",
          object: "#049D96",
        },
        dark: {
          surface: "#0C6361",
          object: "#36E2D4",
        },
      },
      "tertiary-sf-03": {
        light: {
          surface: "#55F3E1",
          object: "#049D96",
        },
        dark: {
          surface: "#087D79",
          object: "#36E2D4",
        },
      },
      "tertiary-sf-04": {
        light: {
          surface: "#36E2D4",
          object: "#049D96",
        },
        dark: {
          surface: "#049D96",
          object: "#36E2D4",
        },
      },
      "tertiary-mid": {
        light: {
          surface: "#09C3B7",
          object: "#ffffff",
        },
        dark: {
          surface: "#09C3B7",
          object: "#000000",
        },
      },
      "tertiary-obj": {
        light: {
          surface: "#049D96",
          object: "#fdfced",
        },
        dark: {
          surface: "#36E2D4",
          object: "#3e220a",
        },
      },
      "tertiary-obj-01": {
        light: {
          surface: "#087D79",
          object: "#fdfced",
        },
        dark: {
          surface: "#55F3E1",
          object: "#3e220a",
        },
      },
      "tertiary-obj-02": {
        light: {
          surface: "#0C6361",
          object: "#fdfced",
        },
        dark: {
          surface: "#f0e897",
          object: "#93FCED",
        },
      },
      "tertiary-obj-03": {
        light: {
          surface: "#0F5250",
          object: "#fdfced",
        },
        dark: {
          surface: "#C9FEF5",
          object: "#3e220a",
        },
      },
      "tertiary-obj-04": {
        light: {
          surface: "#013132",
          object: "#fdfced",
        },
        dark: {
          surface: "#EFFEFB",
          object: "#3e220a",
        },
      },
      "neutral-sf": {
        light: {
          surface: "#3E3E3E",
          object: "#303136",
        },
        dark: {
          surface: "#303136",
          object: "#F6F6F7",
        },
      },
      "neutral-sf-00": {
        light: {
          surface: "#FFFFFF",
          object: "#A0A5B1",
        },
        dark: {
          surface: "#000000",
          object: "#A0A5B1",
        },
      },
      "neutral-sf-01": {
        light: {
          surface: "#2E5E4E",
          object: "#303136",
        },
        dark: {
          surface: "#53555C",
          object: "#F6F6F7",
        },
      },
      "neutral-sf-02": {
        light: {
          surface: "#DFE3E6",
          object: "#303136",
        },
        dark: {
          surface: "#636670",
          object: "#F6F6F7",
        },
      },
      "neutral-sf-03": {
        light: {
          surface: "#CBD0D6",
          object: "#303136",
        },
        dark: {
          surface: "#787B8A",
          object: "#F6F6F7",
        },
      },
      "neutral-sf-04": {
        light: {
          surface: "#B6BBC3",
          object: "#303136",
        },
        dark: {
          surface: "#8C909F",
          object: "#F6F6F7",
        },
      },
      "neutral-mid": {
        light: {
          surface: "#A0A5B1",
          object: "#f6f7f6",
        },
        dark: {
          surface: "#A0A5B1",
          object: "#171c17",
        },
      },
      "neutral-obj": {
        light: {
          surface: "#303136",
          object: "#f6f7f6",
        },
        dark: {
          surface: "#F6F6F7",
          object: "#171c17",
        },
      },
      "neutral-obj-00": {
        light: {
          surface: "#000000",
          object: "#f6f7f6",
        },
        dark: {
          surface: "#FFffff",
          object: "#171c17",
        },
      },
      "neutral-obj-01": {
        light: {
          surface: "#53555C",
          object: "#F6F6F7",
        },
        dark: {
          surface: "#EEF0F1",
          object: "#303136",
        },
      },
      "neutral-obj-02": {
        light: {
          surface: "#636670",
          object: "#F6F6F7",
        },
        dark: {
          surface: "#DFE3E6",
          object: "#303136",
        },
      },
      "neutral-obj-03": {
        light: {
          surface: "#787B8A",
          object: "#F6F6F7",
        },
        dark: {
          surface: "#CBD0D6",
          object: "#303136",
        },
      },
      "neutral-obj-04": {
        light: {
          surface: "#8C909F",
          object: "#F6F6F7",
        },
        dark: {
          surface: "#B6BBC3",
          object: "#303136",
        },
      },
      "perfect-sf": {
        light: {
          surface: "#edf7ff",
          object: "#066aff",
        },
        dark: {
          surface: "#0e265d",
          object: "#48b0ff",
        },
      },
      "perfect-sf-00": {
        light: {
          surface: "#ffffff",
          object: "#1e8bff",
        },
        dark: {
          surface: "#000000",
          object: "#1e8bff",
        },
      },
      "perfect-sf-01": {
        light: {
          surface: "#d6ecff",
          object: "#066aff",
        },
        dark: {
          surface: "#0d3c9b",
          object: "#48b0ff",
        },
      },
      "perfect-sf-02": {
        light: {
          surface: "#b5dfff",
          object: "#066aff",
        },
        dark: {
          surface: "#0841c5",
          object: "#48b0ff",
        },
      },
      "perfect-sf-03": {
        light: {
          surface: "#83cdff",
          object: "#066aff",
        },
        dark: {
          surface: "#0055ff",
          object: "#48b0ff",
        },
      },
      "perfect-sf-04": {
        light: {
          surface: "#48b0ff",
          object: "#066aff",
        },
        dark: {
          surface: "#066aff",
          object: "#48b0ff",
        },
      },
      "perfect-mid": {
        light: {
          surface: "#1e8bff",
          object: "#ffffff",
        },
        dark: {
          surface: "#1e8bff",
          object: "#000000",
        },
      },
      "perfect-obj": {
        light: {
          surface: "#066aff",
          object: "#edf7ff",
        },
        dark: {
          surface: "#48b0ff",
          object: "#0e265d",
        },
      },
      // 'perfect-obj-00': {
      //   light: {
      //     surface: '#000000',
      //     object: '#edf7ff',
      //   },
      //   dark: {
      //     surface: '#ffffff',
      //     object: '#0e265d',
      //   },
      // },
      "perfect-obj-01": {
        light: {
          surface: "#0055ff",
          object: "#edf7ff",
        },
        dark: {
          surface: "#83cdff",
          object: "#0e265d",
        },
      },
      "perfect-obj-02": {
        light: {
          surface: "#0841c5",
          object: "#edf7ff",
        },
        dark: {
          surface: "#b5dfff",
          object: "#0e265d",
        },
      },
      "perfect-obj-03": {
        light: {
          surface: "#0d3c9b",
          object: "#edf7ff",
        },
        dark: {
          surface: "#d6ecff",
          object: "#0e265d",
        },
      },
      "perfect-obj-04": {
        light: {
          surface: "#0e265d",
          object: "#edf7ff",
        },
        dark: {
          surface: "#edf7ff",
          object: "#0e265d",
        },
      },
      "success-sf": {
        light: {
          surface: "#effef6",
          object: "#10a95d",
        },
        dark: {
          surface: "#03301c",
          object: "#36e28c",
        },
      },
      "success-sf-00": {
        light: {
          surface: "#ffffff",
          object: "#1bcc74",
        },
        dark: {
          surface: "#000000",
          object: "#1bcc74",
        },
      },
      "success-sf-01": {
        light: {
          surface: "#dbfdec",
          object: "#10a95d",
        },
        dark: {
          surface: "#115635",
          object: "#36e28c",
        },
      },
      "success-sf-02": {
        light: {
          surface: "#b9f9d8",
          object: "#10a95d",
        },
        dark: {
          surface: "#13683e",
          object: "#36e28c",
        },
      },
      "success-sf-03": {
        light: {
          surface: "#82f3ba",
          object: "#10a95d",
        },
        dark: {
          surface: "#11844c",
          object: "#36e28c",
        },
      },
      "success-sf-04": {
        light: {
          surface: "#36e28c",
          object: "#10a95d",
        },
        dark: {
          surface: "#10a95d",
          object: "#36e28c",
        },
      },
      "success-mid": {
        light: {
          surface: "#1bcc74",
          object: "#ffffff",
        },
        dark: {
          surface: "#1bcc74",
          object: "#000000",
        },
      },
      "success-obj": {
        light: {
          surface: "#10a95d",
          object: "#effef6",
        },
        dark: {
          surface: "#36e28c",
          object: "#03301c",
        },
      },
      // 'success-obj-00': {
      //   light: {
      //     surface: '#000000',
      //     object: '#effef6',
      //   },
      //   dark: {
      //     surface: '#ffffff',
      //     object: '#03301c',
      //   },
      // },
      "success-obj-01": {
        light: {
          surface: "#11844c",
          object: "#effef6",
        },
        dark: {
          surface: "#82f3ba",
          object: "#03301c",
        },
      },
      "success-obj-02": {
        light: {
          surface: "#13683e",
          object: "#effef6",
        },
        dark: {
          surface: "#b9f9d8",
          object: "#03301c",
        },
      },
      "success-obj-03": {
        light: {
          surface: "#115635",
          object: "#effef6",
        },
        dark: {
          surface: "#dbfdec",
          object: "#03301c",
        },
      },
      "success-obj-04": {
        light: {
          surface: "#03301c",
          object: "#effef6",
        },
        dark: {
          surface: "#effef6",
          object: "#03301c",
        },
      },
      "warning-sf": {
        light: {
          surface: "#fff8ec",
          object: "#e27900",
        },
        dark: {
          surface: "#461704",
          object: "#ffc41b",
        },
      },
      "warning-sf-00": {
        light: {
          surface: "#ffffff",
          object: "#ffa50a",
        },
        dark: {
          surface: "#000000",
          object: "#ffa50a",
        },
      },
      "warning-sf-01": {
        light: {
          surface: "#fff0d3",
          object: "#e27900",
        },
        dark: {
          surface: "#82330c",
          object: "#ffc41b",
        },
      },
      "warning-sf-02": {
        light: {
          surface: "#ffdea5",
          object: "#e27900",
        },
        dark: {
          surface: "#a13b0b",
          object: "#ffc41b",
        },
      },
      "warning-sf-03": {
        light: {
          surface: "#ffd846",
          object: "#e27900",
        },
        dark: {
          surface: "#bb5302",
          object: "#ffc41b",
        },
      },
      "warning-sf-04": {
        light: {
          surface: "#ffc41b",
          object: "#e27900",
        },
        dark: {
          surface: "#e27900",
          object: "#ffc41b",
        },
      },
      "warning-mid": {
        light: {
          surface: "#ffa50a",
          object: "#ffffff",
        },
        dark: {
          surface: "#ffa50a",
          object: "#000000",
        },
      },
      "warning-obj": {
        light: {
          surface: "#e27900",
          object: "#fff8ec",
        },
        dark: {
          surface: "#ffc41b",
          object: "#461704",
        },
      },
      // 'warning-obj-00': {
      //   light: {
      //     surface: '#000000',
      //     object: '#fff8ec',
      //   },
      //   dark: {
      //     surface: '#ffffff',
      //     object: '#461704',
      //   },
      // },
      "warning-obj-01": {
        light: {
          surface: "#bb5302",
          object: "#fff8ec",
        },
        dark: {
          surface: "#ffd846",
          object: "#461704",
        },
      },
      "warning-obj-02": {
        light: {
          surface: "#a13b0b",
          object: "#fff8ec",
        },
        dark: {
          surface: "#ffdea5",
          object: "#461704",
        },
      },
      "warning-obj-03": {
        light: {
          surface: "#82330c",
          object: "#fff8ec",
        },
        dark: {
          surface: "#fff0d3",
          object: "#461704",
        },
      },
      "warning-obj-04": {
        light: {
          surface: "#461704",
          object: "#fff8ec",
        },
        dark: {
          surface: "#fff8ec",
          object: "#461704",
        },
      },
      "error-sf": {
        light: {
          surface: "#fef2f2",
          object: "#e23636",
        },
        dark: {
          surface: "#460909",
          object: "#fa6f6f",
        },
      },
      "error-sf-00": {
        light: {
          surface: "#ffffff",
          object: "#f24141",
        },
        dark: {
          surface: "#000000",
          object: "#f24141",
        },
      },
      "error-sf-01": {
        light: {
          surface: "#fee2e2",
          object: "#e23636",
        },
        dark: {
          surface: "#811b1b",
          object: "#fa6f6f",
        },
      },
      "error-sf-02": {
        light: {
          surface: "#ffc9c9",
          object: "#e23636",
        },
        dark: {
          surface: "#9b1919",
          object: "#fa6f6f",
        },
      },
      "error-sf-03": {
        light: {
          surface: "#fea3a3",
          object: "#e23636",
        },
        dark: {
          surface: "#bc1919",
          object: "#fa6f6f",
        },
      },
      "error-sf-04": {
        light: {
          surface: "#fa6f6f",
          object: "#e23636",
        },
        dark: {
          surface: "#e23636",
          object: "#fa6f6f",
        },
      },
      "error-mid": {
        light: {
          surface: "#F24141",
          object: "#ffffff",
        },
        dark: {
          surface: "#F24141",
          object: "#000000",
        },
      },
      "error-obj": {
        light: {
          surface: "#e23636",
          object: "#fef2f2",
        },
        dark: {
          surface: "#fa6f6f",
          object: "#460909",
        },
      },
      // 'error-obj-00': {
      //   light: {
      //     surface: '#000000',
      //     object: '#fef2f2',
      //   },
      //   dark: {
      //     surface: '#ffffff',
      //     object: '#460909',
      //   },
      // },
      "error-obj-01": {
        light: {
          surface: "#bc1919",
          object: "#fef2f2",
        },
        dark: {
          surface: "#fea3a3",
          object: "#460909",
        },
      },
      "error-obj-02": {
        light: {
          surface: "#9b1919",
          object: "#fef2f2",
        },
        dark: {
          surface: "#ffc9c9",
          object: "#460909",
        },
      },
      "error-obj-03": {
        light: {
          surface: "#811b1b",
          object: "#fef2f2",
        },
        dark: {
          surface: "#fee2e2",
          object: "#460909",
        },
      },
      "error-obj-04": {
        light: {
          surface: "#460909",
          object: "#fef2f2",
        },
        dark: {
          surface: "#fef2f2",
          object: "#460909",
        },
      },
      "alert-sf": {
        light: {
          surface: "#fef2f2",
          object: "#e23636",
        },
        dark: {
          surface: "#460909",
          object: "#fa6f6f",
        },
      },
      "alert-sf-00": {
        light: {
          surface: "#ffffff",
          object: "#f24141",
        },
        dark: {
          surface: "#000000",
          object: "#f24141",
        },
      },
      "alert-sf-01": {
        light: {
          surface: "#fee2e2",
          object: "#e23636",
        },
        dark: {
          surface: "#811b1b",
          object: "#fa6f6f",
        },
      },
      "alert-sf-02": {
        light: {
          surface: "#ffc9c9",
          object: "#e23636",
        },
        dark: {
          surface: "#9b1919",
          object: "#fa6f6f",
        },
      },
      "alert-sf-03": {
        light: {
          surface: "#fea3a3",
          object: "#e23636",
        },
        dark: {
          surface: "#bc1919",
          object: "#fa6f6f",
        },
      },
      "alert-sf-04": {
        light: {
          surface: "#fa6f6f",
          object: "#e23636",
        },
        dark: {
          surface: "#e23636",
          object: "#fa6f6f",
        },
      },
      "alert-mid": {
        light: {
          surface: "#f24141",
          object: "#ffffff",
        },
        dark: {
          surface: "#f24141",
          object: "#000000",
        },
      },
      "alert-obj": {
        light: {
          surface: "#e23636",
          object: "#fef2f2",
        },
        dark: {
          surface: "#fa6f6f",
          object: "#460909",
        },
      },
      // 'alert-obj-00': {
      //   light: {
      //     surface: '#000000',
      //     object: '#fef2f2',
      //   },
      //   dark: {
      //     surface: '#ffffff',
      //     object: '#460909',
      //   },
      // },
      "alert-obj-01": {
        light: {
          surface: "#bc1919",
          object: "#fef2f2",
        },
        dark: {
          surface: "#fea3a3",
          object: "#460909",
        },
      },
      "alert-obj-02": {
        light: {
          surface: "#9b1919",
          object: "#fef2f2",
        },
        dark: {
          surface: "#ffc9c9",
          object: "#460909",
        },
      },
      "alert-obj-03": {
        light: {
          surface: "#811b1b",
          object: "#fef2f2",
        },
        dark: {
          surface: "#fee2e2",
          object: "#460909",
        },
      },
      "alert-obj-04": {
        light: {
          surface: "#460909",
          object: "#fef2f2",
        },
        dark: {
          surface: "#fef2f2",
          object: "#460909",
        },
      },
    },
  },
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
});
export default config;
