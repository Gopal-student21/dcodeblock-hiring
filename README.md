# Hackathon of https://www.dcodeblock.com

### Dependencies 
 **React + Vite** https://vite.dev/guide/
 **Tailwind css** using vite https://tailwindcss.com/docs/installation/using-vite

### Setup
1. git clone the repository in you local computer.
2. Install the all the dependencies form the link given above or run the cmd.
 
### Intallation commands
     -npm create vite@latest
Use name as you like and choose the library to react and language javascript 

     - npm install tailwindcss @tailwindcss/vite
vite.config.js in this file add this 

    - import { defineConfig } from 'vite'
      import tailwindcss from '@tailwindcss/vite'
      export default defineConfig({
         plugins: [
        tailwindcss(),
          ],
            })


In css file 
   
    - @import "tailwindcss";

    