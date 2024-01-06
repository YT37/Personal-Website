import 'package:flutter/material.dart';

const String RESUME =
    "https://drive.google.com/file/d/1BnmhETnMrvhIK-Y9Wi1n6O7MswfiDp48/view?usp=sharing";

const String ABOUT_ME =
    "Hi, I’m Yug Thapar a student moving to college to pursue my passion of computers and technology. I have a great passion for tech and learning about all the fields in it with a multifaceted approach from creating programs to help me in my daily tasks, solve a very niche solution or just anything i get focused on to the hardware side of technology using different sensors, boards and chips to make my ideas come to life and with all these skills combined i co-founded a startup that focuses on creating market ready apps and solutions for real world problems. Check out the list of my skills and knowledge below.\n\nSkills -\nPython, C++, Dart, Flutter, Firebase, Flask, Django, Arduino, ML techniques like Q-Learning, Regression, KNN, SVM, CNN, K-Means Clustering, OpenCV, etc.";

const List<Map<String, dynamic>> PROJECTS = [
  {
    "title": "Aler",
    "images": [
      "assets/images/projects/aler/0.png",
      "assets/images/projects/aler/0.png",
      "assets/images/projects/aler/0.png",
      "assets/images/projects/aler/0.png",
    ],
    "description":
        "Aler is an all-in-one accounting platform for small to medium businesses that have to deal with the headache of keeping ledgers and maintaining books for GST purposes.\n\nFeatures -\n\n1. Ledgers & Balance Sheets - Maintain business ledgers of different accounts and see all data in a singular balance sheet.\n2. ⁠Easy Entry - Provides a way to quickly make sale and purchase entries.\n3. ⁠Memo Generator - Generate sale memos for sending to customers.\n4. ⁠Udhaari - System for informal loans and lendings\n...& Many More\n\nTechnology Used - Dart, Flutter, Python & Google Cloud\n\nCurrent Status - Beta Testing with a small group of shop keepers.\n\nAvailability - App on Play Store",
    "links": [
      {"icon": Icons.air, "link": "https://youtube.com"},
      {"icon": Icons.air, "link": "https://youtube.com"},
      {"icon": Icons.air, "link": "https://youtube.com"},
      {"icon": Icons.air, "link": "https://youtube.com"},
    ],
  },
  {
    "title": "iVidya",
    "images": ["assets/images/projects/aler/0.png"],
    "description":
        "iVidya is an ERP platform for schools and colleges to manage their students and staff and keep track of their details.\n\nFeatures -\n\n1. Report Card Genrator - Allows teachers to genrate report card for studnets.\n2. Fees Payment and Tracking - Allows adminstration to track a students fee payments and students to pay their fees online.\n3. Attendance Tracker - Allows for tracking students/teachers attendance.\n4. Library Books - Allows for students and administration to keep track of issued books.\n5. Notifications - Allows administartion/teachers to send notifications.\n6. Surveys - Allows for taking surveys from students or thier guardians.\n7. Tests - Allows for taking tests online and for teachers to grade them.\n...& Many More\n\nTechnology Used - Dart, Flutter, Python, & Google Cloud\n\nCurrent Status - Deployed in a School of 500 students and in talks for deploying in a university.\n\nAvailability - Demo App on Play Store",
    "links": [],
  },
  {
    "title": "Oratorz",
    "images": ["assets/images/projects/aler/0.png"],
    "description":
        "Oratorz is a Model United Nations and similar type simulation committee organizing event.\n\nFeatures -\n\n1. GSL - Speaker tim keeping and queuing.\n2. Voting - Allows voting on motins and topics.\n3. Caucuses : Moderated and Unmoderated - Allows for organizing moderated and unmodertaed caucuses.\n4. Roll Call - Allows for taking roll call.\n5. Motions - Allows for submiting different motions.\n...& Many More\n\nTechnology Used - Dart, Flutter, & Google Cloud\n\nCurrent Status - Under Development\n\nAvailability - Website in Alpha Stage",
    "links": [],
  },
  {
    "title": "EnCourage",
    "images": ["assets/images/projects/aler/0.png"],
    "description": "",
    "links": [],
  },
  {
    "title": "FlashChat",
    "images": ["assets/images/projects/aler/0.png"],
    "description":
        "FlashChat is an online chat room for people around the world.\n\nFeatures -\n\n1. Easy Interface - Can be used by anyone.\n2. Encrypted Messaging - Uses strong encyption to protect users.\n3.Multiple Users - Built to handle multiple users at a single time.\n...& Many More\n\nTechnology Used - Dart, Flutter, & Google Cloud\n\nCurrent Status - Published\n\nAvailability - Website",
    "links": [],
  },
  {
    "title": "WPD",
    "images": ["assets/images/projects/aler/0.png"],
    "description":
        "WPD is a water purity detector and sorter project that uses metrics like pH, Temprature, EC, etc. to sort water into different places. Our main goal with this project was to make a system for testing and sorting water for factiories and industries sources to segregate water for diffrent uses such as cleaing, agriculture, drinking, etc.\n\nFeatures -\n\n1. Automatic PH Tester - Uses a unique method of injecting ph indicator and using a color sensor to check pH.\n2. Temprature - Uses a industrial temprature sensor to check temparture.\n3. App - Has an easy to use app to record data and check performance.\n...& Many More\n\nTechnology Used - Python, Tensorflow (K-Nearest Neighbour Algorithm), C++, & Raspberry Pi\n\nCurrent Status - Prototype\n\nAvailability - Source Code",
    "links": [],
  },
  {
    "title": "ROTO",
    "images": ["assets/images/projects/aler/0.png"],
    "description":
        "ROTO is a smart home platform for automating lights, fans, air conditioners, home appliances, etc. and runs locally on your network for privacy and quick response times\n\nFeatures -\n\n1. Easy to Build - Can be built easyily due to the small number of compnents.\n2. Low Cost - Costs just under ₹4000 or \$70\n3. Runs Locally - Allows for running locally on your home network wihout sensing your data to some server on the other side of the world.\n4. Easy to Retrofit - Can be added to any existing electrical system without much modifications.\n...& Many More\n\nTechnology Used - KiCAD & ESPHome\n\nCurrent Status - Published\n\nAvailability - Source Code and PCB Design",
    "links": [],
  },
  {
    "title": "E-Comm",
    "images": ["assets/images/projects/aler/0.png"],
    "description":
        "E-Comm is an e-commerce platform to buy and sell merchandise and services. This app has two sides admin and user. In the admin side the owner can upload their products and track orders. On the user side, users can place orders and track status of their orders. This platform can be used to build an app for your own business with its own unique branding.\n\nFeatures -\n\n1. Rebrandable - Can be rebraded to suite its users need.\n2. Sales - Can organize sales on your products.\n3. Featured Products - Has a section of featured products that can be populated by the admin.\n4. Order Tracking and Updates - Allows for admin to keep track of oreders coming in and for customers to track their order.\n...& Many More\n\nTechnology Used - Dart, Flutter, Python & Google Cloud\n\nCurrent Status - Published\n\nAvailability - Source Code & Demo App",
    "links": [],
  },
];

