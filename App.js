import React, { useState } from 'react';
import 'react-native-gesture-handler';
import { SafeAreaView, View, Text, Image, StyleSheet, Pressable, Dimensions, LogBox, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ScrollView } from 'react-native-gesture-handler';
import { Animated } from 'react-native'; // Import the Animated library
import * as Haptics from 'expo-haptics';
import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView';
import * as FileSystem from 'expo-file-system';

LogBox.ignoreLogs(['Sending...']);

import {ACRONYMS} from "./appInfo/acronyms.json";
import * as aSections from "./appInfo/acft.json";
import * as hSections from "./appInfo/history.json";
import * as iSections from "./appInfo/ms1.json";

import Jayhawk from './jayhawk.png';

const windowWidth = Dimensions.get('window').width;

const Stack = createStackNavigator();

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#d7d2cb',
    alignItems: 'center',
  },
  sectionHeader: {
    textAlign: 'center',
    fontWeight: 'bold',
    textDecorationLine: 'underline'
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: 10,
    color: '#0051ba'
  },
  textPages: {
    textAlign: 'left',
    fontWeight: 'normal',
    fontSize: 20,
    marginLeft: 10,
    marginRight: 10,
    color: '#333333'
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 0,
    elevation: 3,
    backgroundColor: '#0051ba',
    marginTop: 20,
    width: 230
  },
  textButton: {
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#d7d2cb'
  }
});

// need to work on logo image where it responds to change in image sizes
const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={{backgroundColor:'#d7d2cb'}}>
      <View style={styles.root}>
        <Image source={Jayhawk} style={{width:windowWidth, height:(windowWidth/1.5)}} resizeMode="contain"></Image>   
        <Text style={styles.text}>Jayhawk Battalion</Text>
        <Text style={styles.text}>Blue Book</Text>
        <Pressable style={styles.button} onPress={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium) && navigation.navigate('CALENDAR')}>
          <Text style={styles.textButton}>Calendar</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium) && navigation.navigate('STANDARD')}>
          <Text style={styles.textButton}>Standards</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium) && navigation.navigate('MS1')}>
          <Text style={styles.textButton}>MS1 Knowledge</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium) && navigation.navigate('MS2')}>
          <Text style={styles.textButton}>MS2 Knowledge</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium) && navigation.navigate('MS3')}>
          <Text style={styles.textButton}>MS3 Knowledge</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium) && navigation.navigate('MS4')}>
          <Text style={styles.textButton}>MS4 Knowledge</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium) && navigation.navigate('ACRONYMS')}>
          <Text style={styles.textButton}>Acronyms</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium) && navigation.navigate('PRT')}>
          <Text style={styles.textButton}>PRT</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium) && navigation.navigate('ACFT')}>
          <Text style={styles.textButton}>ACFT</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium) && navigation.navigate('EXTRA')}>
          <Text style={styles.textButton}>Extra Materials</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium) && navigation.navigate('HISTORY')}>
          <Text style={styles.textButton}>History</Text>
        </Pressable>
        <Pressable style={[styles.button, {marginBottom:100}]} onPress={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium) && navigation.navigate('ABOUT')}>
          <Text style={styles.textButton}>About Page</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

import MissionVision from './assets/calendar/MissionVision.jpg';
const imageHeightMissionVision = Image.resolveAssetSource(MissionVision).height;
const imageWidthMissionVision = Image.resolveAssetSource(MissionVision).width;
const scaleMissionVision = imageWidthMissionVision / windowWidth;
const finaleMissionVision = imageHeightMissionVision / scaleMissionVision;

import Requirements from './assets/calendar/Requirements.jpg';
const imageHeightRequirements = Image.resolveAssetSource(Requirements).height;
const imageWidthRequirements = Image.resolveAssetSource(Requirements).width;
const scaleRequirements = imageWidthRequirements / windowWidth;
const finaleRequirements = imageHeightRequirements / scaleRequirements;

