import Nav from "./components/Nav";
import "./globals.css";
import { Geologica } from "next/font/google";

const geologica = Geologica({ subsets: ["latin"] });

export const metadata = {
	title: "Expo Stack",
	description: "The landing page for Create Expo Stack",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body
				className={`bg-gradient-to-b from-red-400 via-[#fb9300] to-yellow-300 min-h-screen ${geologica.className}`}
			>
				<Nav />
				{children}
			</body>
		</html>
	);
}
