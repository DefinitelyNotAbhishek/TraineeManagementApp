import { LightningElement, api, wire, track } from 'lwc';

//login page
import emailIcon from '@salesforce/resourceUrl/EmailIcon';
import passwordIcon from '@salesforce/resourceUrl/PasswordIcon';
import googleIcon from '@salesforce/resourceUrl/GoogleIcon';
import gmailIcon from '@salesforce/resourceUrl/EmailIcon';
import linkedinIcon from '@salesforce/resourceUrl/LinkedinIcon';

import { NavigationMixin } from 'lightning/navigation';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

import validateCandidate from '@salesforce/apex/LoginCandidate.validateCandidate';

//aniket's dashboard
import image from '@salesforce/resourceUrl/Dashboardimage';
import video from '@salesforce/resourceUrl/videoAppy';


import picture from '@salesforce/resourceUrl/photo1';
import pictures from '@salesforce/resourceUrl/photo2';
import copy from '@salesforce/resourceUrl/photo3';
import copys from '@salesforce/resourceUrl/photo4';



import facebook from '@salesforce/resourceUrl/facebook';
import linkedin from '@salesforce/resourceUrl/LinkedinIcon2';
import pinerest from '@salesforce/resourceUrl/pinerest';
import twitter from '@salesforce/resourceUrl/twitter';
import instagram from '@salesforce/resourceUrl/instagram';


import salesforce from '@salesforce/resourceUrl/salesforcejob';
import salesforcecloud from '@salesforce/resourceUrl/salesforcejob1';
import salesforceadmin from '@salesforce/resourceUrl/salesforcejob2';


import img from '@salesforce/resourceUrl/Internshipicon';
import img1 from '@salesforce/resourceUrl/HomeIcon';
import img2 from '@salesforce/resourceUrl/FeedBackicon';
import img3 from '@salesforce/resourceUrl/Profile';
import img4 from '@salesforce/resourceUrl/Applicationicon';
import img5 from '@salesforce/resourceUrl/Task';
import appy from '@salesforce/resourceUrl/LogoAppyNtern';


//improting for backend




export default class DashboardCandidate extends LightningElement {

    // template variable assignment
    dashboardImage = true;
    showDashboard = false;
    showProfile = false;
    showInternship = false;
    showTasks = false;
    showApplication = false;
    showFeedback = false;
    showJobs = false;
    showHome = false;

    //form login
    emailIcon = emailIcon;
    passwordIcon = passwordIcon;
    googleIcon = googleIcon;
    gmailIcon = gmailIcon;
    linkedinIcon = linkedinIcon;

    //from aniket's dashboard
    logophoto = appy;
internship = img;
homeimage = img1;
profile = img3;
application = img4;
feedback = img2;
task = img5;

//from abhishek profile section
@track showOverview = true;
@track showWorkandEdu = false;
@track showContact = false;
@track showHobbies = false;





facebookicon = facebook;
likedinicon = linkedin;
pineresticon = pinerest;
twittericon = twitter;
instagramicon = instagram;


salescloud = salesforce;
salesadmin = salesforcecloud;
developer = salesforceadmin;





    dashboard = image;
   
    videos = video;
    
    craft = picture;
    crafting = pictures
    home = copy;
    homes = copys;


//ibrar's code set profile
    //@api candidateId;
    candidate;
    error;

    @track candidateId;


    //Ibrar Working..
    isLogin = false;
    @api entrUsr;
    @api entrPass;

    //record;
    error = '';
    
    candidate;
    
    
    //Aniket's code
    loginWithGoogle() {
        window.location.href = 'https://www.googli.com/'; // Redirect to Google login URL
    }

    loginWithGmail() {
        window.location.href = 'https://www.gmail.com/'; // Redirect to Gmail login URL
    }

    loginWithLinkedIn() {
        window.location.href = 'https://www.linkedin.com/'; // Redirect to LinkedIn login URL
    }
    //end

