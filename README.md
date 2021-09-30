# RoarFest

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

```
* node
* yarn
```

### Installing

```
* yarn install
```

## Running

## Local development server

```
* cp .env.dev .env
* yarn start
```

#### Using particles

```
* make sure you have set up your BitBucket account [SSH key](https://support.atlassian.com/bitbucket-cloud/docs/set-up-an-ssh-key/)
* install all necessary particles. dont forget to yarn link.
* yarn link '{{particle-name}}'
```

### Production build

```
* yarn clean
* yarn build:{{env}}
```

## Directory Structure

| Directory  | Definition                                                                                                                                                                                 |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --- |
| components | Functional / class components. Free of redux. Classified in sub-folder. Use index.ts/tsx as the main entrance.                                                                             |
| constants  | Only return value. Classified by the purpose of value.                                                                                                                                     |
| interfaces | Only return interface. Prefixed with I. Classified in four types. - models for basic model - request for API request model - response for API response model - state for Redux state model |
| pages      | Files consist of pages and custom style. Classified by page name.                                                                                                                          |
| store      | Redux setup                                                                                                                                                                                |
| utils      | Common function. Classified by the purpose of function.                                                                                                                                    |     |

### Name Convention

#### File / Folder

- Use lower case string separated by dash(-) knows as kebab-case
- Start refactor when a file is more than 400 lines

#### Function / Variable / ClassName

- Use pascal-case for function and class name
- Use camel-case for variable name
- Use kebab-case for style class name
