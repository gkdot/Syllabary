interface ErrorPageProps {
  status?: number;
}

const errorMessages: Record<number, { title: string; message: string }> = {
  401: {
    title: "Unauthorized",
    message: "You must be signed in to access this page.",
  },
  403: {
    title: "Forbidden",
    message: "You don't have permission to view this page.",
  },
  404: {
    title: "Page Not Found",
    message: "The page you’re looking for doesn’t exist.",
  },
  500: {
    title: "Server Error",
    message: "Something went wrong on our end. Please try again later.",
  },
};

export default function ErrorPage({ status }: ErrorPageProps) {
  const { title, message } =
    (status && errorMessages[status]) || {
      title: "System Maintenance",
      message: "The system is temporarily unavailable. Please check back soon.",
    };

  return (
    <div className="flex min-h-screen min-w-screen flex-col items-center justify-center bg-gray-50 p-8">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">{status ?? "503"}</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-2">{title}</h2>
      <p className="text-gray-500 mb-6 text-center max-w-md">{message}</p>
      <a
        href="/"
        className="rounded-lg bg-blue-600 px-4 py-2 text-white shadow hover:bg-blue-700 transition"
      >
        Go Home
      </a>
    </div>
  );
}
