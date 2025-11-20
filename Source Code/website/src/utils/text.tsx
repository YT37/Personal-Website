export const parseText = (text: string) => {
  if (!text) return "";
  return text.split("**").map((part, index) => {
    if (index % 2 === 1) {
      return (
        <span key={index} className="text-neon-accent font-semibold">
          {part}
        </span>
      );
    }
    return part;
  });
};
