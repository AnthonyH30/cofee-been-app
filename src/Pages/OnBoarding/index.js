import React, { useState } from 'react'
import { Dimensions, Text } from 'react-native';
import { Container, Title, Description, Image, Content, Steps, Step, ButtonNext, ButtonText, Buttons, Button } from './style'
import { OnBoardingSlides } from '../../Services/OnboardingSlides';
import image1 from '../../../assets/image1.png';


export default function OnBoarding() {

  const [onBoardingStep, setOnBoardingStep] = useState(0);

  nextStep = () =>{
    if(onBoardingStep < 2){
      setOnBoardingStep((prev) => prev + 1)
    }
  }

  backStep = () =>{
    if(onBoardingStep > 0){
      setOnBoardingStep((prev) => prev - 1)
    }
  }

  skipSteps = () =>{
    setOnBoardingStep(2)
  }

  return (
    <Container>
      <Image source={{uri:OnBoardingSlides[onBoardingStep].imageUrl}}/>
      <Content>
        <Title>{OnBoardingSlides[onBoardingStep].title}</Title>
        <Description>{OnBoardingSlides[onBoardingStep].description}</Description>
        <Steps>
          <Step onPress={() => setOnBoardingStep(0)} style={onBoardingStep == 0 ? {backgroundColor: "#0f9565"} : {backgroundColor: "#fff"}} />
          <Step onPress={() => setOnBoardingStep(1)} style={onBoardingStep == 1 ? {backgroundColor: "#0f9565"} : {backgroundColor: "#fff"}} />
          <Step onPress={() => setOnBoardingStep(2)} style={onBoardingStep == 2 ? {backgroundColor: "#0f9565"} : {backgroundColor: "#fff"}} />
        </Steps>
        <ButtonNext onPress={nextStep}><ButtonText>{onBoardingStep !== 2 ? "Next" : "Join"}</ButtonText></ButtonNext>
      </Content>
      <Buttons>
        <Button onPress={backStep}><ButtonText>Back</ButtonText></Button>
        <Button onPress={skipSteps}><ButtonText>Skip</ButtonText></Button>
      </Buttons>
    </Container>
  )
}