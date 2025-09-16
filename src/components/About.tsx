import { CheckCircle, Award, Users, Factory } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useLanguage } from "../contexts/LanguageContext";

export function About() {
  const { t } = useLanguage();
  
  const highlights = [
    {
      icon: Factory,
      title: "自有工厂",
      description: "拥有现代化生产线，严格的质量管控体系，确保每件产品都符合高标准"
    },
    {
      icon: Award,
      title: "品质认证",
      description: "通过CE、FCC、RoHS等多项国际认证，产品品质获得权威机构认可"
    },
    {
      icon: Users,
      title: "专业团队",
      description: "汇聚行业资深工程师和设计师，持续创新研发符合市场需求的产品"
    },
    {
      icon: CheckCircle,
      title: "完善服务",
      description: "提供从产品咨询到售后服务的全链条支持，让客户购买无忧使用放心"
    }
  ];

  const stats = [
    { number: "2016", label: "成立年份" },
    { number: "50+", label: "产品型号" },
    { number: "200+", label: "合作客户" },
    { number: "10万+", label: "用户选择" }
  ];

  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4 text-foreground">
            {t('about.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('about.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <div>
            <h3 className="text-2xl md:text-3xl mb-6 text-foreground">
              TechAccessory - {t('about.mission')}
            </h3>
            
            <p className="text-lg mb-6 text-muted-foreground leading-relaxed">
              {t('about.missionText')}
            </p>
            
            <p className="text-lg mb-8 text-muted-foreground leading-relaxed">
              {t('about.teamText')}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg">
                    <highlight.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="mb-2 text-foreground">{highlight.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1583737097428-af53774819a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJvbmljcyUyMGZhY3RvcnklMjBtYW51ZmFjdHVyaW5nfGVufDF8fHx8MTc1Nzc3OTU0MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Electronics factory manufacturing"
                  className="w-full h-64 md:h-80 lg:h-96 object-cover"
                />
              </CardContent>
            </Card>
            
            {/* Certification overlay */}
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-lg text-center">
              <div className="text-sm mb-1">ISO认证</div>
              <div className="text-lg">质量管理</div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-muted/50 rounded-lg">
              <div className="text-3xl md:text-4xl mb-2 text-primary">
                {stat.number}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Company Values */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl md:text-3xl mb-8 text-foreground">{t('about.values')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6">
              <CardContent className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h4 className="mb-3 text-foreground">{t('about.mission')}</h4>
                <p className="text-sm text-muted-foreground">
                  {t('about.missionText')}
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6">
              <CardContent className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏆</span>
                </div>
                <h4 className="mb-3 text-foreground">{t('about.values')}</h4>
                <p className="text-sm text-muted-foreground">
                  {t('about.valuesText')}
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6">
              <CardContent className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h4 className="mb-3 text-foreground">{t('about.team')}</h4>
                <p className="text-sm text-muted-foreground">
                  {t('about.teamText')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}