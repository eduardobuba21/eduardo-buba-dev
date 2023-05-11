/* ---------------------------------------------------------------------- */

const breakpoints = [600, 900, 1200, 1536];
const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

export { mq, breakpoints };
