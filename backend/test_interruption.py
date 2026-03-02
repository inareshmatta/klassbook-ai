import os, asyncio
from dotenv import load_dotenv
load_dotenv('.env')

from google import genai
from google.genai import types

async def test():
    api_key = os.environ.get('GEMINI_API_KEY')
    if not api_key:
        print("NO KEY")
        return
    client = genai.Client(api_key=api_key)
    config = types.LiveConnectConfig(response_modalities=["AUDIO"])
    
    try:
        async def recv_loop():
            try:
                async for msg in session.receive():
                    if msg.server_content and msg.server_content.interrupted:
                        print("RECEIVED SERVER VAD INTERRUPTION EVENT!")
                    elif msg.data:
                        print("- Received audio chunks")
            except Exception as e:
                pass
                
        recv_task = asyncio.create_task(recv_loop())

        async with client.aio.live.connect(model='gemini-2.5-flash-native-audio-preview-12-2025', config=config) as session:
            print('Connected.')
            await session.send_client_content(
                turns=[types.Content(role='user', parts=[types.Part.from_text(text='Count slowly from 1 to 20.')])],
                turn_complete=True
            )
            print('Sent request. Waiting 3 secs...')
            await asyncio.sleep(3)
            print('Interrupting...')
            
            # Send the interruption payload
            await session.send_client_content(
                turns=[], 
                turn_complete=False 
            )
            print('Successfully sent empty turns! Did not crash!')
            
            await asyncio.sleep(5)
            recv_task.cancel()
    except Exception as e:
        print('EXCEPTION! ', type(e).__name__, str(e))

if __name__ == '__main__':
    asyncio.run(test())
