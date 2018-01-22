# eslint-plugin-seneque

seneque.io specific eslint rules

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-seneque`:

```
$ npm install eslint-plugin-seneque --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-seneque` globally.

## Usage

Add `seneque` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "seneque"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "seneque/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





