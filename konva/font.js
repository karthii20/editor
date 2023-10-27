 let fruits = new Map([
    ["Poppins",  {
    "fontFamily": "Poppins",
    "fontStyle": "normal",
    "fontWeight": 100,
    "fontDisplay": "swap",
    "src": "https://fonts.gstatic.com/s/poppins/v20/pxiGyp8kv8JHgFVrLPTucXtAKPY.woff2",
    "unicodeRange": "U+0900-097F, U+1CD0-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FF"
  }],
    ["Roboto", {
      "fontFamily": "Roboto",
      "fontStyle": "normal",
      "fontWeight": 600,
      "fontDisplay": "swap",
      "src": "https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmSU5fCRc4EsA.woff2",
      "unicodeRange": "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F"
    }],
    ["cosmicNeu",{
        "fontFamily": 'Comic Neue',
        "fontStyle": "normal",
        "fontWeight": 400,
        "src": "url(https://fonts.gstatic.com/s/comicneue/v8/4UaHrEJDsxBrF37olUeD96rp5w.woff2) format('woff2')",
        "unicodeRange":" U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"
    }],
]);

function getFont(font) {
  return fruits.get(font);
}