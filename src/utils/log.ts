import { CSS } from "../enums";
const logChannel = new BroadcastChannel("logging");

/**
 * Send Message to worker, don't block the main thread
 *
 * @param level Log Level
 *
 * @returns
 */

export const log = async (level: number | string = 0, message: any[]) => {
  logChannel.postMessage({ action: "log", level, message });
};

export const logging = {
  add: (level: number | string) =>
    logChannel.postMessage({ action: "add", level }),
  clear: () => logChannel.postMessage({ action: "delete" }),
  delete: (level: number | string) =>
    logChannel.postMessage({ action: "delete", level }),
  list: () =>
    logChannel.postMessage({
      action: "list",
      message: ["%capp%c %clogging", CSS.APP, CSS.NONE, CSS.OK],
    }),
};
