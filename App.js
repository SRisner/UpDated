import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Image, TouchableHighlight, Alert, Dimensions, ScrollView, Linking } from 'react-native';
import Constants from 'expo-constants';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default class App extends Component {
    
    // Initially, Welcome page is displayed
    state = {
        welcomePageDisplay: 'block',
        infoPageDisplay: 'none',
        aboutPageDisplay: 'none',
        joinPageDisplay: 'none',
        calendarPageDisplay: 'none',
        websitesPageDisplay: 'none',
        localOfficerTeamPageDisplay: 'none',
        socialMediaPageDisplay: 'none',
        competitiveEventsPageDisplay: 'none',
        currentEventsPageDisplay: 'none',
        signUpPageDisplay: 'none',
        qandAPageDisplay: 'none',
        contactUsPageDisplay: 'none',
        bugPageDisplay: 'none',
        attendPageDisplay: 'none',
        licensingPageDisplay: 'none',
    };
    
    // When Attend a Meeting button is pressed, hide Welcome Page and show Attend a Meeting Page
    handleAttendPagePress = () => this.setState(state => ({
        welcomePageDisplay: 'none',
        attendPageDisplay: 'block',
    }))
    
     // When Welcome Page button is pressed, hide Info page and show Welcome page
    handleWelcomePagePress = () => this.setState(state => ({
        welcomePageDisplay: 'block',
        infoPageDisplay: 'none',
    }));
        
    // When Bug Page button is pressed, hide the other page and show the Bug Page
    handleBugPagePress = () => this.setState(state => ({
        welcomePageDisplay: 'none',
        bugPageDisplay: 'block',
    }));
    
    // When Info Page button is pressed, hide Welcome page and show Info page
    handleInfoPagePress = () => this.setState(state => ({
        welcomePageDisplay: 'none',
        infoPageDisplay: 'block',
    }));
    
    //When the About Page is pressed, hide the other page and show the About Page
    handleAboutPagePress = () => this.setState(state => ({
        infoPageDisplay: 'none',
        aboutPageDisplay: 'block',
    }));
    
    //When the Join Page is pressed, hide the other page and show the Join Page
    handleJoinPagePress = () => this.setState(state => ({
        infoPageDisplay: 'none',
        joinPageDisplay: 'block',
    }));
    
    //When the Calendar Page is pressed, hide the other page and show the Calendar Page
    handleCalendarPagePress = () => this.setState(state => ({
        infoPageDisplay: 'none',
        calendarPageDisplay: 'block',
    }));
    
    //When the Websites Page is pressed, hide the other page and show the Websites Page
    handleWebsitesPagePress = () => this.setState(state => ({
        infoPageDisplay: 'none',
        websitesPageDisplay: 'block',
    }));
    
    //When the Local Officer Team Page is pressed, hide the other page and show the Local Officer Team Page
    handleLocalOfficerTeamPagePress = () => this.setState(state => ({
        infoPageDisplay: 'none',
        localOfficerTeamPageDisplay: 'block',
    }));
    
    //When the Social Media Page is pressed, hide the other page and show the Social Media Page
    handleSocialMediaPagePress = () => this.setState(state => ({
        infoPageDisplay: 'none',
        socialMediaPageDisplay: 'block',
    }));
    
    //When the Competitive Events Page is pressed, hide the other page and show the Competitive Events Page
    handleCompetitiveEventsPagePress = () => this.setState(state => ({
        infoPageDisplay: 'none',
        competitiveEventsPageDisplay: 'block',
    }));
    
    //When the Current Events Page is pressed, hide the other page and show the Current Events Page
    handleCurrentEventsPagePress = () => this.setState(state => ({
        infoPageDisplay: 'none',
        currentEventsPageDisplay: 'block',
    }));
    
    //When the Sign Up Page is pressed, hide the other page and show the Sign Up Page
    handleSignUpPagePress = () => this.setState(state => ({
        infoPageDisplay: 'none',
        signUpPageDisplay: 'block',
    }));
    
    //When the Q&A Page is pressed, hide the other page and show the Q&A Page
    handleQandAPagePress = () => this.setState(state => ({
        infoPageDisplay: 'none',
        qandAPageDisplay: 'block',
    }));
    
    //When the Contact Us Page is pressed, hide the other page and show the Contact Us Page
    handleContactUsPagePress = () => this.setState(state => ({
        infoPageDisplay: 'none',
        contactUsPageDisplay: 'block',
    }));
    
    //When the Bug Page Back Button is pressed, hide the page and show the Welcome Page
    handleBugBackButtonPress = () => this.setState(state => ({
        welcomePageDisplay: 'block',
        bugPageDisplay: 'none',
    }));
    
    //When the Attend a Meeting Back Button is pressed, hide the page and show the Welcome Page
    handleAttendBackButtonPress = () => this.setState(state => ({
        welcomePageDisplay: 'block',
        attendPageDisplay: 'none',
    }));
    
    //When the Licensing Button is pressed, hide the page and show the Licensing Page
    handleLicensingPagePress = () => this.setState(state => ({
        infoPageDisplay: 'none',
        licensingPageDisplay: 'block',
    }));
    
    //When the Back Button is pressed, hide the page and show the Menu Page
    handleBackButtonPress = () => this.setState(state => ({
        welcomePageDisplay: 'none',
        infoPageDisplay: 'block',
        aboutPageDisplay: 'none',
        joinPageDisplay: 'none',
        calendarPageDisplay: 'none',
        websitesPageDisplay: 'none',
        localOfficerTeamPageDisplay: 'none',
        socialMediaPageDisplay: 'none',
        competitiveEventsPageDisplay: 'none',
        currentEventsPageDisplay: 'none',
        signUpPageDisplay: 'none',
        qandAPageDisplay: 'none',
        contactUsPageDisplay: 'none',
        licensingPageDisplay: 'none',
    }));
    
        
    render() {
        return (
            <View style={styles.container}>
                {/*Welcome page screen layout here*/}
                <View style={{ display: this.state.welcomePageDisplay }}>
                    
                    <View style={styles.blueBox}>
                        <Image
                            source={{ uri: 'https://i.imgur.com/O0xHjeH.png?1' }}
                            style={{ height: 269, width: 275 }}
                        ></Image>
                        <Text style={styles.label1}>
                            UpDated
                        </Text>
                    </View>
                    <View style={styles.whiteBox}>
                
                        <TouchableHighlight
                        onPress={this.handleAttendPagePress}
                        >
                    
                            <View style={styles.touchableButton2}>
                                <Text style={styles.label}>
                                    ATTEND A MEETING
                                </Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.redBox}>
                
                        <TouchableHighlight
                        onPress={this.handleInfoPagePress}
                        >
                    
                            <View style={styles.touchableButton1}>
                                <Text style={styles.label}>
                                    FBLA HOME
                                </Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                    
                    <View style={styles.blueBugBox}>
                
                        <TouchableHighlight
                        onPress={this.handleBugPagePress}
                        >
                    
                            <View style={styles.touchableButton3}>
                                <Text style={styles.label}>
                                    REPORT A BUG
                                </Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                </View>
                
                {/*Attend a Meeting Page*/}
                <View style={{ display: this.state.attendPageDisplay }}>
                    <ScrollView>
                        <View style={styles.attendBackground}>
                            <View style={styles.attendBox1}>
                                <TouchableHighlight
                                onPress={this.handleAttendBackButtonPress}
                                >
                            
                                    <View style={styles.touchableButtonRed}>
                                        <Text style={styles.backText}>
                                            {"\n"}Back
                                        </Text>
                                    </View>
                                </TouchableHighlight>
                            </View>
                            
                            <View style={styles.attendBox}>
                                <Text style = {styles.attendTitle}>
                                    {"\n"}FBLA Attendance
                                </Text>
                                <Text style = {styles.attendText}>
                                    {"\n"}Click the link to confirm your attendance.
                                </Text>
                                <Text style = {styles.attendLinks}
                                    onPress={() => Linking.openURL('https://docs.google.com/forms/d/e/1FAIpQLSd9-749YaCNYHXvEacymyIVUNgVCbT7RX9jPWWsrOfcMp12-w/viewform?usp=sf_link')}>
                                    {"\n"}Attendance Sheet
                                </Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>
                
                {/*FBLA Menu Page*/}
                <View style={{ display: this.state.infoPageDisplay }}>
                    <ScrollView>
                        <View style={styles.blueBox2}>
                            <TouchableHighlight
                            onPress={this.handleWelcomePagePress}
                            >
                        
                                <View style={styles.touchableButtonBlue}>
                                    <Text style={styles.backText}>
                                        {"\n"}Back
                                    </Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                        
                        <View style={styles.blueBox1}>
                        
                        {/*About FBLA Page Navigation*/}
                            <TouchableHighlight
                            onPress={this.handleAboutPagePress}
                            >
                        
                                <View style={styles.touchableButtonBlue}>
                                    <Text style={styles.mainText}>
                                        {"\n"}{"\n"}About FBLA
                                    </Text>
                                </View>
                            </TouchableHighlight>
                            
                            {/*Join FBLA Page Navigation*/}
                            <TouchableHighlight
                            onPress={this.handleJoinPagePress}
                            >
                        
                                <View style={styles.touchableButtonBlue}>
                                    <Text style={styles.mainText}>
                                        {"\n"}Join FBLA
                                    </Text>
                                </View>
                            </TouchableHighlight>
                            
                            
                            {/*Calendar Page Navigation*/}
                            <TouchableHighlight
                            onPress={this.handleCalendarPagePress}
                            >
                        
                                <View style={styles.touchableButtonBlue}>
                                    <Text style={styles.mainText}>
                                        {"\n"}Calendar
                                    </Text>
                                </View>
                            </TouchableHighlight>
                            
                            
                            {/*FBLA websites Page Navigation*/}
                            <TouchableHighlight
                            onPress={this.handleWebsitesPagePress}
                            >
                        
                                <View style={styles.touchableButtonBlue}>
                                    <Text style={styles.mainText}>
                                        {"\n"}FBLA websites
                                    </Text>
                                </View>
                            </TouchableHighlight>
                            
                            
                            {/*Local Officer Team Page Navigation*/}
                            <TouchableHighlight
                            onPress={this.handleLocalOfficerTeamPagePress}
                            >
                        
                                <View style={styles.touchableButtonBlue}>
                                    <Text style={styles.mainText}>
                                        {"\n"}Local officer team
                                    </Text>
                                </View>
                            </TouchableHighlight>
                            
                            
                            {/*Social Media Page Navigation*/}
                            <TouchableHighlight
                            onPress={this.handleSocialMediaPagePress}
                            >
                        
                                <View style={styles.touchableButtonBlue}>
                                    <Text style={styles.mainText}>
                                        {"\n"}Social media
                                    </Text>
                                </View>
                            </TouchableHighlight>
                            
                            
                            {/*Competitive Events Page Navigation*/}
                            <TouchableHighlight
                            onPress={this.handleCompetitiveEventsPagePress}
                            >
                        
                                <View style={styles.touchableButtonBlue}>
                                    <Text style={styles.mainText}>
                                        {"\n"}Competitive events
                                    </Text>
                                </View>
                            </TouchableHighlight>
                            
                            
                            {/*Current Events Page Navigation*/}
                            <TouchableHighlight
                            onPress={this.handleCurrentEventsPagePress}
                            >
                        
                                <View style={styles.touchableButtonBlue}>
                                    <Text style={styles.mainText}>
                                        {"\n"}Current events
                                    </Text>
                                </View>
                            </TouchableHighlight>
                            
                            
                            {/*Sign Up For Event Page Navigation*/}
                            <TouchableHighlight
                            onPress={this.handleSignUpPagePress}
                            >
                        
                                <View style={styles.touchableButtonBlue}>
                                    <Text style={styles.mainText}>
                                        {"\n"}Sign up for an event
                                    </Text>
                                </View>
                            </TouchableHighlight>
                            
                            
                            {/*Q&A Page Navigation*/}
                            <TouchableHighlight
                            onPress={this.handleQandAPagePress}
                            >
                        
                                <View style={styles.touchableButtonBlue}>
                                    <Text style={styles.mainText}>
                                        {"\n"}Q&A
                                    </Text>
                                </View>
                            </TouchableHighlight>
                            
                            
                            {/*Contact Us Page Navigation*/}
                            <TouchableHighlight
                            onPress={this.handleContactUsPagePress}
                            >
                        
                                <View style={styles.touchableButtonBlue}>
                                    <Text style={styles.mainText}>
                                        {"\n"}Contact us
                                    </Text>
                                </View>
                            </TouchableHighlight>
                            
                            {/*Licensing Page Navigation*/}
                            <TouchableHighlight
                            onPress={this.handleLicensingPagePress}
                            >
                        
                                <View style={styles.touchableButtonBlue}>
                                    <Text style={styles.mainText}>
                                        {"\n"}Licensing
                                    </Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                    </ScrollView>
                </View>
                
                
                {/*About page screen layout here*/}
                <View style={{ display: this.state.aboutPageDisplay }}>
                    <ScrollView>
                        <View style={styles.aboutBox1}>
                            <TouchableHighlight
                            onPress={this.handleBackButtonPress}
                            >
                        
                                <View style={styles.touchableButtonWhite}>
                                    <Text style={styles.backText}>
                                        {"\n"}Back
                                    </Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                        
                        <View style={styles.aboutBox}>
                            <Text style={styles.aboutTitle}>
                                ABOUT US
                            </Text>
                            <Text style={styles.aboutParagraph}>
                                {"\n"}The Alpharetta Chapter of FBLA is one of the biggest in the state of
                                Georgia. We hold service projects, social events, meet with special
                                guests, and compete! We have won the State Sweepstakes Award for Most
                                Competitive Event for the last 6 years in a row.  We even took 74
                                members to the National Leadership Conference last year!
                            </Text>
                        </View>    
                    </ScrollView>    
                </View>
                
                
                {/*Join page screen layout here*/}
                <View style={{ display: this.state.joinPageDisplay }}>
                    <ScrollView>
                        <View style={styles.joinBackground}>
                            <View style={styles.joinBox1}>
                                <TouchableHighlight
                                onPress={this.handleBackButtonPress}
                                >
                            
                                    <View style={styles.touchableButtonRed}>
                                        <Text style={styles.backText}>
                                            {"\n"}Back
                                        </Text>
                                    </View>
                                </TouchableHighlight>
                            </View>
                            <View style={styles.joinBox}>
                                <Text style={styles.title2}>
                                    JOIN FBLA
                                </Text>
                                <Text style={styles.respuestas2}>
                                    {"\n"} The process has 2 parts. First, fill out the form then pay membership dues.{"\n"}
                                </Text>
                                <Text style={styles.links}
                                    onPress={() => Linking.openURL('https://docs.google.com/forms/d/e/1FAIpQLSfyop-go-N4D5ePJcORda4D8gVfW95TPgWeTNgYd-WLQLMy7g/viewform')}>
                                        FORM{"\n"}
                                </Text>
                                <Text style={styles.links}
                                    onPress={() => Linking.openURL('https://osp.osmsinc.com/FultonGA/BVModules/ProductTemplates/Bvc2013/Product.aspx?productid=EN701-337')}>
                                        PAY
                                </Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>
                
                
                {/*Calendar page screen layout here*/}
                <View style={{ display: this.state.calendarPageDisplay }}>
                    <ScrollView>
                        <View style={styles.calendarBackground}>
                            <View style={styles.calendarBox1}>
                                <TouchableHighlight
                                    onPress={this.handleBackButtonPress}
                                    >
                                    
                                        <View style={styles.touchableButtonBlue}>
                                            <Text style={styles.backText}>
                                                {"\n"}Back
                                            </Text>
                                        </View>
                                </TouchableHighlight>
                            </View>
                            <View style={styles.calendarBox}>
                                <Text style={styles.calendarText}>
                                    {"\n"}Calendar
                                </Text>
                                <Text style={styles.calendarText2}>
                                    {"\n"}Click this link to access the local FBLA calendar
                                </Text>
                                <Text style={styles.links2}
                                onPress={() => Linking.openURL('http://alpharettafbla.weebly.com/calendar.html')}>
                                    {"\n"}CALENDAR
                                </Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>
                
                
                {/*FBLA websites page screen layout here*/}
                <View style={{ display: this.state.websitesPageDisplay }}>
                    <ScrollView>
                        <View style={styles.websitesBackground}>
                            <View style={styles.websitesBox1}>
                                <TouchableHighlight
                                    onPress={this.handleBackButtonPress}
                                    >
                                    
                                        <View style={styles.touchableButtonWhite}>
                                            <Text style={styles.backText}>
                                                {"\n"}Back
                                            </Text>
                                        </View>
                                </TouchableHighlight>
                            </View>
                            
                            <View style={styles.websitesBox}>
                                <Text style={styles.websitesTitle}>
                                    FBLA WEBSITES
                                </Text>
                                <Text style={styles.websitesText}>
                                    {"\n"}The National FBLA and the Alpharetta Chapter's Home Pages are linked below.
                                </Text>
                                <Text style={styles.websitesLinks}
                                    onPress={() => Linking.openURL('http://alpharettafbla.weebly.com/')}>
                                        {"\n"}AHS FBLA HOME PAGE
                                </Text>
                                <Text style={styles.websitesLinks}
                                    onPress={() => Linking.openURL('https://www.fbla-pbl.org/')}>
                                        {"\n"}FBLA HOME PAGE
                                </Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>
                
                
                {/*Local Officer Team screen layout here*/}
                <View style={{ display: this.state.localOfficerTeamPageDisplay }}>
                    <ScrollView>
                        <View style={styles.officerBackground}>
                            <View style={styles.officerBox1}>
                                <TouchableHighlight
                                onPress={this.handleBackButtonPress}
                                >
                            
                                    <View style={styles.touchableButtonRed}>
                                        <Text style={styles.backText}>
                                            {"\n"}Back
                                        </Text>
                                    </View>
                                </TouchableHighlight>
                            </View>
                            
                            <View style={styles.officerBox}>
                                <Text style={styles.officerText3}>
                                    Local Officers
                                </Text>
                                <Text style={styles.officerText}>
                                    {"\n"}Co-President: Sarang Pujari
                                </Text>
                                <Text style={styles.officerText2}>
                                    Email: sarangpujari01@gmail.com
                                </Text>
                                <Text style={styles.officerText}>
                                    {"\n"}{"\n"}Co-President: Suchetas Bokil
                                </Text>
                                <Text style={styles.officerText2}>
                                    Email: suchetasbokil@gmail.com
                                </Text>
                                <Text style={styles.officerText}>
                                    {"\n"}{"\n"}Executive Vice President: Jason Juang
                                </Text>
                                <Text style={styles.officerText2}>
                                    Email: jasonjuang2@gmail.com
                                </Text>
                                <Text style={styles.officerText}>
                                    {"\n"}{"\n"}VP of Operations: Megha Vemuri
                                </Text>
                                <Text style={styles.officerText2}>
                                    Email: megha@svemuri.com
                                </Text>
                                <Text style={styles.officerText}>
                                    {"\n"}{"\n"}VP of Membership: Abhay Sastry
                                </Text>
                                <Text style={styles.officerText2}>
                                    Email: abhayasimha.sastry@gmail.com
                                </Text>
                                <Text style={styles.officerText}>
                                    {"\n"}{"\n"}VP of Publicity: Allison Wang
                                </Text>
                                <Text style={styles.officerText2}>
                                    Email: allisonawang@gmail.com
                                </Text>
                                <Text style={styles.officerText}>
                                    {"\n"}{"\n"}Community Service Manager: Shourya Seth
                                </Text>
                                <Text style={styles.officerText2}>
                                    Email: shouryaseth11@gmail.com
                                </Text>
                                <Text style={styles.officerText}>
                                    {"\n"}{"\n"}Community Service Manager: Sai Velpuri
                                </Text>
                                <Text style={styles.officerText2}>
                                    Email: hulkbuster12@gmail.com
                                </Text>
                                <Text style={styles.officerText}>
                                    {"\n"}{"\n"}Webmaster: Michael Tilaka
                                </Text>
                                <Text style={styles.officerText2}>
                                    Email: tilaka.michael1@gmail.com
                                </Text>
                                <Text style={styles.officerText}>
                                    {"\n"}{"\n"}Secretary: Anika Purohit
                                </Text>
                                <Text style={styles.officerText}>
                                    {"\n"}{"\n"}Secretary: Kalada Nwuke
                                </Text>
                                <Text style={styles.officerText}>
                                    {"\n"}{"\n"}Treasurer: Rohit Nambiar
                                </Text>
                                <Text style={styles.officerText}>
                                    {"\n"}{"\n"}Reporter: Amogh Gadekar
                                </Text>
                                <Text style={styles.officerText}>
                                    {"\n"}{"\n"}Historian: Austin Huang
                                </Text>
                                <Text style={styles.officerText}>
                                    {"\n"}{"\n"}Public Relations Manager: Natasha Havanur
                                </Text>
                                <Text style={styles.officerText}>
                                    {"\n"}{"\n"}Social Media Manager: Elisa Corena
                                </Text>
                                <Text style={styles.officerText}>
                                    {"\n"}{"\n"}Freshman Representative: Sameer Jivangikar
                                </Text>
                                <Text style={styles.officerText}>
                                    {"\n"}{"\n"}Freshman Representative: Nisha Jaganathan
                                </Text>
                                <Text style={styles.officerText}>
                                    {"\n"}{"\n"}Freshman Representative: Kate Zurinskas
                                </Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>
                
                
                {/*Social Media page screen layout here*/}
                <View style={{ display: this.state.socialMediaPageDisplay }}>
                    <ScrollView>
                        <View style={styles.socialBackground}>
                            <View style={styles.socialBox1}>
                                <TouchableHighlight
                                onPress={this.handleBackButtonPress}
                                >
                            
                                    <View style={styles.touchableButtonBlue}>
                                        <Text style={styles.backText}>
                                            {"\n"}Back
                                        </Text>
                                    </View>
                                </TouchableHighlight>
                            </View>
                            
                            <View style={styles.socialBox}>
                                <Text style={styles.socialsTitle}>
                                    OUR SOCIAL MEDIA
                                </Text>
                                <Text style={styles.socialsText}>
                                    {"\n"}Our social media accounts are linked below.
                                </Text>
                                <Text style={styles.socialsLinks}
                                    onPress={() => Linking.openURL('https://www.instagram.com/ahsraiderfbla/')}>
                                        {"\n"}AHS FBLA Instagram
                                </Text>
                                <Text style={styles.socialsLinks}
                                    onPress={() => Linking.openURL('https://twitter.com/AHSRaiderFBLA')}>
                                        {"\n"}AHS FBLA Twitter
                                </Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>
                
                
                {/*Competitive Events Media page screen layout here*/}
                <View style={{ display: this.state.competitiveEventsPageDisplay }}>
                    <ScrollView>
                        <View style={styles.competitiveBackground}>
                            <View style={styles.competitiveBox1}>
                                <TouchableHighlight
                                    onPress={this.handleBackButtonPress}
                                    >
                                
                                        <View style={styles.touchableButtonRed}>
                                            <Text style={styles.backText}>
                                                {"\n"}Back
                                            </Text>
                                        </View>
                                </TouchableHighlight>
                            </View>
                            <View style={styles.competitiveBox}>
                                <Text style={styles.competitiveText3}>
                                    Regional Competitive Events
                                </Text>
                                <Text style={styles.competitiveText2}>
                                    {"\n"}Online Testing
                                </Text>
                                <Text style={styles.competitiveText}>
                                    Accounting 1
                                </Text>
                                <Text style={styles.competitiveText}>
                                    Business Calculations
                                </Text>
                                <Text style={styles.competitiveText}>
                                    Business Communication
                                </Text>
                                <Text style={styles.competitiveText}>
                                    Economics
                                </Text>
                                <Text style={styles.competitiveText}>
                                    Intro to Business Communication
                                </Text>
                                <Text style={styles.competitiveText}>
                                    Intro to Financial Math
                                </Text>
                                <Text style={styles.competitiveText}>
                                    Intro to Information Technology
                                </Text>
                                <Text style={styles.competitiveText}>
                                    Personal Finance
                                </Text>
                                <Text style={styles.competitiveText2}>
                                    {"\n"}Case Study Events
                                </Text>
                                <Text style={styles.competitiveText}>
                                    Banking & Financial Systems
                                </Text>
                                <Text style={styles.competitiveText}>
                                    Entrepreneurship
                                </Text>
                                <Text style={styles.competitiveText}>
                                    Global Business
                                </Text>
                                <Text style={styles.competitiveText}>
                                    Help Desk
                                </Text>
                                <Text style={styles.competitiveText}>
                                    Hospitality Management
                                </Text>
                                <Text style={styles.competitiveText}>
                                    Management Decision Making
                                </Text>
                                <Text style={styles.competitiveText}>
                                    Management Information Systems
                                </Text>
                                <Text style={styles.competitiveText}>
                                    Marketing
                                </Text>
                                <Text style={styles.competitiveText}>
                                    Network Design
                                </Text>
                                <Text style={styles.competitiveText}>
                                    Parliamentary Procedures
                                </Text>
                                <Text style={styles.competitiveText}>
                                    Sports & Entertainment Management
                                </Text>
                                <Text style={styles.competitiveText2}>
                                    {"\n"}Performance Events
                                </Text>
                                <Text style={styles.competitiveText}>
                                    Business Ethics
                                </Text>
                                <Text style={styles.competitiveText}>
                                    Client Service
                                </Text>
                                <Text style={styles.competitiveText}>
                                    Emerging Business Issues
                                </Text>
                                <Text style={styles.competitiveText}>
                                    Impromptu Speaking
                                </Text>
                                <Text style={styles.competitiveText}>
                                    Introduction to Business Presentation
                                </Text>
                                <Text style={styles.competitiveText}>
                                    Introduction to Public Speaking
                                </Text>
                                <Text style={styles.competitiveText}>
                                    Job Interview
                                </Text>
                                <Text style={styles.competitiveText}>
                                    Public Speaking
                                </Text>
                                <Text style={styles.competitiveText}>
                                    Sales Presentation
                                </Text>
                                <Text style={styles.competitiveText}>
                                    Social Media Campaign
                                </Text>
                                <Text style={styles.competitiveText2}>
                                    {"\n"}Skills Events
                                </Text>
                                <Text style={styles.competitiveText}>
                                    Computer Applications
                                </Text>
                                <Text style={styles.competitiveText}>
                                    Database Design & Applications
                                </Text>
                                <Text style={styles.competitiveText}>
                                    Spreadsheet Applications
                                </Text>
                                <Text style={styles.competitiveText}>
                                    Word Processing
                                </Text>
                                <Text style={styles.competitiveText2}>
                                    {"\n"}Technical Pre-Submission Events
                                </Text>
                                <Text style={styles.competitiveText}>
                                    Broadcast Journalism
                                </Text>
                                <Text style={styles.competitiveText}>
                                    Business Plan
                                </Text>
                                <Text style={styles.competitiveText}>
                                    Digital Video Production
                                </Text>
                                <Text style={styles.competitiveText}>
                                    Electronic Career Portfolio
                                </Text>
                                <Text style={styles.competitiveText}>
                                    Graphic Design
                                </Text>
                                <Text style={styles.competitiveText}>
                                    Public Service Announcement
                                </Text>
                                <Text style={styles.competitiveText}>
                                    Publication Design
                                </Text>
                                <Text style={styles.competitiveText}>
                                    Website Design
                                </Text>
                                <Text style={styles.competitiveText2}>
                                    {"\n"}Misc. Event
                                </Text>
                                <Text style={styles.competitiveText}>
                                    Future Business Leader
                                </Text>
                                <Text style={styles.competitiveText3}>
                                    {"\n"}{"\n"}Straight-to-State Events
                                </Text>
                                <Text style={styles.competitiveText2}>
                                    {"\n"}Online Testing
                                </Text>
                                <Text style={styles.competitiveText}>
                                    Accounting 2
                                </Text>
                                <Text style={styles.competitiveText}>
                                    Advertising
                                </Text>
                                <Text style={styles.competitiveText}>
                                    Agribusiness
                                </Text>
                                <Text style={styles.competitiveText}>
                                    Business Law
                                </Text>
                                <Text style={styles.competitiveText}>
                                    Computer Problem Solving
                                </Text>
                                <Text style={styles.competitiveText}>
                                    Cyber Security
                                </Text>
                                <Text style={styles.competitiveText}>
                                    Healthcare Administration
                                </Text>
                                <Text style={styles.competitiveText}>
                                    Insurance & Risk Management
                                </Text>
                                <Text style={styles.competitiveText}>
                                    Intro to Business
                                </Text>
                                <Text style={styles.competitiveText}>
                                    Intro to Business Procedures
                                </Text>
                                <Text style={styles.competitiveText}>
                                    Intro to FBLA
                                </Text>
                                <Text style={styles.competitiveText}>
                                    Intro to Parliamentary Procedures
                                </Text>
                                <Text style={styles.competitiveText}>
                                    Journalism
                                </Text>
                                <Text style={styles.competitiveText}>
                                    Networking Concepts
                                </Text>
                                <Text style={styles.competitiveText}>
                                    Organizational Leadership
                                </Text>
                                <Text style={styles.competitiveText}>
                                    Political Science
                                </Text>
                                <Text style={styles.competitiveText}>
                                    Securities & Investments
                                </Text>
                                <Text style={styles.competitiveText2}>
                                    {"\n"}Technical Pre-Submission Events
                                </Text>
                                <Text style={styles.competitiveText}>
                                    3-D Animation
                                </Text>
                                <Text style={styles.competitiveText}>
                                    Business Financial Plan
                                </Text>
                                <Text style={styles.competitiveText}>
                                    Coding & Programming
                                </Text>
                                <Text style={styles.competitiveText}>
                                    Computer Game & Simulation Programming
                                </Text>
                                <Text style={styles.competitiveText}>
                                    E-Business
                                </Text>
                                <Text style={styles.competitiveText}>
                                    Mobile Application Development
                                </Text>
                                <Text style={styles.competitiveText2}>
                                    {"\n"}Chapter Events
                                </Text>
                                <Text style={styles.competitiveText}>
                                    American Enterprise Project
                                </Text>
                                <Text style={styles.competitiveText}>
                                    Community Service Project
                                </Text>
                                <Text style={styles.competitiveText}>
                                    Local Chapter Annual Business Report
                                </Text>
                                <Text style={styles.competitiveText}>
                                    Partnership with Business Project
                                </Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>
                
                
                {/*Current Events page screen layout here*/}
                <View style={{ display: this.state.currentEventsPageDisplay }}>
                    <ScrollView>
                        <View style={styles.currentBox1}>
                            <TouchableHighlight
                                onPress={this.handleBackButtonPress}
                                >
                                
                                    <View style={styles.touchableButtonWhite}>
                                        <Text style={styles.backText}>
                                            {"\n"}Back
                                        </Text>
                                    </View>
                            </TouchableHighlight>
                        </View>
                        <View style={styles.currentBox}>
                            <Text style={styles.currentTitle}>
                                Current Events
                            </Text>
                            <Text style={styles.currentText}>
                                The links to volunteer opportunities and current events are below
                            </Text>
                            <Text style={styles.currentLinks}
                                    onPress={() => Linking.openURL('http://alpharettafbla.weebly.com/field-trips.html')}>
                                FIELD TRIPS
                            </Text>
                            <Text style={styles.currentLinks}
                                    onPress={() => Linking.openURL('http://alpharettafbla.weebly.com/volunteer-opportunitiescsa.html')}>
                                VOLUNTEER OPPORTUNITIES
                            </Text>
                        </View>    
                    </ScrollView>
                </View>
                
                
                {/*Sign Up page screen layout here*/}
                <View style={{ display: this.state.signUpPageDisplay }}>
                    <ScrollView>
                        <View style={styles.signUpBackground}>
                            <View style={styles.signUpBox1}>
                                <TouchableHighlight
                                    onPress={this.handleBackButtonPress}
                                    >
                                
                                        <View style={styles.touchableButtonBlue}>
                                            <Text style={styles.backText}>
                                                {"\n"}Back
                                            </Text>
                                        </View>
                                </TouchableHighlight>
                            </View>
                            
                            <View style={styles.signUpBox}>
                                <View style={styles.blueBox}>
                                    <Text style={styles.signupText}>
                                        Sign Up for a Competitive Event
                                    </Text>
                                    <Text style={styles.signupText2}>
                                        {"\n"}Use the form below to sign up for a competitive event.
                                    </Text>
                                    <Text style={styles.signupText2}>
                                        {"\n"}Please refer to the "Competitive events" page for a list of the events.
                                    </Text>
                                    <Text style={styles.links2}
                                    onPress={() => Linking.openURL('https://docs.google.com/forms/d/e/1FAIpQLSdTgd8wSAY40oRvnzEwyequVcXZKRJsxAeEghJY7mjZedtrLw/viewform?usp=sf_link')}>
                                        {"\n"}SIGN UP
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </View>
                
                
                {/*Q&A page screen layout here*/}
                <View style={{ display: this.state.qandAPageDisplay }}>
                    <ScrollView>
                        <View style={styles.QnABackground}>
                            <View style={styles.QnABox1}>
                                <TouchableHighlight
                                onPress={this.handleBackButtonPress}
                                >
                            
                                    <View style={styles.touchableButtonRed}>
                                        <Text style={styles.backText}>
                                            {"\n"}Back
                                        </Text>
                                    </View>
                                </TouchableHighlight>
                            </View>
                            <View style={styles.QnABox}>
                                <Text style={styles.QnAtitle1}>
                                    Q&A
                                </Text>
                                <Text style={styles.QnAparagraph}>
                                    What is FBLA?
                                </Text>
                                <Text style={styles.QnArespuestas}>
                                    FBLA is a student-led organization for students who wish to lead the business world. {"\n"} {"\n"}
                                </Text>
                                <Text style={styles.QnAparagraph}>
                                    What do you do in FBLA?
                                </Text>
                                <Text style={styles.QnArespuestas}>
                                    In FBLA, members help with service projects, compete in highly competitive events, and attend meetings about different aspects of business culture.
                                </Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>
                
                
                {/* Contact Us page screen layout here*/}
                <View style={{ display: this.state.contactUsPageDisplay }}>
                    <ScrollView>
                        <View style={styles.contactBox1}>
                            <TouchableHighlight
                            onPress={this.handleBackButtonPress}
                            >
                        
                                <View style={styles.touchableButtonWhite}>
                                    <Text style={styles.backText}>
                                        {"\n"}Back
                                    </Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                        
                        <View style={styles.contactBox}>
                            <Text style={styles.contactText3}>
                                Contact Us
                            </Text>
                            <Text style={styles.contactText2}>
                                {"\n"}{"\n"}Email:
                            </Text>
                            <Text style={styles.contactText}>
                                alpharettafbla@gmail.com
                            </Text>
                            <Text style={styles.contactText2}>
                                {"\n"}{"\n"}Remind (text 81010):
                            </Text>
                            <Text style={styles.contactText}>
                                9th Grade: @9thcash
                            </Text>
                            <Text style={styles.contactText}>
                                10th Grade: @10thcash
                            </Text>
                            <Text style={styles.contactText}>
                                11th Grade: @11thcash
                            </Text>
                            <Text style={styles.contactText}>
                                12th Grade: @12thcash
                            </Text>
                        </View>
                    </ScrollView>
                </View>
                
                {/*Bug Report page screen layout here*/}
                <View style={{ display: this.state.bugPageDisplay }}>
                    <ScrollView>
                        <View style={styles.bugBackground}>
                            <View style={styles.bugBox1}>
                                <TouchableHighlight
                                    onPress={this.handleBugBackButtonPress}
                                    >
                                
                                        <View style={styles.touchableButtonWhite}>
                                            <Text style={styles.backText}>
                                                {"\n"}Back
                                            </Text>
                                        </View>
                                </TouchableHighlight>
                            </View>
                            
                            <View style={styles.bugBox}>
                                <Text style={styles.bugText}>
                                    {"\n"}Report an Issue
                                </Text>
                                <Text style={styles.bugText2}>
                                    {"\n"}Please fill out this form if you notice any bugs and issues with this application.
                                </Text>
                                <Text style={styles.links2}
                                onPress={() => Linking.openURL('https://docs.google.com/forms/d/e/1FAIpQLSeBnQ6gxge_IGon1LBenYAt8zif9WiN3xtJgFVpOI268wQHKA/viewform?usp=sf_link')}>
                                    {"\n"}REPORT BUG
                                </Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>
                
                {/*Licensing page screen layout here*/}
                <View style={{ display: this.state.licensingPageDisplay }}>
                    <ScrollView>
                        <View style={styles.licensingBackground}>
                            <View style={styles.licensingBox1}>
                                <TouchableHighlight
                                    onPress={this.handleBackButtonPress}
                                    >
                                
                                        <View>
                                            <Text style={styles.backText2}>
                                                {"\n"}Back
                                            </Text>
                                        </View>
                                </TouchableHighlight>
                            </View>
                            
                            <View style={styles.licensingBox}>
                                <Text style={styles.licenseTitle}>
                                    Licensing and Terms of Use
                                </Text>
                                <Text style={styles.licenseText}>
                                    {"\n"}This application exclusively authorizes the Future Business Leaders of America (FBLA) to use the application.
                                </Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ecf0f1',
    },
    contentContainer: {
        height: 5*(deviceHeight/6),
        width: deviceWidth,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'lightblue',
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#34495e',
    },
    blueBox: {
        backgroundColor: '#00a9fe',
        height: 5.6*(deviceHeight/8),
        alignItems: 'center',
        justifyContent: 'center',
    },
    whiteBox: {
        backgroundColor: '#ffffff',
        height: 0.8*(deviceHeight/8),
        alignItems: 'center',
        justifyContent: 'center',
    },
    redBox: {
        backgroundColor: '#ff0049',
        height: 0.8*(deviceHeight/8),
        alignItems: 'center',
        justifyContent: 'center',
    },
    blueBugBox: {
        backgroundColor: '#0000A0',
        height: 0.8*(deviceHeight/8),
        alignItems: 'center',
        justifyContent: 'center',
    },
    label: {
        fontFamily: 'Noteworthy',
        fontSize: 30,
        color: 'black',
    },
    label1: {
        fontFamily: 'SnellRoundhand-Black',
        fontSize: deviceHeight/10,
        color: 'black',
        fontWeight: 'bold',
    },
    touchableButton1: {
        backgroundColor: '#ff0049',
        height: 0.8*(deviceHeight/8),
        width: deviceWidth,
        alignItems: 'center',
        justifyContent: 'center',
    },
   touchableButton2: {
       backgroundColor: '#ffffff',
       height: 0.8*(deviceHeight/8),
       width: deviceWidth,
       alignItems: 'center',
       justifyContent: 'center',
   },
   touchableButton3: {
       backgroundColor: '#0000A0',
       height: 0.8*(deviceHeight/8),
       width: deviceWidth,
       alignItems: 'center',
       justifyContent: 'center',
   },
   touchableButtonBlue: {
       backgroundColor: '#00a9fe',
   },
   touchableButtonWhite: {
       backgroundColor: '#ecf0f1',
   },
   touchableButtonRed: {
       backgroundColor: '#ff0049',
   },
   flagImage: {
       height: 244,
       width: 250,
   },
    blueBox1: {
        backgroundColor: '#00a9fe',
        height: 16*deviceHeight/12,
        alignItems: 'center',
    },
    blueBox2: {
        backgroundColor: '#00a9fe',
        height: deviceHeight/10,
        justifyContent: 'center',
    },
     mainText: {
        color: '#8B0000',
        fontFamily: 'Papyrus',
        fontSize: deviceHeight/44,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    backText: {
        color: '#000000',
        fontFamily: 'Papyrus',
        fontSize: 17,
        textAlign: 'center',
        fontWeight: 'bold',
        marginLeft: 30,
        marginTop: 6,
    },
    backText2: {
        color: '#ffffff',
        fontFamily: 'Papyrus',
        fontSize: 17,
        textAlign: 'center',
        fontWeight: 'bold',
        marginLeft: 30,
        marginTop: 6,
    },
     aboutParagraph: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#0000A0',
    },
    aboutTitle: {
        fontSize: deviceHeight/10,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#8B0000',
        fontFamily: 'Marker Felt',
    },
    aboutBox: {
        height: 12*deviceHeight/10,
    },
    aboutBox1: {
        height: deviceHeight/9,
        justifyContent: 'center',
        marginLeft: 25,
        marginTop: 5,
    },
     contactText: {
        color: '#0000A0',
        fontSize: deviceHeight/30,
        textAlign: 'center',
    },
    contactText2: {
        color: '#8B0000',
        fontFamily: 'Marker Felt',
        fontSize: deviceHeight/30,
        textAlign: 'center',
    },
    contactText3: {
        color: '#87CEEB',
        fontFamily: 'Marker Felt',
        fontSize: deviceHeight/11,
        textAlign: 'center',
    },
    contactBox: {
        alignItems: 'center',
        backgroundColor: '#ecf0f1',
        height: 8*deviceHeight/9,
    },
    contactBox1: {
        height: deviceHeight/9,
        justifyContent: 'center',
        marginLeft: 25,
        marginTop: 5,
        backgroundColor: '#ecf0f1'
    },
    contactHeader: {
        fontSize: deviceHeight/11,
        fontFamily: 'Marker Felt',
        fontWeight: 'bold',
        color: '#8B0000',
        textAlign: 'center',
    },
    officerText: {
        color: '#0000A0',
        fontFamily: 'Chalkboard SE',
        fontSize: deviceHeight/22,
        textAlign: 'center',
    },
    officerText2: {
        color: '#8B0000',
        fontSize: deviceHeight/28,
        textAlign: 'center',
    },
    officerBox1: {
        height: deviceHeight/9,
        justifyContent: 'center',
        marginLeft: 25,
        marginTop: 5,
    },
    officerText3: {
        color: '#000000',
        fontFamily: 'Marker Felt',
        fontSize: deviceHeight/12,
        textAlign: 'center',
    },
    officerBackground: {
        backgroundColor: '#ff0049',
    },
    officerBox: {
        height: 7*deviceHeight,
    },
    QnAparagraph: {
        margin: 24,
        fontSize: deviceHeight/21,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#4921ae',
        fontFamily: 'Chalkboard SE',
    },
    QnAtitle1: {
        fontSize: deviceHeight/11,
        textAlign: 'center',
        color: '#000000',
        fontFamily: 'Marker Felt',
    },
    QnArespuestas: {
        fontSize: deviceHeight/35,
        textAlign: 'center',
        color: '#ffffff',
    },
    QnABox: {
        backgroundColor: '#ff0049',
        height: 12*deviceHeight/10,
        alignItems: 'center',
    },
    QnABackground: {
        backgroundColor: '#ff0049',
    },
    QnABox1: {
        height: deviceHeight/9,
        justifyContent: 'center',
        marginLeft: 25,
        marginTop: 5,
    },
     competitiveText: {
        color: '#0000A0',
        fontSize: deviceHeight/35,
        textAlign: 'center',
    },
    competitiveText2: {
        color: '#8B0000',
        fontFamily: 'Chalkboard SE',
        fontSize: deviceHeight/17,
        textAlign: 'center',
    },
    competitiveText3: {
        color: '#000000',
        fontFamily: 'Marker Felt',
        fontSize: deviceHeight/13,
        textAlign: 'center',
    },
    competitiveBox: {
        height: 5.5*deviceHeight,
        alignItems: 'center',
    },
    competitiveBox1: {
        height: deviceHeight/9,
        justifyContent: 'center',
        marginLeft: 25,
        marginTop: 5,
    },
    competitiveBackground: {
        backgroundColor: '#ff0049',
    },
    title2: {
        fontSize: deviceHeight/10,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#000000',
        fontFamily: 'Marker Felt',
    },
    links: {
        fontSize: deviceHeight/17,
        textAlign: 'center',
        color: '#87CEEB',
    },
    respuestas2: {
        fontSize: deviceHeight/17,
        textAlign: 'center',
        color: '#ffffff',
    },
    joinBox: {
        height: 12*deviceHeight/10,
        alignItems: 'center',
    },
    joinBox1: {
        height: deviceHeight/9,
        justifyContent: 'center',
        marginLeft: 25,
        marginTop: 5,
    },
    joinBackground: {
        backgroundColor: '#ff0049',
    },
    calendarText: {
        color: '#000000',
        fontFamily: 'Marker Felt',
        fontSize: deviceHeight/10,
        textAlign: 'center',
    },
     calendarText2: {
        color: '#8B0000',
        fontSize: deviceHeight/25,
        textAlign: 'center',
        fontFamily: 'Avenir',
    },
     calendarBox: {
        height: 8*(deviceHeight/9),
        alignItems: 'center',
    },
    calendarBox1: {
        height: deviceHeight/9,
        justifyContent: 'center',
        marginLeft: 25,
        marginTop: 5,
    },
    links2: {
        fontSize: deviceHeight/20,
        textAlign: 'center',
        color: '#0000A0',
    },
    calendarBackground: {
        backgroundColor: '#00a9fe',
    },
    currentTitle: {
        fontSize: deviceHeight/10,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#ff0049',
        fontFamily: 'Marker Felt',
    },
    currentLinks: {
        fontSize: deviceHeight/17,
        textAlign: 'center',
        color: '#87CEEB',
    },
    currentText: {
        fontSize: deviceHeight/19,
        textAlign: 'center',
        color: '#0000A0',
        fontFamily: 'Chalkboard SE',
    },
    currentBox: {
        height: deviceHeight,
        alignItems: 'center',
        justifyContent: 'center',
    },
    currentBox1: {
        height: deviceHeight/9,
        justifyContent: 'center',
        marginLeft: 25,
        marginTop: 5,
    },
    websitesBackground: {
        backgroundColor: '#ecf0f1',
    },
    websitesBox: {
        height: deviceHeight,
        alignItems: 'center',
        justifyContent: 'center',
    },
    websitesBox1: {
        height: deviceHeight/9,
        justifyContent: 'center',
        marginLeft: 25,
        marginTop: 5,
    },
    websitesLinks: {
        fontSize: deviceHeight/18,
        textAlign: 'center',
        color: '#87CEEB',
    },
    websitesText: {
        fontSize: deviceHeight/25,
        textAlign: 'center',
        color: '#0000A0',
        fontFamily: 'Chalkboard SE',
    },
    websitesTitle: {
        fontSize: deviceHeight/13,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#ff0049',
        fontFamily: 'Marker Felt',
    },
    signUpBackground: {
        backgroundColor: '#00a9fe',
    },
    signUpBox: {
        height: deviceHeight,
        alignItems: 'center',
    },
    signUpBox1: {
        height: deviceHeight/9,
        justifyContent: 'center',
        marginLeft: 25,
        marginTop: 5,
    },
    signupText2: {
        color: '#8B0000',
        fontSize: deviceHeight/30,
        textAlign: 'center',
        fontFamily: 'Avenir',
    },
    signupText: {
        color: '#000000',
        fontFamily: 'Marker Felt',
        fontSize: deviceHeight/16,
        textAlign: 'center',
    },
    bugText2: {
        color: '#8B0000',
        fontSize: deviceHeight/30,
        textAlign: 'center',
        fontFamily: 'Chalkboard SE',
    },
   
    bugText: {
        color: '#000000',
        fontFamily: 'Marker Felt',
        fontSize: deviceHeight/14,
        textAlign: 'center',
    },
    bugBackground: {
        backgroundColor: '#ecf0f1',
    },
    bugBox: {
        height: 8*(deviceHeight),
        alignItems: 'center',
    },
    bugBox1: {
        height: deviceHeight/9,
        justifyContent: 'center',
        marginLeft: 25,
        marginTop: 5,
    },
    socialBackground: {
        backgroundColor: '#00a9fe',
    },
    socialBox: {
        height: deviceHeight,
        alignItems: 'center',
        justifyContent: 'center',
    },
    socialBox1: {
        height: deviceHeight/9,
        justifyContent: 'center',
        marginLeft: 25,
        marginTop: 5,
    },
    socialsLinks: {
        fontSize: deviceHeight/18,
        textAlign: 'center',
        color: '#87CEEB',
    },
    socialsText: {
        fontSize: deviceHeight/25,
        textAlign: 'center',
        color: '#0000A0',
        fontFamily: 'Chalkboard SE',
    },
    socialsTitle: {
        fontSize: deviceHeight/13,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#ff0049',
        fontFamily: 'Marker Felt',
    },
    attendTitle: {
        fontSize: deviceHeight/13,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#ffffff',
        fontFamily: 'Marker Felt',
    },
    attendText: {
        fontSize: deviceHeight/25,
        textAlign: 'center',
        color: '#0000A0',
        fontFamily: 'Chalkboard SE',
    },
    attendLinks: {
        fontSize: deviceHeight/16,
        textAlign: 'center',
        color: '#87CEEB',
    },
    attendBackground: {
        backgroundColor: '#ff0049',
    },
    attendBox1: {
        height: deviceHeight/9,
        justifyContent: 'center',
        marginLeft: 25,
        marginTop: 5,
    },
    attendBox: {
        height: deviceHeight,
        alignItems: 'center',
    },
    licenseTitle: {
        fontSize: deviceHeight/13,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#ff0049',
        fontFamily: 'Marker Felt',
    },
    licenseText: {
        fontSize: deviceHeight/21,
        textAlign: 'center',
        color: '#87CEEB',
        fontFamily: 'Chalkboard SE',
    },
    licensingBox: {
        height: deviceHeight,
        alignItems: 'center',
    },
    licensingBox1: {
        height: deviceHeight/9,
        justifyContent: 'center',
        marginLeft: 25,
        marginTop: 5,
    },
    licensingBackground: {
        backgroundColor: '#000000',
    },
});