import ChallengeWrapper from "./ChallengeWrapper";

const challenges = import.meta.glob<React.ComponentType>("./challenges/*.tsx", {
  eager: true,
  import: "default",
});
console.log(challenges);
function App() {
  return (
    <div>
      {Object.entries(challenges).map(([, Challenge], i) => (
        <ChallengeWrapper key={i} title={`Challenge ${i}`}>
          <Challenge />
        </ChallengeWrapper>
      ))}
    </div>
  );
}

export default App;
