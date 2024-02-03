var myResume=[

    {"Objective":"Uniqueness is the key encouragement towards one's success"},
    {"Personal_Information":{"Name":"Navaneetha Krishnan P",
                            "Age":22,
                            "DOB":"Sep23-2001",
                            "Contact":8903848938,
                            "E_mail":"krissnank89038@gmail.com"}},
    {"Education":{"SSLC":{"School_Name":"PMHSS-Dharapuram","Mark":"97%","Year":2017}},
                 "HSC":{"School_Name":"VHSS-Dharapuram","Mark":"82%","Year":2019},
                 "College":{"College_Name":"CIT-Chennai","Degree":"B.E-EEE","CGPA":"8.9","Year":2023}},
    {"Personal Skills":["Leadership","Quick Learner","Adaptability","Sportsmanship"]},
    {"Technical Skills":{"Hardware Skills":["DLC",
                                           "VLSI",
                                           "Verilog HDL"],
                        "Software Skills":["Basics of Javascript",
                                           "GIT",
                                           "LINUX"]}},
    {"Projects":{"Project-1":{"Name":"Ambient Light Setting for PC and Laptops",
                             "Use":"It copies the screen colour and relects in background,used for gaming and best screen experience"},
                             "Project-2":{"Name":"Health Monitoring System for Transformers",
                             "Use":"To monitor the oil and temperature level of a transformer and sends the information through IOT"}}},  
    {"Technical Activities":{"Industrial Visit":["Gokul Autotech","Power Station"],
                            "Others":"Co-ordinator of National Level Symposium"}},
    {"Extra Curricular Activities":{"Sports":["Captian of College Cricket Team","Athelete"],
                                   "Others":"Active member of NSS crew in college"}},
    {"Declaration":"I hearby declare that all the above details about me are true tu my knowledge"}

]

// for-loop
for (var i=0; i<myResume.length; i++){
console.log(myResume[i])
}


// for-in-loop 
for (var i in myResume){
console.log(myResume[i])
}


// for-of-loop
for (var i of myResume){
    console.log(i)
}


// forEach-loop
myResume.forEach((a)=>console.log(a))