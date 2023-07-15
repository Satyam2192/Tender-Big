const regionData = {
    "Western Africa": [
        "Benin",
        "Burkina Faso",
        "Cape Verde",
        "Cote d'Ivoire (Ivory Coast)",
        "Gambia",
        "Ghana",
        "Guinea",
        "Guinea-Bissau",
        "Liberia",
        "Mali",
        "Mauritania",
        "Niger",
        "Nigeria",
        "Senegal",
        "Sierra Leone",
        "Togo"
    ],
    "Central Africa": [
        "Angola",
        "Burundi",
        "Cameroon",
        "Central African Republic",
        "Chad",
        "Congo (Democratic Republic of the Congo)",
        "Congo (Republic of the Congo)",
        "Equatorial Guinea",
        "Gabon",
        "Sao Tome and Principe"
    ],
    "Eastern Africa": [
        "Burundi",
        "Comoros",
        "Djibouti",
        "Eritrea",
        "Ethiopia",
        "Kenya",
        "Madagascar",
        "Malawi",
        "Mauritius",
        "Mozambique",
        "Rwanda",
        "Seychelles",
        "Somalia",
        "South Sudan",
        "Tanzania",
        "Uganda",
        "Zambia",
        "Zimbabwe"
    ],
    "Northern Africa": [
        "Algeria",
        "Egypt",
        "Libya",
        "Mauritania",
        "Morocco",
        "Sudan",
        "Tunisia",
        "Western Sahara"
    ],
    "Southern Africa": [
        "Botswana",
        "Eswatini",
        "Lesotho",
        "Namibia",
        "South Africa"
    ],
    "Australia and New Zealand": [
        "Australia",
        "New Zealand"
    ],
    "Melanesia": [
        "Fiji",
        "Papua New Guinea",
        "Solomon Islands",
        "Vanuatu"
    ],
    "Micronesia": [
        "Federated States of Micronesia",
        "Kiribati",
        "Marshall Islands",
        "Nauru",
        "Palau"
    ],
    "Polynesia": [
        "Samoa",
        "Tonga",
        "Tuvalu"
    ],
    "Central America": [
        "Belize",
        "Costa Rica",
        "El Salvador",
        "Guatemala",
        "Honduras",
        "Nicaragua",
        "Panama"
    ],
    "Latin America and Caribbean": [
        "Argentina",
        "Bahamas",
        "Barbados",
        "Bolivia",
        "Brazil",
        "Chile",
        "Colombia",
        "Cuba",
        "Dominican Republic",
        "Ecuador",
        "Haiti",
        "Jamaica",
        "Mexico",
        "Peru",
        "Trinidad and Tobago",
        "Uruguay",
        "Venezuela"
    ],
    "North America": [
        "Canada",
        "United States",
        "Mexico"
    ],
    "South America": [
        "Argentina",
        "Bolivia",
        "Brazil",
        "Chile",
        "Colombia",
        "Ecuador",
        "Guyana",
        "Paraguay",
        "Peru",
        "Suriname",
        "Uruguay",
        "Venezuela"
    ],
    "Central Asia": [
        "Kazakhstan",
        "Kyrgyzstan",
        "Tajikistan",
        "Turkmenistan",
        "Uzbekistan"
    ],
    "Eastern Asia": [
        "China",
        "Japan",
        "North Korea",
        "South Korea",
        "Mongolia"
    ],
    "Southeastern Asia": [
        "Brunei",
        "Cambodia",
        "Indonesia",
        "Laos",
        "Malaysia",
        "Myanmar",
        "Philippines",
        "Singapore",
        "Thailand",
        "Timor-Leste",
        "Vietnam"
    ],
    "Southern Asia": [
        "Afghanistan",
        "Bangladesh",
        "Bhutan",
        "India",
        "Maldives",
        "Nepal",
        "Pakistan",
        "Sri Lanka"
    ],
    "Western Asia": [
        "Armenia",
        "Azerbaijan",
        "Bahrain",
        "Cyprus",
        "Georgia",
        "Iran",
        "Iraq",
        "Israel",
        "Jordan",
        "Kuwait",
        "Lebanon",
        "Oman",
        "Palestine",
        "Qatar",
        "Saudi Arabia",
        "Syria",
        "Turkey",
        "United Arab Emirates",
        "Yemen"
    ],
    "Eastern Europe": [
        "Belarus",
        "Bulgaria",
        "Czech Republic",
        "Hungary",
        "Moldova",
        "Poland",
        "Romania",
        "Russia",
        "Slovakia",
        "Ukraine"
    ],
    "Northern Europe": [
        "Denmark",
        "Estonia",
        "Finland",
        "Iceland",
        "Ireland",
        "Latvia",
        "Lithuania",
        "Norway",
        "Sweden",
        "United Kingdom"
    ],
    "Southern Europe": [
        "Albania",
        "Andorra",
        "Bosnia and Herzegovina",
        "Croatia",
        "Greece",
        "Italy",
        "Malta",
        "Montenegro",
        "North Macedonia",
        "Portugal",
        "San Marino",
        "Serbia",
        "Slovenia",
        "Spain",
        "Vatican City"
    ],
    "Western Europe": [
        "Austria",
        "Belgium",
        "France",
        "Germany",
        "Liechtenstein",
        "Luxembourg",
        "Monaco",
        "Netherlands",
        "Switzerland"
    ]
}

