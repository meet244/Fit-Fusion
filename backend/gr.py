import gradio as gr

# Define a simple function
def greet(name):
    return f"Hello, {name}!"

# Create a Gradio interface
demo = gr.Interface(
    fn=greet,  # The function to run
    inputs="text",  # Input type
    outputs="text",  # Output type
    title="Simple Gradio App",  # Title for the app
    description="Type your name to receive a greeting!"  # Description
)

# Launch the app with share=True
demo.launch(share=True)
