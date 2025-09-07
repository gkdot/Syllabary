import { Badge } from "./badge";

export default function ShadowBadge({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Badge
      className="px-6 py-3 rounded-full text-xs text-gray-600 bg-white shadow-md mb-4"
      variant="secondary"
    >
      {children}
    </Badge>
  );
}
