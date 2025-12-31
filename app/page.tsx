import Link from "next/link";
import { Search, Bell, Calendar, Music, ExternalLink } from "lucide-react";
import ArtistSearch from "@/components/Search/ArtistSearch";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Bell className="w-4 h-4" />
            <span>놓치지 마세요!</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            좋아하는 아티스트의
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              콘서트 알림
            </span>
            을 받아보세요
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            한국에서 열리는 콘서트 정보를 실시간으로 받아보고,
            <br className="hidden md:block" />
            티켓 오픈을 절대 놓치지 마세요.
          </p>

          {/* Artist Search Component */}
          <ArtistSearch />

          {/* CTA Button */}
          <div className="mt-12">
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all"
            >
              <Music className="w-5 h-5" />내 아티스트 관리하기
            </Link>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mt-24 max-w-5xl mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              아티스트 검색
            </h3>
            <p className="text-gray-600">
              Spotify 기반으로 원하는 아티스트를 쉽게 찾을 수 있어요
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
            <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Bell className="w-8 h-8 text-pink-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              실시간 알림
            </h3>
            <p className="text-gray-600">
              새로운 공연이 등록되면 즉시 이메일과 Slack으로 알려드려요
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">일정 관리</h3>
            <p className="text-gray-600">
              한 곳에서 모든 콘서트 일정을 확인하고 관리하세요
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                <Music className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-gray-900">Concert Alert</span>
            </div>
            <p className="text-sm text-gray-600">
              © 2025 Concert Alert. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
