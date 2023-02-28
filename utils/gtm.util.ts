import type { UIEventObject } from "~~/types/gtm.type";

const pushUIEvent = ({
  eventCategory,
  eventAction,
  eventLabel,
  eventNonInteraction = false,
}: UIEventObject): void => {
  if (process.server) return;
  window?.dataLayer?.push({
    event: "ui",
    eventCategory,
    eventAction,
    eventLabel,
    eventNonInteraction,
  });
};

const pushVirtualPageViewEvent = (path: string): void => {
  if (process.server) return;
  window?.dataLayer?.push({
    event: "vpv.Event",
    eventCategory: "Virtual PageView",
    eventAction: "Virtual PageView",
    eventLabel: path,
    eventValue: 0,
    eventNonInteraction: false,
  });
};

export default {
  pushUIEvent,
  pushVirtualPageViewEvent,
};
