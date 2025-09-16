import { useState } from 'react';
import { Check, ChevronDown, Globe } from 'lucide-react';
import { Button } from './ui/button';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Command, CommandEmpty, CommandGroup, CommandItem, CommandList } from './ui/command';
import { useLanguage } from '../contexts/LanguageContext';
import { Language, languageNames } from '../data/translations';

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);

  const languages: { value: Language; label: string; flag: string }[] = [
    { value: 'zh-CN', label: languageNames['zh-CN'], flag: '🇨🇳' },
    { value: 'zh-TW', label: languageNames['zh-TW'], flag: '🇹🇼' },
    { value: 'es', label: languageNames['es'], flag: '🇪🇸' },
    { value: 'fr', label: languageNames['fr'], flag: '🇫🇷' },
    { value: 'ru', label: languageNames['ru'], flag: '🇷🇺' },
    { value: 'ar', label: languageNames['ar'], flag: '🇸🇦' }
  ];

  const currentLanguage = languages.find(lang => lang.value === language);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[140px] justify-between h-9"
        >
          <div className="flex items-center gap-2">
            <Globe className="h-4 w-4" />
            <span className="text-sm">{currentLanguage?.flag}</span>
          </div>
          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0" align="end">
        <Command>
          <CommandEmpty>未找到语言选项</CommandEmpty>
          <CommandList>
            <CommandGroup>
              {languages.map((lang) => (
                <CommandItem
                  key={lang.value}
                  value={lang.value}
                  onSelect={() => {
                    setLanguage(lang.value);
                    setOpen(false);
                  }}
                  className="cursor-pointer"
                >
                  <div className="flex items-center gap-3 w-full">
                    <span className="text-lg">{lang.flag}</span>
                    <span className="flex-1">{lang.label}</span>
                    <Check
                      className={`ml-auto h-4 w-4 ${
                        language === lang.value ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}