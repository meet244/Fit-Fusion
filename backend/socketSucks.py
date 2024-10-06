import asyncio
import websockets
import json
import base64
import random
import os


class socketsocket:

    gradio_url = ""
    session_hash = ""


    def set_inps(self,gradio_url, session_hash):
        self.gradio_url = gradio_url
        self.session_hash = session_hash

    def get_gradio_url(self):
        return self.gradio_url
    
    def get_session_hash(self):
        return self.session_hash


    def image_to_base64(self,image_path):
        with open(image_path, "rb") as image_file:
                encoded_string = base64.b64encode(image_file.read())
                return encoded_string.decode('utf-8')


    async def connect_and_send(self,generate_n_imgs, prompt, bad_proompt, speed):
        current_api = 65
        url = f"wss://{self.gradio_url.split('//')[1].split('/')[0]}/queue/join"
        only_once = False

        while True:
            try:
                if current_api > 68:
                    print("All APIs completed")
                    break

                async with websockets.connect(url) as websocket:
                    while True:
                        response = await websocket.recv()
                        print("Received:", response)
                        resp = json.loads(response)
                        if resp['msg'] == "send_hash":
                            await websocket.send(json.dumps({"fn_index": current_api, "session_hash": self.session_hash}))
                            print("Sent hash")
                        elif resp['msg'] == "send_data":
                            if current_api == 65:
                                data = {"data": [], "event_data": None, "fn_index": 65, "session_hash": self.session_hash}
                                await websocket.send(json.dumps(data))
                                print("Sent data")
                            elif current_api == 66:
                                data = {"data": [True, "0"], "event_data": None, "fn_index": 66, "session_hash": self.session_hash}
                                await websocket.send(json.dumps(data))
                                print("Sent data")
                            elif current_api == 67:
                                data = {"data": [None, False, prompt, bad_proompt, ["Fooocus Enhance", "Fooocus V2", "Fooocus Sharp"], speed, "1024×1024 <span style=\"color: grey;\"> ∣ 1:1</span>", int(generate_n_imgs), "png", random.randint(0, 9999999999999999999), False, 2, 4, "juggernautXL_v8Rundiffusion.safetensors", "None", 0.5, True, "sd_xl_offset_example-lora_1.0.safetensors", 0.1, True, "None", 1, True, "None", 1, True, "None", 1, True, "None", 1, False, "uov", "Disabled", None, [], None, "", None, False, True, False, False, 1.5, 0.8, 0.3, 7, 2, "dpmpp_2m_sde_gpu", "karras", "Default (model)", -1, -1, -1, -1, -1, -1, False, False, False, False, 64, 128, "joint", 0.25, False, 1.01, 1.02, 0.99, 0.95, False, False, "v2.6", 1, 0.618, False, False, 0, False, False, "fooocus", self.image_to_base64("face.jpg"),0.9,0.75,"FaceSwap", None, 0.5, 0.6, "ImagePrompt", None, 0.5, 0.6, "ImagePrompt", None, 0.5, 0.6, "ImagePrompt", False, 0, False, None, False, "Disabled", "Before First Enhancement", "Original Prompts", False, "", "", "", "sam", "full", "vit_b", 0.25, 0.3, 0, False, "v2.6", 1, 0.618, 0, False, False, "", "", "", "sam", "full", "vit_b", 0.25, 0.3, 0, False, "v2.6", 1, 0.618, 0, False, False, "", "", "", "sam", "full", "vit_b", 0.25, 0.3, 0, False, "v2.6", 1, 0.618, 0, False, False], "event_data": None, "fn_index": 67, "session_hash": self.session_hash}
                                await websocket.send(json.dumps(data))
                                print("Sent data")
                            elif current_api == 68 and not only_once:
                                only_once = True
                                data = {"data": [None], "event_data": None, "fn_index": 68, "session_hash": self.session_hash}
                                await websocket.send(json.dumps(data))
                                print("Sent data")

                        elif resp['msg'] == "process_completed":
                            print("Process completed")
                            current_api += 1
                            print("Sending next API")
                            print(resp)
                            break
                        elif resp['msg'] == "process_generating":
                            if "data:image/png" in str(resp):
                                print(resp)
                            print("Process generating")
                            try:
                                if 'data' in resp['output']:
                                    for item in resp['output']["data"]:
                                        if "value" in item and item["value"]:
                                            if item["value"].startswith("data:image/png;base64,"):
                                                print(item["value"])
                                                # save_temp_img(item["value"])
                                                base64_image_data = item["value"]
                                                if base64_image_data:
                                                    base64_image_data = base64_image_data.split("base64,")[1]
                                                    image_path = f"temp.png"
                                                    with open(image_path, "wb") as img_file:
                                                        img_file.write(base64.b64decode(base64_image_data))
                                                    print(f"Image saved successfully at: {image_path}")
                                                else:
                                                    print("No base64 image data found in the response.")
                                            else:
                                                print("Item value is not a base64 image.")
                                        else:
                                            print("Item value is None or missing.")
                            except Exception as e:
                                print("Error:", e)
            except websockets.ConnectionClosed as e:
                print("Connection closed:", e)
            except Exception as e:
                print("An error occurred:", e)

            print(str(current_api) * 100)

        # delete the image
        if os.path.exists("temp.png"):
            os.remove("temp.png")
            print("Temporary image deleted.")


# if __name__ == "__main__":

    
    # s = socketsocket()
    # s.set_inps("https://0e1982718edd25a2fa.gradio.live/", "d8nu2qnhb2k")
    # generate_n_imgs = 2
    # prompt = "An Indian fitness female influencer with a toned physique, wearing stylish athletic wear, performing a yoga pose on a yoga mat in a serene outdoor setting with a sunrise in the background, surrounded by lush greenery and mountains. She should have an influencer-like presence, exuding confidence and positivity"
    # bad_proompt = "bad, sad, improper, unclear, ugly"
    # speed = "Speed"  # Quality / Speed / Extreme Speed / Lightning / Hyper-SD

    # asyncio.get_event_loop().run_until_complete(connect_and_send(self.gradio_url, session_hash, generate_n_imgs, prompt, bad_proompt, speed))
