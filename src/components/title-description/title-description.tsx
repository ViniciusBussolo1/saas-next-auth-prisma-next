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
      <h1 className="max-[458px]:text-2xl max-[657px]:text-3xl max-[768px]:text-5xl font-bold text-6xl text-black text-center">
        {title}
      </h1>
      <p className="max-[458px]:text-xs max-[657px]:text-sm max-[768px]:text-lg text-center text-xl max-w-2xl text-gray-500">
        {description}
      </p>
    </div>
  );
}