import January from './assets/calendar/CalendarJanuary.jpg';
const imageHeightJanuary = Image.resolveAssetSource(January).height;
const imageWidthJanuary = Image.resolveAssetSource(January).width;
const scaleJanuary = imageWidthJanuary / windowWidth;
const finaleJanuary = imageHeightJanuary / scaleJanuary;

import February from './assets/calendar/CalendarFebruary.jpg';
const imageHeightFebruary = Image.resolveAssetSource(February).height;
const imageWidthFebruary = Image.resolveAssetSource(February).width;
const scaleFebruary = imageWidthFebruary / windowWidth;
const finaleFebruary = imageHeightFebruary / scaleFebruary;

import March from './assets/calendar/CalendarMarch.jpg';
const imageHeightMarch = Image.resolveAssetSource(March).height;
const imageWidthMarch = Image.resolveAssetSource(March).width;
const scaleMarch = imageWidthMarch / windowWidth;
const finaleMarch = imageHeightMarch / scaleMarch;

import April from './assets/calendar/CalendarApril.jpg';
const imageHeightApril = Image.resolveAssetSource(April).height;
const imageWidthApril = Image.resolveAssetSource(April).width;
const scaleApril = imageWidthApril / windowWidth;
const finaleApril = imageHeightApril / scaleApril;

import May from './assets/calendar/CalendarMay.jpg';
const imageHeightMay = Image.resolveAssetSource(May).height;
const imageWidthMay = Image.resolveAssetSource(May).width;
const scaleMay = imageWidthMay / windowWidth;
const finaleMay = imageHeightMay / scaleMay;

import Parking from './assets/calendar/Parking.jpg';
const imageHeightParking = Image.resolveAssetSource(Parking).height;
const imageWidthParking = Image.resolveAssetSource(Parking).width;
const scaleParking = imageWidthParking / windowWidth;
const finaleParking = imageHeightParking / scaleParking;

import ColorGuard from './assets/calendar/ColorGuard.jpg';
const imageHeightColorGuard = Image.resolveAssetSource(ColorGuard).height;
const imageWidthColorGuard = Image.resolveAssetSource(ColorGuard).width;
const scaleColorGuard = imageWidthColorGuard / windowWidth;
const finaleColorGuard = imageHeightColorGuard / scaleColorGuard;

const CalendarScreen = () => {
  return (
    <ScrollView style={{backgroundColor:'#d7d2cb'}}>
      <View style={[styles.root, {marginTop:10, marginBottom:10}]}>
        <ReactNativeZoomableView>
          <Image source={MissionVision} style={{width:windowWidth, height:finaleMissionVision}} resizeMode="contain"></Image>
          <Image source={Requirements} style={{width:windowWidth, height:finaleRequirements}} resizeMode="contain"></Image>
          <Image source={January} style={{width:windowWidth, height:finaleJanuary}} resizeMode="contain"></Image>
          <Image source={February} style={{width:windowWidth, height:finaleFebruary}} resizeMode="contain"></Image>
          <Image source={March} style={{width:windowWidth, height:finaleMarch}} resizeMode="contain"></Image>
          <Image source={April} style={{width:windowWidth, height:finaleApril}} resizeMode="contain"></Image>
          <Image source={May} style={{width:windowWidth, height:finaleMay}} resizeMode="contain"></Image>
          <Image source={Parking} style={{width:windowWidth, height:finaleParking}} resizeMode="contain"></Image>
          <Image source={ColorGuard} style={{width:windowWidth, height:finaleColorGuard}} resizeMode="contain"></Image>  
        </ReactNativeZoomableView>
      </View>
    </ScrollView>
  );
}

const StandardScreen = () => {
  return (
    <View style={styles.root}>
      <Text style={styles.textPages}></Text>
    </View>
  );
}

