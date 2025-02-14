interface TitleDescriptionProps {
  title: string;
  description: string;
}

export default function TitleDescription({
  title,
  description,
}: TitleDescriptionProps) {
  return (
    <div className="w-full flex flex-col items-center gap-6">
      <h1 className="font-bold text-6xl text-black text-center">{title}</h1>
      <p className="text-center text-xl max-w-2xl text-gray-500">
        {description}
      </p>
    </div>
  );
}
