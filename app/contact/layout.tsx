
import HomeNavbar from "@/components/navbar"

export default function ContactLayout({children}: {children: React.ReactNode;})
{
  return (
    <div className="flex flex-col">
      <HomeNavbar/>
      {children}
    </div>
  );
}