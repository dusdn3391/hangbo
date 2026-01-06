import { Search, Bell, Calendar } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: Search,
      title: "아티스트 검색",
      description: "Spotify 기반으로 원하는 아티스트를 쉽게 찾을 수 있어요",
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600"
    },
    {
      icon: Bell,
      title: "실시간 알림",
      description: "새로운 공연이 등록되면 즉시 이메일과 Slack으로 알려드려요",
      bgColor: "bg-pink-100",
      iconColor: "text-pink-600"
    },
    {
      icon: Calendar,
      title: "일정 관리",
      description: "한 곳에서 모든 콘서트 일정을 확인하고 관리하세요",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600"
    }
  ];

  return (
    <div className="grid md:grid-cols-3 gap-8 mt-24 max-w-5xl mx-auto">
      {features.map((feature, index) => {
        const Icon = feature.icon;
        return (
          <div key={index} className="bg-white p-8 rounded-2xl shadow-lg text-center">
            <div className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
              <Icon className={`w-8 h-8 ${feature.iconColor}`} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        );
      })}
    </div>
  );
}
