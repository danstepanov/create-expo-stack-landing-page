import Nav from "./components/Nav";
import "./globals.css";
import { Geologica } from "next/font/google";

const geologica = Geologica({ subsets: ["latin"] });

export const metadata = {
	title: "Create Expo Stack",
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
				className={`bg-gradient-to-b from-gray-900 via-[#300171] to-slate-900 min-h-screen ${geologica.className}`}
			>
				<Nav />
				{children}
			</body>
		</html>
	);
}
