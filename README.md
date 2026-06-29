# @zai/ui-kit

Production-ready React UI components for dashboards and monitoring interfaces.


[![React](https://img.shields.io/badge/React-61DAFB?style=flat-square)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square)](https://www.typescriptlang.org)
[![Tailwind_CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square)](https://tailwindcss.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)


## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [or](#or)
- [or](#or)
- [Peer Dependencies](#peer-dependencies)
- [Quick Start](#quick-start)
- [Components](#components)
- [Theme System](#theme-system)
- [Utilities](#utilities)
- [License](#license)
- [Getting Started](#getting-started)

## Features

- **Dark theme optimized** - Designed for dark backgrounds with glow effects
- **Tree-shakeable** - Import only what you need
- **TypeScript first** - Full type safety and IntelliSense
- **Zero dependencies** - Only peer dependencies (React, Tailwind CSS)
- **Composable** - Build complex UIs from simple primitives

## Tech Stack

- **Language** - TypeScript
- **Styling** - Tailwind CSS, CSS
- **Tools** - React

## Installation

```bash
bun install github:stsgs1980/zai-ui-kit
## add github:stsgs1980/zai-ui-kit
## or
bun add github:stsgs1980/zai-ui-kit
```

## Peer Dependencies

```json
{
  "react": ">=18.0.0",
  "tailwindcss": ">=3.0.0"
}
```

## Quick Start

```tsx
import {
  StatusDot,
  Badge,
  MetricValue,
  StatCard,
  HUDCard,
  useToast
} from '@zai/ui-kit'

function Dashboard() {
  const { success } = useToast()

  return (
    <div className="grid grid-cols-3 gap-4">
      <StatCard
        label="Active Users"
        value={1234}
        trend="up"
        trendValue="+12%"
      />

      <HUDCard title="System Status" variant="success">
        <StatusDot status="online" pulse />
        <span>All systems operational</span>
      </HUDCard>

      <Badge variant="success" dot>Verified</Badge>
    </div>
  )
}
```

## Components

### Level 1 - Basic Primitives

| Component | Description |
|-----------|-------------|
| `StatusDot` | Colored status indicator with pulse animation |
| `ProgressBar` | Progress bar with determinate/indeterminate states |
| `Badge` | Small label/tag with optional dot and icon |
| `TrendIndicator` | Directional trend display (up/down/neutral) |
| `GlowIcon` | Icon wrapper with animated glow effect |
| `MetricValue` | Formatted numeric display with trend |
| `Divider` | Visual separator with optional label |

### Level 2 - Composite Components

| Component | Description |
|-----------|-------------|
| `InfoCard` | Card container with header, icon, actions |
| `StatCard` | Card optimized for single metric display |
| `GaugeMeter` | Semi-circular gauge with thresholds |
| `MiniChart` | Sparkline/mini bar chart |
| `DataTable` | Simple data table with sorting |
| `KeyValueList` | Key-value pair display |

### Level 3 - Ready Components

| Component | Description |
|-----------|-------------|
| `HUDCard` | HUD-style card with animated borders |
| `SectionHeader` | Section header with actions and divider |
| `Toast` | Notification toast |
| `Toaster` | Toast container and context |

### Level 4 - Financial Components

| Component | Description |
|-----------|-------------|
| `MiniCandleChart` | Candlestick mini chart for price data |
| `MetricCard` | Simple metric display with label/value |

## Theme System

```tsx
import { colors, spacing, radius, shadows } from '@zai/ui-kit/theme'

// Access theme values
const statusColor = colors.status.online // '#22c55e'
const padding = spacing[4] // '1rem'
const borderRadius = radius.lg // '0.5rem'
```

### Color Palette

- **Status**: `online`, `offline`, `warning`, `error`, `info`, `success`
- **Semantic**: `primary`, `secondary`, `success`, `warning`, `danger`
- **Background**: Optimized for dark themes
- **Chart**: Pre-defined visualization colors

## Utilities

```tsx
import { cn } from '@zai/ui-kit'

// Combine class names with Tailwind conflict resolution
const className = cn(
  'px-4 py-2 rounded-lg',
  isActive && 'bg-blue-500',
  className
)
```

## License

MIT


**Document complies with No-Unicode Policy v2.1**


## Getting Started

### Prerequisites

- Node.js 20+ or Bun

### Installation

```bash
git clone https://github.com/stsgs1980/Zai-ui-kit.git
cd Zai-ui-kit
bun install
```

### Run

```bash
bun run dev
```

---
Built with: React + TypeScript + Tailwind CSS + CSS
