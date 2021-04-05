const booksData = [
  {
    book: "maximized",
    author: "Martin",
    category: "self-help",
    totalPages: 667,
    year: 2007,
    coverPhoto:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAITSURBVDjLlZLNi1JhFMaHiP6AvN0Ls4vob2jauYiIFoGBtnFlG1fSws1gDBdXLhIhdaEuvILfjtfK0cyvRflBeHWUEBW1nHGKpmkcpWw+ani6r9DCutn0wuGFl/P8znPOeZcALP0ekUhE7vf7HR6PZ+ByuQZ2u91hsVjkUrl/PITDYbnP5xMajQb6/T46nQ5KpRJMJpNgNBrlkoB4PL7M8zwbCoWaXq93RMStVguVSgXlchmCICCXy8FgMDgkAdFolK1Wq+j1emi326jX6ygUCsjn80ilUkgkEigWi9Dr9ac6nY7TarUrc4BAINDsdruo1WpzQtEZRDiCwSDE1pDJZBCLxaDRaLg5gDispnhmvRKrJJFU/SUWBwqO4+B2u5HNZqFWq8dzAKfTyRIh6ZVAksnkrDpxkk6nIW4F4nxmrghMpVLNO7Barctms5m12Wx46bw23XRf/TF5JsP4qQwHT2QYRWXYW7+Ix6vXT5VKJadQKFYk1/g1x5z/kmUU0+otnHy04Hi4hu8HHD4n6elegr7/z38wyTA3xy+Y7mHvAb69UWDauI0PiSuQEkoCRil663CwhuMddlad3EfbD/F+4zIWAvaf0+dEm48+bdDYjdMYC3dn4snmvYViya9MYoe/NNx/fQdb69R4EKGYMwOGPHVhO0qt7r66gXdhKrJIKAkQq6nehqijflCmOov4ry38T/wEpFjkJMz8PioAAAAASUVORK5CYII=",
    chapters: [
      {
        chapterName: "Casmerodius albus",
        chapterPages: 49,
      },
      {
        chapterName: "Lorythaixoides concolor",
        chapterPages: 64,
      },
      {
        chapterName: "Ammospermophilus nelsoni",
        chapterPages: 39,
      },
      {
        chapterName: "Buteo jamaicensis",
        chapterPages: 79,
      },
    ],
  },
  {
    book: "logistical",
    author: "Daphna",
    category: "technology",
    totalPages: 511,
    year: 2007,
    coverPhoto:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAGrSURBVDjLxZO7ihRBFIa/6u0ZW7GHBUV0UQQTZzd3QdhMQxOfwMRXEANBMNQX0MzAzFAwEzHwARbNFDdwEd31Mj3X7a6uOr9BtzNjYjKBJ6nicP7v3KqcJFaxhBVtZUAK8OHlld2st7Xl3DJPVONP+zEUV4HqL5UDYHr5xvuQAjgl/Qs7TzvOOVAjxjlC+ePSwe6DfbVegLVuT4r14eTr6zvA8xSAoBLzx6pvj4l+DZIezuVkG9fY2H7YRQIMZIBwycmzH1/s3F8AapfIPNF3kQk7+kw9PWBy+IZOdg5Ug3mkAATy/t0usovzGeCUWTjCz0B+Sj0ekfdvkZ3abBv+U4GaCtJ1iEm6ANQJ6fEzrG/engcKw/wXQvEKxSEKQxRGKE7Izt+DSiwBJMUSm71rguMYhQKrBygOIRStf4TiFFRBvbRGKiQLWP29yRSHKBTtfdBmHs0BUpgvtgF4yRFR+NUKi0XZcYjCeCG2smkzLAHkbRBmP0/Uk26O5YnUActBp1GsAI+S5nRJJJal5K1aAMrq0d6Tm9uI6zjyf75dAe6tx/SsWeD//o2/Ab6IH3/h25pOAAAAAElFTkSuQmCC",
    chapters: [
      {
        chapterName: "Eira barbata",
        chapterPages: 100,
      },
      {
        chapterName: "Litrocranius walleri",
        chapterPages: 57,
      },
      {
        chapterName: "Tetracerus quadricornis",
        chapterPages: 86,
      },
      {
        chapterName: "Drymarchon corias couperi",
        chapterPages: 59,
      },
      {
        chapterName: "unavailable",
        chapterPages: 95,
      },
    ],
  },
  {
    book: "Ameliorated",
    author: "Sybilla",
    category: "agriculture",
    totalPages: 592,
    year: 2009,
    coverPhoto:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAADESURBVCjPvdCxqcMwFIXhw/MDF3HgqRIErEqdOlcijSqDcZPCYE+QCTSBJsgGmeBu4AmyyFnjpnjCZcrwtx+nOFB8Dl8Ba1lllWVTzNsoSWIZQnh6cdOxsHKRf58kUhF2X9xueYCFtwqiDFT4XmHvZj/AjfNrzCnHPLwCFa63cmaXDzBzrAtBPBUK03d7y2aqYGSqwMuFNpi7ou1/iVxBYqzAyR9NPrG9NuGHuCqgSCXKIGFTuM2Kke7RluaJB6bvXf25N1fx7E1Sq2rLAAAAAElFTkSuQmCC",
    chapters: [
      {
        chapterName: "Oncorhynchus nerka",
        chapterPages: 84,
      },
      {
        chapterName: "Gazella thompsonii",
        chapterPages: 88,
      },
      {
        chapterName: "Threskionis aethiopicus",
        chapterPages: 75,
      },
    ],
  },
  {
    book: "Optimized",
    author: "Madalena",
    category: "business",
    totalPages: 734,
    year: 2001,
    coverPhoto:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAKgSURBVDjLjZPfS5NRGMd3F/4JRRfRVQRdeJOE1EVkaq52MfDHhbS3aeEk82IGMzaaVrrcsh+umUQ3QYsWlOKEbcrKzW3qxNqWG2IsreYkl/pOt7379e28pyQXGR348HI4z/M53+fAKwAg2OaU8q3kbI/HJtJ68gSIdJ6kSDuZFGom8qVXnX07a7cp2FTecqZX2SS+b6YQi/9klU0hGGGhHFqC9N584kTz8J5dBUKNK7GxxWHmc5aQgecTh/GFFFKZHGYiWdwYWcJJhf3ZroIqjSvJC2aJYPZLFlOLaTg/cgivbIJPtrK2hTLVeOavArVaXVSlmeDWNzn4yW3+5dyvFGnY5rZgDsSxTkY73eHgJBJJUYGANEsJcfJYWCOC4HIeH4jAR0TexQwdY2w+Qc7SqOh0oq6uLi4Wi6VUQBrLBgYG4PV6ca7HjRgRhKJ5BAn+rzm8J6O4SQoHGSVGBGduuuFwOCCXy1FeXl7GC3xkIRqNQqlU/hd8rdPpRHV19QIv4LLZLHimp6fBsuw/cblc2K5vbW3NC1QqFTiOo5hMJoTDYSr6kyev+yDvP4+Ld0RgblfiqfUhGIaBoL29HcFgkGIwGBAKhWC32wt4YOyG2sRgOKDHu4gVvTYZanqPoLTmMARtbW2w2WwUnU6HQCAAi8VSgERTgUH/XQzO3Qe/tKON6B29hJKmfRCQOWA2myl6vR7kTSgKhQItLS00pvBaMUYCj7FzDfn0KGneC4FMJssZjUYq4BtfvHyFsTcTBRy/cgA91gvoskpoc5dFQhMcbSICqVT6qL6+3ldbWwtG70YiyWF1g8M3wsp6CpFYEprnnRBrD0FnbaA3819+X1yz31HwLzB6T66xfwqNht80UCYhvN6MY5cP0tgEltDN9/wAJ277Y3yZERAAAAAASUVORK5CYII=",
    chapters: [
      {
        chapterName: "Phalacrocorax albiventer",
        chapterPages: 45,
      },
      {
        chapterName: "Anas punctata",
        chapterPages: 25,
      },
      {
        chapterName: "Cervus duvauceli",
        chapterPages: 71,
      },
      {
        chapterName: "Cynictis penicillata",
        chapterPages: 69,
      },
    ],
  },
  {
    book: "system-worthy",
    author: "Reba",
    category: "agriculture",
    totalPages: 257,
    year: 2007,
    coverPhoto:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAHVSURBVDjLjZPLaiJBFIZNHmJWCeQdMuT1Mi/gYlARBRUkao+abHUhmhgU0QHtARVxJ0bxhvfGa07Of5Iu21yYFPyLrqrz1f+f6rIRkQ3icca6ZF39RxesU1VnAVyuVqvJdrvd73Y7+ky8Tk6n87cVYgVcoXixWNByuVSaTqc0Ho+p1+sJpNvtksvlUhCb3W7/cf/w+BSLxfapVIqSySRlMhnSdZ2GwyHN53OaTCbU7/cFYBgG4RCPx/MKub27+1ur1Xqj0YjW6zWxCyloNBqUSCSkYDab0WAw+BBJeqLFtQpvGoFqAlAEaZomuc0ocAQnnU7nALiJ3uh8whgnttttarVaVCgUpCAUCgnQhMAJ+gG3CsDZa7xh1mw2ZbFSqYgwgsGgbDQhcIWeAHSIoP1pcGeNarUqgFKpJMLw+/0q72azkYhmPAWIRmM6AGbXc7kc5fN5AXi9XgWACwAguLEAojrfsVGv1yV/sVikcrksAIfDIYUQHEAoPgLwT3GdzWYNdBfXh3xwApDP5zsqtkoBwuHwaSAQ+OV2u//F43GKRCLEc5ROpwVoOngvBXj7jU/wwZPPX72DT7RXgDfIT27QEgvfKea9c3m9FsA5IN94zqbw9M9fAEuW+zzj8uLvAAAAAElFTkSuQmCC",
    chapters: [
      {
        chapterName: "Sylvicapra grimma",
        chapterPages: 52,
      },
      {
        chapterName: "Litrocranius walleri",
        chapterPages: 89,
      },
      {
        chapterName: "Halcyon smyrnesis",
        chapterPages: 94,
      },
      {
        chapterName: "Ardea golieth",
        chapterPages: 17,
      },
      {
        chapterName: "Delphinus delphis",
        chapterPages: 69,
      },
      {
        chapterName: "Macropus agilis",
        chapterPages: 4,
      },
      {
        chapterName: "Diceros bicornis",
        chapterPages: 22,
      },
      {
        chapterName: "Anitibyx armatus",
        chapterPages: 24,
      },
      {
        chapterName: "Chlamydosaurus kingii",
        chapterPages: 15,
      },
    ],
  },
  {
    book: "dedicated",
    author: "Hunt",
    category: "agriculture",
    totalPages: 281,
    year: 2009,
    coverPhoto:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAH4SURBVDjLpZPJiiJBEIb7oeqd6qQgoiNaavoCIgqKoBcvih48eBJE8iCKIOKWLgcP7mup5YKiYnRG0l2OdNPNMAlBlZn+X/wRkfUGAG//E182er2e1O12SafToe12W2WMqc1mkzYaDVKr1aQfAVwsczFbrVZwOp3gfr+LOB6PMJ/PoVqtskqlIn8L+BBrl8sFcOFzv9+DpmlwPp/FHkLL5bJWKpXkF8CHbfYp3m63sFgsQFVVEev1GqbTqQ6hlLJ8Pi/pAF4vQdt/i51O54tYURSxj6vf70MmkyE6gDeLIhmtYq1W6x8BQOhkMgGj0SgAeIb92Gw2kEqlqA5otVoqNgsPLBYLD6sQYGaDwcDDCA6HQ/xGF9frFeLxuKoD+JgEYLfbgdtNwGw2CwACbTYbmEwmsNvtws2ni1gs9gTU63WKHccylssluFxuXoILZrOZECBMUZwwHo/FZAaDAUSj0WcJfL4EDx+PhxCgTY/HIzJioHVCCAyHQ7jdblAsFiEcDj+byOcqFQoFhiXgQhFmR+hoNBJCfGICfOdixkN6uUi5XE7OZrMajg3/eDgchBsE4WXCzGidC7VAICB/e5XT6bScTCYZL0nYxp5gzTh3fnmAC5nP55N//JgSiYQUiURIKBSiwWBQ9fv9KhdRr9dL+Lv069f4r/EO4RAxpm00KCQAAAAASUVORK5CYII=",
    chapters: [
      {
        chapterName: "Ramphastos tucanus",
        chapterPages: 85,
      },
      {
        chapterName: "Oryx gazella callotis",
        chapterPages: 45,
      },
      {
        chapterName: "Helogale undulata",
        chapterPages: 63,
      },
      {
        chapterName: "Procyon lotor",
        chapterPages: 78,
      },
      {
        chapterName: "unavailable",
        chapterPages: 19,
      },
      {
        chapterName: "Eurocephalus anguitimens",
        chapterPages: 15,
      },
      {
        chapterName: "unavailable",
        chapterPages: 19,
      },
      {
        chapterName: "Grus canadensis",
        chapterPages: 39,
      },
      {
        chapterName: "Pavo cristatus",
        chapterPages: 22,
      },
      {
        chapterName: "Hymenolaimus malacorhynchus",
        chapterPages: 39,
      },
    ],
  },
  {
    book: "motivating",
    author: "Alanson",
    category: "technology",
    totalPages: 332,
    year: 1999,
    coverPhoto:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAKsSURBVDjLhZJfSFNxFMcHPUUP0aP0EoSEVEaY5QixFzMTRtLDCH1QqIbEKBCzTEyxPwotsbLUETSHmTUTm86mrk03N9eW253Oua2pW8OcS6Z3d7uzWd/uZi0qaQfOww/O93N+53wPCwDr7yyoJ0oqRG61oM9P3u3xkUUCQp3C7SnZqnZLsUDqXzK6wpjxrGPKHcHYDAVei3NpW86TkqSAcqZzTOz8vI4PLhp6ZxjmBRpycxAZZXJ1UkBjr4+c9myKJxw0NLYQlNMUxmcpFDZayaSAum4fScxHMGEPQx0XhzBMUBhlxsivI5IDCutNaqU1CNM8jRELhUFTrHsIL3Wr2J7XmXyEnQVdNUUCKz06E4LUSOK1fg1ygpmfPxpl7eI3/xdwmK/j8oUum/jtHERDC2iQeHHrhQePemfR2mNBToV6hZVyu2ZLwH6e4tClNqdVwyzL5o3AOEfD8DEMLfN96ZtevOuqhk7WAKXkJoRVJ+1VnPTcPwDZFTqhbHINVg/N+B6C0RUD0Bjol8KqbYduahEq8wqGDH7I9XY8rT0VOp994EQCUNpkd4zbg1BaSIxZKbxnuusdYfQ/vYIxsxerwa+4U1mNWCwGIuge1OAa56AqAeAL3bTBEYJ42AcV47uOsTG2fZnoKmSG5bjwFyC6sYEOlRvNl9mrCQCvxRXR2kPoVCxDYQlu3sAUhVcPStGtWcT3n4BYfmMeDwdmcY+XGUgAcq+bXGKlH31afxygYm5BbiZxv/wcOmUqfApE45BYzH+J4nHHM5SxUxW/7Tgmzd/B1beWNdsxwgjHbRSzTBIdXQo08dkQSSR4PkRAPDCJdlEbqjhpgTOZaex/Dmk3d3gpg2/w5t0gAjmVRDT1gi6653Rr8OzxPLq2+OhGfXF64GLWXjnnyL6sWP0PKd/8SStdk8YAAAAASUVORK5CYII=",
    chapters: [
      {
        chapterName: "Nyctea scandiaca",
        chapterPages: 22,
      },
      {
        chapterName: "Cercatetus concinnus",
        chapterPages: 54,
      },
      {
        chapterName: "Myotis lucifugus",
        chapterPages: 5,
      },
      {
        chapterName: "Agama sp.",
        chapterPages: 55,
      },
      {
        chapterName: "Lasiodora parahybana",
        chapterPages: 37,
      },
      {
        chapterName: "Uraeginthus angolensis",
        chapterPages: 54,
      },
      {
        chapterName: "Macropus agilis",
        chapterPages: 64,
      },
      {
        chapterName: "Ninox superciliaris",
        chapterPages: 15,
      },
    ],
  },
  {
    book: "superstructure",
    author: "Darell",
    category: "business",
    totalPages: 484,
    year: 2012,
    coverPhoto:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAJZSURBVDjLjZNNaBNREMf/25Q1Lqmk2NYamo+amI+mREOhFhRS0CKKN8FT8NSeiiBIDiJYk4MXEcGTwVtI48FQouLNix48RCoh4GETqAmioTFG0qT52HT3ObtgqiGHPBgGdmd+M2/m/zjGGPpPLBazyLL8XpIkW7fbRavV+tZoNFbC4bDYHzuKAafT6TyZmZmxCYIAFVAoFMz5fP4x/brWHzsyCFCv16fT6TQymYwG0Ov1qNVqlkGxAwEUjI2NDa5UKmmAdrut2dAAnuc1z3GcBvgLGRpAM0AoFGJGoxE0SM3Ub0MDaOLwer2gQSKbzeKEoYIHa1P2nXfBqaEA1C5TK4qiCL/UwOLxInznbgiGgi6N27dWB64xkUjYyImKovBk2v3NZjOW2E8I7ss4dtKPnYmktdIsPX8YDJri8Xik14GaTIISXS4XTztHuVxGNBrF1otnqBt3MTZhhLz3GpO+m4C7C+dpezgQCNzvdUAVRY/Hw7vdbphMJgSDQVJfEwfFBKZP+elOn5HefIWltbuQxvdx3jqOl8lqmFIjGoCkypN0kUqlVBFpKzOw77h05gjGxptU/SvAFMiNT5hdvoO9t0/B5PbhENUEdWjValUDNOo12PU5GC1noTSzlNvCwnUXFOkHqTIHm+8qVuZ0hwDqQAM4HA44nU4sziqwzy9DGKuAHfwiRemwvZVTLwulncOk04qLrlF8iMzPceprXF9fZ8VisSeae1c6uLC6Cd1IgQC/KZH9t3ndURd2v2SQexNJcoOe88dHCxUmKwJTGLWv/GOs56F6xrb/AFceRXFTtLBJAAAAAElFTkSuQmCC",
    chapters: [
      {
        chapterName: "Ateles paniscus",
        chapterPages: 78,
      },
      {
        chapterName: "Colaptes campestroides",
        chapterPages: 60,
      },
      {
        chapterName: "Phalacrocorax niger",
        chapterPages: 80,
      },
      {
        chapterName: "Megaderma spasma",
        chapterPages: 42,
      },
      {
        chapterName: "Alligator mississippiensis",
        chapterPages: 73,
      },
      {
        chapterName: "Hystrix cristata",
        chapterPages: 9,
      },
      {
        chapterName: "Irania gutteralis",
        chapterPages: 67,
      },
      {
        chapterName: "Lophoaetus occipitalis",
        chapterPages: 13,
      },
      {
        chapterName: "Lama guanicoe",
        chapterPages: 98,
      },
      {
        chapterName: "Columba livia",
        chapterPages: 45,
      },
    ],
  },
  {
    book: "modular",
    author: "Juan",
    category: "agriculture",
    totalPages: 782,
    year: 2002,
    coverPhoto:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAI1SURBVDjLpZPNS5RRFIef98NRG3M05gOaqMhCAoskEFtVO2kT5DZo1SZoW9EiFGrVok1/QhRGmlHYJoQy8wuJIoLQ0iH8nCGcMmzm3ntOi1edWbQJLxzOPZvffc7v3OOpKjs5IcCDkbVbqlx2KvtEBCdgRXBOcKJYJ1XhcFZxIlN3Lh7pCAFE9Wp3x+7k/7zc0zd7fJvAiSQB4v1XQBWcBXFgTHQvl8CUoWTAGH7fGMYYV1slsOWDwt4UiI1C7aZICUwJbBk+LwFgrKt44JxsCniwmAeViEQkInFbGchkAChvCqCq3H+5pOsbRh+OrKiqat/bZVVVffwuqp+MRfXgeJTzxQ29dG9KVTUiME4QVcIA+sdWCQKfgfFVwgCeTa4yunKbN4OCilAz3cPR7C7KJiLwt1pQIAw8uk+lCX240JmmxofzHWl8L6C15TC+H3DuZCYarZWKB8YJKhD68GI6z2ThLhNDiqoSvr+O73vMzecI/ICnEytkEz5KtYAVVJWaALraU4wNwaEDB/mWm6erPUXg3aSztRlxysxCkT2NtcRrw0oLViK1wPd49aEAwFwuh4fH8McCRkBEmV0s0tQQI9lYtz25EMBaG3ngw9ljScLgGmfakrz+VOB0W5KB8TxfF36SiMdIJeoQUQKfCoFxUQtt+xtY+rFBS6aeueV1ss0xvnwvkk1AoiFGuqk+Ig08RFSqPpKO9j6aOVF2EjfWYazDWcE4wTr7z11Y+/XnOYC303X+CyNCWo09HetwAAAAAElFTkSuQmCC",
    chapters: [
      {
        chapterName: "Leptoptilos crumeniferus",
        chapterPages: 60,
      },
      {
        chapterName: "Crax sp.",
        chapterPages: 37,
      },
      {
        chapterName: "Corythornis cristata",
        chapterPages: 1,
      },
      {
        chapterName: "Sciurus vulgaris",
        chapterPages: 97,
      },
      {
        chapterName: "Chionis alba",
        chapterPages: 90,
      },
      {
        chapterName: "Phoenicopterus ruber",
        chapterPages: 99,
      },
    ],
  },
  {
    book: "Decentralized",
    author: "Lammond",
    category: "self-help",
    totalPages: 522,
    year: 2013,
    coverPhoto:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAKYSURBVBgZBcFNiFZlGADQ87z3zjfjzDiMk5VimERmBmFpKgVRVATRQLRo5aaNhFA7pZW0qV1Ci0BoUVRQtLc2UmQaJVhBVChUhP2YDuow5sz3c7/36Zx46uipF9fNTR4oYQ82oC+QQVZdrb8tX83PY+X6kdPHF4cAAPHMG2dOf/jKnp2lxHymBiAT0tJ/Ix+dW/bvxcHqLz+dXzhzfHEAAG1pYkevbeZ/vqIpJWRlnFXXpbXR2OPb19t/T+tsXZrOeu/1x17+dMOpt58dAJSImM3MptcUbdAUmiCCIlBtnutZ3LvZtrsn17VzM+8BQEkCCkqEEqFEKBFKEy5dW3Pn7Mh9C+Hgw7doJpoXAKCFTNoGEeo4KaFt6GXx69U0rJ1ahx69a1K0pQOANpNEG0WVooTA+ycuWD/J6rCzYbbnnytrPivs2jQ7dfidH/P6ypovfvh7f5uoiKAIiaysrfY9sW+H53bPOvHtX44e2AkAPvhySa1xttSOTCoyE6kUVgcj12504OS5ywD6HSsDlpaHIqq21pzKTBIASSmhSUbj6tih3WpNiUaabhkMBlZuDrWjYfZHNade+24oI2UGlYWJoj8Yef2TP5SgG1d1XCUyk2R6omq7bmw8ZvPchAduLcbJODh7IQ3GnaZMIIWxiJA1ZVZdNzIcdtpuUGtXaw7H4ptLnRTgxurIRLQOLa7X1SEKSUY11fa8+fFFV1duakf98eWZXrPx1fuHM1mzVMCRU6kxoVrz7vcv2Ti9VSiWVv90cO9biimrg6E2Io89ffir5yPiwZQL6Eu2b52d2raJ22dveHLXPvO9LRSW+1vcNtOZ7tFGiMwEAAAPHTr59fY71j0yPzlvqp3T1ZGoVeRYjVXnL/7uysrI/62cRssvlMuuAAAAAElFTkSuQmCC",
    chapters: [
      {
        chapterName: "Amazona sp.",
        chapterPages: 27,
      },
      {
        chapterName: "Dasypus novemcinctus",
        chapterPages: 35,
      },
      {
        chapterName: "Dendrocygna viduata",
        chapterPages: 75,
      },
      {
        chapterName: "Meles meles",
        chapterPages: 29,
      },
      {
        chapterName: "Tiliqua scincoides",
        chapterPages: 10,
      },
      {
        chapterName: "Actophilornis africanus",
        chapterPages: 74,
      },
    ],
  },
  {
    book: "protocol",
    author: "Ariela",
    category: "technology",
    totalPages: 793,
    year: 1995,
    coverPhoto:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAJPSURBVDjLjZJPSFRRFMZ/7804ODhT42iaxZR/NiEFFVESGFHWTilo1SoqEGplQUQEtnSV4KrARRAELZKgVRshgoggUKgoDCUEIxumxpyZ996995wWM/knDfrgwoUDv++c7xxPVQG4f7mjG3jPRhUHx+cy/EPevUvtB4E7QH8q28r5W8OU8m8AaGg+zMPhm1RKSwCPgInB8bknawFxYOLkmbO7kqk0ZnYKVcWFJQBUld59Ofy2LlT13POnzwaADYDdydQWol+LWLHMPR4FVUDJ61sUJVicp755ZwJI/D1CHABxqLX4me2Is6jK+jmDMlGxvGkGcQAVQaxFTIiYsNbB/6kGsIgz65zvLl8jZpYJIks6244ECgeGuDL2TsUK1ijOuj8Ah1gDziLOgYJvK4xe7SMe8zd1LhQjbox9WAVgDeoEtYKqopGhLuZz+8EnioGjuyXJzEKFdF2MTCrG9GwZZxR/pQMnOCs46xDrEKcoEIRKQj1yrUl+lIRtmThB6NAIvFWAIMahtSdG0KgaZD0gofJ6+icmEha+hXyZj+jZ24BvawBxUnW1DrHVv4uqgZpQ+Vp25AuGjOcxs+DwPeX00VbE1QA4RYwgVlDrUOuQSEGhVBH8UDl1JEt2a5xk0ufYoUaaMgnEKXHgpYmi3oYdOVQUFQEFCnX4MXCR0NFUR//xNqY+LpFWy4meFmK+h2gVMPJicjIN7F+7pqXYAPlCyMjQHlCoBJbrF7pW6t8LITZSPP3H1fVdfPU5Cmxow6C+M9fYKVINWxVUFBEPVPgN0HNzn605xt0AAAAASUVORK5CYII=",
    chapters: [
      {
        chapterName: "Odocoilenaus virginianus",
        chapterPages: 1,
      },
      {
        chapterName: "Anser anser",
        chapterPages: 4,
      },
      {
        chapterName: "Connochaetus taurinus",
        chapterPages: 77,
      },
      {
        chapterName: "Larus dominicanus",
        chapterPages: 20,
      },
      {
        chapterName: "Tapirus terrestris",
        chapterPages: 21,
      },
      {
        chapterName: "Buteo regalis",
        chapterPages: 75,
      },
    ],
  },
  {
    book: "instruction set",
    author: "Felice",
    category: "self-help",
    totalPages: 554,
    year: 1988,
    coverPhoto:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAJgSURBVDjLY/j//z8DJZgsTV+9fAu+uHo8+GzvXECWAV+c3R//mTn9/ydLu4eka3ZyY/ts63T3k4Xt+4/GlqS74JONY+9Hc5tdH4wsmAmGgWv9xQKX2nMPnapOF4D4zxotum4sjfh/e2Pr/wtz3f5fnKodx/A7O3P97/TU37+Sk9ajG+Bcc/bJnI0X/hfM3/t/YlfJ/ef7yv9/uLTl///PT/+/v7Tm/8Eun08Mv9NSf//buun/z9jYvz8iIs0Qms/YO1ae/GBfdvTNtMm5y99dqv338/Gm/88PdP//dnnd/z8Pjvw/PzfjH8PPxIT1P2Nifv8Ij7j0PSjk3jdf/5Mr4poWOZUfe2hXdsT+yXYVj3eXa/79/Xbk/7e7Of/fnsr9f31x8v/j05P+Ruf1tqI4Gehftv6UybvP+CZ9+mDr/OpVnPGjd5cr///9fvz/1zvx/78/iv7/6VrV//szHV6c7XUxQAlEoH8lHKtOHbMvP7bUtuQQ5/F8pbLnp8uhmuP+f38Y9f/jler/d6Y6fbrZY2YCT4mudRcKgP59DvTvG6B/S0GC25olg6/tKP7599uh/9/vJ///8Sj2/wegS25Pdf52o8dCASUpO1WfeTB5zcX/QP++BAnMyZRNvrqt6v/F7RP+PzkZ+v/r/ej/by9U/L81xfHljV4LJYy84FBxvMCu9PADm6L94Lhe1en8//+nB/9vzAr5v69K6v/RGZ7/DzaZPL3UYa5DVGZqTtX+/fP4lP8/T078f7LV8f+qFJnPOyv19InOjaG2gt/b4zV+7+3w/L2n1+ng5nJdJXypFQA6mcPFnqo5OgAAAABJRU5ErkJggg==",
    chapters: [
      {
        chapterName: "Cebus nigrivittatus",
        chapterPages: 9,
      },
      {
        chapterName: "unavailable",
        chapterPages: 48,
      },
      {
        chapterName: "Mephitis mephitis",
        chapterPages: 2,
      },
      {
        chapterName: "Streptopelia decipiens",
        chapterPages: 99,
      },
      {
        chapterName: "Podargus strigoides",
        chapterPages: 56,
      },
      {
        chapterName: "Lycaon pictus",
        chapterPages: 21,
      },
      {
        chapterName: "Marmota flaviventris",
        chapterPages: 92,
      },
      {
        chapterName: "Climacteris melanura",
        chapterPages: 38,
      },
    ],
  },
  {
    book: "Progressive",
    author: "Dallas",
    category: "technology",
    totalPages: 462,
    year: 1997,
    coverPhoto:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAIvSURBVDjLjZLbi1JRFMb9N3ro8mYgPqSBCIEPoQSGYYVREkxxTLQsREkjlRG18doxZbyGF7y8HAONQUgnENEHQyFmJqEnoQf/gBDKl/na+1RDEz6cDYvF3uz1W9/+9hIBEP0f1Wr1XKlUWuRyOaTTaUSj0W8+n0+86a5o02GhUHjX7XYxGAzQ7/dRLBZhMpn2BAMSicR4e3sbyWQSFFSr1WAwGA4EA4jcMc0ulwudTodXoNPphAOCwSAPcLvdaLVayGQy0Gg0wgFer3fsdDoRDofRbDb5p6hUKuEAu90+LpfLqNfroCpisRgUCoVwgMViGdEvJErQfGrD4rkTP23WYzx70iPBbAQ0Go0LJNbUcbPZjHw+D/KdWHpe4PiQNJ9+wrrF4cvN2zAajb5TAFpM5K6n0ykCgQD0ej1kMhkkEgm4uwZ8jcfQzLjhTN/Do9c3YAxehZq5/PEEQLryxavVCsvlEovFAvP5HLPZDKPRCG/qIfi5B9g72sXnZQ9s34o7rBSKx2fifycPk8mENy2bzYJlWYRCIXg8HjgcDtx/pUbnMInOPAW64vsmsPtmCvjBA1KpFIbDIWgmcw+/38+7b7PZwDAMrr+8hO7RW/y73h/sUsBvIyKRCD/zdGzb7TY4jgPxBZVKhTfyiu08Yr2H2Olt8cU7H7ZOK7BardBqtVCr1XRgoFQqIZfLIZVKIRaLIb12FrfiF5HoMXxnmun+xAMhQS6HSXynsv/kMD3/Bc9MubHqnCOyAAAAAElFTkSuQmCC",
    chapters: [
      {
        chapterName: "Ovis canadensis",
        chapterPages: 96,
      },
      {
        chapterName: "Sarkidornis melanotos",
        chapterPages: 21,
      },
      {
        chapterName: "Hyaena hyaena",
        chapterPages: 84,
      },
      {
        chapterName: "Paroaria gularis",
        chapterPages: 36,
      },
      {
        chapterName: "Speotyte cuniculata",
        chapterPages: 73,
      },
    ],
  },
  {
    book: "intermediate",
    author: "Gus",
    category: "entertainment",
    totalPages: 630,
    year: 2007,
    coverPhoto:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAJlSURBVDjLpZNbaM9hGMc/v8NsTqF2yMhZKIexmpFyRZIiblwouZDauLYoTVEryg2uXIoIOUU5zJkh4e9QDmtJbWxrbUzz/72/9/m6+P3HLslbT9/3ufm+n/f7Pm8gif9ZMcDxe717JLZ62UQzwxukZnhveBOptyHl8anwZk/3b5pZEwOYtGNDzejSfzm58dTH+b8JvFkpwMizdSCBT8E8OJftkzy4BPIOnONHQzPO+eIhBoM5CCrLwNKslBZM8uDykCbwtgMAl/o/GXhvBYMA2rtAlpGYZSR+UIGKCgCSggGSOHy1Q/0DTifufZUknbr/RZJ0+mHWn3mU9edbMu3qG9DmQ08lKSNw3jCJOIKzjzqJopBzLZ3EEVx40smDr/u4e96QGUXPGpkzYQSJywjCwSsIiKOADUvKiUNYX1tOUQhra8oJg4hZ02cQhhGrqyuyp03tTwbOGzKIQ7j8rIsn3Qd4fEVIIn6+kzAMaH35Fn37wbZD68gnCUl+EbAkI3CpIYmiCNZUlwEwbfIUgiBg1cIyJqbzGFPiWbl8GXUb66mqnkrJ2IvUbq88GEI2dQBRGHDjZTcAbZ8+ERDQnOvm+fszVM1egA89C8avwAeO2nlLAeqRxK7j79TzPa/mXJck6darTG8XdM3uhbry+piGrou5I1pcP17h7wwk5k4aRUfPANMrhtP2pZ8J44bx7nMfff29vGl/SNP1LQA0XdtCa2cO4GdhkPRg78kPVYm3kS71uNTjU8N5I/UpxSWracndZOn8ZVx6dZRhQcz9F3cAjgR/+51rt1c2AXXAaOA7cLTlcHvDL6y6kIpO9lqsAAAAAElFTkSuQmCC",
    chapters: [
      {
        chapterName: "Vombatus ursinus",
        chapterPages: 89,
      },
      {
        chapterName: "Bucephala clangula",
        chapterPages: 95,
      },
      {
        chapterName: "Anastomus oscitans",
        chapterPages: 69,
      },
      {
        chapterName: "Rhabdomys pumilio",
        chapterPages: 35,
      },
      {
        chapterName: "Rhea americana",
        chapterPages: 26,
      },
      {
        chapterName: "Rhea americana",
        chapterPages: 27,
      },
    ],
  },
  {
    book: "upward-trending",
    author: "Danika",
    category: "self-help",
    totalPages: 408,
    year: 2011,
    coverPhoto:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAJ7SURBVDjLpVNLSFRRGP7u3Dt3JnMsdcAeNjrgAyoqWiQUZBYi6aYiFbEWbdsZJNEqaBO0bxdkENRKMXobmQVa4SPBfMyoPdQp9To6zfvec07/vTo4TbPrwMd/zn/v9/2vcyQhBP5nKekHbbjmvuDioikqOAc4Wba+t5DaM/69uG6o5B8BIrdu87aaFmDmj2wTBkN0+RPia75wivyXwPLgiZuqq9wGCqxrnRC6Aa7rEEkddvc5xFfHTTIjsis9qG0zOm93bj8IFp2wogl9HXb3GSTDc4it+sAZr8zsgSWw9PH4eXuOR4WkgkXGLAHODMi5hymLCEWfAkuEGjz1I9NZBSj6PUqfiBGCsVGzAZvDg1hw0szgqqdh5Gm2KUi/+o9Vyap7wFV8GsnlbnCqWVDtPB6HWnQWmu+BoK4nUxPgVnMtrJVf8Bcp9KFbdVWQQ4eSV0fWsEoADUIYHPklTZIwdMf6NDjCS0OUlS/KdXbUmgKpOsILbxNpM7ZsvrfZEZ99RG3ZDXvBESy8eQ1tcBKJxRCYLDTiNlZewi0p20389vhAb96uU9WKWkhZ6JjreQZjUUZFTSMc3n2Ijb7El3evWHBivM2WrTGURbXicCOyNArN34VA3+e1ciI7p3shdbQgZ6YTpSWFspBEm5JJ/tq1f9jpKkM4MICoNrVCYnsR5QHnDi9Qf2XzDdzYCZlLpUoGORfCdigW9IPpydtlLVPtpn+mQ5mPjjwp3tp9GYnYT0TJ9zskUy+wYMtI/QMRFwmuFNlcOQVFd8f6+4xAfAtCsh3BFQn+eYnajjuwXt4G/A8rq9LP6XjfvOfai1p5tuekwsn+eF4rXzf9fwCYD6X48OnVRgAAAABJRU5ErkJggg==",
    chapters: [
      {
        chapterName: "Antidorcas marsupialis",
        chapterPages: 41,
      },
      {
        chapterName: "Bubalus arnee",
        chapterPages: 91,
      },
      {
        chapterName: "Alopex lagopus",
        chapterPages: 16,
      },
      {
        chapterName: "Acridotheres tristis",
        chapterPages: 51,
      },
    ],
  },
  {
    book: "Pre-emptive",
    author: "Kellyann",
    category: "business",
    totalPages: 787,
    year: 2012,
    coverPhoto:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAK4SURBVDjLjZPrT1JhHMfPq/NH+K6ty2bhJcswzUa2hTMaEmCsZmWuUU0HQuAVEWHMgCnLy2yOhiOKIs0L08ByXgab1TTRNlO7ULwylTOZ9iL9djiVrdLmi++bZ7/P5znP93kOAYDYKt1F+0k6cR4ZK86jSCS3m9sW7pGxwh5FwlqfOmnNW34w7NUcInck6Ck+QNJgZNjExYTzOl67iuG/nQuf7kjEp2eT/xV45AlknyopMmLJweRDGR05Jt1KBDvLMdoiRp8uLeKpTiO3FHiUiWR/WTI12sBD8JEC/kYBvLXpeGrIwHCTGOPuKgxYRXCXsan7ilTyD0G/Opn0lqdQfisfwccq+JuEGKjjYHpqkklvLQc+iwiBe2p06/mwSVOo5kvJjISgCyLpgij/bQGCHWX0p4rgNZ7AyxdjWFxcxPLyMuZmZ+BUHUOHlodnd26g/eYpmIQsSn86niR81akBf9PZn+fMo+EsTIy/wtLSEgP/yuzbGbQUsnFXdhJd5gtoLMxAOWdvgKCb5Xr1aevDzXno0WZufHg3t7nz3/n08T1qclhouHgUZZl71ulwfxRYncZ9omGPWOstG6urq8ywUqmESqWCWq1GaWkpsxaNRmEx3YKaEz8Vg/+5RpPJtEJRFDMcA1tbW9HW1obKyspNQUwqkUj2bfkODAbDSiQSYYYrKipgs9lgt9tRU1OzKZDL5RAKhb8FRc8vJxR0nTsvtvMGxBb+N8dQO2ISjUYDh8MBp9MJWsysPXhjR0GnBGIbbzrbytGmaw/zCRr+LOu9iqrBEhT1FqDAmo9wOAydTgeXywW32426ujqEQiFoBlSoH9NDO6REvkOERFl8lKB3HqRtIdoWOC5Lp3jXchakUum80WhkQLoXmM1mCASC+dySMwvZtVlf0zWpYzT8ZfeVXYPEdr/pTvMdjX2sh+52/VQAAAAASUVORK5CYII=",
    chapters: [
      {
        chapterName: "Pseudocheirus peregrinus",
        chapterPages: 83,
      },
      {
        chapterName: "Meleagris gallopavo",
        chapterPages: 60,
      },
      {
        chapterName: "Cebus apella",
        chapterPages: 6,
      },
      {
        chapterName: "Ovis canadensis",
        chapterPages: 26,
      },
      {
        chapterName: "Oryx gazella",
        chapterPages: 61,
      },
      {
        chapterName: "Phascogale tapoatafa",
        chapterPages: 46,
      },
      {
        chapterName: "Ara chloroptera",
        chapterPages: 15,
      },
    ],
  },
  {
    book: "Total",
    author: "Bennie",
    category: "entertainment",
    totalPages: 315,
    year: 1990,
    coverPhoto:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAALvSURBVDjLjZNvLNRxHMd/Tft50AOPqs1aTapJzp/8yYWaLM5k+a/F1F3FxXAidnIc53adc7j5uxo6OqX8PxcdZY7uWhJRD1pqrXWPCveb8ATvfq4yitaD95Pvvq/X5/t9f/clABCbpSv5CEnHWsNjWGvSncit9m0Jq3kMoybdcbEny3lRm33UqM11I/9LoE5xIGnQpJOxMN6UiNfNKdCXh6Kv4Jipr9CT/KdAk+ZI9mQ6m4bkQZh4wKOThomWDEy2Z2O4Ogo9BUyTJo9JbirQZDiRvXwXargsGJMP06GvCINW5IXHYm/oKqMw1iJAvyISLXxP6l66B7lB0JvlQmqzXSm9IgSTrZnQV0agX+qLt28mzOkW+aJPHgmDKgtdhSGo47pSVRddzBKCLoikC6L05WGYbOPTR42EVnIKL0deYHp6GrOzs5h6/w5NmT5oEwbjya0kNFwPgCyCQRWesSeJvjwPg74y/Nc9o2nYD+Njo5iZmTHDv5Oq8sGVehfUXvNDZ3EsKi57I9v3kIGgm2VpC5nLuqpoqIUnVj59nFqbvD7cBk/kq88jusYOJWwm+CcOLtNh/Swwj8nqyPUcUpTKVxYWFtYmJjceQ4LSDexaZ+S0R+LBiAIZD8/idMlu8AL3h/71jDKZbI6iKLMgiYY7XlWhdbTCDN4fKUNZfwaUhiJwVf5wl1guM0TbrDYIxGLxnMlkMgsu0fddhUu0qZD2JkH8KB5CNRsFmgTU6ESIveONg3nEEpH8lO3I6TwXE6UM7o+ShyzdHWzAqiTm9mE0vyiD6rkcSn0R6p7dpCWJqNYVIF7Fgm2uxTxDsC+NoOEvvO54CAauIbmbA44iDkajEaHVNghU7IFf6S54yawQV38cVYNCcBr9YSfagfDaADjx7L8T9OSBQIXvZy+hu+Ekz4sKvhr0lcvlfpBIJJBKpaB7QXFxMRzyt69cUPrBNsdyxV3gMEHD3w5cshkgtvqmf8ZGQMzvvWGBnXzCZv36D8sKlHMs9WAJAAAAAElFTkSuQmCC",
    chapters: [
      {
        chapterName: "Echimys chrysurus",
        chapterPages: 87,
      },
      {
        chapterName: "Melanerpes erythrocephalus",
        chapterPages: 23,
      },
      {
        chapterName: "Aegypius occipitalis",
        chapterPages: 56,
      },
      {
        chapterName: "Notechis semmiannulatus",
        chapterPages: 31,
      },
      {
        chapterName: "Bubalus arnee",
        chapterPages: 81,
      },
      {
        chapterName: "Macropus giganteus",
        chapterPages: 96,
      },
    ],
  },
  {
    book: "parallelism",
    author: "Ellis",
    category: "business",
    totalPages: 202,
    year: 2009,
    coverPhoto:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAANBSURBVDjLXZNrSFNhGMcPQQQRfYv60meJoiCtROuDZRcEA6MP3ckwS0tlZVlptnXRqavMaqZ5Ka1Jq1bOmWiXs466mqZzLs0103CmLp27HOdlaf+es2xFL/xe/jzv8/+/vA/nMACYsWpmDiEmjEQTMU+o/wvVFs+e64mAP3XGoWLmEtljzXv7vSMsXM37bHp1ZEPyK6+WsM+ifa+O4tyGuJHxzjQ79euJpb4AWwWT6tLv/zY1VI3hd9GOD8oQXtowglvNNhS3DfoQ9DWuB23K1R6nSeLh205+J18LMZex3mPOu41p9qH6aIfuQciPvHd9eGQcgIL7CrmqA3mPO3DvdQ8Uhn6UvGXxSb11Ztz6eHro+TIzeQOYLwXMhq7C+ebGopWebLYHFfo+qNhedFtdGHHxGHaNwdznQnldN0rqe/GoUgajIniys3BhK3kDfINILq7KSXlqQmFDL5R0m7BGnU58/jaICdIC/E/gjqYbcq0F6UoO8aW6K74ZCNveghbtqScm3Kkxo5Nu9vz4Cd7jwe2SUtgoyD05iae1b8B9diJT2Q6hV/D4A3bmcnaRohVZD42wjXsxOjmDKTo4K5bggaoSKRckqNPpwQ5acEKuh9ArePwB2zNr7LFFeohLDejjvRQyA6vTjcuyqz4zZ2hHWtMJiOpjkfDmEGLL1BA8/oBt6U+0u66zkJS34K3FiQF6tNXtxQttI3rsLgxNAymNiSjvzsfVVgkSa2MQmXWrxR8Qduq+OEL8HEl3dZAqzRimgY16AfcMQdpBASfZeJSY81BMSBpTEK3cjUj55rW+gNAEeRDRseV8FUQFHLKUXTD0OsDTPHiPF0bShyujkd8hwyXDaeR9lCK57hjCczb8/dbXHpYdiZOWe8LPPMMB2UuIbnJIvtEA0fV6HM9lsU+xG7ntGTjXlIgc40UkaGKwXrxmwh+g0+nCTCYTXrPcdOixIqw5rsC6JJUPQe+4G4Ws1guQGtIRrz6EkPQgb+Dplb+foNFoFhG8xWKBuqrKvmpPmmTFrlQtYZ9FG3Fj84Sk6QyOVh5EcGogDmTv2eEfYllZ2QKii5gilv//KwtslIaORuRuQvC5QEjzM4apb4lQ/wXCx9fe4QKeWQAAAABJRU5ErkJggg==",
    chapters: [
      {
        chapterName: "Nyctereutes procyonoides",
        chapterPages: 31,
      },
      {
        chapterName: "Macropus fuliginosus",
        chapterPages: 22,
      },
      {
        chapterName: "Genetta genetta",
        chapterPages: 53,
      },
      {
        chapterName: "Butorides striatus",
        chapterPages: 26,
      },
      {
        chapterName: "Plocepasser mahali",
        chapterPages: 14,
      },
      {
        chapterName: "Lama glama",
        chapterPages: 31,
      },
      {
        chapterName: "Acridotheres tristis",
        chapterPages: 35,
      },
      {
        chapterName: "Spizaetus coronatus",
        chapterPages: 89,
      },
    ],
  },
  {
    book: "Operative",
    author: "Leonard",
    category: "entertainment",
    totalPages: 284,
    year: 1998,
    coverPhoto:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAITSURBVDjLdZI/aNNBFMc/vySSpLZFg5QguvgHcXHTImQu6OQq6CDoIDjoIpk6dLHgKA7iIOjgotjNLqJCKXQpooMOFSlWGpRGU/NLLnf33nNIQtKmPvjyOO7e57537yVmRj9uvblmF09fYLW+jJgiKj0pUSNnD1V4svCUxTvvkn5NjqGIIaLWPSwqRNVeHsj7OFyyC+AjZhBEhiBdqWp3rxN2ADLDi+AjecbIZwoEiXgJeAkEieSzRYo2TvDh/w6Cj3P19fezV/OfKYV1CuZQNZqa5Zce5u0nJfg491/As2MfNlrxY7M4dXucsVMYGRJtMxkajG9/4WD9QfPyebcxXJP0uxCXj0xjLHDiYdmyk2isQ/yLSYqJgyQBCTRXqzXxXCpfsZUdf2ASqhy9W7bcASz+AWlj4npK0c5PTFMKJ2+WwzbVkSdo9JXs/jNY3MbU9dTpyWHaQsNvMmNThJTKSBdUpWSZHKZt0E5PbiBxIE2wQPSURgGiYBHUD6z3b5eBI6xD9HvMgUapW2hgFnZZdwMIivgWoU19FBDckmytkCTZnfally2QyRRpb36n1WBpBCCO+ebqvZq6LcgWMIuY9JygJLkJokv4+vJ1rZ0yPzIHAJuPkhsSmJs4d728r3QcEsNiivgG6Y811p4v1topszMv7PGeAIBv95Np36AaHRWJlEIHXIu6S1kSYX7mVXeA+vEP7PyqQia3ZfwAAAAASUVORK5CYII=",
    chapters: [
      {
        chapterName: "Mephitis mephitis",
        chapterPages: 18,
      },
      {
        chapterName: "Uraeginthus angolensis",
        chapterPages: 8,
      },
      {
        chapterName: "Varanus sp.",
        chapterPages: 78,
      },
      {
        chapterName: "Phalaropus lobatus",
        chapterPages: 76,
      },
      {
        chapterName: "Damaliscus lunatus",
        chapterPages: 48,
      },
      {
        chapterName: "Junonia genoveua",
        chapterPages: 31,
      },
      {
        chapterName: "Varanus salvator",
        chapterPages: 3,
      },
      {
        chapterName: "Heloderma horridum",
        chapterPages: 17,
      },
      {
        chapterName: "Castor fiber",
        chapterPages: 42,
      },
    ],
  },
  {
    book: "hierarchy",
    author: "Hollie",
    category: "technology",
    totalPages: 752,
    year: 2006,
    coverPhoto:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAALiSURBVDjLhZJdTJtlGIa/hISExGRHO1BjthEiRp1HzHgEo4vGYTAkGwElohkpyIYRyFhZgQIBAorVqtSyCmxpC8Gu42dFkLBVWBijShYYPxJBQYSQEMeQn69rbLl86uaMMN3BffLmve7nen8UQPlXBqzREiMeywgD5gBXTAF6a0foqTLSZojeuX8nnC+gircVxjolbhjtgOt26DeDq0DFmZu/u2DAGk7/uR6GHXDTJZst0F2DTIWOEmjTQacBPB9Dux6+TOvBkhz+T4HHYsIrcKigtzYgoEZ0Ix5Maj4VgU2r2XQkBaebU5nprGK08RXGzM+lC2w+yLefBRhukYnVATrK9tFe9JjoVoruEI7sIWwnKpe6nj6x7NGxdqsLNpa4c8vF8Eev/qbQZzQx2CR6ppCuhnbdk1zM/5mvK6A1F1pOsuVKYXWiZNv/62WW+2tRx9sIzA8ycV77hyK60ww57p3NdTpCdC/iLoemdCfW1LhV56GC1Yni7aA6iPpTDre/e48f7BlMNqSjGl6YUUTXz5DcslOmObLDRFfF/i6cOx432XeqfHX8LEHfDbZm38a3kMb6lJ6FL2JRL2hBH7mmiK6fwUawa0O3G0F9CtQnrdz8JMaw/L3uPpyO75c3+X2iiFmzZt1neOavo1F8YEOR253hUgGiq1KXFI4pIba74vFjU9+cDgbVa/jmMri78BZrYjJjPnJ39sMXowRcpCYmVDCpUP/G+6KbyeeJe0JP1pD9VMZkt56xHhOL3mS25tK4PVrIj3XxK9PGlyIfPG3xgThJsrLzazo/OALr80xbj+PRP8H1+qNcrYzFZjzTsOvb7/rKkgrt8wH/jTr83k/xVsXzVeb+gKW2ZLu6unqztLQ06pEFKYf3BmveeZarNQnBK0bNgFt3MFJgu8AbhYWFbf9b4Ha7X3M6nYs2m61450aBy/Ly8vpzcnJe/s8Cga0Cv/6ws4YicGJWVlaCJOzvtT8B/ZHVkQhA0SkAAAAASUVORK5CYII=",
    chapters: [
      {
        chapterName: "Semnopithecus entellus",
        chapterPages: 59,
      },
      {
        chapterName: "Naja haje",
        chapterPages: 94,
      },
      {
        chapterName: "Thamnolaea cinnmomeiventris",
        chapterPages: 8,
      },
      {
        chapterName: "Nannopterum harrisi",
        chapterPages: 65,
      },
      {
        chapterName: "Semnopithecus entellus",
        chapterPages: 10,
      },
      {
        chapterName: "Grus canadensis",
        chapterPages: 6,
      },
      {
        chapterName: "Motacilla aguimp",
        chapterPages: 70,
      },
      {
        chapterName: "Chelodina longicollis",
        chapterPages: 12,
      },
    ],
  },
  {
    book: "Optimized",
    author: "Lottie",
    category: "business",
    totalPages: 305,
    year: 1993,
    coverPhoto:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAALnSURBVDjLpZNbSNNxFMcN9b3opZce7CHqIagegqAgLB+NyMIMFCRBSX3wPm+Z1ZZZlhpT03ReZs7ZvKDpps7LmKa2uTbTnO7inM3L5vxvc3P+1X37zYeVGBF04Mvvxzmcz+/8Duf4AfD7Hx1yDPIKg0dbHonlnYz1r8JsWt6VRUubk1ZE1Unt7e+yLv8VIOGzylS9jG2jegxry1rYbFZQlAVLCyqopDwI38duNr9JyP0jYIjHLNHIymE1G6A2WPFxQI8ywTRK+d/Q0KPB5NwK9OpRdFfFgcOMSTsAEDUUXJF1ptKWVT0kChNaB/XQGG2w2Bww2zahXrShoVeDtmEdZhU94D6956xiPbzgA/TXZXTPk8D3hXXwxTp4zUpRmPuxjC1y98rhASq6NJAqDejjpqAiJ6LBBxioT1w2GabAFc1jhrzs3PHA4XSCXcPBKgHZ3W4IRAOQzFF42aTE1EQzqrLD9D6AuC5hy2pZQmGjEqsuGlb3HrZJIPNxPritHcjIy0fv6DimKBrJ7HEs6sdRk33H5QMIK2O3LGta5HMUWHTQBLIHI2XHs1dF+8kShQrmHUBmoZFY/BkG7TCqM8N+AQSvo3TaqR4U85UYnqdgIp822ml0D41At27Dyi6gamFjIPIM+oMD0R92HE2RZykfoJYZxRlqZmBUOYcCvhpm0jArDdj3iMh9vq0MqvSr2PpUBM+MEE5eMr7En/P0Xg9I3AdUP48/X/8k3DUrq0djjxwv+LNQ6DfgIP1wOGn0R5yCiySjNBTIOAawgmAuvAbRDX+db5Aq86MZHwruYmasDIMTMrA4Y0gvHUFKsXS/bI+8Fb/bRt4J4g/wHBhldk5kbiXjlqOj/D4mxUzoZrjQTdei7/ZRbFY/AEiSO90PViJDnD9EIf5Lh5aJnRt9qSQtrOlt8k1DeWqoyytBzEVqLOa0x5QRhLXMQGhjjkAcGrArDPHP+ue1lYafZJAX9d6yyWn0Jnv9PwH2GPv45gRecwAAAABJRU5ErkJggg==",
    chapters: [
      {
        chapterName: "Smithopsis crassicaudata",
        chapterPages: 85,
      },
      {
        chapterName: "Calyptorhynchus magnificus",
        chapterPages: 62,
      },
      {
        chapterName: "Anthropoides paradisea",
        chapterPages: 68,
      },
    ],
  },
  {
    book: "executive",
    author: "Bruce",
    category: "business",
    totalPages: 351,
    year: 1986,
    coverPhoto:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAJhSURBVDjLpZNLSBtRFIaVIvFVsKSCG7UuWkVcGIiiGxE3YgUhgvgIirgJiIssspBK6cK0iIgbCyVgNyWGqkiLK63KiG100ZbYQiUP8zBxJuOMyaRJiCHB/j0zC0GsROjiwOVy/u+c/5578gDk/U/kTAicnDwOBoPP/H7/W4/Ho+N5/t6dAU6X63mY5yFJkhIsy8LpdHIOh0OdE/Dt8PAlGw4jk8kgnU4jkUgglUohGo2CAJL94KDwVgBjt7/yh0KKOJlMKtVFUcTZ2ZkC8ni9+LK/b/ongGEYs5sSZLGcLFeUxeRdsSCHeH4OZm8vcgPgsVqnue1tZEgQj8cRiUQUcZisnJ6eIhAIwEtw+X5jZwfXAOGpqenEygqyu7u4mJ1FjGEgCAI4jkOI7NAUcHx8rABpMlhbX3ddATyDgwZpcRFZol7MzCAxMYHfY2MQlpZAI4TP5wONECcklN9hY3MT72y2SgVgr6pSecfHkaXLlNmMOJ1jo6OI9vdD7OlBaG4ObrdbaV8g8fetLaxZLANXY9yoqXniNxqRWV1F3GBAbGQEkb4+iN3d4Ds6wLW2giVLAj3ij+VlHExODlz7SO8rKh4dUbW0xQJJr0ektxdCVxf49nZwzc0QCBCj8JMtZnh44MZXXigtzf9YV/dTNBr/JE0mCJ2dCLe1gdVqIRBAamqCr6UFX+vrdbfuwkJZ2cN9rTYo6vWZ5NAQBALEqYOoRoNfDQ34VF2ty7lM8yUlD6zl5R+OGhslVqO59NbWXn6urMza1Oqnd97GFwUF+fOFhdo3xcWm10VFunmV6n6ubf0LxSvsH2lz/wcAAAAASUVORK5CYII=",
    chapters: [
      {
        chapterName: "Meles meles",
        chapterPages: 35,
      },
      {
        chapterName: "Laniarius ferrugineus",
        chapterPages: 90,
      },
      {
        chapterName: "Phascolarctos cinereus",
        chapterPages: 56,
      },
      {
        chapterName: "Cervus unicolor",
        chapterPages: 57,
      },
      {
        chapterName: "Gyps bengalensis",
        chapterPages: 24,
      },
      {
        chapterName: "Terrapene carolina",
        chapterPages: 38,
      },
      {
        chapterName: "Zenaida asiatica",
        chapterPages: 90,
      },
      {
        chapterName: "Nyctea scandiaca",
        chapterPages: 21,
      },
      {
        chapterName: "Isoodon obesulus",
        chapterPages: 63,
      },
    ],
  },
  {
    book: "Ergonomic",
    author: "Nellie",
    category: "technology",
    totalPages: 258,
    year: 1993,
    coverPhoto:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAKLSURBVDjLY/j//z8DJRhMmJQd+x89/W4IRQbY1x5L8590dzmy5PuIqC4gfvA+PPIyEMfhNqD06H+L9gfG9p33/jr23OMEiX30DTj8yT/oFxCf+hAYfBeIfwPxIyBWwjSg5Mh/tYZHzDr1D34aND7Y9tXOsf2Lg/O/z85uNjCFn908lT56eH985xXwzXvygwYUA4yLD/9Xcm+QlS572JWesP7XVyOL79/MLKci22Rc/6DXvPH+X8um+79t2u7/tOu4/w9ugFHxof8wha+1LP89NHT9iaxZIf/BCpWie7/Vi+/N/25kqvrN2Oz/suiO6QgDig6ADfgtJrX0p6TMb1u/Xd+5Eh9M4k16yCyQdH+HYOK9H6JJd+tgBv7U0j3wXVvvA9wAg8J9/6sNAvT/8gr++8Mn1MYQ8aCFIfzBf6bwB3+Zwx/8Ywu7H44e+j8VVX4hDMjf+/8/I6v/fya2OyghHHCn3GuRw3TvJTZn4mZ7P82dEv4trc//f2SLw6cp/mrX4Abo5+3+/5OBJeQ3A4s4TLPXTEsvj5mWLzxmmT+ImuJ+rXF14v8tV6b+v/Bs1//+3Vn/w/t1/5tnS/aAFevl7vw/R1TDAabZscNommOn0UeHLsNFDj2GPLHtLt83Xp7wf+O1SaCw+t+zJ/V//550kAHfwRp0s7f/tyzRkbQo1Z5pXqr7CEi/tSjTyYAZ6FNt+H/blTn/kcGmS1NBBkAU6GZt+2+UoelvmKHuph5g6QqkwalRWMNDFkRb5kh/796V9L99VwJYc/vOBFQXaGdu+a+dsfm/VsYmIN74XyttAxCv/68Jwqnr/htkJP4P7tH437srBWwziAbx4WFADAYq7gDiTyBnQ+kOkDgAwll4PHHRgLAAAAAASUVORK5CYII=",
    chapters: [
      {
        chapterName: "Ardea golieth",
        chapterPages: 51,
      },
      {
        chapterName: "Geochelone elegans",
        chapterPages: 64,
      },
      {
        chapterName: "Rhabdomys pumilio",
        chapterPages: 14,
      },
      {
        chapterName: "Pelecans onocratalus",
        chapterPages: 50,
      },
      {
        chapterName: "Meles meles",
        chapterPages: 38,
      },
      {
        chapterName: "Gymnorhina tibicen",
        chapterPages: 32,
      },
    ],
  },
  {
    book: "interactive",
    author: "Cyndia",
    category: "entertainment",
    totalPages: 612,
    year: 1985,
    coverPhoto:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAGcSURBVDjLxVM7SEJRGP5vmVfpAWGFERJUONQWLtEQOUQRbUK09IDW1mp1KKPBsdGlWqKIqGiLoq0aggqxraFARMpX95535xxCNLouDh04cM7//3yvwzGEEFDPaoA6l6vyEj3MaDmcc0CMX23NdY9X9iPxlxijsHK8GmxxUMAh1O+BAb8bEKZVnZntVMyisFYiotnRgkU4UMaByC0Hy/XpzWQ80GGuTwy1GUULO1tQrIQJQBLIsriuTW4kE71d3qWg3wNM9gqIOYeoWDHlGuALYQhHn/cCPnNpsMeEjyIBW9bzP8B/KlCsSAJ4TQNyiI0M97WaPe1NkM4TyJco+FpcQC3irECxYsVuM/iyaBFTplltzHU+6sx/KagCKCDlX0A6R5TXp5O77NHl4wd43QYYoOwJEAg7A6iEEZHsMijpVbzuhCLPqdzBzcMnNHsadT7CZrUUMB2gjVnZ6/v+6GzqMbt7e5/V+fBaIaqEbfUKEqByMH0enu8cu+AE0QVBqDOAYk2cvUmfUiqrHsxcTy36QqcE3K7lyrrx77/xG/TSBY2ALCinAAAAAElFTkSuQmCC",
    chapters: [
      {
        chapterName: "Aonyx cinerea",
        chapterPages: 50,
      },
      {
        chapterName: "Butorides striatus",
        chapterPages: 51,
      },
      {
        chapterName: "Panthera tigris",
        chapterPages: 26,
      },
      {
        chapterName: "Pseudalopex gymnocercus",
        chapterPages: 77,
      },
      {
        chapterName: "Hystrix indica",
        chapterPages: 86,
      },
      {
        chapterName: "Felis concolor",
        chapterPages: 39,
      },
      {
        chapterName: "Lasiodora parahybana",
        chapterPages: 31,
      },
      {
        chapterName: "Kobus leche robertsi",
        chapterPages: 21,
      },
    ],
  },
  {
    book: "array",
    author: "Maurie",
    category: "entertainment",
    totalPages: 723,
    year: 1992,
    coverPhoto:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAJCSURBVDjLjZPNTxNBGIerBy/eOAgmYoz/gCYoJ/XgxZsxnrygFw8eJJGDiQc0MZEElFBL2igkoBBEFLUWaYNQiB+gKd1WbVKUCgVp2O3H2N3tfvYDf+5s7KbGNjLJc5r5PTPvm3ltNpttn0GTQfN/OGCwE4CtErqadF0XisXiVqlUQjWMfTidTkc1CV3NNCzLMhRFsRBFETzPI5VKmRKO4+ByuUyJt6dub3D0qG+ut8FuCugBTdOQz+ehqBoERYMkSRAEAel02hSoqgp6ycO+mwPR2asRMTGCWcdBxRLQcELUEE6qWGRlsKKCXC6HTCZjlaKKCfxg7NDIBD6PH8fL63sclsAoA1GiY35TxfuEjDAnW6UQQsBuRLH6sRN53guOaYHnRn3/+LX6XZaAEud1TK9LeL2WQ4hTzOZRCeG+Ih7ogp59hdSXC3jSvp8ZutJQZzWxLFjJavAs83B/yyIp5c1XiSSGtUC3GSZLF/Hm3gmcOrT7rJHb8Y/AHxcwFsnAvUTwkyQRDU9hefq88ewXEFcuG007jPTaJ/z5F38LYkTFcDiJwUUWUwEGfu8YfO77mBk4g5jvJIKPjmGVmTAvqioIbebQ92EDdl8Q3UPP4Z9fAJsIg1l4Cs/d04jO9Zs9qSnISLoRDqFjeBK93ghuPQ7iXMdbtPVMIsWuo1AomNQUUNpuP0Br1wgudT5DS/soWu/M4B3z3WxmmVqCX7XmoApbNFM5C0eMX6jQje2EjbMSHcBKQSOVbGOcy9DRbywLfgOaoblOxI0zHQAAAABJRU5ErkJggg==",
    chapters: [
      {
        chapterName: "Ara chloroptera",
        chapterPages: 42,
      },
      {
        chapterName: "Myotis lucifugus",
        chapterPages: 31,
      },
      {
        chapterName: "Francolinus leucoscepus",
        chapterPages: 51,
      },
      {
        chapterName: "Otaria flavescens",
        chapterPages: 58,
      },
      {
        chapterName: "Boselaphus tragocamelus",
        chapterPages: 20,
      },
      {
        chapterName: "Cygnus atratus",
        chapterPages: 51,
      },
    ],
  },
  {
    book: "high-level",
    author: "Gus",
    category: "agriculture",
    totalPages: 494,
    year: 1986,
    coverPhoto:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAI2SURBVDjLjZPda5JhGMZX/0AHnRQldFwjCs0maplQE8mJ5Wxr6WiWa7XaAoVFrSTbWFpslQ6NDjroAzJYnZQSHQQj6DBaBx7awcQv/P52XT3303pn5GgvXAcvz3P97vu+eO4OAB0k9u1kEjNJ/6NdTJsFXwtAXK1Ws41GY6XZbKKd2Dm8Xu+DVkgrQErmYrGIUqkkKJfLIZPJIB6Pc0gsFoPP5xMg3OxwerZaRx0122UHvn6PYHB4DEO2S6hUKigUCshms0gkEhxQLpdBRQKBwG8IM25x3vPPumafQHP8BBY/f0G3zojr03N4NO/nHeTzeSSTyX9G4plM3vWJTBZbYWxiCvIjWkzO+KDSmmB3PYSqW49o9IcwSiqV4p0sLy+vASSyQ1M64wDmnr6BwTyC8/Zp9PRZMeN/Ba3hNG677vDwCEKdUB7pdHoNwKpn+s6OQKM3QaPVwe32QKZQQaE+BnGXErv3dIKFyyE0P2VCIAHAMqguhBdx//FLTNxw4tvSEiznRvFs4QM8/hfQG07yy/V6HbVajUNIAmDwwlUE332Cbfwa+s1DeB8KwWy7gudvP+Ki/Sb27hPzy9QFAUjUjQAwDlh5dcvwOOSqowgGX6On9wxuuefBxsO27Tu4mTogkfkvQJdSHVGoNZHO/Qeivaf6EQqHIZMroTyshkR6EHKFQjC3SgCsvsJN9NPu+VL1dloP8HO9PWijFQGwCpGwgEp0sBEzu1vg29sCEBFkA+v8R7T6ol/92Z1dPFeoPQAAAABJRU5ErkJggg==",
    chapters: [
      {
        chapterName: "Theropithecus gelada",
        chapterPages: 10,
      },
      {
        chapterName: "Bassariscus astutus",
        chapterPages: 91,
      },
      {
        chapterName: "Damaliscus dorcas",
        chapterPages: 36,
      },
      {
        chapterName: "Meles meles",
        chapterPages: 16,
      },
    ],
  },
  {
    book: "needs-based",
    author: "Robenia",
    category: "entertainment",
    totalPages: 546,
    year: 2003,
    coverPhoto:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAABjSURBVCjPY/jPgB8y0FHBkb37/+/6v+X/+v8r/y/ei0XB3v+H4HDWfywKtgAl1v7/D8SH/k/ApmANUAICDv1vx6ZgMZIJ9dgUzEJyQxk2BRPWdf1vAeqt/F/yP3/dwIQk2QoAfUogHsamBmcAAAAASUVORK5CYII=",
    chapters: [
      {
        chapterName: "Trichosurus vulpecula",
        chapterPages: 34,
      },
      {
        chapterName: "Propithecus verreauxi",
        chapterPages: 50,
      },
      {
        chapterName: "Francolinus swainsonii",
        chapterPages: 5,
      },
      {
        chapterName: "Coluber constrictor",
        chapterPages: 4,
      },
      {
        chapterName: "Dipodomys deserti",
        chapterPages: 58,
      },
      {
        chapterName: "Cordylus giganteus",
        chapterPages: 7,
      },
      {
        chapterName: "Paraxerus cepapi",
        chapterPages: 14,
      },
    ],
  },
  {
    book: "fresh-thinking",
    author: "Shalne",
    category: "entertainment",
    totalPages: 775,
    year: 2008,
    coverPhoto:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAIvSURBVDjLpZNPiBJRHMffG6aZHcd1RNaYSspxSbFkWTpIh+iwVEpsFC1EYO2hQ9BlDx067L1b0KVDRQUa3jzWEughiDDDZRXbDtauU5QV205R6jo6at+3lNShKdgHH77zm9/f994MHQwGZCuLI1tctgVKpZJQLBYluxj6ty3M3V+alfvNG1Efzy03XGT9e3vu+rkD9/5rAiTPiGI/2RvZNrrSkmWL52ReGNw9f+3hzD8LIHmC9M2M4pHI2upbEqD18tdPnwmzOWJlpi/fmrAtcMrfnld5k+gvdeKTrcXT07FJxVovMHuMtsiUv3/xjzOoVCo3Lcs6DEi32xVAIBKJ0MzCY3My6BN1XSeqqpKnperGiamDUi6Xa3U6nTemaRLoGodEy+v1hlEsjBdXBEGg+Xz+2fgORazVamclSSLVavXMnjGHlM1m78iy7Gi321dDoVAYRQK0UCiMU0pfN5vNXShggH2gDud21gloeNahO6EfoSr4Iopi3TCMBS4aja40Go1vmOA9Ao7DsYgORx0ORxkadzqdS9AYdBn+uKIoTI9omsa28GTzO3iEBeMCHGyCIPQDdDd0lU0AaswG7L0X52QAHbs/uXkL6HD7twnKrIPL5Sqyjm63m00U93g8JdjHoC9QJIYCdfB8+CWmUqkuHKMI8rPThQahr8BeUEWwBt4BFZ33g0vJZPIQ/+s+kcCDDQSTn1c0BElD2HXj0Emv13tg+y/YrUQiITBNp9OdH302kDq15BFkAAAAAElFTkSuQmCC",
    chapters: [
      {
        chapterName: "Paraxerus cepapi",
        chapterPages: 1,
      },
      {
        chapterName: "Streptopelia decipiens",
        chapterPages: 19,
      },
      {
        chapterName: "Spermophilus tridecemlineatus",
        chapterPages: 30,
      },
      {
        chapterName: "Mellivora capensis",
        chapterPages: 3,
      },
      {
        chapterName: "Sylvicapra grimma",
        chapterPages: 45,
      },
      {
        chapterName: "Ovis canadensis",
        chapterPages: 23,
      },
      {
        chapterName: "Vulpes vulpes",
        chapterPages: 81,
      },
      {
        chapterName: "Alcelaphus buselaphus cokii",
        chapterPages: 58,
      },
      {
        chapterName: "Eudyptula minor",
        chapterPages: 56,
      },
    ],
  },
];

module.exports = booksData;
