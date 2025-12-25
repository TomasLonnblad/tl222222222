import Sidebar from "@/components/layout/Sidebar";
import "@/app/globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import ReduxProvider from "@/components/providers/ReduxProviders";
import Navbar from "@/components/layout/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-gray-50 dark:bg-gray-900">
        <ThemeProvider>
          <ReduxProvider>
            <div className="flex min-h-screen">
              <Sidebar />
              <div className="flex-1">
                <main className="w-full min-h-screen lg:pl-80 pl-16">
                  <Navbar />
                  <div className="p-4 h-full">{children}</div>
                </main>
              </div>
            </div>
          </ReduxProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
