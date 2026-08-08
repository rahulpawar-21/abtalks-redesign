# ABTalks Redesign

A mobile-first redesign of the ABTalks 60-Day Coding Challenge, created for ViCodathon 2026.

## Live Demo

Coming soon.

## Problem Statement

Redesign ABTalks as a motivating, mobile-first experience for Indian college students completing a 60-day coding challenge.

The experience focuses on:

- Daily coding missions
- Learning streaks
- Progress tracking
- GitHub proof of work
- LinkedIn proof of work
- Recovery after missed days
- Clear visibility of student achievements

## Routes

The application contains the three required routes:

/
 /dashboard
 /day/12

## Key Features

### Landing Page

Introduces the ABTalks challenge and explains how students can:

1. Pick a track
2. Build every day
3. Prove their work

### Student Dashboard

Shows:

- Current streak
- Challenge progress
- Today's mission
- Achievements
- Proof-of-work progress
- Smart recovery experience

### Challenge Day

Provides:

- Daily mission
- Requirements
- Quality checklist
- GitHub proof field
- LinkedIn proof field
- Proof submission confirmation

## Thoughtful Product Idea

### Momentum Recovery

Missing one day should not make a student abandon a 60-day challenge.

The redesign introduces a lightweight recovery experience that encourages students to complete today's mission first and then complete a smaller recovery task.

The goal is to protect long-term consistency instead of punishing a missed day.

## Edge Cases Considered

The design considers:

- First day with no streak
- Missed days
- Empty or incomplete student profiles
- Mobile-first usage
- 390px viewport constraints

## Tech Stack

- React
- Vite
- React Router
- CSS
- Mock data

## Design Principles

- Mobile-first
- Minimal and focused
- Clear hierarchy
- Fast understanding
- Strong calls to action
- Proof-of-work visibility

## Development

Install dependencies:

```bash
npm install