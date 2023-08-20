import os
from django.shortcuts import render
from django.contrib import messages
from django.conf import settings

import markdown
import openai


def GPTCode(request):
    '''OpenAi | Chat GPT. This is a view which creates a Django form which prompts GPT to Suggest Code'''

    Page_Title = 'Code GPT'
    Page_Placeholder = 'Write your Prompt and Code here.'

    markdown_file = os.path.join('./templates/applications/ai/openai/components/ReadMe.md')
    with open(markdown_file, 'r') as file:
        markdown_text = file.read()
    content = markdown.markdown(markdown_text) # Markdown text to HTML

    languages = ['css', 'csv', 'django', 'docker', 'excel-formula', 'gitignore', 'javascript', 'jsx', 'makefile', 'markdown', 'markup', 'powershell', 'python', 'rust', 'sass', 'scss', 'sql', 'swift', 'tsx', 'typescript']
    # print(sorted(languages)) # Sort List Alphabetical Order

    if request.method == 'POST':
        code = request.POST['code']
        language = request.POST['language']
        if language == 'Select a Programming Language':
            messages.success(request, 'No Programming Language SELECTED...')
        if code == '':
            messages.success(request, 'No Code SUBMITTED...')
            return render(request, 'applications/ai/openai/index.html', {
                'Page_Title': Page_Title,
                'Page_Placeholder': Page_Placeholder,
                'languages': languages,
                'content': content,
                'code': code,
                'language': language,
            })
        else:
            KEY = settings.OPENAI_API_KEY
            openai.api_key = KEY
            openai.Model.list()
            try:
                response = openai.Completion.create(
                    engine = 'text-davinci-003', # OpenAi Model to Query
                    prompt = f'Respond only with code, improve, finish and debug this: {code}. Write the code at the standard of a senior developer.', # Query / Prompt
                    temperature = 0, # Model Refinement
                    max_tokens = 1000, # Max Text Length
                    top_p = 1.0,
                    frequency_penalty = 0.0,
                    presence_penalty = 0.0,
                )
                response = (response['choices'][0]['text']).strip()
                return render(request, 'applications/ai/openai/index.html', {
                    'Page_Title': Page_Title,
                    'Page_Placeholder': Page_Placeholder,
                    'languages': languages,
                    'content': content,
                    'response': response,
                    'language': language,
                })
            except Exception as e:
                return render(request, 'applications/ai/openai/index.html', {
                    'Page_Title': Page_Title,
                    'Page_Placeholder': Page_Placeholder,
                    'languages': languages,
                    'content': content,
                    'response': e,
                    'language': language,
                })

    return render(request, 'applications/ai/openai/index.html', {
        'Page_Title': Page_Title,
        'Page_Placeholder': Page_Placeholder,
        'languages': languages,
        'content': content,
    })


def GPTDebug(request):
    '''OpenAi | Chat GPT. This is a view which creates a Django form which prompts GPT to Debugging Code'''

    Page_Title = 'Debug GPT'
    Page_Placeholder = 'Write the code which you want to Debug here.'

    markdown_file = os.path.join('./templates/applications/ai/openai/components/ReadMe.md')
    with open(markdown_file, 'r') as file:
        markdown_text = file.read()
    content = markdown.markdown(markdown_text) # Markdown text to HTML

    languages = ['css', 'csv', 'django', 'docker', 'excel-formula', 'gitignore', 'javascript', 'jsx', 'makefile', 'markdown', 'markup', 'powershell', 'python', 'rust', 'sass', 'scss', 'sql', 'swift', 'tsx', 'typescript']
    # print(sorted(languages)) # Sort List Alphabetical Order

    if request.method == 'POST':
        code = request.POST['code']
        language = request.POST['language']
        if language == 'Select a Programming Language':
            messages.success(request, 'No Programming Language SELECTED...')
        if code == '':
            messages.success(request, 'No Code SUBMITTED...')
            return render(request, 'applications/ai/openai/index.html', {
                'Page_Title': Page_Title,
                'Page_Placeholder': Page_Placeholder,
                'languages': languages,
                'content': content,
                'code': code,
                'language': language,
            })
        else:
            KEY = settings.OPENAI_API_KEY
            openai.api_key = KEY
            openai.Model.list()
            try:
                response = openai.Completion.create(
                    engine = 'text-davinci-003', # OpenAi Model to Query
                    prompt = f'Respond only with code. Fix this {language} code: {code}', # Query / Prompt
                    temperature = 0, # Model Refinement
                    max_tokens = 1000, # Max Text Length
                    top_p = 1.0,
                    frequency_penalty = 0.0,
                    presence_penalty = 0.0,
                )
                response = (response['choices'][0]['text']).strip()
                return render(request, 'applications/ai/openai/index.html', {
                    'Page_Title': Page_Title,
                    'Page_Placeholder': Page_Placeholder,
                    'languages': languages,
                    'content': content,
                    'response': response,
                    'language': language,
                })
            except Exception as e:
                return render(request, 'applications/ai/openai/index.html', {
                    'Page_Title': Page_Title,
                    'Page_Placeholder': Page_Placeholder,
                    'languages': languages,
                    'content': content,
                    'response': e,
                    'language': language,
                })

    return render(request, 'applications/ai/openai/index.html', {
        'Page_Title': Page_Title,
        'Page_Placeholder': Page_Placeholder,
        'languages': languages,
        'content': content,
    })
