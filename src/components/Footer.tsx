import { Separator } from "./ui/separator";
import { useLanguage } from "../contexts/LanguageContext";
import { 
  Mail, 
  Phone, 
  MapPin,
  Factory,
  Shield,
  Truck,
  Award
} from "lucide-react";

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: t('footer.products'), href: "#products" },
    { name: t('footer.about'), href: "#about" },
    { name: t('footer.contact'), href: "#contact" }
  ];

  const productCategories = [
    { name: "充电宝系列", href: "#products" },
    { name: "手机支架", href: "#products" },
    { name: "蓝牙耳机", href: "#products" },
    { name: "手机保护壳", href: "#products" },
    { name: "数据线", href: "#products" },
    { name: "车载配件", href: "#products" }
  ];

  const companyFeatures = [
    { icon: Factory, text: "自有工厂生产" },
    { icon: Shield, text: "一年质保" },
    { icon: Truck, text: "快速发货" },
    { icon: Award, text: "品质认证" }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl mb-4">TechAccessory</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              专业数码配件制造商，致力于为全球用户提供优质的充电宝、手机支架、
              蓝牙耳机等数码配件产品。品质可靠，服务专业。
            </p>
            <div className="grid grid-cols-2 gap-3">
              {companyFeatures.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <feature.icon className="h-4 w-4 text-primary-foreground/80" />
                  <span className="text-xs text-primary-foreground/80">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4">快速导航</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <h5 className="text-sm mb-2 text-primary-foreground/90">认证资质</h5>
              <div className="text-xs text-primary-foreground/70 space-y-1">
                <div>• CE认证</div>
                <div>• FCC认证</div>
                <div>• RoHS认证</div>
                <div>• ISO9001认证</div>
              </div>
            </div>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="mb-4">产品系列</h4>
            <ul className="space-y-2">
              {productCategories.map((category, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(category.href)}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {category.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4">联系方式</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="h-4 w-4 text-primary-foreground/60 mt-0.5" />
                <div>
                  <div className="text-primary-foreground/80 text-sm">+86 138-0000-0000</div>
                  <div className="text-xs text-primary-foreground/60">销售热线</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-4 w-4 text-primary-foreground/60 mt-0.5" />
                <div>
                  <div className="text-primary-foreground/80 text-sm">sales@techaccess.com</div>
                  <div className="text-xs text-primary-foreground/60">商务邮箱</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-primary-foreground/60 mt-0.5" />
                <div>
                  <div className="text-primary-foreground/80 text-sm">
                    广东省深圳市宝安区<br />科技工业园A栋
                  </div>
                  <div className="text-xs text-primary-foreground/60">工厂地址</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-primary-foreground/20 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-primary-foreground/80 text-sm">
            © {currentYear} {t('footer.company')}. {t('footer.rights')}.
          </div>
          <div className="flex space-x-6 text-sm">
            <button className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
              {t('footer.privacy')}
            </button>
            <button className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
              服务条款
            </button>
            <button className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
              质量保证
            </button>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 pt-8 border-t border-primary-foreground/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-lg mb-2 text-primary-foreground">工厂直销</div>
              <div className="text-xs text-primary-foreground/70">省去中间环节，价格更优惠</div>
            </div>
            <div>
              <div className="text-lg mb-2 text-primary-foreground">质量保证</div>
              <div className="text-xs text-primary-foreground/70">严格质检，一年质保承诺</div>
            </div>
            <div>
              <div className="text-lg mb-2 text-primary-foreground">定制服务</div>
              <div className="text-xs text-primary-foreground/70">支持OEM/ODM，满足个性需求</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}