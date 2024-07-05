import React, { createContext, useContext, ReactNode } from 'react';

interface HeroContextProps {
  showHero: boolean;
}

const HeroContext = createContext<HeroContextProps | undefined>(undefined);

export const useHeroContext = (): HeroContextProps => {
  const context = useContext(HeroContext);
  if (!context) {
    throw new Error('useHeroContext must be used within a HeroProvider');
  }
  return context;
};

interface HeroProviderProps {
  showHero: boolean;
  children: ReactNode;
}

const HeroProvider: React.FC<HeroProviderProps> = ({ showHero, children }) => {
  return (
    <HeroContext.Provider value={{ showHero }}>
      {children}
    </HeroContext.Provider>
  );
};
export default HeroProvider;