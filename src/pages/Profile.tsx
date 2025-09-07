import { useAuth } from "../context/AuthContext";
import Loading from "./Loading";
import SignOutButton from "@/components/SignOutButton";

export default function ProfilePage() {
  const { profile, loading } = useAuth();

  if (loading) {
    return <div className="p-6"><Loading /></div>;
  }

  if (!profile) {
    return (
      <div className="flex min-h-screen min-w-screen flex-col items-center justify-center bg-gray-50 p-6">
        <p className="text-2xl font-semibold text-gray-900 mt-8 transition-opacity duration-500 ease-in-out">
          No profile found. Please sign in.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen min-w-screen bg-gray-50 py-12 px-6">
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="bg-white rounded-2xl shadow p-6 flex items-center space-x-6">
          {profile.photoURL ? (
            <img
              src={profile.photoURL}
              alt="Profile"
              className="w-20 h-20 rounded-full shadow-sm"
            />
          ) : (
            <div className="w-20 h-20 rounded-full bg-gray-200" />
          )}
          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-gray-900">
              {profile.displayName ?? "Unnamed User"}
            </h2>
            <p className="text-gray-600">{profile.email}</p>
          </div>
          <SignOutButton />
        </div>

        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-lg font-semibold text-gray-900">
            Connected Accounts
          </h2>
          <div className="mt-4 grid gap-3">
            {profile.providerData.map((provider) => (
              <div
                key={provider.providerId}
                className="flex items-center justify-between rounded-xl border border-gray-200 px-4 py-3 hover:bg-gray-50"
              >
                <div>
                  <p className="text-sm font-medium text-gray-800">
                    {provider.providerId}
                  </p>
                  <p className="text-xs text-gray-500">{provider.email}</p>
                </div>
                {provider.photoURL && (
                  <img
                    src={provider.photoURL}
                    alt={provider.providerId}
                    className="w-8 h-8 rounded-full"
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-lg font-semibold text-gray-900">Settings</h2>
          <p className="mt-2 text-sm text-gray-600">
            More options coming soon — calendar integration, notifications, etc.
          </p>
        </div>
      </div>
    </div>
  );
}
