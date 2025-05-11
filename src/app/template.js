import Background from "./particles-bg";

// load background with template to force reload the background on page switch

export default function Template({ children }) {
  return (
    <>
      <Background />
      {children}
    </>
  );
}
