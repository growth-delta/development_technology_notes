# SEC filings & Stock Volatility





This notebook serves as the foundational structure for a Python project designed to backtest historical stock returns under the condition of a filed SEC financial form. The project aims to analyze financial data, leveraging the historical information provided by SEC filings and Yahoo finance, to assess and simulate investment returns, laying the groundwork for a comprehensive financial analysis tool.

Designed and written by Jamal N.C Morris


The script collects data from the SEC and Yahoo finance API's, then processes and cleans the data. Descriptive statistics are then performed on the data under various conditions. The script writes .csv files of the source data and analytics to their respective folders and files in DataBase/ folder.


A list of the companies stock tickers for this specific script can be found in the class: SecData. If you look in the DataBase/ folder you will find 4 .csv files these files represent Ford = F and General Motors = GM. They are created from the notebook.ipynb


This is just the basic structure for the logic, too what will eventaully become a full-stack application.



#### Fundamental Concepts

**[SEC Filings](https://en.wikipedia.org/wiki/SEC_filing)**

**[Stock Price Returns %](https://en.wikipedia.org/wiki/Price_return)**



<div style="text-align: center;">
    <a href="https://en.wikipedia.org/wiki/U.S._Securities_and_Exchange_Commission" rel="noopener noreferrer" target="_blank">
        <img
            height="170px"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Seal_of_the_United_States_Securities_and_Exchange_Commission.svg/1024px-Seal_of_the_United_States_Securities_and_Exchange_Commission.svg.png"
            alt="SEC logo"
            style="display: inline-block;"
        ></img>
    </a>
    <a href="https://finance.yahoo.com/quote/SPY/history?p=SPY" rel="noopener noreferrer" target="_blank">
        <img
            height="170px"
            src="https://upload.wikimedia.org/wikipedia/commons/8/89/Bollinger_bands_example%2C_2_stddevs.png"
            alt="OHLC Stock price chart"
            style="display: inline-block;"
        ></img>
    </a>
</div>




### SEC Form Examples

<ul>
    <li>
        <a href="https://investor.apple.com/sec-filings/default.aspx" rel="noopener noreferrer" target="_blank">
            Apple Inc SEC filings
        </a>
    </li>
    <li>
        <a href="https://d18rn0p25nwr6d.cloudfront.net/CIK-0000320193/b4266e40-1de6-4a34-9dfb-8632b8bd57e0.pdf" rel="noopener noreferrer" target="_blank">
            SEC Form 10-K: Annual Financial Statement
        </a>
    </li>
    <li>
        <a href="https://d18rn0p25nwr6d.cloudfront.net/CIK-0000320193/f8aaeabb-7a2a-479d-bf72-9559ff51ea5d.pdf" rel="noopener noreferrer" target="_blank">
            SEC Form 10-Q: Quarterly Financial Statement
        </a>
    </li>
    <li>
        <a href="https://www.sec.gov/Archives/edgar/data/1467858/000146785816000223/form8-k01042016lyft.htm" rel="noopener noreferrer" target="_blank">
            SEC Form 8-K: Current Report
        </a>
    </li>
</ul>




## Getting Started

***Open vscode or IDE, then open the project folder in the terminal.***

`cd sec_filings_volatility`

***Now create a virtual environment in the project base called venv/***

`py -m venv venv`

***Activate venv from terminal.***

`/sec_filings _volatility/venv/Scripts/Activate.ps1`

***Install project python requirments***

`pip install -r requirements.txt`

Now you can run the program from inside the `sec_filings_volatility/notebook.ipynb` I am assuming you are using [MSFT visualstudio code](https://code.visualstudio.com/) and have python 3.11 installed.
