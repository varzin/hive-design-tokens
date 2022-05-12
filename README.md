# Hive design system tokens

Hive is a design system created for SinchSMB and child products. This repository contains design tokens generated using [Figma Tokens](https://docs.tokens.studio) plugin from [Hive design file](https://www.figma.com/file/ba5gOeZ2Bb2EPFF0gAlDM5/%F0%9F%90%9D-Hive).

## Usage

Instal dependencies `npm i` first.

### Automatic theme generation

Run `npm start` to generate files for the following themes:

- simpleTextingTheme.json
- messageMediaTheme.json
- sinchSmbTheme.json

Then replace these files in [the library](https://bitbucket.org/simpletexting/ui-kit).

### Manual theme generation

If you want use custom parameters to generate theme files follow the readme of [MkTheme](https://www.npmjs.com/package/@sinchsmb/mktheme) tool.