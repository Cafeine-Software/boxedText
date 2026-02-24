<div align="center">

# Boxed Text

<img src="https://raw.githubusercontent.com/Cafeine-Software/boxedText/main/media/logo.png" alt="errorUnstack" width="300"/>
    
![Node](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)


Display a text in an ascii box

[Installation](#installation) • [Usage](#usage) • [Documentation](#documentation) • [License](#license) • [Contact](#contact) • [Support](#support)
</div>

## Description
A lightweight utility to wrap text in customizable Unicode boxes. It automatically centers the text and can output directly to the console or return a formatted multi-line string.

<img src="https://raw.githubusercontent.com/Cafeine-Software/boxedText/main/media/demo.png" width="350">

## Installation
```bash
npm i @cafeine-software/boxed-text
```

## Usage

```javascript
import { boxedText ,BOX_STYLE} from "@cafeine-software/boxed-text";

// Display the boxed text with default style BOX_STYLE.LIGHT
boxedText(style);

// Get the boxed text as a string
const boxedText = boxedTest("BAR",BOX_STYLE.HEAVY,false)
```

## Documentation

Available style are :

* LIGHT
* HEAVY
* DOUBLE
* ROUNDED
* VERTICAL_LIGHT_&_HEAVY_TOP
* VERTICAL_HEAVY_&__LIGHT_TOP
* VERTICAL_LIGHT_&_DOUBLE_TOP
* VERTICAL_DOUBLE_&_LIGHT_TOP

## License

<img src="https://upload.wikimedia.org/wikipedia/commons/e/e5/CC_BY-SA_icon.svg" width="150px"/>

## Contact

Developed by **Quentin Lamamy**.

- **Email**: [contact@quentin-lamamy.fr](mailto:contact@quentin-lamamy.fr)
- **GitHub**: [github.com/quentin-lamamy](https://github.com/quentin-lamamy)
- **Cafeine Github**: [github.com/Cafeine-Software](https://github.com/Cafeine-Software)

# Support

<a href="https://www.buymeacoffee.com/quentinlamamy" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" width="150"></a>