
export const introductionData = {
    yourName: "Chaimae Binjach", 
     socialNetwork: [
 
         {
             icon: "fa fa-linkedin-square", // find other icon in https://fontawesome.com/v4.7/icons/
             nameSocialNetwork: "Linkedin",
             url: "https://www.linkedin.com/in/chaimae-binjach/"
         },
         {
             icon: "fa fa-github-alt",   // find other icon in https://fontawesome.com/v4.7/icons/
             nameSocialNetwork: "Github",
             url: "https://github.com/ChaimaeBinjach"
         }
 
 
     ],
     nav: [
         {
             optionNav: "About me",
             idSection: "about"    // If it changes, check the session id in <index.html> ;
         },
         {
             optionNav: "Skills",
             idSection: "skills"   // If it changes, check the session id in <index.html> ;
         },
         {
             optionNav: "Projects",
             idSection: "projects"  // If it changes, check the session id in <index.html> ;
         }
 
 
     ]
 
 }
 

 export const aboutMeData = {
    yourName: "Chaimae Binjach", 
    title: "About Me", 
    description: "I'm a tech enthusiast with a passion for problem-solving and continuous learning. I love exploring new technologies and finding innovative solutions to challenges. Excited to make a meaningful impact in the tech world! 😊",
    titleURL: "My CV",
    urlCV: "https://drive.google.com/file/d/15hEYOXGBluq2YtHoFN_KDtR-lOzswRfx/view?usp=drive_link",
    socialNetwork: [
        {
            icon: "fa fa-linkedin-square", // LinkedIn icon
            nameSocialNetwork: "Linkedin",
            url: "https://www.linkedin.com/in/chaimae-binjach/"
        },
        {
            icon: "fa fa-github-alt", // GitHub icon
            nameSocialNetwork: "Github",
            url: "https://github.com/ChaimaeBinjach"
        }
    ]
};




 
 
 
 //=========================================
 //                 SKILLS 
 //=========================================
 export const skillsData = [
 
 
     {
         img: "assets/Python-logo-notext.svg.png",  // card image  > insert the svg image in the assets folder
         nameSkill: "Python"      //  card name
     },
     {
         img: "assets/java.svg",
         nameSkill: "Java"
     },
     {
         img: "assets/js.svg",
         nameSkill: "JavaScript"
     },
     {
         img: "assets/React-icon.svg.png",
         nameSkill: "React"
     },
     {
        img: "assets/ISO_C++_Logo.svg.png",
        nameSkill: "C++"
    },
     {
         img: "assets/PHP-logo.svg.png",
         nameSkill: "PHP"
     }
     
 
 ]
 //=========================================
 //                PROJECTS
 //=========================================
 export const projectsData = [
     {
         title: "HEALTHCARE PROJECT ",    // card image  > insert the svg image in the assets folder
         describe: "This project effectively manages hospital patient data using XML as a storage medium, providing a comprehensive set of features for interacting with patient records.",
         url: "https://github.com/ChaimaeBinjach/projectwork-Healthcare-",  // url of the Github repository
         img: "assets/project1.jpg"  //image Project
     },
     {
         title: "SHOPPING PROJECT ",
         describe: "The online book shopping website is a platform where users can browse, search, and purchase books of their choice. It offers a user-friendly interface with features for both customers and administrators. Users can explore a wide range of books, add them to their cart, and proceed to checkout for payment. Meanwhile, administrators have access to an admin page where they can manage products, orders, and various other aspects of the website",
         url: "https://github.com/ChaimaeBinjach/Shopping/tree/master/Shopping/Shopping/Shopping",
         img: "assets/project2.png"
     },
     {
         title: "REACT PROJECT ",
         describe: "The React project is centered around data control and manipulation, leveraging JavaScript and React to create a dynamic and interactive user experience. The project involves managing a dataset and implementing various functionalities to manipulate, analyze, and present the data effectively.",
         url: "https://github.com/ChaimaeBinjach/React-Project",
         img: "assets/project3.jpg"
     }
 ]
 
 
 
 
 
 
 
 
 