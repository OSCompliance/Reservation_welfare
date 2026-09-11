// Zustand store for survey state management
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Language } from './languages';

export interface Household {
  id?: string;
  locality: string;
  respondentName: string;
  respondentAge: number;
  respondentGender: string;
  householdSize: number;
  monthlyIncome?: number;
  languageSpoken: Language;
  enumeratorId: string;
  members: Member[];
}

export interface Member {
  id?: string;
  relationship: string;
  age: number;
  gender: string;
  educationLevel?: string;
  employmentStatus?: string;
  monthlyIncome?: number;
}

export interface SurveyState {
  // Household data
  household: Household | null;
  setHousehold: (household: Household) => void;

  // Current section & question
  currentSection: string;
  setCurrentSection: (section: string) => void;

  // Current question
  currentQuestion: {
    question: string;
    inputType: string;
    options?: string[];
  } | null;
  setCurrentQuestion: (question: any) => void;

  // Form state
  currentAnswer: string;
  setCurrentAnswer: (answer: string) => void;

  // Language
  language: Language;
  setLanguage: (language: Language) => void;

  // Survey progress
  progress: number;
  setProgress: (progress: number) => void;

  // Offline state
  isOnline: boolean;
  setIsOnline: (online: boolean) => void;

  // Voice
  isVoiceActive: boolean;
  setIsVoiceActive: (active: boolean) => void;

  // Error
  error: string | null;
  setError: (error: string | null) => void;

  // Loading
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;

  // Reset survey
  reset: () => void;
}

const initialState = {
  household: null,
  currentSection: 'A',
  currentQuestion: null,
  currentAnswer: '',
  language: 'ta' as Language,
  progress: 0,
  isOnline: true,
  isVoiceActive: false,
  error: null,
  isLoading: false,
};

export const useSurveyStore = create<SurveyState>()(
  persist(
    (set) => ({
      ...initialState,

      setHousehold: (household) => set({ household }),
      setCurrentSection: (section) => set({ currentSection: section }),
      setCurrentQuestion: (question) => set({ currentQuestion: question }),
      setCurrentAnswer: (answer) => set({ currentAnswer: answer }),
      setLanguage: (language) => set({ language }),
      setProgress: (progress) => set({ progress }),
      setIsOnline: (online) => set({ isOnline: online }),
      setIsVoiceActive: (active) => set({ isVoiceActive: active }),
      setError: (error) => set({ error }),
      setIsLoading: (loading) => set({ isLoading: loading }),

      reset: () => set(initialState),
    }),
    {
      name: 'survey-store',
    }
  )
);
