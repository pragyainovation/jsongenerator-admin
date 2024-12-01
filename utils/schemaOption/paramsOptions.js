// export const paramsOptions = {
//   person: {
//     firstName: [
//       {
//         label: 'Gender',
//         value: 'sex',
//         rules: {
//           or: {
//             key: 'age',
//             notice: 'you can add only value age or sex',
//           },
//         },
//         options: [
//           {
//             label: 'male',
//             value: 'male',
//           },
//           {
//             label: 'female',
//             value: 'female',
//           },
//         ],
//       },
//       {
//         label: 'age',
//         value: 'age',
//         rules: {
//           or: {
//             key: 'sex',
//             notice: 'you can add only value age or sex',
//           },
//         },
//       },
//       {
//         label: 'height',
//         value: 'height',
//       },
//     ],
//   },
// };

export const paramsOptions = {
  airline: {
    flightNumber: [
      { label: 'min', value: 'min', isNumber: true },
      { label: 'max', value: 'max', isNumber: true },
      {
        label: 'addLeadingZeros',
        value: 'addLeadingZeros',
        options: [
          { label: 'True', value: true },
          { label: 'False', value: false },
        ],
      },
    ],
    recordLocator: [
      {
        label: 'allowNumerics',
        value: 'allowNumerics',
        options: [
          { label: 'True', value: true },
          { label: 'False', value: false },
        ],
      },
      {
        label: 'allowVisuallySimilarCharacters',
        value: 'allowVisuallySimilarCharacters',
        options: [
          { label: 'True', value: true },
          { label: 'False', value: false },
        ],
      },
    ],
    seat: [
      {
        label: 'aircraftType',
        value: 'aircraftType',
        options: [
          { label: 'narrowbody', value: 'narrowbody' },
          { label: 'regional', value: 'regional' },
          { label: 'widebody', value: 'widebody' },
        ],
      },
    ],
  },
  color: {
    cmyk: [
      {
        label: 'format',
        value: 'format',
        options: [
          { label: 'decimal', value: 'decimal' },
          { label: 'css', value: 'css' },
          { label: 'binary', value: 'binary' },
        ],
      },
    ],
    colorByCSSColorSpace: [
      {
        label: 'format',
        value: 'format',
        options: [
          { label: 'decimal', value: 'decimal' },
          { label: 'css', value: 'css' },
          { label: 'binary', value: 'binary' },
        ],
      },
      {
        label: 'space',
        value: 'space',
        options: [
          { label: 'sRGB', value: 'sRGB' },
          { label: 'display-p3', value: 'display-p3' },
          { label: 'rec2020', value: 'rec2020' },
          { label: 'a98-rgb', value: 'a98-rgb' },
          { label: 'prophoto-rgb', value: 'prophoto-rgb' },
        ],
      },
    ],
    hsl: [
      {
        label: 'format',
        value: 'format',
        options: [
          { label: 'decimal', value: 'decimal' },
          { label: 'css', value: 'css' },
          { label: 'binary', value: 'binary' },
        ],
      },
      {
        label: 'includeAlpha',
        value: 'includeAlpha',
        options: [
          { label: 'True', value: true },
          { label: 'False', value: false },
        ],
      },
    ],
    hwb: [
      {
        label: 'format',
        value: 'format',
        options: [
          { label: 'decimal', value: 'decimal' },
          { label: 'css', value: 'css' },
          { label: 'binary', value: 'binary' },
        ],
      },
    ],
    lab: [
      {
        label: 'format',
        value: 'format',
        options: [
          { label: 'decimal', value: 'decimal' },
          { label: 'css', value: 'css' },
          { label: 'binary', value: 'binary' },
        ],
      },
    ],
    lch: [
      {
        label: 'format',
        value: 'format',
        options: [
          { label: 'decimal', value: 'decimal' },
          { label: 'css', value: 'css' },
          { label: 'binary', value: 'binary' },
        ],
      },
    ],
    rgb: [
      {
        label: 'format',
        value: 'format',
        options: [
          { label: 'decimal', value: 'decimal' },
          { label: 'css', value: 'css' },
          { label: 'binary', value: 'binary' },
          { label: 'hex', value: 'hex' },
        ],
      },
      {
        label: 'includeAlpha',
        value: 'includeAlpha',
        options: [
          { label: 'True', value: true },
          { label: 'False', value: false },
        ],
      },
      {
        label: 'casing',
        value: 'casing',
        options: [
          { label: 'upper', value: 'upper' },
          { label: 'lower', value: 'lower' },
        ],
      },
    ],
  },
  commerce: {
    isbn: [
      {
        label: 'variant',
        value: 'variant',
        options: [
          { label: '10', value: 10 },
          { label: '13', value: 13 },
        ],
      },
      { label: 'separator', value: 'separator' },
    ],
    price: [
      { label: 'min', value: 'min', isNumber: true },
      { label: 'max', value: 'max', isNumber: true },
      { label: 'dec', value: 'dec' },
      { label: 'symbol', value: 'symbol' },
    ],
  },
  date: {
    between: [
      { label: 'from', value: 'from', isRequired: true, isDate: true },
      { label: 'to', value: 'to', isRequired: true, isDate: true },
    ],
    betweens: [
      { label: 'from', value: 'from', isRequired: true, isDate: true },
      { label: 'to', value: 'to', isRequired: true, isDate: true },
      { label: 'length', value: 'length', isNumber: true },
    ],
    birthdate: [
      {
        label: 'mode',
        value: 'mode',
        options: [
          { label: 'age', value: 'age' },
          { label: 'year', value: 'year' },
        ],
      },
      { label: 'min', value: 'min', isNumber: true },
      { label: 'max', value: 'max', isNumber: true },
    ],
    future: [
      { label: 'years', value: 'years', isNumber: true },
      { label: 'refDate', value: 'refDate', isDate: true },
    ],
    month: [
      {
        label: 'abbreviated',
        value: 'abbreviated',
        options: [
          { label: 'True', value: true },
          { label: 'False', value: false },
        ],
      },
    ],
    past: [
      { label: 'years', value: 'years', isNumber: true },
      { label: 'refDate', value: 'refDate', isDate: true },
    ],
    recent: [
      { label: 'years', value: 'years', isNumber: true },
      { label: 'refDate', value: 'refDate', isDate: true },
    ],
    soon: [
      { label: 'years', value: 'years', isNumber: true },
      { label: 'refDate', value: 'refDate', isDate: true },
    ],
    weekday: [
      {
        label: 'abbreviated',
        value: 'abbreviated',
        options: [
          { label: 'True', value: true },
          { label: 'False', value: false },
        ],
      },
    ],
  },
  finance: {
    accountNumber: [{ label: 'length', value: 'length', isNumber: true }],
    amount: [
      { label: 'min', value: 'min', isNumber: true },
      { label: 'max', value: 'max', isNumber: true },
      { label: 'dec', value: 'dec' },
      { label: 'symbol', value: 'symbol' },
    ],
    bic: [
      {
        label: 'includeBranchCode',
        value: 'includeBranchCode',
        options: [
          { label: 'True', value: true },
          { label: 'False', value: false },
        ],
      },
    ],
    bitcoinAddress: [
      {
        label: 'type',
        value: 'type',
        options: [
          { label: 'legacy', value: 'legacy' },
          { label: 'segwit', value: 'segwit' },
          { label: 'bech32', value: 'bech32' },
          { label: 'taproot', value: 'taproot' },
        ],
      },
      {
        label: 'network',
        value: 'network',
        options: [
          { label: 'mainnet', value: 'mainnet' },
          { label: 'testnet', value: 'testnet' },
        ],
      },
    ],
    creditCardNumber: [
      {
        label: 'issuer',
        value: 'issuer',
        options: [{ label: 'visa', value: 'visa' }],
      },
      { label: 'custom issuer', value: 'issuer' },
    ],
    iban: [
      {
        label: 'formatted',
        value: 'formatted',
        options: [
          { label: 'True', value: true },
          { label: 'False', value: false },
        ],
      },
      { label: 'countryCode', value: 'countryCode' },
    ],
    maskedNumber: [
      {
        label: 'ellipsis',
        value: 'ellipsis',
        options: [
          { label: 'True', value: true },
          { label: 'False', value: false },
        ],
      },
      {
        label: 'parens',
        value: 'parens',
        options: [
          { label: 'True', value: true },
          { label: 'False', value: false },
        ],
      },
      { label: 'length', value: 'length', isNumber: true },
    ],
    pin: [{ label: 'length', value: 'length', isNumber: true }],
  },
  image: {
    dataUri: [
      { label: 'width', value: 'width' },
      { label: 'height', value: 'height' },
      { label: 'color', value: 'color' },
      {
        label: 'type',
        value: 'type',
        options: [
          { label: 'svg-uri', value: 'svg-uri' },
          { label: 'svg-base64', value: 'svg-base64' },
        ],
      },
    ],
    url: [
      { label: 'width', value: 'width' },
      { label: 'height', value: 'height' },
    ],
    urlLoremFlickr: [
      { label: 'width', value: 'width' },
      { label: 'height', value: 'height' },
      { label: 'category', value: 'category' },
    ],
    urlPicsumPhotos: [
      { label: 'width', value: 'width' },
      { label: 'height', value: 'height' },
      { label: 'blur', value: 'blur' },
      {
        label: 'grayscale',
        value: 'grayscale',
        options: [
          { label: 'True', value: true },
          { label: 'False', value: false },
        ],
      },
    ],
    urlPlaceholder: [
      { label: 'width', value: 'width' },
      { label: 'height', value: 'height' },
      { label: 'backgroundColor', value: 'backgroundColor' },
      { label: 'textColor', value: 'textColor' },
      { label: 'text', value: 'text' },
      {
        label: 'format',
        value: 'format',
        options: [
          { label: 'gif', value: 'gif' },
          { label: 'jpeg', value: 'jpeg' },
          { label: 'jpg', value: 'jpg' },
          { label: 'png', value: 'png' },
          { label: 'webp', value: 'webp' },
        ],
      },
    ],
  },
  internet: {
    color: [
      { label: 'redBase', value: 'redBase' },
      { label: 'greenBase', value: 'greenBase' },
      { label: 'blueBase', value: 'blueBase' },
    ],
    displayName: [
      { label: 'firstName', value: 'firstName' },
      { label: 'lastName', value: 'lastName' },
    ],
    email: [
      { label: 'firstName', value: 'firstName' },
      { label: 'lastName', value: 'lastName' },
      { label: 'provider', value: 'provider' },
      {
        label: 'allowSpecialCharacters',
        value: 'allowSpecialCharacters',
        options: [
          { label: 'True', value: true },
          { label: 'False', value: false },
        ],
      },
    ],
    emoji: [{ label: 'types', value: 'types' }],
    httpStatusCode: [{ label: 'types', value: 'types' }],
    ipv4: [
      { label: 'cidrBlock', value: 'cidrBlock' },
      {
        label: 'network',
        value: 'network',
        options: [
          { label: 'any', value: 'any' },
          { label: 'loopback', value: 'loopback' },
          { label: 'private-a', value: 'private-a' },
          { label: 'private-b', value: 'private-b' },
          { label: 'private-c', value: 'private-c' },
          { label: 'test-net-1', value: 'test-net-1' },
          { label: 'test-net-2', value: 'test-net-2' },
          { label: 'test-net-3', value: 'test-net-3' },
          { label: 'link-local', value: 'link-local' },
          { label: 'multicast', value: 'multicast' },
        ],
      },
    ],
    password: [
      { label: 'length', value: 'length', isNumber: true },
      {
        label: 'memorable',
        value: 'memorable',
        options: [
          { label: 'True', value: true },
          { label: 'False', value: false },
        ],
      },
      { label: 'pattern', value: 'pattern' },
      { label: 'prefix', value: 'prefix' },
    ],
    url: [
      {
        label: 'appendSlash',
        value: 'appendSlash',
        options: [
          { label: 'True', value: true },
          { label: 'False', value: false },
        ],
      },
      {
        label: 'protocol',
        value: 'protocol',
        options: [
          { label: 'http', value: 'http' },
          { label: 'https', value: 'https' },
        ],
      },
    ],
    username: [
      { label: 'firstName', value: 'firstName' },
      { label: 'lastName', value: 'lastName' },
    ],
  },
  location: {
    cardinalDirection: [
      {
        label: 'abbreviated',
        value: 'abbreviated',
        options: [
          { label: 'True', value: true },
          { label: 'False', value: false },
        ],
      },
    ],
    countryCode: [
      {
        label: 'type',
        value: 'type',
        options: [
          { label: 'alpha-2', value: 'alpha-2' },
          { label: 'alpha-3', value: 'alpha-3' },
          { label: 'numeric', value: 'numeric' },
        ],
      },
      { label: 'customeType', value: 'type' },
    ],
    direction: [
      {
        label: 'abbreviated',
        value: 'abbreviated',
        options: [
          { label: 'True', value: true },
          { label: 'False', value: false },
        ],
      },
    ],
    latitude: [
      { label: 'max', value: 'max', isNumber: true },
      { label: 'min', value: 'min', isNumber: true },
      { label: 'precision', value: 'precision' },
    ],
    longitude: [
      { label: 'max', value: 'max', isNumber: true },
      { label: 'min', value: 'min', isNumber: true },
      { label: 'precision', value: 'precision' },
    ],
    nearbyGPSCoordinate: [
      { label: 'latitude', value: 'latitude' },
      { label: 'longitude', value: 'longitude' },
      { label: 'radius', value: 'radius' },
      {
        label: 'isMetric',
        value: 'isMetric',
        options: [
          { label: 'True', value: true },
          { label: 'False', value: false },
        ],
      },
    ],
    ordinalDirection: [
      {
        label: 'abbreviated',
        value: 'abbreviated',
        options: [
          { label: 'True', value: true },
          { label: 'False', value: false },
        ],
      },
    ],
    state: [
      {
        label: 'abbreviated',
        value: 'abbreviated',
        options: [
          { label: 'True', value: true },
          { label: 'False', value: false },
        ],
      },
    ],
    streetAddress: [
      {
        label: 'useFullAddress',
        value: 'useFullAddress',
        options: [
          { label: 'True', value: true },
          { label: 'False', value: false },
        ],
      },
    ],
    zipCode: [{ label: 'type', value: 'type' }],
  },
  lorem: {
    lines: [
      { label: 'min', value: 'min', isNumber: true },
      { label: 'max', value: 'max', isNumber: true },
    ],
    paragraph: [
      { label: 'min', value: 'min', isNumber: true },
      { label: 'max', value: 'max', isNumber: true },
    ],
    paragraphs: [
      { label: 'min', value: 'min', isNumber: true },
      { label: 'max', value: 'max', isNumber: true },
      { label: 'separator', value: 'separator' },
    ],
    sentence: [
      { label: 'min', value: 'min', isNumber: true },
      { label: 'max', value: 'max', isNumber: true },
    ],
    sentences: [
      { label: 'min', value: 'min', isNumber: true },
      { label: 'max', value: 'max', isNumber: true },
      { label: 'separator', value: 'separator' },
    ],
    slug: [
      { label: 'min', value: 'min', isNumber: true },
      { label: 'max', value: 'max', isNumber: true },
    ],
    word: [
      { label: 'min', value: 'min', isNumber: true },
      { max: 'max', value: 'max', isNumber: true },
      {
        label: 'strategy',
        value: 'strategy',
        options: [
          { label: 'fail', value: 'fail' },
          { label: 'shortest', value: 'shortest' },
          { label: 'closest', value: 'closest' },
          { label: 'longest', value: 'longest' },
          { label: 'any-length', value: 'any-length' },
        ],
      },
    ],
    words: [
      { label: 'min', value: 'min', isNumber: true },
      { label: 'max', value: 'max', isNumber: true },
    ],
  },
  number: {
    bigInt: [
      { label: 'min', value: 'min', isNumber: true },
      { label: 'max', value: 'max', isNumber: true },
    ],
    binary: [
      { label: 'min', value: 'min', isNumber: true },
      { label: 'max', value: 'max', isNumber: true },
    ],
    float: [
      { label: 'min', value: 'min', isNumber: true },
      { label: 'max', value: 'max', isNumber: true },
      {
        label: 'fractionDigits',
        value: 'fractionDigits',
        isNumber: true,
        rules: {
          or: {
            key: 'multipleOf',
          },
        },
      },
      {
        label: 'multipleOf',
        value: 'multipleOf',
        isNumber: true,
        rules: {
          or: {
            key: 'fractionDigits',
          },
        },
      },
    ],
    hex: [
      { label: 'min', value: 'min', isNumber: true },
      { label: 'max', value: 'max', isNumber: true },
      { label: 'multipleOf', value: 'multipleOf', isNumber: true },
    ],
    int: [
      { label: 'min', value: 'min', isNumber: true },
      { label: 'max', value: 'max', isNumber: true },
    ],
    octal: [
      { label: 'min', value: 'min', isNumber: true },
      { label: 'max', value: 'max', isNumber: true },
    ],
    romanNumeral: [
      { label: 'min', value: 'min', isNumber: true },
      { label: 'max', value: 'max', isNumber: true },
    ],
  },
  person: {
    firstName: [
      {
        label: 'Gender',
        value: 'sex',
        options: [
          { label: 'male', value: 'male' },
          { label: 'female', value: 'female' },
        ],
      },
    ],
    fullName: [
      {
        label: 'Gender',
        value: 'sex',
        options: [
          { label: 'male', value: 'male' },
          { label: 'female', value: 'female' },
        ],
      },
      { label: 'firstName', value: 'firstName' },
      { label: 'lastName', value: 'lastName' },
    ],
    lastName: [
      {
        label: 'Gender',
        value: 'sex',
        options: [
          { label: 'male', value: 'male' },
          { label: 'female', value: 'female' },
        ],
      },
    ],
    middleName: [
      {
        label: 'Gender',
        value: 'sex',
        options: [
          { label: 'male', value: 'male' },
          { label: 'female', value: 'female' },
        ],
      },
    ],
    prefix: [
      {
        label: 'Gender',
        value: 'sex',
        options: [
          { label: 'male', value: 'male' },
          { label: 'female', value: 'female' },
        ],
      },
    ],
  },
  phone: {
    number: [
      {
        label: 'style',
        value: 'style',
        options: [
          { label: 'human', value: 'human' },
          { label: 'national', value: 'national' },
          { label: 'international', value: 'international' },
        ],
      },
    ],
  },
  string: {
    alpha: [
      { label: 'min', value: 'min', isNumber: true },
      { label: 'max', value: 'max', isNumber: true },
      { label: 'casing', value: 'casing' },
      { label: 'exclude', value: 'exclude' },
    ],
    alphanumeric: [
      { label: 'min', value: 'min', isNumber: true },
      { label: 'max', value: 'max', isNumber: true },
      { label: 'casing', value: 'casing' },
      { label: 'exclude', value: 'exclude' },
    ],
    binary: [
      { label: 'min', value: 'min', isNumber: true },
      { label: 'max', value: 'max', isNumber: true },
      { label: 'prefix', value: 'prefix' },
    ],
    fromCharacters: [
      { label: 'min', value: 'min', isNumber: true },
      { label: 'max', value: 'max', isNumber: true },
      { label: 'characters', value: 'characters' },
    ],
    hexadecimal: [
      { label: 'min', value: 'min', isNumber: true },
      { label: 'max', value: 'max', isNumber: true },
      { label: 'prefix', value: 'prefix' },
      { label: 'casing', value: 'casing' },
    ],
    nanoid: [
      { label: 'min', value: 'min', isNumber: true },
      { label: 'max', value: 'max', isNumber: true },
    ],
    numeric: [
      { label: 'min', value: 'min', isNumber: true },
      { label: 'max', value: 'max', isNumber: true },
      {
        label: 'allowLeadingZeros',
        value: 'allowLeadingZeros',
        options: [
          { label: 'True', value: true },
          { label: 'False', value: false },
        ],
      },
      { label: 'exclude', value: 'exclude' },
    ],
    octal: [
      { label: 'min', value: 'min', isNumber: true },
      { label: 'max', value: 'max', isNumber: true },
      { label: 'prefix', value: 'prefix' },
    ],
    symbol: [
      { label: 'min', value: 'min', isNumber: true },
      { label: 'max', value: 'max', isNumber: true },
    ],
    ulid: [{ label: 'refDate', value: 'refDate', isDate: true }],
    uuid: [],
  },
  word: {
    adjective: [
      { label: 'min', value: 'min', isNumber: true },
      { label: 'max', value: 'max', isNumber: true },
      {
        label: 'strategy',
        value: 'strategy',
        options: [
          { label: 'fail', value: 'fail' },
          { label: 'shortest', value: 'shortest' },
          { label: 'closest', value: 'closest' },
          { label: 'longest', value: 'longest' },
          { label: 'any-length', value: 'any-length' },
        ],
      },
    ],
    adverb: [
      { label: 'min', value: 'min', isNumber: true },
      { label: 'max', value: 'max', isNumber: true },
      {
        label: 'strategy',
        value: 'strategy',
        options: [
          { label: 'fail', value: 'fail' },
          { label: 'shortest', value: 'shortest' },
          { label: 'closest', value: 'closest' },
          { label: 'longest', value: 'longest' },
          { label: 'any-length', value: 'any-length' },
        ],
      },
    ],
    conjunction: [
      { label: 'min', value: 'min', isNumber: true },
      { label: 'max', value: 'max', isNumber: true },
      {
        label: 'strategy',
        value: 'strategy',
        options: [
          { label: 'fail', value: 'fail' },
          { label: 'shortest', value: 'shortest' },
          { label: 'closest', value: 'closest' },
          { label: 'longest', value: 'longest' },
          { label: 'any-length', value: 'any-length' },
        ],
      },
    ],
    interjection: [
      { label: 'min', value: 'min', isNumber: true },
      { label: 'max', value: 'max', isNumber: true },
      {
        label: 'strategy',
        value: 'strategy',
        options: [
          { label: 'fail', value: 'fail' },
          { label: 'shortest', value: 'shortest' },
          { label: 'closest', value: 'closest' },
          { label: 'longest', value: 'longest' },
          { label: 'any-length', value: 'any-length' },
        ],
      },
    ],
    noun: [
      { label: 'min', value: 'min', isNumber: true },
      { label: 'max', value: 'max', isNumber: true },
      {
        label: 'strategy',
        value: 'strategy',
        options: [
          { label: 'fail', value: 'fail' },
          { label: 'shortest', value: 'shortest' },
          { label: 'closest', value: 'closest' },
          { label: 'longest', value: 'longest' },
          { label: 'any-length', value: 'any-length' },
        ],
      },
    ],
    preposition: [
      { label: 'min', value: 'min', isNumber: true },
      { label: 'max', value: 'max', isNumber: true },
      {
        label: 'strategy',
        value: 'strategy',
        options: [
          { label: 'fail', value: 'fail' },
          { label: 'shortest', value: 'shortest' },
          { label: 'closest', value: 'closest' },
          { label: 'longest', value: 'longest' },
          { label: 'any-length', value: 'any-length' },
        ],
      },
    ],
    verb: [
      { label: 'min', value: 'min', isNumber: true },
      { label: 'max', value: 'max', isNumber: true },
      {
        label: 'strategy',
        value: 'strategy',
        options: [
          { label: 'fail', value: 'fail' },
          { label: 'shortest', value: 'shortest' },
          { label: 'closest', value: 'closest' },
          { label: 'longest', value: 'longest' },
          { label: 'any-length', value: 'any-length' },
        ],
      },
    ],
    words: [
      { label: 'min', value: 'min', isNumber: true },
      { label: 'max', value: 'max', isNumber: true },
    ],
  },
};