import ROTCPatch from './assets/ms1/RotcPatch.png';
import CadetRank from './assets/ms1/CadetRank.png';
const imageHeightCadetRank = Image.resolveAssetSource(CadetRank).height;
const imageWidthCadetRank = Image.resolveAssetSource(CadetRank).width;
const scaleCadetRank = imageWidthCadetRank / windowWidth;
const finaleCadetRank = imageHeightCadetRank / scaleCadetRank;
import ArmyRank from './assets/ms1/ArmyRank.jpg';
const imageHeightArmyRank = Image.resolveAssetSource(ArmyRank).height;
const imageWidthArmyRank = Image.resolveAssetSource(ArmyRank).width;
const scaleArmyRank = imageWidthArmyRank / windowWidth;
const finaleArmyRank = imageHeightArmyRank / scaleArmyRank;
import Uniforms from './assets/ms1/Uniforms.png';
const imageHeightUniforms = Image.resolveAssetSource(Uniforms).height;
const imageWidthUniforms = Image.resolveAssetSource(Uniforms).width;
const scaleUniforms = imageWidthUniforms / windowWidth;
const finaleUniforms = imageHeightUniforms / scaleUniforms;
import Units1 from './assets/ms1/Units1.jpg';
const imageHeightUnits1 = Image.resolveAssetSource(Units1).height;
const imageWidthUnits1 = Image.resolveAssetSource(Units1).width;
const scaleUnits1 = imageWidthUnits1 / windowWidth;
const finaleUnits1 = imageHeightUnits1 / scaleUnits1;
import Units2 from './assets/ms1/Units2.jpg';
const imageHeightUnits2 = Image.resolveAssetSource(Units2).height;
const imageWidthUnits2 = Image.resolveAssetSource(Units2).width;
const scaleUnits2 = imageWidthUnits2 / windowWidth;
const finaleUnits2 = imageHeightUnits2 / scaleUnits2;
import Units3 from './assets/ms1/Units3.jpg';
const imageHeightUnits3 = Image.resolveAssetSource(Units3).height;
const imageWidthUnits3 = Image.resolveAssetSource(Units3).width;
const scaleUnits3 = imageWidthUnits3 / windowWidth;
const finaleUnits3 = imageHeightUnits3 / scaleUnits3;
const MS1Screen = () => {
  return (
    <ScrollView style={{backgroundColor:'#d7d2cb'}}>
      <View style={styles.root}>
        <View>
          <Text style={[styles.textPages, {textAlign:'center'}]}>
            <Text style={[styles.sectionHeader, {marginTop:20}]}>
              {iSections.Section1Title}
            </Text>
            <Text>
              {iSections.Section1}
            </Text>
            <Text style={styles.sectionHeader}>
              {iSections.Section1NCOTitle}
            </Text>
            <Text>
              {iSections.Section1NCO}
            </Text>
          </Text>
        </View>
        <View>
          <Text style={styles.textPages}>
            <Text style={styles.sectionHeader}>
              {iSections.Section2Title}
            </Text>
            <Text>
              {iSections.Section2}
            </Text>
          </Text>
        </View>
        <View>
          <Text style={styles.textPages}>
            <Text style={styles.sectionHeader}>
              {iSections.Section3Title}
            </Text>
            <Text>
              {iSections.Section3}
            </Text>
          </Text>
        </View>
        <View>
          <Text style={styles.textPages}>
            <Text style={styles.sectionHeader}>
              {iSections.Section4Title}
            </Text>
            <Text>
              {iSections.Section4}
            </Text>
          </Text>
        </View>
        <View>
          <Text style={styles.textPages}>
            <Text style={styles.sectionHeader}>
              {iSections.Section5Title}
            </Text>
            <Text>
              {iSections.Section5}
            </Text>
          </Text>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={styles.textPages}>
            <Text style={styles.sectionHeader}>
              {iSections.Section6Title}
            </Text>
          </Text>
          <Text>
            {"\n"}<Image source={ROTCPatch} resizeMode="contain" />{"\n"}
          </Text>
          <Text style={styles.textPages}>
            {iSections.Section6}
          </Text>
        </View>
        <View>
          <Text style={styles.textPages}>
            <Text style={styles.sectionHeader}>
              {iSections.Section7Title}
            </Text>
            <Text>
              {iSections.Section7}
            </Text>
          </Text>
        </View>
        <View>
          <Text style={styles.textPages}>
            <Text style={styles.sectionHeader}>
              {iSections.Section8Title}
            </Text>
            <Text>
              {iSections.Section8}
            </Text>
          </Text>
        </View>
        <View>
          <Text style={styles.textPages}>
            <Text style={styles.sectionHeader}>
              {iSections.Section9Title}
            </Text>
          </Text>
          <Text>
            <Image source={CadetRank} style={{marginTop:20, width:windowWidth, height:finaleCadetRank}} resizeMode='contain' />{"\n\n"}
          </Text>
        </View>
        <View>
          <Text style={styles.textPages}>
            <Text style={styles.sectionHeader}>
              {iSections.Section10Title}
            </Text>
          </Text>
          <Text>
            <Image source={ArmyRank} style={{marginTop:20, width:windowWidth, height:finaleArmyRank}} resizeMode='contain' />{"\n\n"}
          </Text>
        </View>  
        <View>
          <Text style={styles.textPages}>
            <Text style={styles.sectionHeader}>
              {iSections.Section11Title}
            </Text>
            <Text>
              {iSections.Section11}
            </Text>
          </Text>
          <Text>
            <Image source={Uniforms} style={{marginTop:20, width:windowWidth, height:finaleUniforms}} resizeMode='contain' />{"\n\n"}
          </Text>
        </View>   
        <View>
          <Text style={styles.textPages}>
            <Text style={styles.sectionHeader}>
              {iSections.Section12Title}
            </Text>
            <Text>
              {iSections.Section12}
            </Text>
          </Text>
        </View>
        <View>
          <Text style={styles.textPages}>
            <Text style={styles.sectionHeader}>
              {iSections.Section13Title}
            </Text>
            <Text>
              {iSections.Section13}
            </Text>
          </Text>
        </View>
        <View>
          <Text style={styles.textPages}>
            <Text style={styles.sectionHeader}>
              {iSections.Section14Title}
            </Text>
            <Text>
              {iSections.Section14P1}
            </Text>
            <Text style={{textDecorationLine:'underline'}}>
              {iSections.Section14P2}
            </Text>
            <Text>
              {iSections.Section14P3}
            </Text>
          </Text>
        </View>
        <View>
          <Text style={styles.textPages}>
            <Text style={styles.sectionHeader}>
              {iSections.Section15Title}
            </Text>
            <Text>
              {iSections.Section15}
            </Text>
          </Text>
        </View>
        <View>
          <Text style={[styles.textPages, {textAlign:'center'}]}>
            <Text style={styles.sectionHeader}>
              {iSections.Section16Title}
            </Text>
            <Text>
              {iSections.Section16}
            </Text>  
          </Text>
        </View>
        <View>
          <Text style={styles.textPages}>
            <Text style={styles.sectionHeader}>
              {iSections.Section17Title}
            </Text>
            <Text>
              {iSections.Section17}
            </Text>
          </Text>
        </View>
        <View>
          <Text style={styles.textPages}>
            <Text style={styles.sectionHeader}>
              {iSections.Section18Title}
            </Text>
          </Text>
          <Text>
            <Image source={Units1} style={{marginTop:20, width:windowWidth, height:finaleUnits1}} resizeMode='contain' />
            <Image source={Units2} style={{width:windowWidth, height:finaleUnits2}} resizeMode='contain' />
            <Image source={Units3} style={{marginBottom:20, width:windowWidth, height:finaleUnits3}} resizeMode='contain' />{"\n\n"}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const MS2Screen = () => {
  return (
    <View style={styles.root}>
      <Text style={styles.textPages}></Text>
    </View>
  );
}

const MS3Screen = () => {
  return (
    <View style={styles.root}>
      <Text style={styles.textPages}></Text>
    </View>
  );
}

const MS4Screen = () => {
  return (
    <View style={styles.root}>
      <Text style={styles.textPages}></Text>
    </View>
  );
}

const AcronymScreen = () => {
  return (
    <ScrollView style={{backgroundColor:'#d7d2cb'}}>
      <View style={styles.root}>
        {ACRONYMS.map((item, index) => {
          const separatorIndex = item.indexOf(' - ');
          const acronym = item.substring(0, separatorIndex);
          const definition = item.substring(separatorIndex + 3, item.length);
          
          return (
            <View key={index} style={{flexDirection: 'row'}}>
              <Text style={styles.textPages}>
                <Text style={{fontWeight: 'bold'}}>
                  {acronym}
                </Text>
                <Text>
                  {" - "}{definition}
                </Text>
              </Text>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}

const PRTScreen = () => {
  return (
    <View style={styles.root}>
      <Text style={styles.text}></Text>
    </View>
  );
}

const ACFTScreen = ({ navigation }) => {
  return (
    <ScrollView style={{backgroundColor:'#d7d2cb'}}>
      <View style={styles.root}>
        <Pressable style={styles.button} onPress={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium) && navigation.navigate('MDL')}>
            <Text style={styles.textButton}>3-Rep Maximum Deadlift</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium) && navigation.navigate('SPT')}>
            <Text style={styles.textButton}>Standing Power Throw</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium) && navigation.navigate('HRP')}>
            <Text style={styles.textButton}>Hand Release Pushups</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium) && navigation.navigate('SDC')}>
            <Text style={styles.textButton}>Sprint Drag Carry</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium) && navigation.navigate('PLANK')}>
            <Text style={styles.textButton}>Plank</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium) && navigation.navigate('2MR')}>
            <Text style={styles.textButton}>2-Mile Run</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium) && navigation.navigate('ALTERNATE')}>
            <Text style={styles.textButton}>Alternate Events</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium) && navigation.navigate('ScoreChart')}>
            <Text style={styles.textButton}>ACFT Score Chart</Text>
        </Pressable>
        <Pressable style={styles.buttonLast} onPress={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium) && navigation.navigate('ScoreCalculator')}>
            <Text style={styles.textButton}>ACFT Score Calculator</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const MDLScreen = () => {
  return (
    <ScrollView style={{backgroundColor:'#d7d2cb'}}>
      <View style={styles.root}>
        <Text style={styles.textPages}>
          {aSections.MDL}
        </Text>
      </View>
    </ScrollView>
  );
}

