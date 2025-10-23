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
