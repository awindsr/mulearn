export const gamedev = {
  title: "Game Development",
  introduction: {
    description:
      "Passionate about creating immersive experiences in gaming? The Game Development Interest Group is your gateway to learning about designing, programming, and storytelling in the world of games. Whether you're into creating captivating visuals, coding mechanics, or crafting narratives, join us to level up your game development skills.",
    downloadLink:
      "https://mulearnfoundation.notion.site/11e59e69b1bf8002aaa0e99daf76a94f?pvs=25",
    schedules: {
      officeHours: "Friday 8:30 @ Discord Lobby",
      thinkTankMeeting: "Saturday 8:30 PM @ Google Meet",
    },
  },

  roadMap: [
    {
      level: "Basic",
      cards: [
        {
          title: "Foundational Understanding",
          data: {
            description:
              "Great games begin with a solid foundation, built on understanding core mechanics like player interaction, objectives, and challenges to craft engaging experiences. In this phase, we’ll explore Unreal Engine’s tools, including the intuitive Blueprint system for logic creation without coding, while familiarizing ourselves with its interface and resource library. Like laying the foundation of a house, this step is about mastering the essentials, gaining confidence, and fostering a creative mindset to transform ideas into reality.",
            whatYouWillLearn: [
              "Introdution to Game Development",
              "Unreal Engine 5 Overview",
            ],
            challenges: [
              {
                title: "Research the basics of game development",
                resources: ["Resource 1", "Resource 2", "Resource 3"],
                description:
                  "Dive into the fundamentals of game development to understand key aspects like game design, programming, art, and sound. Explore essential concepts such as mechanics, gameplay elements, and player interaction. This foundational knowledge will serve as a stepping stone for creating engaging games. After completing your research, create a blog that summarizes your findings. Once done, submit the public link of the blog in the #Game-Dev channel using the hashtag #cl-game-dev-basics to earn 200 Karma Points. (Suggestion: Use Medium for blog)",
              },
              {
                title: "Install Unreal Engine 5 ond explore the interface",
                resources: ["Resource 1", "Resource 2", "Resource 3"],
                description:
                  "Download and install Unreal Engine 5 on your system. Once installed, explore the interface to familiarize yourself with key components like the viewport, content browser, outliner, and details panel. This task will help you understand the basic layout and functionality of the engine, preparing you for future projects. After completing take a screenshot of the opening interface screen of unreal engine with the project name as your name. Once done, submit the screenshot in the #Game-Dev channel using the hashtag #cl-game-dev-unreal to earn 200 Karma Points.",
              },
            ],
          },
          resources: 6,
          proofOfWork: 15,
          rating: 0,
          hasGift: true,
        },
        {
          title: "Core Engine Skills",
          data: {
            description:
              "Once you’ve mastered the basics, it’s time to delve into Unreal Engine’s advanced features and bring your ideas to life. This stage focuses on key skills like manipulating 3D assets, designing functional and visually stunning environments, and using Blueprints for interactivity without complex coding. You’ll explore Unreal's physics engine for realistic dynamics, master lighting and rendering to set the perfect atmosphere, and gain expertise in scene and asset management. By honing these core skills, you’ll transition from beginner to expert, ready to build anything from simple prototypes to immersive game worlds, unlocking your full creative potential.",
            whatYouWillLearn: [
              "Project Setup & Navigation",
              "Game Level Layout",
              "Lighting and Rendering/Post processing ",
              "Blueprints",
            ],
            challenges: [
              {
                title: "Set up a simple project in Unreal Engine 5",
                resources: ["Resource 1", "Resource 2", "Resource 3"],
                description:
                  "Create a new project in Unreal Engine 5 by selecting a suitable template, such as First Person, Third Person, or Blank, based on your preference. Set up the project structure by organizing folders for assets, blueprints, materials, and any other essential components. Familiarize yourself with the settings and configuration options to ensure the project is optimized for development. This task will help you understand the basics of project creation, structure, and initial setup within Unreal Engine. During the project setting up take a screen recording of the process. Once done, upload it to any cloud platform and submit the link in the #Game-Dev channel using the hashtag #cl-game-dev-project to earn 200 Karma Points.",
              },
              {
                title: "Design a basic game level layout",
                resources: ["Resource 1", "Resource 2", "Resource 3"],
                description:
                  "Design a basic game level layout in Unreal Engine 5 that incorporates clear pathways, obstacles, and interactive elements. Focus on creating an engaging environment that naturally guides players through the level. Consider player movement, visibility, and balance to ensure the design is both functional and enjoyable. This task is an excellent starting point for honing your level design and environmental creation skills. Create a basic game level layout using Unreal Engine. Your level should include clear pathways, obstacles, and interactive elements, focusing on functionality and creativity over fine details or polish. Once completed, upload your project to GitHub, ensuring you include a README file that describes your level design concept and the tools you used. Submit the GitHub repository link in the #Game-Dev channel using the hashtag #cl-game-dev-basiclayout to earn 250 Karma Points.",
              },
              {
                title: "Create basic interactions using Blueprints",
                resources: ["Resource 1", "Resource 2", "Resource 3"],
                description:
                  "Use Unreal Engine’s Blueprints to design and implement basic interactions in your game. Examples include opening doors, turning lights on or off, or activating objects when the player interacts with them. Focus on functionality and ensure the interactions respond correctly to player input. This task will introduce you to Unreal’s visual scripting system and the basics of interactive gameplay. Create basic game interactions using Unreal Engine’s Blueprints. Focus on implementing simple interactions such as opening doors, triggering events, or activating objects when the player interacts with them. Once completed, upload your project to GitHub, ensuring you include a README file that explains the interactions you implemented and how they work. Submit the GitHub repository link in the #Game-Dev channel using the hashtag #cl-game-dev-blueprints to earn 250 Karma Points.",
              },
            ],
          },
          resources: 6,
          proofOfWork: 15,
          rating: 0,
          hasGift: true,
        },
      ],
    },
    {
      level: "Intermediate",
      cards: [
        {
          title: "Programming and Scripting",
          data: {
            description:
              "At the core of every game is the logic that drives its actions and interactions, which is where programming and scripting come in. While Unreal Engine’s Blueprint system is a great tool for non-programmers, mastering the fundamentals of scripting takes your skills to the next level. In this stage, we’ll focus on Unreal’s C++ integration, teaching you how to write code that interacts directly with the engine. C++ enables you to create complex game mechanics, optimize performance, and gain control over gameplay. You’ll start with basic coding concepts and move into more advanced topics like object-oriented and event-driven programming. By mastering scripting, you'll be able to solve problems creatively and create functional, scalable, and engaging gameplay.",
            whatYouWillLearn: [
              "Introduction to C++ for unreal",
              "Advanced blueprints",
              "Gameplay Mechanics",
            ],
            challenges: [
              {
                title: "Write a simple C++ script for an in-game action",
                resources: ["Resource 1", "Resource 2", "Resource 3"],
                description:
                  "Write a simple C++ script in Unreal Engine 5 to implement an in-game action, such as making the player jump, interact with objects, or trigger a special effect. Focus on creating the core functionality using Unreal's C++ framework and ensure the script interacts properly with the game’s mechanics. This task will help you get hands-on experience with Unreal Engine’s C++ coding environment and improve your programming skills for game development. Write a simple C++ script in Unreal Engine to implement an in-game action, such as triggering a jump, opening a door, or interacting with an object. Focus on the basic functionality and ensure the script works as intended within the game. Once completed, upload your project to GitHub, including a README file that describes the script and the action it performs. Submit the GitHub repository link in the #Game-Dev channel using the hashtag #cl-game-dev-cplusplus to earn 300 Karma Points.",
              },
              {
                title: "Create a complex interaction using Blueprints",
                resources: ["Resource 1", "Resource 2", "Resource 3"],
                description:
                  "Design and implement a complex interaction using Unreal Engine’s Blueprints. Create systems such as a multi-step puzzle, a dynamic object that responds to multiple triggers, or an event sequence that combines animations and logic. Focus on creating seamless interactions that enhance gameplay and challenge the player. This task will deepen your understanding of Unreal's visual scripting system and help you create more engaging and intricate gameplay mechanics. Create a complex in-game interaction using Unreal Engine’s Blueprints. This could involve multiple triggers, animations, or interactions that depend on player actions, such as a puzzle system, a dynamic object that reacts to player input, or a more advanced event sequence. Once completed, upload your project to GitHub, including a README file that explains the interactions you’ve created and how they function. Submit the GitHub repository link in the #Game-Dev channel using the hashtag #cl-game-dev-complexblueprint to earn 300 Karma Points.",
              },
              {
                title: "Implement basic player movement and interaction",
                resources: ["Resource 1", "Resource 2", "Resource 3"],
                description:
                  "Set up basic player movement and interaction mechanics in Unreal Engine 5. Enable core movements like walking, running, and jumping by configuring input controls. Add simple player interactions such as picking up objects, pressing buttons, or opening doors using Blueprints or C++ scripting. This task will introduce you to handling character input and interaction systems, essential for creating engaging gameplay. Implement basic player movement and interaction in Unreal Engine using either Blueprints or C++. Set up standard player controls such as walking, running, jumping, and interacting with objects (e.g., picking up items, opening doors). Once completed, upload your project to GitHub, including a README file that explains the movement mechanics and interactions you’ve implemented. Submit the GitHub repository link in the #Game-Dev channel using the hashtag #cl-game-dev-playermovement to earn 350 Karma Points.",
              },
            ],
          },
          resources: 12,
          proofOfWork: 44,
          rating: 0,
          hasGift: true,
        },
        {
          title: "3D Modeling and Animation",
          data: {
            description:
              "Creating immersive game worlds starts with 3D modeling and animation, blending art with technical skill. In this phase, you’ll learn to use 3D modeling tools to design game assets like characters, landscapes, and props, focusing on polygonal modeling, texturing, and sculpting to create detailed, optimized models. Beyond static objects, you’ll explore animation techniques, including rigging and keyframe animation, to bring your models to life with realistic motion. Additionally, you’ll dive into Unreal Engine’s Animation Blueprint to integrate animations into gameplay. Mastering these skills will enhance your game’s visuals and storytelling, making your creations dynamic, engaging, and immersive.",
            whatYouWillLearn: [
              "Importing Assets",
              "Animation Basics",
              "Rigging and Skeletal Meshes",
            ],
            challenges: [
              {
                title: "Import a 3D model into Unreal Engine 5 ",
                resources: ["Resource 1", "Resource 2", "Resource 3"],
                description:
                  "Import a 3D model into Unreal Engine 5 to use within your project. Ensure the model is properly textured, scaled, and positioned in the scene. Verify that all materials, animations (if any), and collisions are functioning correctly. This task will familiarize you with the process of bringing external assets into Unreal Engine for use in game environments. Import a 3D model into Unreal Engine. The model should include textures and materials where applicable. Once imported, ensure the model is correctly placed in the scene and functions as expected. Once completed, upload your project to GitHub, including a README file that describes the 3D model, the software used to create it, and any adjustments made in Unreal Engine. Submit the GitHub repository link in the #Game-Dev channel using the hashtag #cl-game-dev-3dmodel to earn 250 Karma Points.",
              },
              {
                title: "Add Simple Animations to a Character",
                resources: ["Resource 1", "Resource 2", "Resource 3"],
                description:
                  "Add simple animations to a character in Unreal Engine 5 using the Animation Blueprint system. Implement basic actions such as idle, walking, running, or jumping. Set up state transitions to ensure the animations play smoothly based on player input. This task will help you understand how to create lifelike movement and enhance the character’s presence in the game. Add basic animations to a character in Unreal Engine, such as walking, running, and jumping. Use Unreal’s Animation Blueprint system to set up the character's animation states and transitions based on player input. Once completed, upload your project to GitHub, including a README file that describes the animations added and how they are triggered within the game. Submit the GitHub repository link in the #Game-Dev channel using the hashtag #cl-game-dev-characteranimations to earn 300 Karma Points.",
              },
              {
                title: "Set Up a Skeletal Mesh for a Character Model",
                resources: ["Resource 1", "Resource 2", "Resource 3"],
                description:
                  "Set up a skeletal mesh for a character model in Unreal Engine 5. Import the model with its skeleton and rigging, ensuring proper integration for animations and movement. Test the skeletal mesh to verify that it deforms correctly during animations. This task will help you understand the essentials of working with character models and preparing them for animation. Set up a skeletal mesh for a character model in Unreal Engine. Import your character model with its skeleton and rigging, ensuring that it is properly linked to the skeletal structure for animation. Configure the mesh to work with the animation system and verify that it moves correctly within the engine. Once completed, upload your project to GitHub, including a README file that explains the skeletal mesh setup, the tools used for rigging, and any adjustments made in Unreal Engine. Submit the GitHub repository link in the #Game-Dev channel using the hashtag #cl-game-dev-skeletalmesh to earn 350 Karma Points.",
              },
            ],
          },
          resources: 6,
          proofOfWork: 29,
          rating: 0,
          hasGift: true,
        },
        {
          title: "Physics and Spatial Effects",
          data: {
            description:
              "Games need more than visuals and interactivity—they need to feel real. Physics and special effects bring depth, realism, and excitement to your game world. Unreal Engine’s physics engine simulates gravity, collisions, and forces, enabling believable interactions like breaking walls or shattering objects. Special effects (VFX) enhance this realism, adding visual flair with elements like explosions, rain, fire, and magical spells. Using Unreal’s Niagara particle system, you’ll create dynamic, reactive effects that elevate gameplay. Mastering physics and VFX allows you to craft immersive, impactful experiences, blending realism with creative spectacle to make your game truly unforgettable.",
            whatYouWillLearn: [
              "Physics Simulation",
              "Particle System and VFX",
              "Niagara Effects System",
            ],
            challenges: [
              {
                title: "Apply Physics to Objects in a Scene",
                resources: ["Resource 1", "Resource 2", "Resource 3"],
                description:
                  "Apply physics to objects in a scene using Unreal Engine 5. Enable features like gravity, collisions, and physical interactions, allowing objects to respond realistically to forces such as pushes, pulls, or impacts. Test the setup to ensure the objects behave naturally within the environment. This task will introduce you to Unreal’s physics system and enhance the realism of your game. Apply physics to objects in a scene in Unreal Engine. Set up realistic behaviors such as gravity, collision, and forces (e.g., pushing, pulling, and rotating) for different objects. Ensure the objects interact naturally with the environment, responding to player actions or environmental factors.Once completed, upload your project to GitHub, including a README file that explains the physics settings applied and how they affect the objects in the scene. Submit the GitHub repository link in the #Game-Dev channel using the hashtag #cl-game-dev-physics to earn 200 Karma Points.",
              },
              {
                title: "Create a Particle Effect",
                resources: ["Resource 1", "Resource 2", "Resource 3"],
                description:
                  "Create a particle effect in Unreal Engine 5, such as an explosion, smoke, or fire. Use the Niagara particle system to design the effect by adjusting properties like particle size, velocity, color, and lifespan. Experiment with additional modules to enhance realism and visual appeal. This task will help you understand the fundamentals of particle systems and how to add dynamic effects to your game. Create a particle effect using Niagara or other technologies available in Unreal Engine, such as an explosion, smoke, or fire. Use the Niagara system to design and implement the effect, adjusting properties like particle size, velocity, color, and duration to create a realistic and visually appealing result. Once completed, upload your project to GitHub, including a README file that describes the particle effect and how it was created using Niagara in Unreal Engine. Submit the GitHub repository link in the #Game-Dev channel using the hashtag #cl-game-dev-particleeffect to earn 300 Karma Points.",
              },
              {
                title: "Design a Visual Effect Using Niagara",
                resources: [
                  "https://www.youtube.com/watch?v=pzIORuULNfo&list=WL&index=15",
                  "Resource 2",
                  "Resource 3",
                ],
                description:
                  "Design a visual effect using the Niagara system in Unreal Engine 5, such as a magical spell, energy burst, or environmental effect like rain or fog. Leverage Niagara’s advanced modules to control particle behavior, colors, and animations. Experiment with features like ribbons, trails, or mesh emitters to create a visually engaging and immersive effect. This task will help you develop skills in creating advanced, custom visual effects for your game. Design a visual effect using Niagara in Unreal Engine, such as a magic spell, energy beam, or environmental effect (e.g., rain or fog). Focus on creating dynamic visuals with a combination of particle systems, forces, and behaviors. You can also incorporate advanced features like mesh particles, ribbons, or trails to enhance the effect. Once completed, upload your project to GitHub, including a README file that describes the visual effect, the techniques used, and how it was created using Niagara. Submit the GitHub repository link in the #Game-Dev channel using the hashtag #cl-game-dev-niagaravfx to earn 350 Karma Points.",
              },
            ],
          },
          resources: 6,
          proofOfWork: 29,
          rating: 0,
          hasGift: true,
        },
      ],
    },
    {
      level: "Advanced",
      cards: [
        {
          title: "UI/UX Design",
          data: {
            description:
              "A game isn’t just about visuals and mechanics—it’s about crafting an experience that players navigate effortlessly. UI/UX design ensures interfaces are intuitive, functional, and immersive. In this phase, you’ll learn to create game menus, HUDs, and interactive elements using Unreal Engine’s UMG Editor. You’ll focus on designing clear layouts, responsive elements, and accessible features like colorblind-friendly palettes and readable fonts. By understanding player psychology, you’ll create seamless flows and consistent feedback that enhance gameplay. Mastering UI/UX design makes your game polished and enjoyable, turning complex systems into an intuitive, engaging experience for players.",
            whatYouWillLearn: [
              "User Interface (UI) Creation",
              "HUD and On-Screen Indicators",
            ],
            challenges: [
              {
                title: "Design and implement a basic game menu",
                resources: ["Resource 1", "Resource 2", "Resource 3"],
                description:
                  "Design and implement a basic game menu in Unreal Engine 5. Include essential features such as a start button, options menu, and quit functionality. Use the UMG (Unreal Motion Graphics) system to create the menu interface and configure interactions using Blueprints. Ensure smooth navigation between menu screens. This task will introduce you to UI design and functionality within Unreal Engine. Design and implement a basic game menu in Unreal Engine, including features like a main menu, start button, options, and quit functionality. Use Blueprints or C++ to create the menu structure and set up interactions, such as transitioning between menus and adjusting simple settings (e.g., volume, graphics quality). Once completed, upload your project to GitHub, including a README file that explains the menu layout, the interactions implemented, and the functionality of each button. Submit the GitHub repository link in the #Game-Dev channel using the hashtag #cl-game-dev-gamemenu to earn 250 Karma Points.",
              },
              {
                title: "Display player health or score on the screen",
                resources: ["Resource 1", "Resource 2", "Resource 3"],
                description:
                  "Implement a system to display player health or score on the screen in Unreal Engine 5. Use UMG (Unreal Motion Graphics) to create UI elements like a health bar or score counter that updates in real-time as the player progresses. Customize the display for clarity and aesthetics. This task will help you understand how to integrate essential gameplay data into the user interface, enhancing player experience. Implement a system to display the player’s health or score on the screen in Unreal Engine. Use Blueprints or C++ to create a UI element (e.g., a health bar or score counter) that updates in real-time as the player progresses through the game. Once completed, upload your project to GitHub, including a README file that explains the implementation of the health or score display, how it updates, and any relevant UI setup.Submit the GitHub repository link in the #Game-Dev channel using the hashtag #cl-game-dev-playerscore to earn 250 Karma Points.",
              },
            ],
          },
          resources: 12,
          proofOfWork: 44,
          rating: 0,
          hasGift: true,
        },
        {
          title: "Optimization and Debugging",
          data: {
            description:
              "Even the most visually stunning and feature-rich games can falter if they lack smooth performance. Optimization and debugging are crucial phases in game development, ensuring your game runs seamlessly across devices. You’ll learn to fine-tune assets using techniques like Level of Detail (LOD) management, optimize textures and shaders, and leverage Unreal Engine’s profiling tools like Unreal Insights to tackle frame rate drops and memory issues. Debugging focuses on identifying and resolving gameplay disruptions, using tools like the Blueprint Debugger and Breakpoints. By mastering these skills, you’ll polish your game to perfection, creating an experience that’s both visually impressive and technically robust.",
            whatYouWillLearn: ["Performance Optimization", "Debugging Tools"],
            challenges: [
              {
                title: "Optimize assets and scripts for better performance",
                resources: ["Resource 1", "Resource 2", "Resource 3"],
                description:
                  "Optimize assets (such as textures, models, and sounds) and scripts in Unreal Engine 5 to improve game performance. Simplify meshes, reduce texture sizes, and optimize code to ensure smooth gameplay. Use Unreal's profiling tools to identify and address performance bottlenecks. This task will help you understand how to maintain high performance while ensuring visual and gameplay quality. Optimize game assets (textures, models, audio, etc.) and scripts in Unreal Engine to improve performance. Focus on reducing file sizes, simplifying meshes, and improving texture compression. For scripts, optimize code for efficiency, reduce unnecessary calculations, and ensure smooth execution. Once completed, upload your project to GitHub, including a README file that describes the optimization techniques applied and the improvements in performance. Submit the GitHub repository link in the #Game-Dev channel using the hashtag #cl-game-dev-optimization to earn 300 Karma Points.",
              },
              {
                title: "Use debugging tools to identify and fix issues",
                resources: ["Resource 1", "Resource 2", "Resource 3"],
                description:
                  "Use Unreal Engine’s debugging tools (such as the Blueprint Debugger, Visual Studio Debugger, and Profiler) to identify and resolve issues in your game project. Focus on solving common problems like performance drops, gameplay bugs, or logic errors. Document the issues you encounter and the steps you take to fix them. This task will enhance your troubleshooting skills and help ensure a smoother game development process. Use Unreal Engine’s debugging tools (such as the Blueprint Debugger, Visual Studio Debugger, and Profiler) to identify and fix issues within your game project. Focus on solving common problems like performance bottlenecks, gameplay bugs, or errors in logic. Document the issues you encountered and how you resolved them. Once completed, upload your project to GitHub, including a README file that explains the debugging process, the tools used, and the fixes applied. Submit the GitHub repository link in the #Game-Dev channel using the hashtag #cl-game-dev-debugging to earn 250 Karma Points.",
              },
            ],
          },
          resources: 6,
          proofOfWork: 29,
          rating: 0,
          hasGift: true,
        },
        {
          title: "Publishing and Testing",
          data: {
            description: "The final phases of game development—**Testing and Publishing**—are where your creation is polished and prepared for players. Testing ensures your game is stable, engaging, and performs flawlessly across platforms through rigorous playtesting, stress tests, and debugging. Tools like Unreal Engine’s Session Frontend and Automated Testing Frameworks help refine every detail. Publishing focuses on packaging and distributing your game, optimizing files, meeting platform-specific requirements, and crafting a compelling marketing strategy with trailers, visuals, and outreach to gaming communities. Together, these steps ensure your game not only reaches its audience but also delivers an unforgettable, polished experience.",
            whatYouWillLearn: [
              "Testing and Quality Assurance",
              "Packaging and Deployment",
              "Publishing on Platforms",
            ],
            challenges: [
              {
                title: "Conduct and playtesting gather feedback",
                resources: ["Resource 1", "Resource 2", "Resource 3"],
                description:
                  "Conduct playtesting for your game project with a group of players, either peers or through an online community, to gather detailed feedback on gameplay mechanics, difficulty, and user experience. Analyze this feedback to identify areas for improvement and make necessary adjustments to enhance the overall game. This task is essential for understanding how player input can refine your design and create a more polished and engaging experience. To submit proof of your work, you have three options: (1) Record a video of the playtesting session that includes player feedback and showcases any changes made, using platforms like YouTube (unlisted link), Google Drive, or similar; (2) Prepare a detailed feedback summary report, including key points raised by testers and the changes implemented, in a Google Doc or PDF; or (3) Share survey results from an online tool like Google Forms, along with an explanation of how the feedback influenced your project. Once completed, submit your preferred proof of work in the #Game-Dev channel using the hashtag #cl-game-dev-playtesting to earn 250 Karma Points.",
              },
              {
                title: "Package the game for PC and test the build",
                resources: ["Resource 1", "Resource 2", "Resource 3"],
                description:
                  "Package your game for PC using Unreal Engine 5's packaging tools, ensuring all assets are included and the game is optimized to run smoothly on a standard PC setup. Test the packaged build thoroughly on your machine to identify and resolve any critical issues such as crashes, performance drops, or missing assets. This task will help you prepare the game for distribution and ensure it’s polished for the PC platform. Upload the playable build to a file hosting platform like Google Drive, Dropbox, or Itch.io, and provide a description of any issues encountered during testing and how you resolved them. Once completed, submit the link in the #Game-Dev channel using the hashtag **#cl-game-dev-pcbuild** to earn 300 Karma Points.",
              },
              {
                title: "Prepare the ame for submission to a digital platform",
                resources: ["Resource 1", "Resource 2", "Resource 3"],
                description:
                  "Prepare your game for submission to a digital platform such as Steam, Itch.io, or Epic Games Store. This process involves finalizing all game assets, creating platform-specific metadata, and ensuring compliance with platform guidelines. Metadata includes essential elements such as detailed descriptions, high-quality screenshots, and system requirements to provide potential players with all necessary information about your game. Additionally, you should test the submission process thoroughly to identify any potential issues and guarantee a smooth transition to the platform. By completing this task, you will gain a deeper understanding of the submission process and ensure your game is ready for distribution. To submit proof of your work, you have several options. You can provide a detailed document outlining the steps you took to prepare your game for submission, including metadata creation, asset preparation, and adherence to platform guidelines. Alternatively, you may submit a screenshot or confirmation of your game’s submission from the platform’s developer dashboard, such as Steamworks or Itch.io. If your game is already live on a platform, you can share the link to its page along with a brief description of your submission experience. Once you have completed this task, submit your chosen proof of work in the #Game-Dev channel using the hashtag #cl-game-dev-submission to earn 300 Karma Points.",
              },
            ],
          },
          resources: 6,
          proofOfWork: 29,
          rating: 0,
          hasGift: true,
        },
        {
          title: "Portfolio and Community Engagement",
          data: {
            description: "This is a description of the course",
            whatYouWillLearn: [
              "Portfolio Development",
              "Community Engagement",
            ],
            

            challenges: [
              {
                title: "Create a portfolio showcasing your projects",
                resources: ["Resource 1", "Resource 2", "Resource 3"],
                description:
                  "Create a portfolio to showcase your game development projects. Include project descriptions, images, videos, or playable builds to highlight your skills and accomplishments. The portfolio can be a personal website, PDF, or a digital presentation. This task will help you organize and present your work in a professional way, making it easier to share with potential employers or collaborators. Create a professional portfolio that showcases your game development projects. Include detailed descriptions, images, videos, and playable builds to highlight your work. The portfolio can be a personal website, PDF, or digital presentation that clearly communicates your skills and achievements. Once completed, create a link to your portfolio and provide it for review. Submit the link to your portfolio in the #Game-Dev channel using the hashtag #cl-game-dev-portfolio to earn 250 Karma Points.",
              },
              {
                title: "Share your work and connect with other developers",
                resources: ["Resource 1", "Resource 2", "Resource 3"],
                description:
                  "Design a basic game level layout in Unreal Engine 5 that incorporates clear pathways, obstacles, and interactive elements. Focus on creating an engaging environment that naturally guides players through the level. Consider player movement, visibility, and balance to ensure the design is both functional and enjoyable. This task is an excellent starting point for honing your level design and environmental creation skills. Create a basic game level layout using Unreal Engine. Your level should include clear pathways, obstacles, and interactive elements, focusing on functionality and creativity over fine details or polish. Once completed, upload your project to GitHub, ensuring you include a README file that describes your level design concept and the tools you used. Submit the GitHub repository link in the #Game-Dev channel using the hashtag #cl-game-dev-basiclayout to earn 250 Karma Points.",
              },
              {
                title: "Create basic interactions using Blueprints",
                resources: ["Resource 1", "Resource 2", "Resource 3"],
                description:
                  "Share your game development projects with the community by posting on platforms like GitHub, LinkedIn, or Twitter. Engage with other developers to receive feedback, share ideas, and expand your network. This task will help you build a professional presence and connect with like-minded individuals in the game development community. Share your game development work and connect with other developers through platforms such as GitHub, LinkedIn, or Twitter. Post a summary of your latest project, including images, videos, or playable builds, and engage with the community to receive feedback, share ideas, and expand your network. Once completed, create a link to your post or profile and provide it for review. Submit the link in the #Game-Dev channel using the hashtag #cl-game-dev-connect to earn 200 Karma Points.",
              },
            ],
          },
          resources: 6,
          proofOfWork: 29,
          rating: 0,
          hasGift: true,
        },
      ],
    },
  ],

  communityPartners: [
    {
      name: "TILTLABS",
      image: "/assets/IG/Game Development/Community Partners/Tiltlabs.png",
    },
    {
      name: "Banzan Studios",
      image: "/assets/IG/Game Development/Community Partners/Banzan.jpg",
    },
    {
      name: "Norian Games",
      image: "/assets/IG/Game Development/Community Partners/Norian.png",
    },
    {
      name: "AKEF",
      image: "/assets/IG/Game Development/Community Partners/AKEF.png",
    },
    {
      name: "AnimationXpress",
      image:
        "/assets/IG/Game Development/Community Partners/AnimationXpress.jpeg",
    },
  ],
  prerequisites: {
    description:
      "To get started in game development, it's important to have basic computer skills, such as installing software and managing files or folders. Familiarity with programming concepts like variables, loops, and functions is helpful, with C++ knowledge being a plus but not mandatory. A basic understanding of 3D math, including vectors and transformations, is useful for working with 3D objects. Additionally, an awareness of fundamental game design principles, such as level layout and gameplay mechanics, provides a solid foundation for creating engaging games.advanced topics.",
  },
  learningPath: {
    embedUrl: "https://roadmap.sh/r/unreal-engine-5-game-developer-19rqf",
  },
  mentors: [
    {
      name: "Nikhil Chandran",
      role: "Founder & CEO @ TILTLABS",
      linkedin: "https://www.linkedin.com/in/nikhil-tiltlabs/",
      imageUrl: "/assets/IG/Game Development/Mentors/Nikhil Chandran.png",
    },
    {
      name: "Mukesh Dev",
      role: "Founder & CEO-Banzan Studios",
      linkedin: "https://www.linkedin.com/in/mukeshdev/",
      imageUrl: "/assets/IG/Game Development/Mentors/Mukesh Dev.png",
    },
    {
      name: "Jobin Joseph",
      role: " Norian Games",
      linkedin: "https://www.linkedin.com/in/jobin-joseph-8b0aa4265/",
      imageUrl: "/assets/IG/Game Development/Mentors/Jobin.png",
    },
  ],
  interestGroupLeads: {
    description:
      "Interest group leads manage the activities and events within interest groups and serve as a point of contact for students interested in getting involved. Students can connect with these leads to learn about opportunities within their interests",
    leads: [
      {
        name: "Sabal Krishna S",
        institution:
          "St.Thomas Institute of Science and Technology, Trivandrum",
        linkedin: "https://www.linkedin.com/in/sabal-krishna-s-29b758298/",
        imageUrl: "/assets/IG/Game Development/IG Lead/image.jpg",
      },
    ],
  },
  opportunities: [
    {
      title: "Game Designer",
      description:
        "Shape the rules, mechanics, and storytelling for engaging gameplay.",
    },
    {
      title: "Game Programmer",
      description: "Code and optimize game mechanics, physics, and AI.",
    },
    {
      title: "3D Artist",
      description: "Design characters, environments, and props.",
    },
    {
      title: "Animator",
      description:
        "Create realistic or stylized movements for characters and objects.",
    },
    {
      title: "Level Designer",
      description: "Build engaging and balanced game levels.",
    },
    {
      title: "Sound Designer",
      description: "Develop immersive sound effects and music.",
    },
    {
      title: "UI/UX Designer",
      description:
        "Design user-friendly interfaces and enhance player experience.",
    },
    {
      title: "Quality Assurance Tester",
      description:
        "Ensure the game runs smoothly by identifying and reporting bugs.",
    },
    {
      title: "Narrative Designer",
      description: "Develop compelling stories, dialogues, and in-game lore.",
    },
  ],
  peopleToFollow: [
    {
      name: "Hideo Kojima",
      link: "https://twitter.com/HIDEO_KOJIMA_EN",
    },
    {
      name: "John Carmack",
      link: "https://x.com/ID_AA_Carmack",
    },
    {
      name: "Rami Ismail",
      link: "https://x.com/tha_rami",
    },
    {
      name: "Cory Barlog",
      link: "https://x.com/corybarlog",
    },
  ],
  blogsToFollow: [
    {
      name: "Next Level Plugins",
      link: "https://nextlevelplugins.com/blog//2024/11/Level-Up-Your-Unreal-Engine-Game-Essential-Blogs-for-Developers.html",
    },
    {
      name: "Game Developer",
      link: "https://www.gamedeveloper.com/design/the-art-of-game-balance-evolution",
    },
    {
      name: "Game Dev Candids",
      link: "https://gamedevcandids.com/how-to-find-your-games-north-star/",
    },
  ],
  topKeywords: [
    "Game Engines",
    "Level Design",
    "Scripting",
    "3D Modeling",
    "AI for Games",
    "Game Physics",
    "UI/UX for Games",
    "Multiplayer Systems",
  ],
};