const SPTScreen = () => {
  return (
    <ScrollView style={{backgroundColor:'#d7d2cb'}}>
      <View style={styles.root}>
        <Text style={styles.textPages}>
          {aSections.SPT}
        </Text>
      </View>
    </ScrollView>
  );
}

const HRPScreen = () => {
  return (
    <ScrollView style={{backgroundColor:'#d7d2cb'}}>
      <View style={styles.root}>
        <Text style={styles.textPages}>
          {aSections.HRP} 
        </Text>
      </View>
    </ScrollView>
  );
}

const SDCScreen = () => {
  return (
    <ScrollView style={{backgroundColor:'#d7d2cb'}}>
      <View style={styles.root}>
        <Text style={styles.textPages}>
          {aSections.SDC} 
        </Text>
      </View>
    </ScrollView>
  );
}

const PlankScreen = () => {
  return (
    <ScrollView style={{backgroundColor:'#d7d2cb'}}>
      <View style={styles.root}>
        <Text style={styles.textPages}>
          {aSections.PLANK} 
        </Text>
      </View>
    </ScrollView>
  );
}

const MileScreen = () => {
  return (
    <ScrollView style={{backgroundColor:'#d7d2cb'}}>
      <View style={styles.root}>
        <Text style={styles.textPages}>
          {aSections.TWOMILE} 
        </Text>
      </View>
    </ScrollView>
  );
}

