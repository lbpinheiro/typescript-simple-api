# Secure Node.js API

A TypeScript-based Node.js API designed for secure internal use within a Coolify network.

## Features

- API key authentication
- CORS protection
- Security headers with Helmet
- TypeScript for type safety
- Docker-ready for Coolify deployment

## Setup

1. Clone the repository
2. Install dependencies:
   ```
   pnpm install
   ```
3. Copy `.env.example` to `.env` and configure variables:
   ```
   cp .env.example .env
   ```
4. Start development server:
   ```
   pnpm dev
   ```

## Environment Variables

- `PORT`: Port to run the server on (default: 3000)
- `NODE_ENV`: Environment mode (development/production)
- `API_KEY`: Secret API key for service authentication
- `ALLOWED_ORIGINS`: Comma-separated list of allowed origins for CORS

## API Endpoints

- `GET /`: Root endpoint
- `GET /api/health`: Health check endpoint
- `GET /api/data`: Example protected data endpoint
- `POST /api/data`: Example endpoint to submit data

All `/api/*` endpoints are protected by API key authentication. Include the API key in the `x-api-key` header.

## Deployment with Coolify

1. Set up a new service in Coolify
2. Configure the service to use the Dockerfile in this repository
3. Set the required environment variables
4. Deploy the service

## Development

- `pnpm dev`: Start development server with hot reload
- `pnpm build`: Build for production
- `pnpm start`: Start production server