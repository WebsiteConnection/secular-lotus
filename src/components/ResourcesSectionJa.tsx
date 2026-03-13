import { BookOpen, Heart, Globe, Award } from "lucide-react";

const resources = [
  {
    title: "内在性からの究極",
    description: "法華経の尊ぶべき核心を、神秘性を伴わない形でどのように信受できるのかを解き明かします",
    icon: BookOpen,
    url: "https://drive.google.com/file/d/1DV25M01MNvVrEjAj4A9v5yoU0ESxgd1T/view?usp=sharing",
  },
  {
    title: "世俗的な祈り",
    description: "自然的な理解に根ざした瞑想的な祈り",
    icon: Heart,
    url: "https://drive.google.com/file/d/1gDc1oaHPlhOIbnTrhTV3ntTM0kd6YtpQ/view?usp=sharing",
  },
  {
    title: "「セキュラー・ブッディスト・ネットワーク」掲載記事",
    description: "セキュラー・ブッディスト・ネットワークに掲載された記事",
    icon: Globe,
    url: "https://drive.google.com/file/d/1EbT7dTw_JnYhhgHWqYkxFkElyvI42bVW/view?usp=drive_link",
  },
  {
    title: "グロマイヤー賞ノミネート",
    description: "宗教思想への貢献に対する評価",
    icon: Award,
    url: "https://drive.google.com/file/d/1K2P8tYJ8jySWwSdpJvvBAh6va9DcwoLw/view?usp=drive_link",
  },
];

const ResourcesSectionJa = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-heading text-3xl md:text-4xl font-light text-center mb-4">
          教えを探求する
        </h2>
        <p className="font-body text-muted-foreground text-center mb-14 max-w-lg mx-auto">
          以下のコンテンツでは、法華経の核心を神秘性を伴わない形で解き明かしています。
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          {resources.map((resource) => (
            <a
              key={resource.title}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 p-6 rounded-lg bg-card border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                <resource.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-medium mb-1 group-hover:text-primary transition-colors">
                  {resource.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {resource.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesSectionJa;