    //Ibrar's login
    getEmail(event) {
        this.entrUsr = event.target.value;
    }
    getPassword(event) {
        this.entrPass = event.target.value;
    }

    
    userLogin() {
        validateCandidate({ username: this.entrUsr, password: this.entrPass })
            .then(result => {
                if (result) {
                    this.candidate = result;

                    if(this.entrPass === this.candidate.UserPassword__c){
                           const eventa = new ShowToastEvent({
                            title: 'Success!',
                            message: 'Login successful.',
                            variant: 'success',
                        });
                        this.dispatchEvent(eventa);
                        //Navigate to Dashboard Page
                        this.isLogin = true;
                        this.showDashboard = true;
                        this.showHome = true; 

                        console.log(enterPass, result.UserPassword__c);
                        
                    }else{
                        this.error = 'Incorrect Password! Check carefully';
                        console.log(this.error);

                        console.log(this.entrPass, result.UserPassword__c , this.candidate);
                    }
                    

                } else {
                    const event = new ShowToastEvent({
                        title: 'Failed!',
                        message: 'Invalid Username or Password.',
                        variant: 'error',
                    });
                    this.dispatchEvent(event);
                    
                    this.error = 'Invalid Username or Password';
                    console.log(error);
                }
            })
            .catch(error => {
                // Handle error
                const event = new ShowToastEvent({
                    title: 'Failed!',
                    message: 'Something went wrong! Please try again.',
                    variant: 'error',
                });
                this.dispatchEvent(event);
                console.error('Error:', error);
                this.error=error;
            });
    }


    // for dashboard candidate
    clickHome(){
        this.showHome = true;
        this.dashboardImage = false;
        this.showProfile = false;
        this.showInternship = false;
        this.showTasks = false;
        this.showApplication = false;
        this.showFeedback = false;;
        this.showJobs = false;
    }

    clickProfile(){
        this.showHome = false;
        this.dashboardImage = false;
        this.showProfile = true;
        this.showInternship = false;
        this.showTasks = false;
        this.showApplication = false;
        this.showFeedback = false;
        this.showJobs = false;
}

    clickInternship(){
        this.showHome = false;
        this.dashboardImage = false;
        this.showProfile = false;
        this.showInternship = true;
        this.showTasks = false;
        this.showApplication = false;
        this.showFeedback = false;
        this.showJobs = false;
    }
 
    clickTasks(){
        this.showHome = false;
        this.dashboardImage = false;
        this.showProfile = false;
        this.showInternship = false;
        this.showTasks = true;
        this.showApplication = false;
        this.showFeedback = false;
        this.showJobs = false;
    }

    clickApplication(){
        this.showHome = false;
        this.dashboardImage = false;
        this.showProfile = false;
        this.showInternship = false;
        this.showTasks = false;
        this.showFeedback = false;
        this.showJobs = false;

        //To retrived data from CandidateApplication object
    //     getCandidateDetails()
    //         .then(result => {
    //             //Handle the result
    //             //console.log('data'+result);
    //             this.record = result;
                    
    //             this.showApplication = true;

    //         })
    //         .catch(error => {
    //             const event = new ShowToastEvent({
    //                 title: 'Failed!',
    //                 message: 'Something is Wrong!.',
    //                 variant: 'error',
    //             });
    //             this.dispatchEvent(event);

    //             console.error('Query Error ====>>'+error);
    //         });
        
     }

    clickFeedback(){
        this.showHome = false;
        this.dashboardImage = false;
        this.showProfile = false;
        this.showInternship = false;
        this.showTasks = false;
        this.showApplication = false;
        this.showFeedback = true;
        this.showJobs = false;
    }

    clickJobs(){
        this.showHome = false;
        this.dashboardImage = false;
        this.showProfile = false;
        this.showInternship = false;
        this.showTasks = false;
        this.showApplication = false;
        this.showFeedback = false;
        this.showJobs = true;
    }

    clickLogout(){
        this.isLogin = false;
    }


handleButtonClick() {
    // Add your logic here
    console.log('Button clicked');
}


//profile 
clickFeedback(){
    this.showHome = false;
    this.dashboardImage = false;
    this.showProfile = false;
    this.showInternship = false;
}


//Abhishek profile section js 

clickOverview() {
    this.showOverview = true;
    this.showWorkandEdu = false;
    this.showContact = false;
    this.showHobbies = false;
}

clickWorkandExperience() {
    this.showOverview = false;
    this.showWorkandEdu = true;
    this.showContact = false;
    this.showHobbies = false;
}

clickContact() {
    this.showOverview = false;
    this.showWorkandEdu = false;
    this.showContact = true;
    this.showHobbies = false;
}

clickHobbies() {
    this.showOverview = false;
    this.showWorkandEdu = false;
    this.showContact = false;
    this.showHobbies = true;
}



}