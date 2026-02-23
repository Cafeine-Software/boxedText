<div align="center">

# Boxed Text

<img src="https://raw.githubusercontent.com/Cafeine-Software/boxedText/main/media/logo.png" alt="errorUnstack" width="200"/>
    
![Node](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)


Display a text in an ascii box

[Installation](#installation) • [Usage](#usage) •  [Documentation](#documentation) • [License](#license) • [Contact](#contact) • [Support](#support)
</div>

## Description
A lightweight utility to wrap text in customizable Unicode boxes. It automatically centers the text and can output directly to the console or return a formatted multi-line string.

<img src="https://raw.githubusercontent.com/Cafeine-Software/boxedText/main/media/demo.png" width="350">

## Installation
```bash
npm i @cafeine-software/errorunstack
```

## Usage

### Minimalist
```javascript
import { displayErrorStack } from '@cafeine-software/errorunstack';

function bar() {
    throw new Error("Bar function failed");
}

function foo() {
    try {
        bar()
    }
    catch (err) {
        throw new Error("Bar call failed", { cause: err });
    }
}

try {
    foo();
}
catch (err) {
    displayErrorStack(err, "Error in main execution");
}
```

<img src="https://raw.githubusercontent.com/Cafeine-Software/errorUnstack/main/media/minimalistEx.png" width="500">

### Custom data

You can add custom data for debug purpose by filling the data argument of the ***Error*** object. 

```javascript
import { displayErrorStack } from '@cafeine-software/errorunstack';

function bar() {throw new Error("Bar function failed");}

function foo(level) {

    try { bar();}
    catch (err) {
        const error = new Error("Bar call failed", { cause: err });
        error.data = {
            level: level,
            timestamp: [43,56,"toto","titi"],
            object: {nested: {value: 123}}
        }
        throw error;
    }

}

try {foo(42);}
catch (error) {
    displayErrorStack(error, "Error in main execution");
}
```
<img src="https://raw.githubusercontent.com/Cafeine-Software/errorUnstack/main/media/dataEx.png" width="500">

### Special key : method

You can specify a ***method*** key in you custom data object, it will display beside code coordinate (line:col) the method name

```javascript

function bar() {

    const error = new Error("Bar function failed");
    error.data = {
        method: "bar"
    }
    throw error;
}

function foo(level) {

    try { bar(); }
    catch (err) {
        const error = new Error("Bar call failed", { cause: err });
        error.data = {
            level: level,
            timestamp: [43, 56, "toto", "titi"],
            object: { nested: { value: 123 } },
            method: "foo"
        }
        throw error;
    }

}

try { foo(42); }
catch (error) {
    displayErrorStack(error, "Error in main execution");
}
```
<img src="https://raw.githubusercontent.com/Cafeine-Software/errorUnstack/main/media/methodEx.png" width="500">

## Documentation
The package export two methods ```extractErrorChain``` and ```displayErrorStack```

### `extractErrorChain(error)`
Extract the error chain from an Error object
#### Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `error` | `Error` | - | The error (contaning causes stack) |

#### Returns

`Array<ErrorEntry>` - An array containing object describing each error

### `displayErrorStack`
Display a formatted error stack in the console
#### Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `error` | `Error` | - | The error (contaning causes stack) |
| `title` | `String` | An error occurred | Title to display above the error stack |

#### Returns

`Void`

### Types

#### ErrorEntry

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `message` | `String` | - | The error message |
| `file` | `String` | - | The file where the error occurred |
| `line` | `Number` | - | The line where the error occurred |
| `col` | `Number` | - | The col where the error occurred |
| `data` | `Object` | - | Custom data added to the error |

## License

[<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/CC_BY-SA_icon.svg/320px-CC_BY-SA_icon.svg.png" width="150px"/>](https://creativecommons.org/licenses/by-sa/4.0/)

## Contact

Developed by **Quentin Lamamy**.

- **Email**: [contact@quentin-lamamy.fr](mailto:contact@quentin-lamamy.fr)
- **GitHub**: [github.com/quentin-lamamy](https://github.com/quentin-lamamy)
- **Cafeine Github**: [github.com/Cafeine-Software](https://github.com/Cafeine-Software)

# Support

<a href="https://www.buymeacoffee.com/quentinlamamy" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" width="150"></a>