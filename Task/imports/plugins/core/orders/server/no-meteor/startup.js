import sendOrderEmail from "./util/sendOrderEmail";

/**
 * @summary Called on startup
 * @param {Object} context Startup context
 * @param {Object} context.collections Map of MongoDB collections
 * @returns {undefined}
 */
export default function startup(context) {
  const { appEvents } = context;

  appEvents.on("afterOrderCreate", ({ order }) => sendOrderEmail(context, order));
}
