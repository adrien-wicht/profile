# Adrien's profile

This is Adrien's profile website repository. The website has been designed to allow easy update for non-tech people by updating a set of three files: `interests.json`, `publications.json` and `vita.json`. They each represent the three main sections of the website. Moreover, these three files can be found in the `src/data/` directory. For more information on the `json` format please visit the [official json website](https://www.json.org/json-en.html).

## Prerequisites

Normally, the main developper of the website should have installed a development environment on your computer. If it is not the case please make sure that `git` and `npm` are installed and in your path. Furthermore, you should use a minimal IDE or text editor to edit the `json` files.

## Updating section's information
Before performing any modification, please make sure that your repository is up-to-date by running `git pull`.

### Update publications

To update a publication, please add an entry in `publications.json` like the example below
```json
 {
    "id": "zoteroKey",
    "filename": "zoteroKey.pdf",
    "download": "https://raw.githubusercontent.com/adrien-wicht/profile/main/publications/zoteroKey.pdf",
    "type": "zotero type (e.g., journal)",
    "category": { "name": "one of 'Work in progress', 'Publications' or 'Policy papers'", "colour": "respectively 'primary', 'success' or 'info'" },
    "abstract": "your abstract",
    "language": "the language in ISO format (e.g., 'en')",
    "page": "number of pages",
    "title": "the complete title of your work",
    "author": [
      {
        "family": "author1 family name",
        "given": "author1 first name",
        "link": "the link to author's1 page"
      },
      {
        "family": "author2 family name",
        "given": "author2 first name",
        "link": "the link to author's2 page"
      }
    "issued": {
      "date-parts": [["the year"]]
    },
    "citation-key": "zoteroKey",
    "bibtex": "bibtex key beginning with '@' and on one line"
  },
```
The `download` and `bibtex` key may be evicted or left blank. If the `download` key is not blank, please make sure to put your `pdf` file with the correct naming (`zoteroKey.pdf`) in the `publications` **folder**.

### Update curriculum events

To add or update a curriculum event, edit the `vita.json` file like shown below.
```json
  {
    "achievement": "what",
    "timeframe": "when-toWhen",
    "category": "one of Education, Experience or Teaching",
    "description": "",
    "location": "where"
  }
```

### Update interests
To add or update an interest, edit `interests.json` file like shown below.
```json
  {
    "field": "e.g., research",
    "title": "name of interest"
  }
```
## Building
Prior to building, it is highly recommended to test that your modifications are viable by spawning the local website with `npm start`, which is then available at [http://localhost:3000/profile](http://localhost:3000/profile). After that, you'll want to `add` (or stage) your modifications with `git add <files>`, `commit` them with a friendly message (e.g., `git commit -m "update: added a new publication"`) and finally `push` them with `git push`.

To build your website a single command suffices: `npm run deploy`. This command will effectively update the resources on the github page.