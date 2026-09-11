// Multilingual configuration

export const LANGUAGES = {
  ta: { name: 'Tamil', nativeName: 'தமிழ்', code: 'ta-IN' },
  hi: { name: 'Hindi', nativeName: 'हिन्दी', code: 'hi-IN' },
  ur: { name: 'Urdu', nativeName: 'اردو', code: 'ur-IN' },
  en: { name: 'English', nativeName: 'English', code: 'en-US' },
  te: { name: 'Telugu', nativeName: 'తెలుగు', code: 'te-IN' },
  ml: { name: 'Malayalam', nativeName: 'മലയാളം', code: 'ml-IN' },
} as const;

export type Language = keyof typeof LANGUAGES;

export const DEFAULT_LANGUAGE: Language = 'ta';

export const SECTIONS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'V'] as const;

export const SECTION_TITLES: Record<string, Record<Language, string>> = {
  A: {
    ta: 'குடும்ப தகவல்கள்',
    hi: 'घरेलू जानकारी',
    ur: 'خاندانی معلومات',
    en: 'Household Information',
    te: 'గృహ సమాచారం',
    ml: 'കുടുംബ വിവരങ്ങൾ',
  },
  B: {
    ta: 'குடும்ப உறுப்பினர்கள்',
    hi: 'पारिवारिक सदस्य',
    ur: 'خاندانی اراکین',
    en: 'Family Members',
    te: 'కుటుంబ సభ్యులు',
    ml: 'കുടുംബ അംഗങ്ങൾ',
  },
  C: {
    ta: 'கல்வி (தற்கால தலைமுறை)',
    hi: 'शिक्षा (वर्तमान पीढ़ी)',
    ur: 'تعلیم (موجودہ نسل)',
    en: 'Education (Current Generation)',
    te: 'విద్య (ప్రస్తుత తరం)',
    ml: 'വിദ്യാഭ്യാസം (നിലവിലെ തലമുറ)',
  },
  E: {
    ta: '3.5% இட ஒதுக்கீட்டு விழிப்புணர்வு',
    hi: '3.5% आरक्षण जागरूकता',
    ur: '3.5% کوٹہ شعور',
    en: 'Reservation Awareness',
    te: '3.5% రిజర్వేషన్ అవగాహన',
    ml: '3.5% സംരക്ഷണ സ്വയം സംബോധനം',
  },
};
