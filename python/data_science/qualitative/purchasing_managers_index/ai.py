from langchain.document_loaders import UnstructuredHTMLLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.vectorstores import Chroma
from langchain.embeddings import OpenAIEmbeddings
from langchain.chat_models import ChatOpenAI
from langchain.schema.runnable import RunnablePassthrough
from langchain import hub

import os
from dotenv import load_dotenv
load_dotenv()
OPENAI_API_KEY = os.environ.get("OPENAI_API_KEY")
OPENAI_MODEL = os.environ.get("OPENAI_MODEL")



# Load documents
print('\nWhich ISM report would you like to speak with manufacturing / service ?\n')
which_report = input()
# print('\nWhich year_month ? for Example "2023_09"\n')
# which_month = input()
ism_rob = f'./DataBase/ism_rob/{which_report}/2023_09_comments.html'
loader = UnstructuredHTMLLoader(ism_rob)
print(f'{which_report}')

# Split documents
text_splitter = RecursiveCharacterTextSplitter(chunk_size=300, chunk_overlap=60)
splits = text_splitter.split_documents(loader.load())

# Embed and store splits
vectorstore = Chroma.from_documents(documents=splits, embedding=OpenAIEmbeddings())
retriever = vectorstore.as_retriever()

# Prompt
rag_prompt = hub.pull("rlm/rag-prompt")

# LLM
llm = ChatOpenAI(model_name=OPENAI_MODEL, temperature=0, openai_api_key=OPENAI_API_KEY)

# RAG chain
rag_chain = (
    {"context": retriever, "question": RunnablePassthrough()}
    | rag_prompt
    | llm
)

# Get industry input
print('\nWhich Industry would you like me to summarize?\n')
industry = input()

# Get industry input
print('\nIndustry Sentiment gauge\n')

# Invoke RAG chain
prompt_template = f'\nGauge the sentiment of: comments made by the [{industry}] Purchasing Manager.\n'
result = rag_chain.invoke(prompt_template)
print(result)
prompt_template = f'\nKey themes of: comments made by the [{industry}] Purchasing Manager.\n'
result = rag_chain.invoke(prompt_template)
print(result)
