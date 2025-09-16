import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useLanguage } from "../contexts/LanguageContext";
import { 
  Battery, 
  Smartphone, 
  Headphones, 
  ShieldCheck,
  Cable,
  Car
} from "lucide-react";

export function Products() {
  const { t } = useLanguage();
  
  const products = [
    {
      id: 1,
      name: t('products.items.powerBank.name'),
      category: t('products.categories.charging'),
      description: t('products.items.powerBank.description'),
      image: "https://images.unsplash.com/photo-1736513963979-90b024508341?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3dlciUyMGJhbmslMjBwb3J0YWJsZSUyMGNoYXJnZXJ8ZW58MXx8fHwxNzU3NzAzODk3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      price: "¥89",
      features: t('products.items.powerBank.features'),
      icon: Battery,
      hot: true
    },
    {
      id: 2,
      name: t('products.items.phoneStand.name'),
      category: t('products.categories.phoneAccessories'),
      description: t('products.items.phoneStand.description'),
      image: "https://images.unsplash.com/photo-1721137527909-ef65190c2e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG9uZSUyMHN0YW5kJTIwbW9iaWxlJTIwaG9sZGVyfGVufDF8fHx8MTc1Nzc3OTUyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      price: "¥39",
      features: t('products.items.phoneStand.features'),
      icon: Smartphone
    },
    {
      id: 3,
      name: t('products.items.bluetoothEarbuds.name'),
      category: t('products.categories.audio'),
      description: t('products.items.bluetoothEarbuds.description'),
      image: "https://images.unsplash.com/photo-1755182529034-189a6051faae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXJlbGVzcyUyMGVhcmJ1ZHMlMjBibHVldG9vdGh8ZW58MXx8fHwxNzU3NzQ0NjA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      price: "¥159",
      features: t('products.items.bluetoothEarbuds.features'),
      icon: Headphones,
      hot: true
    },
    {
      id: 4,
      name: t('products.items.phoneCase.name'),
      category: t('products.categories.protection'),
      description: t('products.items.phoneCase.description'),
      image: "https://images.unsplash.com/photo-1715371941219-a6e6bf41dc21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG9uZSUyMGNhc2UlMjBwcm90ZWN0aW9ufGVufDF8fHx8MTc1Nzc3OTUyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      price: "¥29",
      features: t('products.items.phoneCase.features'),
      icon: ShieldCheck
    },
    {
      id: 5,
      name: t('products.items.chargingCable.name'),
      category: t('products.categories.charging'), 
      description: t('products.items.chargingCable.description'),
      image: "https://images.unsplash.com/photo-1751846545116-838fe2e7e815?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2IlMjBjYWJsZSUyMGNoYXJnaW5nJTIwY29yZHxlbnwxfHx8fDE3NTc3Nzk1MzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      price: "¥19",
      features: t('products.items.chargingCable.features'),
      icon: Cable
    },
    {
      id: 6,
      name: t('products.items.carMount.name'),
      category: t('products.categories.carAccessories'),
      description: t('products.items.carMount.description'),
      image: "https://images.unsplash.com/photo-1597904721546-e19190d60bb5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBwaG9uZSUyMG1vdW50JTIwaG9sZGVyfGVufDF8fHx8MTc1Nzc3OTUzNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      price: "¥49",
      features: t('products.items.carMount.features'),
      icon: Car
    }
  ];

  return (
    <section id="products" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4 text-foreground">
            {t('products.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('products.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
              {product.hot && (
                <div className="absolute top-4 right-4 z-10">
                  <Badge variant="destructive" className="bg-red-500">{t('products.hot')}</Badge>
                </div>
              )}
              
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>
              
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {product.category}
                  </Badge>
                  <div className="p-1.5 bg-primary/10 rounded-lg">
                    <product.icon className="h-4 w-4 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {product.name}
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {product.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-1 mb-4">
                  {product.features.map((feature, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-2xl text-primary">
                    {product.price}
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  >
                    {t('products.viewDetails')}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            {t('products.viewMore')}
          </Button>
        </div>
      </div>
    </section>
  );
}