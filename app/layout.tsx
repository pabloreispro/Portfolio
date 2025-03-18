import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"


const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Portifólio | Pablo Reis ",
  description: "Site de portfólio apresentando projetos de desenvolvimento de jogos e análise de dados",
  keywords: "portfólio, desenvolvimento de jogos, análise de dados, Unreal Engine, Power BI, Unity, SQL, gamedev, games",
  icons: {
    icon: '/favicon.ico'
  }, 
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  )
}



import './globals.css'