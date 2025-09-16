import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Mail, Phone, MapPin, Clock, Factory, Truck } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";

export function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    product: '',
    quantity: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      product: '',
      quantity: '',
      message: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: t('contact.phone'),
      value: t('contact.phoneText'),
      description: t('contact.hoursText')
    },
    {
      icon: Mail,
      title: t('contact.email'),
      value: t('contact.emailText'),
      description: "24小时内回复咨询"
    },
    {
      icon: MapPin,
      title: t('contact.address'),
      value: t('contact.addressText'),
      description: "欢迎莅临参观考察"
    },
    {
      icon: Clock,
      title: t('contact.businessHours'),
      value: t('contact.hoursText'),
      description: "节假日可预约访问"
    }
  ];

  const advantages = [
    {
      icon: Factory,
      title: "自有工厂",
      description: "现代化生产线，产能充足，交期稳定"
    },
    {
      icon: Truck,
      title: "快速发货",
      description: "现货库存充足，下单后24小时内发货"
    }
  ];

  return (
    <section id="contact" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4 text-foreground">
            {t('contact.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('contact.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>{t('contact.subtitle')}</CardTitle>
              <CardDescription>
                {t('contact.description')}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">{t('contact.contactPerson')} *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder={t('contact.contactPerson')}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">{t('contact.email')} *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">{t('contact.companyName')}</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                    placeholder={t('contact.companyName')}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="product">感兴趣的产品</Label>
                    <Select onValueChange={(value) => handleInputChange('product', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="请选择产品类型" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="powerbank">充电宝</SelectItem>
                        <SelectItem value="phonestand">手机支架</SelectItem>
                        <SelectItem value="earbuds">蓝牙耳机</SelectItem>
                        <SelectItem value="phonecase">手机壳</SelectItem>
                        <SelectItem value="cable">数据线</SelectItem>
                        <SelectItem value="carmount">车载支架</SelectItem>
                        <SelectItem value="other">其他产品</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="quantity">采购数量</Label>
                    <Select onValueChange={(value) => handleInputChange('quantity', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="请选择数量范围" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-50">1-50件</SelectItem>
                        <SelectItem value="51-200">51-200件</SelectItem>
                        <SelectItem value="201-500">201-500件</SelectItem>
                        <SelectItem value="501-1000">501-1000件</SelectItem>
                        <SelectItem value="1000+">1000件以上</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">{t('contact.message')} *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder={t('contact.message')}
                    rows={5}
                    required
                  />
                </div>

                <Button type="submit" className="w-full">
                  {t('contact.submit')}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl mb-6 text-foreground">联系方式</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <info.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="mb-1 text-foreground">{info.title}</h4>
                        <p className="text-foreground mb-1">{info.value}</p>
                        <p className="text-sm text-muted-foreground">{info.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl mb-6 text-foreground">合作优势</h3>
                <div className="space-y-4">
                  {advantages.map((advantage, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <advantage.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="mb-1 text-foreground">{advantage.title}</h4>
                        <p className="text-sm text-muted-foreground">{advantage.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl mb-4 text-foreground">服务承诺</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground text-sm">免费提供产品样品和规格书</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground text-sm">支持产品定制和OEM/ODM服务</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground text-sm">一年质保，完善的售后服务体系</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground text-sm">专业技术团队提供技术支持</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}