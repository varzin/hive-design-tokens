# Hive design system tokens

Hive is a design system created for SinchSMB and child products. This repository contains design tokens generated using [Figma Tokens](https://docs.tokens.studio) plugin from [Hive design file](https://www.figma.com/file/ba5gOeZ2Bb2EPFF0gAlDM5/%F0%9F%90%9D-Hive).

## Usage

Instal dependencies `npm i` first.

### Automatic theme generation

Run `npm start` to generate files for the following themes:

- simpleTextingTheme.json
- messageMediaTheme.json
- sinchSmbTheme.json

### Replace theme files in the [library](https://bitbucket.org/simpletexting/ui-kit)

If the _Hive-design-tokens_ an _ui-kit_ repositories are stored in the same folder, then just run `npm run move` command to copy theme files to the proper directory. Alternatively you can move theme files to the `ui-kit` repository manually.

### Manual theme generation

If you want use custom parameters to generate theme files follow the readme of [MkTheme](https://www.npmjs.com/package/@sinchsmb/mktheme) tool.