import Image from "next/image";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header className="w-full h-16 bg-slate-950 flex justify-between items-center">
        <div className="flex items-center text-xl h-16 px-6 gap-4 text-orange-500">
          <Image
            alt="Sventory Logo"
            src="/sventory-logo.svg"
            width={60}
            height={60}
          />
          SVENTORY
        </div>
      </header>
      <div>
        {children}
      </div>
    </>
  );
}
