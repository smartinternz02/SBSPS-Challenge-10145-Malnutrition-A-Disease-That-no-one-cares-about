# SBSPS-Challenge-10145-Malnutrition-A-Disease-That-no-one-cares-about
Malnutrition: A Disease That no one cares about

# Nutri Spectrum - Visualizing the healthier world

*Check out our website here* : https://nutrispectrum.d1xsos4r1nx7hh.amplifyapp.com/

*Demonstration of website* : https://drive.google.com/drive/folders/1ZmmSpNBWf44gmK24bbCq5AQqEaTYMjYQ

### INTRODUCTION
- #### Overview
The "Nutri Spectrum Application" addresses the critical global issue of malnutrition, aiming to provide comprehensive insights, personalised recommendations, and statistics related to malnutrition across countries and states in India. This platform leverages the capabilities of the IBM Cognos analytics platform to enable data-driven decision-making and raise awareness about malnutrition's impact on health and well-being.
- #### Purpose
The purpose of this project is to develop an interactive platform that not only educates users about malnutrition but also empowers them to take informed steps towards improving their nutritional status. The platform offers personalised recommendations based on user-specific data and provides visual representations of malnutrition statistics to encourage awareness and understanding.
### LITERATURE SURVEY
- #### Existing Problem
The problem of malnutrition remains a significant challenge worldwide, impacting both developed and developing nations. Existing approaches include traditional nutritional programs and awareness campaigns, but there's a need for a data-driven statistics and user-centric solution.
- ####  Proposed Solution
Our solution involves creating an online platform that combines user-specific data, analytics, and visualisations to provide insights into malnutrition trends. By using the IBM Cognos analytics platform, we offer personalised recommendations to users based on the user BMI to address their nutritional needs effectively and show different analytics visualisations country wise over the world and state wise over India.
### THEORETICAL ANALYSIS
- #### Block Diagram
     ![0859c842-f82c-49ab-872e-f4baa633f3f7](https://github.com/smartinternz02/SBSPS-Challenge-10145-Malnutrition-A-Disease-That-no-one-cares-about/assets/94107398/f43a16eb-93c9-4873-86fe-8e6fa3092666)

- #### Application workflow
   ![6903f1d7-022e-40d2-a88a-54117f2dec18](https://github.com/smartinternz02/SBSPS-Challenge-10145-Malnutrition-A-Disease-That-no-one-cares-about/assets/94107398/865efb58-298b-4b71-9aa5-6bc9b4ada92a)

   - #### Hardware / Software Designing
  *Hardware Requirements*: Personal computer or mobile device with internet access.
*Software Requirements*: Cognos analytics platform, web browser.
Before logging onto a website, users should be logged into the IBM Cognitive Analytic Platform.

### EXPERIMENTAL INVESTIGATIONS
During the development phase, extensive data analysis was conducted to validate the accuracy of the BMI calculations and the appropriateness of the personalised recommendations. Data from diverse sources were processed to provide accurate and insightful malnutrition statistics and with the help of IBM Cognos analytic platform the data cleansing, data visualisations such as charts, plots, infographics, and animations are done. 
   
  *Frontend*: 
 - Users can view malnutrition analytics and reports through iframe which will  redirect to IBM Cognos platform and personally users can view their BMI.
- Additionally, users may monitor government initiatives to confront malnutrition and articles related to malnutrition.
- Here we have used  react framework.

*Backend*:
- The server side program is developed using Node and Express js.
- IBM Cognos Analytics: 
- We have cleansed the data using a data module.
- Using exploration we visualise the data in the required format like in bar graphs,line charts, maps etc.
- We save these exploration files and use these visualisations in the dashboard.
- In the dashboard we show the visualised data in a detailed manner, with some headings and images.
- We can also show the visualisations in  story and in report also.
- In the story we can present the data in a slide show manner.




## To view project in your machine
- Clone the repo
- Run frontend
    ```  sh
     cd client
     npm install
     npm start
    ```
     
- Run backend
   ``` sh
     cd server
     npm install
     node app.js
     ```
     
> Node runtime and npm packages are prerequisites to run above commands

*Check out our website here* : https://nutrispectrum.d1xsos4r1nx7hh.amplifyapp.com/

*Demonstration of website* : https://drive.google.com/drive/folders/1ZmmSpNBWf44gmK24bbCq5AQqEaTYMjYQ
