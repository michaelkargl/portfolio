---
type: project
id: presence-monitor
name: Presence Monitor
description: Presence Monitor is a .NET background service that polls a
  restricted on-premise access control API for employee headcounts and publishes
  changes as events to a message broker (MQTT via Dapr). It acts as an adapter
  between a legacy pull-based data source and the rest of a distributed system,
  freeing downstream consumers from polling concerns and enabling real-time,
  event-driven reactions to presence changes.
url: https://github.com/michaelkargl/PresenceMonitor
image: https://raw.githubusercontent.com/michaelkargl/PresenceMonitor/refs/heads/main/images/screenshot.png
parentId: presence-system
---
