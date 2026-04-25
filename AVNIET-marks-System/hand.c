#include <SoftwareSerial.h>

// Software serial for Bluetooth
SoftwareSerial BT(10, 11); // RX, TX

// Flex sensor pins
int flex1 = A0; // Thumb
int flex2 = A1; // Index
int flex3 = A2; // Middle
int flex4 = A3; // Ring
int flex5 = A4; // Pinky

void setup() {
  Serial.begin(9600);
  BT.begin(9600);
  pinMode(flex1, INPUT);
  pinMode(flex2, INPUT);
  pinMode(flex3, INPUT);
  pinMode(flex4, INPUT);
  pinMode(flex5, INPUT);
}

void loop() {
  int val1 = analogRead(flex1);
  int val2 = analogRead(flex2);
  int val3 = analogRead(flex3);
  int val4 = analogRead(flex4);
  int val5 = analogRead(flex5);

  String gesture = classifyGesture(val1, val2, val3, val4, val5);
  BT.println(gesture);
  delay(300);
}

String classifyGesture(int v1, int v2, int v3, int v4, int v5) {
  // All fingers bent = fist
  if (v1 > 600 && v2 > 600 && v3 > 600 && v4 > 600 && v5 > 600)
    return "Fist";
  
  // Only thumb extended = thumbs up
  if (v1 < 400 && v2 > 600 && v3 > 600 && v4 > 600 && v5 > 600)
    return "Thumbs Up";
  
  // All fingers extended = peace
  if (v1 < 400 && v2 < 400 && v3 > 600 && v4 > 600 && v5 > 600)
    return "Peace Sign";
  
  // Thumb and index extended = pointing
  if (v1 < 400 && v2 < 400 && v3 > 600 && v4 > 600 && v5 > 600)
    return "Pointing";
  
  // Open hand
  if (v1 < 400 && v2 < 400 && v3 < 400 && v4 < 400 && v5 < 400)
    return "Open Hand";
  
  return "Unknown Gesture";
}