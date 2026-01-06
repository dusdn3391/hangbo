"use client";

import { useState } from "react";
import { Music, Search, Check, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

interface Artist {
  id: string;
  name: string;
  genre: string;
  spotifyId: string;
  followers: number;
}

export default function Onboarding() {
  const router = useRouter();
  const [selectedArtists, setSelectedArtists] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Artist[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  // 추천 아티스트 (가데이터)
  const recommendedArtists: Artist[] = [
    { id: "1", name: "아이유", genre: "K-Pop", spotifyId: "3HqSLMAZ3g3d5poNaI7GOU", followers: 5200000 },
    { id: "2", name: "NewJeans", genre: "K-Pop", spotifyId: "6HvZYsbFfjnjFrWF950C9d", followers: 4800000 },
    { id: "3", name: "BTS", genre: "K-Pop", spotifyId: "3Nrfpe0tUJi4K4DXYWgMUX", followers: 78000000 },
    { id: "4", name: "블랙핑크", genre: "K-Pop", spotifyId: "41MozSoPIsD1dJM0CLPjZF", followers: 42000000 },
    { id: "5", name: "세븐틴", genre: "K-Pop", spotifyId: "7nqOGRxlXj7N2JYbgNEjYH", followers: 12000000 },
    { id: "6", name: "르세라핌", genre: "K-Pop", spotifyId: "4SpbR6yFEvexJuaBpgAU5p", followers: 3500000 },
    { id: "7", name: "스트레이 키즈", genre: "K-Pop", spotifyId: "2dIgFjalVxs4ThymZ67YCE", followers: 11000000 },
    { id: "8", name: "에스파", genre: "K-Pop", spotifyId: "6YVMFz59CuY7ngCxTxjpxE", followers: 7800000 },
    { id: "9", name: "트와이스", genre: "K-Pop", spotifyId: "7n2Ycct7Beij7Dj7meI4X0", followers: 15000000 },
    { id: "10", name: "임영웅", genre: "트로트", spotifyId: "5Vo1jsnOZr3XKCqv1vBcxS", followers: 2100000 }
  ];

  const toggleArtist = (artistId: string) => {
    if (selectedArtists.includes(artistId)) {
      setSelectedArtists(selectedArtists.filter(id => id !== artistId));
    } else {
      setSelectedArtists([...selectedArtists, artistId]);
    }
  };

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    setIsSearching(true);
    
    // API 호출 시뮬레이션
    setTimeout(() => {
      setSearchResults([
        { id: "11", name: "에픽하이", genre: "힙합", spotifyId: "1234", followers: 890000 },
        { id: "12", name: "장범준", genre: "발라드", spotifyId: "5678", followers: 650000 },
        { id: "13", name: "10cm", genre: "인디", spotifyId: "9012", followers: 1200000 }
      ]);
      setIsSearching(false);
    }, 500);
  };

 const handleComplete = () => {
  if (selectedArtists.length === 0) {
    alert("최소 1명의 아티스트를 선택해주세요!");
    return;
  }

  // ✅ 온보딩 완료 처리
  localStorage.setItem("onboardingCompleted", "true");

  // 선택한 아티스트 저장 (선택)
  localStorage.setItem(
    "selectedArtists",
    JSON.stringify(selectedArtists)
  );

  // 홈으로 이동
  router.push("/");
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
              <Music className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-xl text-gray-900">Concert Alert</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Progress & Title */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Music className="w-4 h-4" />
            <span>1/2 단계</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            좋아하는 아티스트를 선택하세요
          </h1>
          <p className="text-lg text-gray-600">
            선택한 아티스트의 한국 콘서트 소식을 가장 먼저 알려드릴게요
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-12">
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all text-lg"
                placeholder="다른 아티스트 검색..."
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all"
              >
                검색
              </button>
            </div>
          </form>
        </div>

        {/* Search Results */}
        {searchResults.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">검색 결과</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
              {searchResults.map((artist) => (
                <button
                  key={artist.id}
                  onClick={() => toggleArtist(artist.id)}
                  className={`p-6 rounded-2xl border-2 transition-all text-left relative ${
                    selectedArtists.includes(artist.id)
                      ? "border-purple-500 bg-purple-50"
                      : "border-gray-200 bg-white hover:border-purple-300"
                  }`}
                >
                  {selectedArtists.includes(artist.id) && (
                    <div className="absolute top-3 right-3 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                  )}
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl flex items-center justify-center mb-3">
                    <Music className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1">{artist.name}</h3>
                  <p className="text-sm text-gray-500">{artist.genre}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Recommended Artists */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">추천 아티스트</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {recommendedArtists.map((artist) => (
              <button
                key={artist.id}
                onClick={() => toggleArtist(artist.id)}
                className={`p-6 rounded-2xl border-2 transition-all text-left relative ${
                  selectedArtists.includes(artist.id)
                    ? "border-purple-500 bg-purple-50 shadow-lg"
                    : "border-gray-200 bg-white hover:border-purple-300 hover:shadow-md"
                }`}
              >
                {selectedArtists.includes(artist.id) && (
                  <div className="absolute top-3 right-3 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                )}
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl flex items-center justify-center mb-3">
                  <Music className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{artist.name}</h3>
                <p className="text-sm text-gray-500">{artist.genre}</p>
                <p className="text-xs text-gray-400 mt-1">
                  {(artist.followers / 1000000).toFixed(1)}M 팔로워
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Bottom Action Bar */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-4 shadow-lg">
          <div className="container mx-auto px-4 max-w-6xl flex items-center justify-between">
            <div className="text-lg font-semibold text-gray-900">
              {selectedArtists.length}명 선택됨
            </div>
            <button
              onClick={handleComplete}
              disabled={selectedArtists.length === 0}
              className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              다음
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}