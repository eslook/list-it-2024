/**
 * Mock next/local/font for Jest
 */
const mockNextLocalFont = (): { style: { fontFamily: string } } => ({
  style: {
    fontFamily: 'mocked',
  },
});

export default mockNextLocalFont;
