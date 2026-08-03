#define CUSTOM_SETTINGS
#define INCLUDE_GAMEPAD_MODULE
#include <DabbleESP32.h>
#include "Arduino.h"
const int enableRightMotor = 22;
const int rightMotorPin1 = 16;
const int rightMotorPin2 = 17;
const int enableLeftMotor = 23;
const int leftMotorPin1 = 18;
const int leftMotorPin2 = 19;
#define MAX_DRIVE_SPEED 255
#define MAX_STEERING_SPEED 200
const int PWMFreq = 1000;
const int PWMResolution = 8;
const int rightMotorPWMSpeedChannel = 4;
const int leftMotorPWMSpeedChannel = 5;

void rotateMotor(int rightMotorSpeed, int leftMotorSpeed) {
  if (rightMotorSpeed < 0) {
    digitalWrite(rightMotorPin1, LOW);
    digitalWrite(rightMotorPin2, HIGH);    
  } else if (rightMotorSpeed > 0) {
    digitalWrite(rightMotorPin1, HIGH);
    digitalWrite(rightMotorPin2, LOW);      
  } else {
    digitalWrite(rightMotorPin1, LOW);
    digitalWrite(rightMotorPin2, LOW);      
  }

  if (leftMotorSpeed < 0) {
    digitalWrite(leftMotorPin1, LOW);
    digitalWrite(leftMotorPin2, HIGH);    
  } else if (leftMotorSpeed > 0) {
    digitalWrite(leftMotorPin1, HIGH);
    digitalWrite(leftMotorPin2, LOW);      
  } else {
    digitalWrite(leftMotorPin1, LOW);
    digitalWrite(leftMotorPin2, LOW);      
  }

  ledcWrite(rightMotorPWMSpeedChannel, abs(rightMotorSpeed));
  ledcWrite(leftMotorPWMSpeedChannel, abs(leftMotorSpeed));  
}

void setUpPinModes() {
  pinMode(enableRightMotor, OUTPUT);
  pinMode(rightMotorPin1, OUTPUT);
  pinMode(rightMotorPin2, OUTPUT);
  pinMode(enableLeftMotor, OUTPUT);
  pinMode(leftMotorPin1, OUTPUT);
  pinMode(leftMotorPin2, OUTPUT);
  ledcSetup(rightMotorPWMSpeedChannel, PWMFreq, PWMResolution);
  ledcSetup(leftMotorPWMSpeedChannel, PWMFreq, PWMResolution);  
  ledcAttachPin(enableRightMotor, rightMotorPWMSpeedChannel);
  ledcAttachPin(enableLeftMotor, leftMotorPWMSpeedChannel); 

  rotateMotor(0, 0); 
}

void setup() {
  setUpPinModes();
  Dabble.begin("Lamine Yamal"); 
}

void loop() {
  int rightMotorSpeed = 0;
  int leftMotorSpeed = 0;

  Dabble.processInput();

  if (GamePad.isPressed(0)) {
    rightMotorSpeed = MAX_DRIVE_SPEED;
  } else if (GamePad.isPressed(1)) {
    rightMotorSpeed = -MAX_DRIVE_SPEED;
  }

  if (GamePad.isPressed(2)) {
    leftMotorSpeed = -MAX_STEERING_SPEED;
  } else if (GamePad.isPressed(3)) {
    leftMotorSpeed = MAX_STEERING_SPEED;
  }

  if (GamePad.isPressed(4)) {
    rightMotorSpeed = 0;
    leftMotorSpeed = 0;
  }

  rotateMotor(rightMotorSpeed, leftMotorSpeed);
}