const AlternateScreen = () => {
  return (
    <ScrollView style={{backgroundColor:'#d7d2cb'}}>
      <View style={styles.root}>
        <Text style={[styles.textPages, {textAlign:"center"}]}>
          <Text style={{fontWeight:"bold", textDecorationLine:"underline"}}>{aSections.ALTERNATE1Title}</Text>
          {aSections.ALTERNATE1}
          <Text style={{fontWeight:"bold", textDecorationLine:"underline"}}>{aSections.ALTERNATE2Title}</Text>
          {aSections.ALTERNATE2}
          <Text style={{fontWeight:"bold", textDecorationLine:"underline"}}>{aSections.ALTERNATE3Title}</Text>
          {aSections.ALTERNATE3}
        </Text>
      </View>
    </ScrollView>
  );
}

//change how I scale these images like I did with the calendar images

const scaleFactor = 1700 / windowWidth;
const imageHeight = 2200 / scaleFactor;

const ScoreChartScreen = () => {
  return (
    <ScrollView style={{backgroundColor:'#d7d2cb'}}>
      <View style={styles.root}>
          <Image source={require('./assets/scorechart/ACFTScoreChart01.png')} style={{width:windowWidth, height:imageHeight}} resizeMode="contain"></Image>
          <Image source={require('./assets/scorechart/ACFTScoreChart02.png')} style={{width:windowWidth, height:imageHeight}} resizeMode="contain"></Image> 
          <Image source={require('./assets/scorechart/ACFTScoreChart03.png')} style={{width:windowWidth, height:imageHeight}} resizeMode="contain"></Image> 
          <Image source={require('./assets/scorechart/ACFTScoreChart04.png')} style={{width:windowWidth, height:imageHeight}} resizeMode="contain"></Image> 
          <Image source={require('./assets/scorechart/ACFTScoreChart05.png')} style={{width:windowWidth, height:imageHeight}} resizeMode="contain"></Image> 
          <Image source={require('./assets/scorechart/ACFTScoreChart06.png')} style={{width:windowWidth, height:imageHeight}} resizeMode="contain"></Image> 
          <Image source={require('./assets/scorechart/ACFTScoreChart07.png')} style={{width:windowWidth, height:imageHeight}} resizeMode="contain"></Image> 
          <Image source={require('./assets/scorechart/ACFTScoreChart08.png')} style={{width:windowWidth, height:imageHeight}} resizeMode="contain"></Image> 
          <Image source={require('./assets/scorechart/ACFTScoreChart09.png')} style={{width:windowWidth, height:imageHeight}} resizeMode="contain"></Image> 
          <Image source={require('./assets/scorechart/ACFTScoreChart10.png')} style={{width:windowWidth, height:imageHeight}} resizeMode="contain"></Image> 
          <Image source={require('./assets/scorechart/ACFTScoreChart11.png')} style={{width:windowWidth, height:imageHeight}} resizeMode="contain"></Image>            
      </View>  
    </ScrollView>
  );
}

