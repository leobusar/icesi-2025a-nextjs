import { NavBar } from "@/components/nav-bar/NavBar";

export const metadata = {
 title: 'Velas Generales',
 description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, error! Provident dicta voluptatem, accusantium placeat perspiciatis voluptatum ratione voluptas consectetur maxime quam quis? Dolores voluptatibus veniam natus, nemo veritatis voluptatum',
};
export default function MainLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <div>
      <NavBar />
      <h1>Hello Root and MetaData</h1>
      <div>{children}</div>
    </div>
  );
}