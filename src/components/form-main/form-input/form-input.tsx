interface FormInputProps {
  type: string;
  name: string;
  placeholder: string;
  labelName: string;
}

export default function FormInput({
  name,
  type,
  placeholder,
  labelName,
}: FormInputProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="font-bold text-xs">
        {labelName}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="text-sm p-1"
      />
    </div>
  );
}
