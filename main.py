from webbrowser import get

r = get(
    "https://api.deepseek.com/chat/completions",
    headers = {
        "Authorization":"Bearer sk-f51a3529dc4f4b139dc16057ce0b3a99"
        },
    json =  {
        "model": "deepseek-chat",
        "messages": [
          {"role": "system", "content": "You are a helpful assistant."},
          {"role": "user", "content": "Hello!"}
        ],
        "stream": false
      }
    )