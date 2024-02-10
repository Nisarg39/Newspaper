
# Newspaper

Simple Newspaper app built on React Native.

Best example for React Navigation, NativeBase UI Library, Custom Google Fonts.

Demo - https://youtube.com/shorts/MU6TZokAUms?si=hmzHyVZjGhLs1Dxn

## Run Locally

Clone the project

```bash
  https://github.com/Nisarg39/Newspaper
```

Go to the project directory

```bash
  cd Newspaper
```

Install dependencies

```bash
  npm install
```

Start the App

```bash
  npx expo start
```


## FileStructure

```
📦 
.gitignore
App.js
README.md
app.json
assets
adaptive-icon.png
favicon.png
fonts
│  │  ├─ Newsreader
│  │  │  ├─ Newsreader-Italic-VariableFont_opsz,wght.ttf
│  │  │  ├─ Newsreader-VariableFont_opsz,wght.ttf
│  │  │  ├─ OFL.txt
│  │  │  ├─ README.txt
│  │  │  └─ static
│  │  │     ├─ Newsreader_14pt-Bold.ttf
│  │  │     ├─ Newsreader_14pt-BoldItalic.ttf
│  │  │     ├─ Newsreader_14pt-ExtraBold.ttf
│  │  │     ├─ Newsreader_14pt-ExtraBoldItalic.ttf
│  │  │     ├─ Newsreader_14pt-ExtraLight.ttf
│  │  │     ├─ Newsreader_14pt-ExtraLightItalic.ttf
│  │  │     ├─ Newsreader_14pt-Italic.ttf
│  │  │     ├─ Newsreader_14pt-Light.ttf
│  │  │     ├─ Newsreader_14pt-LightItalic.ttf
│  │  │     ├─ Newsreader_14pt-Medium.ttf
│  │  │     ├─ Newsreader_14pt-MediumItalic.ttf
│  │  │     ├─ Newsreader_14pt-Regular.ttf
│  │  │     ├─ Newsreader_14pt-SemiBold.ttf
│  │  │     ├─ Newsreader_14pt-SemiBoldItalic.ttf
│  │  │     ├─ Newsreader_24pt-Bold.ttf
│  │  │     ├─ Newsreader_24pt-BoldItalic.ttf
│  │  │     ├─ Newsreader_24pt-ExtraBold.ttf
│  │  │     ├─ Newsreader_24pt-ExtraBoldItalic.ttf
│  │  │     ├─ Newsreader_24pt-ExtraLight.ttf
│  │  │     ├─ Newsreader_24pt-ExtraLightItalic.ttf
│  │  │     ├─ Newsreader_24pt-Italic.ttf
│  │  │     ├─ Newsreader_24pt-Light.ttf
│  │  │     ├─ Newsreader_24pt-LightItalic.ttf
│  │  │     ├─ Newsreader_24pt-Medium.ttf
│  │  │     ├─ Newsreader_24pt-MediumItalic.ttf
│  │  │     ├─ Newsreader_24pt-Regular.ttf
│  │  │     ├─ Newsreader_24pt-SemiBold.ttf
│  │  │     ├─ Newsreader_24pt-SemiBoldItalic.ttf
│  │  │     ├─ Newsreader_36pt-Bold.ttf
│  │  │     ├─ Newsreader_36pt-BoldItalic.ttf
│  │  │     ├─ Newsreader_36pt-ExtraBold.ttf
│  │  │     ├─ Newsreader_36pt-ExtraBoldItalic.ttf
│  │  │     ├─ Newsreader_36pt-ExtraLight.ttf
│  │  │     ├─ Newsreader_36pt-ExtraLightItalic.ttf
│  │  │     ├─ Newsreader_36pt-Italic.ttf
│  │  │     ├─ Newsreader_36pt-Light.ttf
│  │  │     ├─ Newsreader_36pt-LightItalic.ttf
│  │  │     ├─ Newsreader_36pt-Medium.ttf
│  │  │     ├─ Newsreader_36pt-MediumItalic.ttf
│  │  │     ├─ Newsreader_36pt-Regular.ttf
│  │  │     ├─ Newsreader_36pt-SemiBold.ttf
│  │  │     ├─ Newsreader_36pt-SemiBoldItalic.ttf
│  │  │     ├─ Newsreader_60pt-Bold.ttf
│  │  │     ├─ Newsreader_60pt-BoldItalic.ttf
│  │  │     ├─ Newsreader_60pt-ExtraBold.ttf
│  │  │     ├─ Newsreader_60pt-ExtraBoldItalic.ttf
│  │  │     ├─ Newsreader_60pt-ExtraLight.ttf
│  │  │     ├─ Newsreader_60pt-ExtraLightItalic.ttf
│  │  │     ├─ Newsreader_60pt-Italic.ttf
│  │  │     ├─ Newsreader_60pt-Light.ttf
│  │  │     ├─ Newsreader_60pt-LightItalic.ttf
│  │  │     ├─ Newsreader_60pt-Medium.ttf
│  │  │     ├─ Newsreader_60pt-MediumItalic.ttf
│  │  │     ├─ Newsreader_60pt-Regular.ttf
│  │  │     ├─ Newsreader_60pt-SemiBold.ttf
│  │  │     ├─ Newsreader_60pt-SemiBoldItalic.ttf
│  │  │     ├─ Newsreader_9pt-Bold.ttf
│  │  │     ├─ Newsreader_9pt-BoldItalic.ttf
│  │  │     ├─ Newsreader_9pt-ExtraBold.ttf
│  │  │     ├─ Newsreader_9pt-ExtraBoldItalic.ttf
│  │  │     ├─ Newsreader_9pt-ExtraLight.ttf
│  │  │     ├─ Newsreader_9pt-ExtraLightItalic.ttf
│  │  │     ├─ Newsreader_9pt-Italic.ttf
│  │  │     ├─ Newsreader_9pt-Light.ttf
│  │  │     ├─ Newsreader_9pt-LightItalic.ttf
│  │  │     ├─ Newsreader_9pt-Medium.ttf
│  │  │     ├─ Newsreader_9pt-MediumItalic.ttf
│  │  │     ├─ Newsreader_9pt-Regular.ttf
│  │  │     ├─ Newsreader_9pt-SemiBold.ttf
│  │  │     └─ Newsreader_9pt-SemiBoldItalic.ttf
│  │  └─ Protest_Strike
│  │     ├─ OFL.txt
│  │     └─ ProtestStrike-Regular.ttf
│  ├─ icon.png
│  └─ splash.png
├─ babel.config.js
├─ components
│  ├─ HomeScreen.js
│  └─ NewsDetail.js
├─ newsData.js
├─ package-lock.json
└─ package.json
```





## Authors

- [@Nisarg39](https://github.com/Nisarg39)

