import type { Metadata } from 'next'
import './globals.css'
import localFont from 'next/font/local'

const lineSeedFont = localFont({
  src: [
    {
      path: '../fonts/line-seed/LINESeedJP_OTF_Rg.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/line-seed/LINESeedJP_OTF_Th.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../fonts/line-seed/LINESeedJP_OTF_Bd.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../fonts/line-seed/LINESeedJP_OTF_Eb.woff2',
      weight: '800',
      style: 'normal',
    },
  ],
})

export const metadata: Metadata = {
  title: 'Kan Ninomiya | 二宮 貫',
  description:
    '18歳です。広島にいます。写真と音とパソコンが好きです。 株式会社FP16で代表取締役社長兼COOやってます。 ITとAIの会社です。バクノビtoCサービスを作ってます。',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" className={`${lineSeedFont.className}`}>
      <body className={'bg-black'}>{children}</body>
    </html>
  )
}
