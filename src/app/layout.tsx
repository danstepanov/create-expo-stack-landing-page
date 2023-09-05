import { Geologica } from "next/font/google";

import "./globals.css";
import Nav from "./components/Nav";

const geologica = Geologica({ subsets: ["latin"] });

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head>
				<meta property="og:image" content="<generated>" />
				<meta property="og:image:alt" content="The easiest way to create a React Native app with Expo" />
				<meta property="og:image:type" content="image/png" />
				<meta property="og:image:width" content="1200" />
				<meta property="og:image:height" content="630" />
			</head>
			<body
				className={`flex flex-col bg-gradient-to-b from-red-400 via-[#fb9300] to-yellow-500 ${geologica.className}`}
			>
				<Nav />
				{children}
			</body>
		</html>
	);
}
