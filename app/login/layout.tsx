
export default function LoginLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <div>
      <h1>Hello Root Layout Login</h1>
      {children}
    </div>
  );
}