interface NotificationProps {
  children: string;
}

export default function Notification({ children }: NotificationProps) {
  return (
    <span className="text-xs text-gray-500 max-[458px]:text-[0.625rem]">
      {children}
    </span>
  );
}
