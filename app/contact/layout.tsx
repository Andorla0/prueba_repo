
export default function ContactLayout({children}: {children: React.ReactNode;})
{
  return (
    <div>
      <h1>Hello Root Layout Contact</h1>
      {children}
    </div>
  );
}