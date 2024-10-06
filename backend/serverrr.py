from flask import Flask, jsonify, request, send_file
from bs4 import BeautifulSoup
import requests
from socketSucks import socketsocket
import os
import flask_cors
import asyncio
from instabot import Bot
import threading
import sys
import google.generativeai as genai


API_KEY = "AIzaSyBegin-f22sh7THOVxEAXWEjZsfIa5fyCcQ0"
genai.configure(api_key=API_KEY)

s = socketsocket()
s.set_inps("https://c5fb2331596460514a.gradio.live", "cd2pgvo8mhd")

demo_apis = False
# demo_apis = True

app = Flask(__name__)
flask_cors.CORS(app)

@app.route('/', methods=['GET'])
def index():
    return jsonify({"message": "Welcome to the image generator server!"})

@app.route('/generate', methods=['POST'])
def generate():
    if not demo_apis:
        form_data = request.form
        generate_n_imgs = form_data.get('generate_n_imgs')
        prompt = form_data.get('prompt')
        bad_proompt = form_data.get('bad_prompt')
        speed = form_data.get('speed')

        print(generate_n_imgs, prompt, bad_proompt, speed)
        if prompt == None:
            return jsonify({"status": "error", "message": "Prompt is required"}), 400
        
        if bad_proompt == None:
            bad_proompt = "bad, sad, improper, unclear, ugly"

        loop = asyncio.new_event_loop()
        asyncio.set_event_loop(loop)
        loop.run_until_complete(s.connect_and_send(generate_n_imgs, prompt, bad_proompt, speed))
        loop.close()

    return jsonify({"status": "success"})

@app.route('/trends', methods=['POST'])
def trends():
    
    l = ['home exercise', 'exercise at home', 'workout', 'exercise song', 'belly exercise', 'body exercise', 'dance exercise', 'weight loss exercise', 'belly fat exercise', 'exercises', 'exercise kids', 'best exercise', 'back exercise', 'exercise video', 'face exercise', 'height exercise', 'exercise to lose weight', 'fat loss exercise', 'yoga exercise', 'yoga', 'exercise music', 'gym exercise', 'breast exercise', 'exercise morning', 'chest exercise']
    return jsonify(l)

    API_KEY = "443decede48ffd1aba33de043d8767592f012a46889806de01aeda40a8121e0b"
    # Define the SerpAPI endpoint and parameters
    url = "https://serpapi.com/search.json"
    params = {
        "engine": "google_trends",
        "q": "exercise",  # Query keyword
        "location": "India",  # Region
        "api_key": API_KEY,  # Your API key
        "data_type": "RELATED_QUERIES",  # Related queries type
        "date": "now 7-d",  # Last 7 days data
        "gprop": "youtube"  # Google property: YouTube
    }
    
    # Make the GET request
    response = requests.get(url, params=params)
    
    # Check if the request was successful
    if response.status_code == 200:
        top_related_queries = response.json()["related_queries"]["top"]
        top_related_queries = [q["query"] for q in top_related_queries]
        # Return the Top Related Querries
        return top_related_queries
    else:
        return f"Error: {response.status_code}, {response.text}"

@app.route('/post', methods=['POST'])
def post():
    # get the image url
    img_url = request.form.get('img_url') 
    caption = request.form.get('caption')

    if img_url == None:
        return jsonify({"status": "error", "message": "Image URL is required"}), 400
    if caption == None:
        return jsonify({"status": "error", "message": "Caption is required"}), 400

    # download the image from ready_imgs
    img = requests.get(img_url)
    with open("post.png", "wb") as f:
        f.write(img.content)

    # Create an instance of the bot
    bot = Bot()

    # Log in to your Instagram account
    bot.login(username="nityaasig", password="Parth@2005")
    bot.delay = 200

    # Path to the video file
    video_path = "post.png"

    # Optional: Write a caption for your post

    # Post the video
    bot.upload_video(video_path, caption=caption)

    # Logout once done (optional, as the bot automatically logs out when the script ends)
    
@app.route('/preview', methods=['GET'])
def preview():
    # return image(not base) if available
    if os.path.exists('temp.png'):
        return send_file('temp.png', mimetype='image/png')
    else:
        return jsonify({"status": "error", "message": "Image not found"}), 404


@app.route('/ready_imgs', methods=['POST', 'GET'])
def set_message():
    d = s.get_gradio_url()
    web = f"{d}/file=/content/Fooocus/outputs/2024-10-06/log.html"
    html_content = requests.get(web).text

    # Parse the HTML content
    soup = BeautifulSoup(html_content, 'html.parser')

    # Find all 'a' tags with '.png' in their href attribute
    png_links = soup.find_all('a', href=lambda href: href and href.endswith('.png'))

    data  = []
    # Extract and print the href attribute
    for link in png_links:
        data.append(f"{d}/file=/content/Fooocus/outputs/2024-10-06/" +link['href'])
        # data.append(link['href'])
    
    print(data)

    return jsonify(data)


@app.route('/caption', methods=['POST'])
def set_caption():
    caption = request.form.get('caption')
    if caption == None:
        return jsonify({"status": "error", "message": "Caption is required"}), 400

    s.set_caption(caption)
    return jsonify({"status": "success"})


@app.route('/twitter_posts', methods=['POST'])
def get_posts_from_gemini():
    prompt = request.form.get('prompt')
    if prompt is None:
        return jsonify({"status": "error", "message": "Prompt is required"}), 400

    model = genai.GenerativeModel("gemini-1.5-flash")
    response = model.generate_content([prompt, "Based on the given prompt, let's create a Twitter post that will attract an audience and create a positive vibe. Generate the post captions. Do not use buzzwords. Create hashtags based on the prompt. The post must be informative and must instigate the feelings of the audience."])
    
    return jsonify({"status": "success", "content": response.text})


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)