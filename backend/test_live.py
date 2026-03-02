import os, asyncio, time
from dotenv import load_dotenv
load_dotenv('.env')

from google import genai
from google.genai import types

async def main():
    api_key = os.environ.get('GEMINI_API_KEY')
    if not api_key:
        print("No API key")
        return
    client = genai.Client(api_key=api_key)
    
    print("Available Live Models:")
    for m in client.models.list():
        if 'live' in m.name or '2.0' in m.name or '2.5' in m.name:
            print(" -", m.name)

    model = "gemini-2.5-flash-native-audio-preview-12-2025" # This is currently in live_session.py
    # Change if not found!
    config = types.LiveConnectConfig(response_modalities=["AUDIO"])
    
    t0 = time.time()
    print(f"\nAttempting to connect to {model}...")
    try:
        async with client.aio.live.connect(model=model, config=config) as session:
            t1 = time.time()
            print(f"Connected in {t1 - t0:.2f} seconds!")
    except Exception as e:
        print(f"FAILED to connect in {time.time() - t0:.2f} seconds: {e}")

if __name__ == '__main__':
    asyncio.run(main())
