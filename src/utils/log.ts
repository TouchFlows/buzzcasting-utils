import { CSS } from "../enums";
const blob = new Blob(
  [
    `const LOG_LEVELS = new Set([1,2,3,4])
		self.onmessage = function(e) {
  switch(e.data.action){
		case 'add':
			LOG_LEVELS.add(e.data.level);
			break;
		case 'clear':
			LOG_LEVELS.clear();
			break;
		case 'delete':
			LOG_LEVELS.delete(e.data.level);
			break;
		case 'list':
			e.data.message.push([...LOG_LEVELS])
			console.log(...e.data.message);
		break;
		case 'log':
			if(LOG_LEVELS.has(e.data.level)) {
				switch (true) {
					case e.data.level > 3:
						console.debug(...e.data.message);
						break;
					case e.data.level > 2:
						console.info(...e.data.message);
						break;
					case e.data.level > 1:
						console.warn(...e.data.message);
						break;
					case e.data.level > 0:
						console.error(...e.data.message);
						break;
					default:
						console.info(...e.data.message);
				}
			}
			break;
	}
}`,
  ],
  { type: "text/javascript" }
);

const logworker = new Worker(window.URL.createObjectURL(blob), {
  name: "logger",
});

/**
 * Send Message to worker, don't block the main thread
 *
 * @param level Log Level
 *
 * @returns
 */

export const log = async (level: number | string = 0, message: any[]) => {
  logworker.postMessage({ action: "log", level, message });
};

export const logging = {
  add: (level: number | string) =>
    logworker.postMessage({ action: "add", level }),
  clear: () => logworker.postMessage({ action: "delete" }),
  delete: (level: number | string) =>
    logworker.postMessage({ action: "delete", level }),
  list: () =>
    logworker.postMessage({
      action: "list",
      message: ["%capp%c %clogging", CSS.APP, CSS.NONE, CSS.OK],
    }),
};
