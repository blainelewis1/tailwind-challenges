import { PropsWithChildren } from "react";

const ChallengeWrapper: React.FC<
  PropsWithChildren<{
    title: string;
  }>
> = ({ title, children }) => {
  return (
    <div className="mt-8">
      <h2 className="pl-8 text-4xl font-bold">{title}</h2>
      <div className="h-screen w-screen">{children}</div>
    </div>
  );
};

export default ChallengeWrapper;
