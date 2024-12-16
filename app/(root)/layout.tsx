
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggenInc = { firstName: "Michael", lastName: "Kairambekov" }

  return (
    <main className="flex h-screen w-full font-inter">
        <Sidebar user={loggenInc}/>
        {children}
    </main>
  );
}
