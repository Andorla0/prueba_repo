

import HomeNavbar from "@/components/navbar"

export default function HomeLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <div>
    <HomeNavbar/>
      <h1>Home</h1>
        {children}
    </div>
  );
}