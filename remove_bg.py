from PIL import Image

def remove_white_bg(input_path, output_path, threshold=220):
    img = Image.open(input_path).convert("RGBA")
    data = img.getdata()
    
    new_data = []
    for item in data:
        # If pixel is close to white, make it transparent
        if item[0] > threshold and item[1] > threshold and item[2] > threshold:
            new_data.append((255, 255, 255, 0))
        else:
            # Optionally darken the non-white pixels to make it pop
            new_data.append((item[0], item[1], item[2], 255))
            
    img.putdata(new_data)
    img.save(output_path, "PNG")

remove_white_bg("c:/Users/sonub/.gemini/antigravity/scratch/techwhales/public/logo-techwhales.jpeg", "c:/Users/sonub/.gemini/antigravity/scratch/techwhales/public/logo-techwhales.png", threshold=220)
