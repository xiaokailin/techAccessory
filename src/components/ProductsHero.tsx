import { Button } from "./ui/button";
import { ArrowRight, Star, Shield, Truck } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Card, CardContent } from "./ui/card";
import { useLanguage } from "../contexts/LanguageContext";
import heroImage from "figma:asset/5930a34fa77e011566895451a1ce285fa8592699.png";

export function ProductsHero() {
  const { t } = useLanguage();
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-foreground">
              {t('hero.title')}
              <span className="block text-primary">{t('hero.subtitle')}</span>
            </h1>
            
            <p className="text-lg md:text-xl mb-8 text-muted-foreground">
              {t('hero.description')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('products')}
                className="flex items-center gap-2"
              >
                {t('hero.browseProducts')}
                <ArrowRight className="h-4 w-4" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="flex items-center gap-2"
              >
                {t('hero.contactPurchase')}
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Star className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">{t('hero.qualityGuarantee')}</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">{t('hero.oneYearWarranty')}</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Truck className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">{t('hero.fastShipping')}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Product Image */}
          <div className="relative">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <ImageWithFallback
                  src={heroImage}
                  alt="无线充电器产品展示"
                  className="w-full h-64 md:h-80 lg:h-96 object-cover"
                />
              </CardContent>
            </Card>
            
            {/* Stats overlay */}
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-lg">
              <div className="text-center">
                <div className="text-2xl mb-1">10000+</div>
                <div className="text-sm">{t('hero.capacity')}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl md:text-4xl mb-2 text-primary">50+</div>
            <div className="text-muted-foreground">{t('hero.productModels')}</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl mb-2 text-primary">10{t('hero.satisfiedCustomers').includes('万') ? '万' : 'K'}+</div>
            <div className="text-muted-foreground">{t('hero.satisfiedCustomers')}</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl mb-2 text-primary">8+</div>
            <div className="text-muted-foreground">{t('hero.industryExperience')}</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl mb-2 text-primary">99%</div>
            <div className="text-muted-foreground">{t('hero.positiveRate')}</div>
          </div>
        </div>
      </div>
    </section>
  );
}