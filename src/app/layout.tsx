import { Geologica } from "next/font/google";

import "./globals.css";
import Nav from "./components/Nav";

const geologica = Geologica({ subsets: ["latin"] });

export const metadata = {
	title: "Expo Stack",
	description: "The easiest way to create a React Native app with Expo",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body
				className={`flex flex-col bg-gradient-to-b from-red-400 via-[#fb9300] to-yellow-500 ${geologica.className}`}
			>
				<Nav />
				{children}
			</body>
		</html>
	);
}
