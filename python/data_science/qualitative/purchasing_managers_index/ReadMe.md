# This is a Q&A Chatbot

This `Generative Text Ai` allows you to `summerise and query PMI comments made by purchasing managers` of some of the largest companies in the `USA from various sectors`.


#### NAICS Industries which report to the Institute of Supply Chain Management

| Sector      | Sector             | NAICS Industry                                |
| ----------- | ------------------ | --------------------------------------------- |
| Manufacture | Consumer Cyclical  | Furniture & Related Products                  |
| Manufacture | Consumer Cyclical  | Apparel, Leather & Allied Products            |
| Manufacture | Consumer Defensive | Food, Beverage & Tobbaco Products             |
| Manufacture | Technology         | Computer & Electronic Products                |
| Manufacture | Basic Material     | Primary Metals                                |
| Manufacture | Industrial         | Miscellaneous Manufacturing                   |
| Manufacture | Industrial         | Machinery                                     |
| Manufacture | Consumer Cyclical  | Textile Mills                                 |
| Manufacture | Consumer Cyclical  | Electrical Equipment, Appliances & Components |
| Manufacture | Energy             | Petroleum & Coal Products                     |
| Manufacture | Basic Material     | Chemical Products                             |
| Manufacture | Consumer Cyclical  | Transportation Equipment                      |
| Manufacture | Industrial         | Paper Products                                |
| Manufacture | Industrial         | Plastic & Rubber Products                     |
| Manufacture | Industrial         | Fabricated Metal Products                     |
| Manufacture | Industrial         | Printing & Related Support Activities         |
| Manufacture | Construction       | Non-metallic Mineral Products                 |
| Manufacture | Construction       | Wood Products                                 |
| Service     | Retail             | Retail Trade                                  |
| Service     | Industrial         | Transportation & Warehousing                  |
| Service     | Construction       | Construction                                  |
| Service     | Financials         | Management of Companies & Support Services    |
| Service     | Industrial         | Management of Companiez & Support Services    |
| Service     | Consumer Cyclical  | Other Services                                |
| Service     | Utility            | Utilities                                     |
| Service     | Healthcare         | Health Care & Social Assistance               |
| Service     | Consumer Cyclical  | Arts, Entertainment & Recreation              |
| Service     | Retail             | Wholesale Trade                               |
| Service     | Consumer Cyclical  | Real Estate, Rental & Leasing                 |
| Service     | Basic Material     | Mining                                        |
| Service     | Consumer Defensive | Educational Services                          |
| Service     | Industrial         | Professional, Scientific & Technical Services |
| Service     | Financials         | Finance & Insurance                           |
| Service     | Consumer Cyclical  | Accommodation & Food Services                 |
| Service     | Technology         | Information                                   |
| Service     | Consumer Defensive | Agriculture, Forestry, Fishing & Hunting      |



## Getting Started

1. cd /python/data_science/qualitative/purchasing_managers_index/
2. py -m venv venv
3. pip install -r requirements.txt
4. py ai.py

**Create a .env file in the base directory this should contain your API keys for OPEN AI**

*`purchasing_manager_index/.env`*

***Exmaple:***

'''

    OPENAI_API_KEY="xyzxyzxyzxyzxyzxyzxyzxyzxyz"

    OPENAI_MODEL="gpt-3.5-turbo"

    URL="https://www.prnewswire.com/news-releases"

'''



## What is a PMI

A [Purchasing Managers Index](https://en.wikipedia.org/wiki/Purchasing_Managers%27_Index) is a leading economic indicator which can be used to gauge business sentiment. Purchasing mangers are asked question regarding specific areas of their business and industry. The PMI is essentially the [business cycle](https://en.wikipedia.org/wiki/Business_cycle) and in the USA and many other countries, in both developed & emerging markets, has a high correlation to [GDP annualised Growth Rate](https://en.wikipedia.org/wiki/Gross_domestic_product).

This is a basic rendition, and I intend to build the application out further, adding a frontend and backend. I would also like to build out an automated data collection script.

The Institute for Supply Management (ISM) Report on Business is a crucial economic indicator that provides insights into the health of the manufacturing and non-manufacturing sectors of the U.S. economy.

Published monthly, this report offers a comprehensive overview of production levels, new orders, supplier deliveries, inventories, and employment. Businesses, investors, and policymakers closely monitor the ISM index because it can signal economic expansions or contractions.

A reading above 50 indicates expansion in the sector, while a reading below 50 suggests contraction. By analyzing the trends and data in the ISM report, stakeholders can make informed decisions about production, investment, and policy. Furthermore, consistent patterns in the ISM index can correlate with broader economic trends, making it a valuable tool for forecasting economic growth or downturns.



### Qualitative data

Qualitative data refers to non-numerical information that describes qualities, attributes, or characteristics. In the context of comments made by purchasing managers, qualitative data would encompass their subjective opinions, perceptions, judgments, and feelings about various business conditions, suppliers, products, or market situations. Instead of providing measurable figures or percentages, these comments might offer insights into challenges faced in the supply chain, the quality of goods received, vendor relationships, or expectations about future market conditions. Such qualitative feedback can be invaluable because it provides context, depth, and nuance that quantitative data alone might not capture. When analyzed, these comments can reveal patterns, themes, or sentiments that can inform business strategies and decisions.



### Technology Stack

1. Python 3.11.3
2. OpenAI and LangChain
3. Please See ./requirements.txt for the python packages used.
4. HTML is used to format and store the text data.
