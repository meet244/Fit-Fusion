from bs4 import BeautifulSoup
import requests

# Sample HTML content (You can load it from a file or any other source)
web = "https://0e01866cbf6b68b40c.gradio.live/file=/content/Fooocus/outputs/2024-10-05/log.html"
html_content = requests.get(web).text

# Parse the HTML content
soup = BeautifulSoup(html_content, 'html.parser')

# Find all 'a' tags with '.png' in their href attribute
png_links = soup.find_all('a', href=lambda href: href and href.endswith('.png'))

data  = []
# Extract and print the href attribute
for link in png_links:

    data.append("https://0e01866cbf6b68b40c.gradio.live/file=/content/Fooocus/outputs/2024-10-05/" +link['href'])

print(data)