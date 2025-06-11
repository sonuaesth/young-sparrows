import React, { useEffect, useState } from "react";
import { MenuItem, ListItemText } from "@mui/material";
import { Flag, LanguageSelectorButton, MenuStyled } from "./styles";

interface Language {
  code: string;
  name: string;
}

interface Props {
  currentLanguage: string;
  onChange: (languageCode: string) => void;
  scrolled?: boolean;
  isMobile?: boolean;
}

const languages: Language[] = [
  { code: "en", name: "English" },
  { code: "ru", name: "Russian" },
  { code: "sr", name: "Serbian (Latin)" },
];

const LanguageSwitch: React.FC<Props> = ({
  currentLanguage,
  onChange,
  scrolled,
  isMobile,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [currentFlag, setCurrentFlag] = useState<string>("en");
  const [currentLanguageName, setCurrentLanguageName] = useState<string>("English");

  useEffect(() => {
    const supportedLanguage = languages.find(
      (lang) => lang.code === currentLanguage
    );
    if (!supportedLanguage) {
      setCurrentFlag("en");
      setCurrentLanguageName("English");
    } else {
      setCurrentFlag(currentLanguage);
      setCurrentLanguageName(supportedLanguage.name);
    }
  }, [currentLanguage]);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = (languageCode: string) => {
    handleClose();
    onChange(languageCode);
  };

  return (
    <>
      <LanguageSelectorButton
        style={{ color: isMobile ? "black" : scrolled ? "black" : "white" }}
        startIcon={<Flag src={`/flags/flag-${currentFlag}.webp`} alt="Flag" />}
        onClick={handleClick}
      >
        {currentLanguageName}
      </LanguageSelectorButton>
      <MenuStyled
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {languages
          .filter((lang) => lang.code !== currentLanguage)
          .map((language) => (
            <MenuItem
              key={language.code}
              onClick={() => handleLanguageChange(language.code)}
            >
              <Flag src={`/flags/flag-${language.code}.webp`} alt={`Flag-${language.code}`} />
              <ListItemText primary={language.name} sx={{ mx: 2 }} />
            </MenuItem>
          ))}
      </MenuStyled>
    </>
  );
};

export default LanguageSwitch;
