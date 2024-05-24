import HomeNavbar from "@/components/navbar"

export default function AddMoviesLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <div>
      <HomeNavbar/>
      <h1>Add Movies</h1>
      {children}
    </div>
  );
}