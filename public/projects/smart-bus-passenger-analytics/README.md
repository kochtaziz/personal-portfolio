# Smart Bus Passenger Analytics System

Private freelance IoT project by Mohamed Aziz Kocht.

## Overview

This project is an ESP32-based passenger analytics system designed for public transport vehicles. The hardware is installed as two small sensor boxes near the bus door. Together, the devices detect passenger entry and exit activity, capture location context, and send operational data to a local server for storage and later analysis.

The source code and full client implementation are private because the project was created for freelance work and is owned by the client. The client allowed portfolio credit for the creation, so this document describes the architecture and engineering work without exposing proprietary code or sensitive deployment details.

## Goal

The system helps a bus operator understand:

- How many passengers entered the bus
- How many passengers exited the bus
- When passenger movement happened
- Where passenger activity happened
- Whether the device is online or offline
- How route activity can be compared with fuel usage
- How possible gains or losses can be estimated from passenger and route data

## Hardware Concept

The prototype uses an ESP32 controller with connected sensing modules:

- GPS sensor for location and route context
- Laser sensor for door-crossing detection
- Sound sensor for additional event/context signals
- Local display for online/offline status and basic device feedback
- Enclosed sensor boxes designed to be mounted near the bus door

## System Flow

1. Sensors monitor the bus door area.
2. The ESP32 filters raw signals into entry and exit events.
3. Each event is timestamped and paired with GPS/location context.
4. The device reports status on the display so the operator knows if it is online.
5. Data is sent to a local server.
6. The server stores activity records.
7. Stored records can be used to calculate passenger counts, fuel usage relationships, and possible revenue gain/loss predictions.

## Architecture

```text
Door sensors
  -> ESP32 event processor
  -> local display status
  -> local server API
  -> database/storage
  -> analytics and reporting layer
```

## My Contribution

- Designed the embedded system concept around ESP32
- Integrated the hardware modules into enclosed sensor boxes
- Worked on the sensor workflow for entry and exit detection
- Connected the device concept to local-server data storage
- Planned the analytics model for passenger counts, location history, fuel usage, and gain/loss estimation
- Built the prototype as private freelance work while keeping ownership boundaries clear

## Privacy Note

This portfolio entry intentionally does not publish the client-owned source code, credentials, API details, database schema, or deployment-specific configuration. Public materials are limited to non-sensitive project description and approved prototype photos.