const geopoliticalData = {
    "Arab World": [
      "Algeria",
      "Bahrain",
      "Comoros",
      "Djibouti",
      "Egypt",
      "Iraq",
      "Jordan",
      "Kuwait",
      "Lebanon",
      "Libya",
      "Mauritania",
      "Morocco",
      "Oman",
      "Palestine",
      "Qatar",
      "Saudi Arabia",
      "Somalia",
      "Sudan",
      "Syria",
      "Tunisia",
      "United Arab Emirates",
      "Yemen"
    ],
    "Asia-Pacific Economic Cooperation (APEC)": [
      "Australia",
      "Brunei",
      "Canada",
      "Chile",
      "China",
      "Hong Kong",
      "Indonesia",
      "Japan",
      "Malaysia",
      "Mexico",
      "New Zealand",
      "Papua New Guinea",
      "Peru",
      "Philippines",
      "Russia",
      "Singapore",
      "South Korea",
      "Taiwan",
      "Thailand",
      "United States",
      "Vietnam"
    ],
    "Association of Southeast Asian Nations (ASEAN)": [
      "Brunei",
      "Cambodia",
      "Indonesia",
      "Laos",
      "Malaysia",
      "Myanmar",
      "Philippines",
      "Singapore",
      "Thailand",
      "Vietnam"
    ],
    "Balkans": [
      "Albania",
      "Bosnia and Herzegovina",
      "Bulgaria",
      "Croatia",
      "Kosovo",
      "Montenegro",
      "North Macedonia",
      "Romania",
      "Serbia",
      "Slovenia"
    ],
    "BRICS": [
      "Brazil",
      "Russia",
      "India",
      "China",
      "South Africa"
    ],
    "Common Market for Eastern and Southern Africa (COMESA)": [
      "Burundi",
      "Comoros",
      "Democratic Republic of the Congo",
      "Djibouti",
      "Egypt",
      "Eswatini",
      "Ethiopia",
      "Kenya",
      "Libya",
      "Madagascar",
      "Malawi",
      "Mauritius",
      "Rwanda",
      "Seychelles",
      "Somalia",
      "Sudan",
      "Tanzania",
      "Uganda",
      "Zambia",
      "Zimbabwe"
    ],
    "Commonwealth Of Independent States (CIS)": [
      "Armenia",
      "Azerbaijan",
      "Belarus",
      "Kazakhstan",
      "Kyrgyzstan",
      "Moldova",
      "Russia",
      "Tajikistan",
      "Turkmenistan",
      "Ukraine",
      "Uzbekistan"
    ],
    "Economic Community of West African States (ECOWAS)": [
      "Benin",
      "Burkina Faso",
      "Cabo Verde",
      "Cote d'Ivoire",
      "Gambia",
      "Ghana",
      "Guinea",
      "Guinea-Bissau",
      "Liberia",
      "Mali",
      "Niger",
      "Nigeria",
      "Senegal",
      "Sierra Leone",
      "Togo"
    ],
    "European Union (EU)": [
      "Austria",
      "Belgium",
      "Bulgaria",
      "Croatia",
      "Cyprus",
      "Czech Republic",
      "Denmark",
      "Estonia",
      "Finland",
      "France",
      "Germany",
      "Greece",
      "Hungary",
      "Ireland",
      "Italy",
      "Latvia",
      "Lithuania",
      "Luxembourg",
      "Malta",
      "Netherlands",
      "Poland",
      "Portugal",
      "Romania",
      "Slovakia",
      "Slovenia",
      "Spain",
      "Sweden"
    ],
    "G20": [
      "Argentina",
      "Australia",
      "Brazil",
      "Canada",
      "China",
      "France",
      "Germany",
      "India",
      "Indonesia",
      "Italy",
      "Japan",
      "Mexico",
      "Russia",
      "Saudi Arabia",
      "South Africa",
      "South Korea",
      "Turkey",
      "United Kingdom",
      "United States"
    ],
    "Gulf Cooperation Council (GCC)": [
      "Bahrain",
      "Kuwait",
      "Oman",
      "Qatar",
      "Saudi Arabia",
      "United Arab Emirates"
    ],
    "Gulf Countries": [
      "Bahrain",
      "Kuwait",
      "Oman",
      "Qatar",
      "Saudi Arabia",
      "United Arab Emirates"
    ],
    "Middle East": [
      "Bahrain",
      "Iran",
      "Iraq",
      "Israel",
      "Jordan",
      "Kuwait",
      "Lebanon",
      "Oman",
      "Palestine",
      "Qatar",
      "Saudi Arabia",
      "Syria",
      "United Arab Emirates",
      "Yemen"
    ],
    "Middle East and North Africa (MENA)": [
      "Algeria",
      "Bahrain",
      "Egypt",
      "Iran",
      "Iraq",
      "Israel",
      "Jordan",
      "Kuwait",
      "Lebanon",
      "Libya",
      "Morocco",
      "Oman",
      "Palestine",
      "Qatar",
      "Saudi Arabia",
      "Sudan",
      "Syria",
      "Tunisia",
      "United Arab Emirates",
      "Yemen"
    ],
    "South Asian Association for Regional Cooperation (SAARC)": [
      "Afghanistan",
      "Bangladesh",
      "Bhutan",
      "India",
      "Maldives",
      "Nepal",
      "Pakistan",
      "Sri Lanka"
    ]
  }
  
module.exports = {regionData, geopoliticalData};