# list-to-zip

Create and downloads a zip file from list of files urls.

## Installation

```sh
npm install list-to-zip
```

or

```sh
yarn add list-to-zip
```

## Usage Example

```javascript
import listZip from 'list-to-zip';

const myList = [
  'https://pngimg.com/uploads/raccoon/raccoon_PNG16972.png',
  'https://pngimg.com/uploads/badger/badger_PNG45.png',
  'http://www.pngall.com/wp-content/uploads/2016/06/Killer-Whale.png'
];

listZip('animal-pics', 'animal', myList);
// will download a zip file named animals-pics.zip that contain files named 0-animal.png, 1-animal.png, 2-animal.png
```

---

### Dependencies

- file-saver
- jszip
- jszip-utils

---
