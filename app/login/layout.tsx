
export default function LoginLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <div className=" flex w-full h-[100vh] justify-center items-center">
      {children}
    </div>
  );
}