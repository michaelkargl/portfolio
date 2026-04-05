---
type: project
id: presence-bot
name: Presence Bot
description: A Python microservices system that monitors office occupancy in
  real time by scraping a badge access control system (DOM Genius) and pushing
  notifications whenever the employee count changes. The three services — a
  scraper API, an orchestration bot, and a messenger — are containerized with
  Docker Compose and communicate via Dapr pub/sub. Features include Cloud Events
  support, API key authentication, cascading configuration via environment
  variables and secrets files, and a full test suite with integration coverage.
url: https://github.com/michaelkargl/PresenceBot
parentId: presence-system
---
