import { AuthProvider } from "@/providers/AuthProvider";
import { UserDataProvider } from "@/providers/UserDataProvider";
import { QueryClient } from "@tanstack/react-query";
import { QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <UserDataProvider>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
      </UserDataProvider>
    </QueryClientProvider>
  );
}