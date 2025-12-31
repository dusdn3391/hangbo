"use client";

import { useState } from "react";
import { Search, Plus } from "lucide-react";

interface Artist {
  id: string;
  name: string;
  image: string;
  genres: string[];
}

export default function ArtistSearch() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Artist[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Mock data - 실제로는 API 호출로 대체
  const mockArtists: Artist[] = [
    { id: "1", name: "BTS", image: "🎤", genres: ["K-Pop", "Hip Hop"] },
    { id: "2", name: "BLACKPINK", image: "🎵", genres: ["K-Pop", "Pop"] },
    { id: "3", name: "Seventeen", image: "🎤", genres: ["K-Pop", "Dance"] },
    { id: "4", name: "NewJeans", image: "🎵", genres: ["K-Pop", "Pop"] },
    { id: "5", name: "aespa", image: "🎤", genres: ["K-Pop", "Electronic"] },
    { id: "6", name: "IU", image: "🎵", genres: ["K-Pop", "Ballad"] },
  ];

  const handleSearch = (query: string) => {
    setSearchQuery(query);

    if (query.trim().length > 0) {
      // 실제로는 여기서 API 호출
      // const results = await fetch(`/api/artists/search?q=${query}`)
      const filtered = mockArtists.filter((artist) =>
        artist.name.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(filtered);
    } else {
      setSearchResults([]);
    }
  };

  const handleAddArtist = async (artist: Artist) => {
    // 실제로는 여기서 API 호출하여 DB에 저장
    // await fetch('/api/artists', { method: 'POST', body: JSON.stringify(artist) })
    console.log("Added artist:", artist);
    setSearchQuery("");
    setSearchResults([]);
    alert(`${artist.name}을(를) 추가했습니다!`);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="아티스트 이름을 검색하세요..."
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
          className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none text-lg shadow-lg"
        />
      </div>

      {searchResults.length > 0 && (
        <div className="mt-4 bg-white rounded-2xl shadow-xl p-4 max-h-96 overflow-y-auto">
          {searchResults.map((artist) => (
            <div
              key={artist.id}
              className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl cursor-pointer transition-colors"
              onClick={() => handleAddArtist(artist)}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-2xl">
                  {artist.image}
                </div>
                <div className="text-left">
                  <div className="font-semibold text-gray-900">
                    {artist.name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {artist.genres.join(", ")}
                  </div>
                </div>
              </div>
              <Plus className="w-5 h-5 text-purple-600" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