const ScoreCalculatorScreen = () => {
  return (
    <View style={styles.root}>
      <Text style={styles.text}></Text>
    </View>
  );
}

const ExtraScreen = () => {
  return (
    <View style={styles.root}>
      <Text style={{fontSize: 30, color: 'red', textAlign: 'center', fontWeight: 'bold', marginTop: 50, marginLeft: 10, marginRight: 10 }}>
      Downloadable content to be added.</Text>
    </View>
  );
}

const HistoryScreen = () => {
  return (
    <ScrollView style={{backgroundColor:'#d7d2cb'}}>
      <View style={styles.root}>
        <Text style={{...styles.textPages, fontSize:15}}>
          {hSections.S1}
          {hSections.S2}
          {hSections.S3}
          {hSections.S4}
          {hSections.S5}
          {hSections.S6}
          {hSections.S7}
          {hSections.S8}
          {hSections.S9}
        </Text>
      </View>
    </ScrollView>
  );
}

const AboutScreen = () => {
  return (
    <View style={styles.root}>
      <Text style={{fontSize: 30, color: '#333333', textAlign: 'center', fontWeight: 'bold', marginTop: 50, marginLeft: 10, marginRight: 10 }}>
      This app was developed by Jacob Horton for the University of Kansas Army ROTC Program.</Text>
    </View>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HOME"
          component={HomeScreen}
          options={{
            headerStyle: { backgroundColor: '#0051ba' },
            title: 'Home',
            headerTintColor: '#d7d2cb',
            headerTitleStyle: { color: '#d7d2cb', fontSize: 22 },
          }}
        />
        <Stack.Screen
          name="CALENDAR"
          component={CalendarScreen}
          options={{
            headerStyle: { backgroundColor: '#0051ba' },
            title: 'Calendar',
            headerTintColor: '#d7d2cb',
            headerTitleStyle: { color: '#d7d2cb', fontSize: 22 }
          }}
        />
        <Stack.Screen
          name="STANDARD"
          component={StandardScreen}
          options={{
            headerStyle: { backgroundColor: '#0051ba' },
            title: "Standards",
            headerTintColor: '#d7d2cb',
            headerTitleStyle: { color: '#d7d2cb', fontSize: 22 }
          }}
        />
        <Stack.Screen
          name="MS1"
          component={MS1Screen}
          options={{
            headerStyle: { backgroundColor: '#0051ba' },
            title: 'MS1 Knowledge',
            headerTintColor: '#d7d2cb',
            headerTitleStyle: { color: '#d7d2cb', fontSize: 22 }
          }}
        />
        <Stack.Screen
          name="MS2"
          component={MS2Screen}
          options={{
            headerStyle: { backgroundColor: '#0051ba' },
            title: 'MS2 Knowledge',
            headerTintColor: '#d7d2cb',
            headerTitleStyle: { color: '#d7d2cb', fontSize: 22 }
          }}
        />
        <Stack.Screen
          name="MS3"
          component={MS3Screen}
          options={{
            headerStyle: { backgroundColor: '#0051ba' },
            title: 'MS3 Knowledge',
            headerTintColor: '#d7d2cb',
            headerTitleStyle: { color: '#d7d2cb', fontSize: 22 }
          }}
        />
        <Stack.Screen
          name="MS4"
          component={MS4Screen}
          options={{
            headerStyle: { backgroundColor: '#0051ba' },
            title: 'MS4 Knowledge',
            headerTintColor: '#d7d2cb',
            headerTitleStyle: { color: '#d7d2cb', fontSize: 22 }
          }}
        />
        <Stack.Screen
          name="ACRONYMS"
          component={AcronymScreen}
          options={{
            headerStyle: { backgroundColor: '#0051ba' },
            title: 'Acronyms',
            headerTintColor: '#d7d2cb',
            headerTitleStyle: { color: '#d7d2cb', fontSize: 22 }
          }}
        />
        <Stack.Screen
          name="PRT"
          component={PRTScreen}
          options={{
            headerStyle: { backgroundColor: '#0051ba' },
            title: 'PRT',
            headerTintColor: '#d7d2cb',
            headerTitleStyle: { color: '#d7d2cb', fontSize: 22 }
          }}
        />
        <Stack.Screen
          name="ACFT"
          component={ACFTScreen}
          options={{
            headerStyle: { backgroundColor: '#0051ba' },
            title: 'ACFT',
            headerTintColor: '#d7d2cb',
            headerTitleStyle: { color: '#d7d2cb', fontSize: 22 }
          }}
        />
        <Stack.Screen
          name="MDL"
          component={MDLScreen}
          options={{
            headerStyle: { backgroundColor: '#0051ba' },
            title: 'MDL',
            headerTintColor: '#d7d2cb',
            headerTitleStyle: { color: '#d7d2cb', fontSize: 22 }
          }}
        />
        <Stack.Screen
          name="SPT"
          component={SPTScreen}
          options={{
            headerStyle: { backgroundColor: '#0051ba' },
            title: 'SPT',
            headerTintColor: '#d7d2cb',
            headerTitleStyle: { color: '#d7d2cb', fontSize: 22 }
          }}
        />
        <Stack.Screen
          name="HRP"
          component={HRPScreen}
          options={{
            headerStyle: { backgroundColor: '#0051ba' },
            title: 'HRP',
            headerTintColor: '#d7d2cb',
            headerTitleStyle: { color: '#d7d2cb', fontSize: 22 }
          }}
        />
        <Stack.Screen
          name="SDC"
          component={SDCScreen}
          options={{
            headerStyle: { backgroundColor: '#0051ba' },
            title: 'SDC',
            headerTintColor: '#d7d2cb',
            headerTitleStyle: { color: '#d7d2cb', fontSize: 22 }
          }}
        />
        <Stack.Screen
          name="PLANK"
          component={PlankScreen}
          options={{
            headerStyle: { backgroundColor: '#0051ba' },
            title: 'Plank',
            headerTintColor: '#d7d2cb',
            headerTitleStyle: { color: '#d7d2cb', fontSize: 22 }
          }}
        />
        <Stack.Screen
          name="ALTERNATE"
          component={AlternateScreen}
          options={{
            headerStyle: { backgroundColor: '#0051ba' },
            title: 'Alternate Events',
            headerTintColor: '#d7d2cb',
            headerTitleStyle: { color: '#d7d2cb', fontSize: 22 }
          }}
        />
        <Stack.Screen
          name="2MR"
          component={MileScreen}
          options={{
            headerStyle: { backgroundColor: '#0051ba' },
            title: '2-Mile Run',
            headerTintColor: '#d7d2cb',
            headerTitleStyle: { color: '#d7d2cb', fontSize: 22 }
          }}
        />
        <Stack.Screen
          name="ScoreChart"
          component={ScoreChartScreen}
          options={{
            headerStyle: { backgroundColor: '#0051ba' },
            title: 'Acft Score Chart',
            headerTintColor: '#d7d2cb',
            headerTitleStyle: { color: '#d7d2cb', fontSize: 22 }
          }}
        />
        <Stack.Screen
          name="ScoreCalculator"
          component={ScoreCalculatorScreen}
          options={{
            headerStyle: { backgroundColor: '#0051ba' },
            title: 'ACFT Score Calculator',
            headerTintColor: '#d7d2cb',
            headerTitleStyle: { color: '#d7d2cb', fontSize: 18 }
          }}
        />
        <Stack.Screen
          name="EXTRA"
          component={ExtraScreen}
          options={{
            headerStyle: { backgroundColor: '#0051ba' },
            title: 'Extra Materials',
            headerTintColor: '#d7d2cb',
            headerTitleStyle: { color: '#d7d2cb', fontSize: 22 }
          }}
        />
        <Stack.Screen
          name="HISTORY"
          component={HistoryScreen}
          options={{
            headerStyle: { backgroundColor: '#0051ba' },
            title: 'History',
            headerTintColor: '#d7d2cb',
            headerTitleStyle: { color: '#d7d2cb', fontSize: 22 }
          }}
        />
        <Stack.Screen
          name="ABOUT"
          component={AboutScreen}
          options={{
            headerStyle: { backgroundColor: '#0051ba' },
            title: 'About Page',
            headerTintColor: '#d7d2cb',
            headerTitleStyle: { color: '#d7d2cb', fontSize: 22 }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;