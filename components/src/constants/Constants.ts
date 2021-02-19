enum Spacings {
    Size_1 = 2,
    Size_2 = 4,
    Size_3 = 8,
    Size_4 = 12,
    Size_5 = 16,
    Size_6 = 24,
    Size_7 = 32,
    Size_8 = 48,
    Size_9 = 52,
    Size_10 = 20,
  }
  
  enum FontFamily {
    Light = "'OpenSans Light', sans-serif",
    Normal = "'OpenSans Regular', sans-serif",
    SemiBold = "'OpenSans SemiBold', sans-serif",
    Bold = "'OpenSans Bold', sans-serif",
    ExtraBold = "'OpenSans ExtraBold', sans-serif",
    Italic = "'OpenSans Italic', sans-serif",
  }
  
  // ToDo Change PX to REM
  enum FontSizes {
    Size_1 = 6,
    Size_2 = 8,
    Size_3 = 10,
    Size_4 = 12,
    Size_5 = 14,
    Size_6 = 16,
    Size_7 = 20,
    Size_8 = 24,
    Size_9 = 32,
    Size_10 = 36,
    Size_11 = 40,
    Size_12 = 48,
  }
  
  enum BorderRadiuses {
    Size_1 = 2,
    Size_2 = 4,
    Size_3 = 6,
    Size_4 = 8,
    Size_5 = 10,
    Size_6 = 12,
    Size_7 = 16,
    Size_8 = 18,
    Size_9 = 20,
  }
  
  enum Transitions {
    Fast = '0.1s',
    Default = '0.3s',
    DropDown = '0.46s',
    Long = '1s',
  }
  
  enum CenterAlignedContentWidth {
    ExtraLarge = 1320,
    Large = 960,
    Medium = 720,
    Adaptive = '100%',
  }
  
  enum CenterAlignedContentMargins {
    ExtraLarge = 0,
    Large = 44,
    Medium = 32,
    Small = 24,
  }
  
  enum FontWeights {
    W_100 = 100,
    W_200 = 200,
    W_300 = 300,
    W_400 = 'normal',
    W_500 = 500,
    W_600 = 600,
    W_700 = 'bold',
    W_800 = 800,
    W_900 = 900,
  }
  
  export {
    Spacings,
    FontFamily,
    FontSizes,
    BorderRadiuses,
    CenterAlignedContentMargins,
    CenterAlignedContentWidth,
    Transitions,
    FontWeights,
  };