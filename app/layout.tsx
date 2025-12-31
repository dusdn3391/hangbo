import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Concert Alert - 콘서트 알림 서비스",
  description:
    "좋아하는 아티스트의 콘서트 일정을 놓치지 마세요. 실시간 알림으로 티켓 오픈을 확인하세요.",
  keywords: ["콘서트", "공연", "알림", "티켓", "K-Pop"],
  openGraph: {
    title: "Concert Alert",
    description: "좋아하는 아티스트의 콘서트 알림을 받아보세요",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