const List<Map<String, dynamic>> WORK = [
  {
    "title": "Solvrz Inc.",
    "images": ["assets/images/projects/aler/0.png"],
    "description":
        "Solvrz Inc. is a startup focusing on developing market-ready apps and other solutions in various fields. The main highlights are\n\n1. Aler - An Auto-Accounting Platform\n2. ⁠Oratorz - An easy-to-use Model UN and similar simulations organizer\n3. ⁠iVidya - A robust ERP platform for schools and colleges with new age features\n...& & Many More\n\nRole - I am the Co-Founder and Head Developer of this company.\n\nLearnings - I have learnt many crucial concepts of business creation like market study, product launching, product-market fit and many more.\n\nPeriod - 2020-Present",
    "links": [],
  },
  {
    "title": "Desinno",
    "images": ["assets/images/projects/aler/0.png"],
    "description":
        "Desinno Project is an initiative by EU’s Erasmus+ program to establish innovation capacities in India with esteemed parter universities such as Brunell University, University of the Aegean, Politechnico de Milano, IIIT Delhi, RIMT University & World University of Design.\n\nRole - I worked as the Head Developer of the capstone project for the RIMT University team.\n\nLearnings - I gained a ton of experience of working with a large team along with improving my presentation skills, prototype building, *** and much more.\n\nPeriod - 2022",
    "links": [],
  },
  {
    "title": "Atal Tinkering Lab (Om Parkash Bansal Modern School)",
    "images": ["assets/images/projects/aler/0.png"],
    "description":
        "Atal Tinkering Lab (ATL) is an initiative by Goverment of India to promote STEM subjects among school students.\n\nRole - I held the position of ATL Ambassador of my school where i was tasked with maintaining the lab, organizing events and bridging the gap between students and administration.\n\nLearnings - I have learnt many valuable lessons in leadership, event organisation and dealing with hardships and stress.\n\nPeriod - 2019-2023",
    "links": [],
  },
];

const List<Map<String, dynamic>> AWARDS = [
  {
    "title": "ATL Marathon 1",
    "images": ["assets/images/projects/aler/0.png"],
    "description": "",
    "links": [],
  },
  {
    "title": "ATL Marathon 2",
    "images": ["assets/images/projects/aler/0.png"],
    "description": "",
    "links": [],
  },
  {
    "title": "Subject Topper - AI",
    "images": ["assets/images/projects/aler/0.png"],
    "description": "",
    "links": [],
  },
  {
    "title": "ROBOZest",
    "images": ["assets/images/projects/aler/0.png"],
    "description": "",
    "links": [],
  },
  {
    "title": "Indian Future Tycoon - S2",
    "images": ["assets/images/projects/aler/0.png"],
    "description": "",
    "links": [],
  },
];
