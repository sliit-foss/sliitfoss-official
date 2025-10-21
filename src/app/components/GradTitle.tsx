function GradTitle({ content }: { content: string }) {
  return (
    <h2 className="text-4xl font-bold mb-6">
      <span className="bg-gradient-to-r from-[#00B7FF] to-[#8C00D7] bg-clip-text text-transparent inline-block">
        {content}
      </span>
    </h2>
  );
}

export default GradTitle;
